using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Threading.Tasks;
using IrobusHelpLib;
using IRServer.App_Start;
using IRServer.Models;
using Microsoft.AspNet.Identity.Owin;
using Microsoft.Owin.Security;
using Microsoft.Owin.Security.Cookies;
using Microsoft.Owin.Security.Infrastructure;
using Microsoft.Owin.Security.OAuth;
using UserSessions = IrobusHelpLib.UserSessions;

namespace IRServer.Providers
{
    public class ApplicationOAuthProvider : OAuthAuthorizationServerProvider
    {
        public IrobusModel ctx = new IrobusModel();
        private readonly string _publicClientId;

        public ApplicationOAuthProvider(string publicClientId)
        {
            if (publicClientId == null)
            {
                throw new ArgumentNullException("publicClientId");
            }

            _publicClientId = publicClientId;
        }
        public override Task TokenEndpointResponse(OAuthTokenEndpointResponseContext context)
        {
            var accessToken = context.AccessToken;
            return Task.FromResult<object>(null);
        }


        public override async Task GrantResourceOwnerCredentials(OAuthGrantResourceOwnerCredentialsContext context)
        {
            var userManager = context.OwinContext.GetUserManager<ApplicationUserManager>();
            ApplicationUser user = await userManager.FindAsync(context.UserName, context.Password);

            if (user == null)
            {
                context.SetError("invalid_grant", "The user name or password is incorrect.");
                return;
            }
            var cl = await userManager.GetClaimsAsync(user.Id);
            var session = ctx.UserSessionss.FirstOrDefault(s => s.OwnerUser == user.UserName);
            if (session != null && session.ExpirationDateTime >= DateTime.Now)
            {

            }
            else
            {
                ClaimsIdentity oAuthIdentity = await user.GenerateUserIdentityAsync(userManager,
                    OAuthDefaults.AuthenticationType);
                oAuthIdentity.AddClaim(new Claim("UserName", context.UserName));
                //ClaimsIdentity cookiesIdentity = await user.GenerateUserIdentityAsync(userManager,
                //    CookieAuthenticationDefaults.AuthenticationType);
                //cookiesIdentity.AddClaim(new Claim("UserName", context.UserName));
                AuthenticationProperties properties = CreateProperties(user.UserName);
                AuthenticationTicket ticket = new AuthenticationTicket(oAuthIdentity, properties);
                context.Validated(ticket);
                //context.Request.Context.Authentication.SignIn(cookiesIdentity);
            }
           

            
           
        }

        private async void Login(OAuthGrantResourceOwnerCredentialsContext context)
        {
            var userManager = context.OwinContext.GetUserManager<ApplicationUserManager>();
            ApplicationUser userid = await userManager.FindAsync(context.UserName, context.Password);
            if (userid != null)
            {
                ////here you can start with your claim stuff
                ClaimsIdentity identity = new ClaimsIdentity(new List<Claim> { new Claim("userId", userid.ToString()) }, OAuthDefaults.AuthenticationType);
                identity.AddClaim(new Claim(ClaimTypes.Name, context.UserName));
                context.Validated(identity);
                return;
            }
        }

        public override Task TokenEndpoint(OAuthTokenEndpointContext context)
        {
            foreach (KeyValuePair<string, string> property in context.Properties.Dictionary)
            {
                context.AdditionalResponseParameters.Add(property.Key, property.Value);
            }

            return Task.FromResult<object>(null);
        }

        public override Task ValidateClientAuthentication(OAuthValidateClientAuthenticationContext context)
        {
            string clientId;
            string clientSecret;
            context.TryGetFormCredentials(out clientId, out clientSecret);
            context.TryGetBasicCredentials(out clientId, out clientSecret);
            // Resource owner password credentials does not provide a client ID.
            if (context.ClientId == null)
            {
                context.Validated();
            }

            return Task.FromResult<object>(null);
        }

        public override Task ValidateClientRedirectUri(OAuthValidateClientRedirectUriContext context)
        {
            if (context.ClientId == _publicClientId)
            {
                Uri expectedRootUri = new Uri(context.Request.Uri, "/");

                if (expectedRootUri.AbsoluteUri == context.RedirectUri)
                {
                    context.Validated();
                }
            }

            return Task.FromResult<object>(null);
        }

        public static AuthenticationProperties CreateProperties(string userName)
        {
            IDictionary<string, string> data = new Dictionary<string, string>
            {
                { "userName", userName }
            };
            var dd = new AuthenticationProperties(data);
            return dd;
        }
    }

    public class SimpleRefreshTokenProvider : IAuthenticationTokenProvider
    {

        public async Task CreateAsync(AuthenticationTokenCreateContext context)
        {
            var clientid = context.Ticket.Properties.Dictionary["userName"];

            if (string.IsNullOrEmpty(clientid))
            {
                return;
            }

            var refreshTokenId = Guid.NewGuid().ToString("n");

            using (AuthRepository _repo = new AuthRepository())
            {
                if (context.Ticket.Properties.ExpiresUtc != null)
                {
                    if (context.Ticket.Properties.IssuedUtc != null)
                    {
                        var refreshTokenLifeTime = context.Ticket.Properties.ExpiresUtc.Value.Subtract(context.Ticket.Properties.IssuedUtc.Value);

                        var token = new RefreshToken()
                        {
                            Id = Helper.GetHash(refreshTokenId),
                            ClientId = clientid,
                            Subject = context.Ticket.Identity.Name,
                            IssuedUtc = DateTime.UtcNow,
                            ExpiresUtc = DateTime.UtcNow.AddMinutes(Convert.ToDouble(refreshTokenLifeTime.TotalMinutes))
                        };

                        context.Ticket.Properties.IssuedUtc = token.IssuedUtc;
                        context.Ticket.Properties.ExpiresUtc = token.ExpiresUtc;

                        token.ProtectedTicket = context.SerializeTicket();

                        var result = await _repo.AddRefreshToken(token);

                        if (result)
                        {
                            context.SetToken(refreshTokenId);
                        }
                    }
                }
            }
        }

        public async Task ReceiveAsync(AuthenticationTokenReceiveContext context)
        {

            var allowedOrigin = context.OwinContext.Get<string>("AllowedOrigin");
            context.OwinContext.Response.Headers.Add("Access-Control-Allow-Origin", new[] { allowedOrigin });

            string hashedTokenId = Helper.GetHash(context.Token);

            using (AuthRepository _repo = new AuthRepository())
            {
                var refreshToken = await _repo.FindRefreshToken(hashedTokenId);

                if (refreshToken != null)
                {
                    //Get protectedTicket from refreshToken class
                    context.DeserializeTicket(refreshToken.ProtectedTicket);
                    var result = await _repo.RemoveRefreshToken(hashedTokenId);
                }
            }
        }

        public void Create(AuthenticationTokenCreateContext context)
        {
            throw new NotImplementedException();
        }

        public void Receive(AuthenticationTokenReceiveContext context)
        {
            throw new NotImplementedException();
        }
    }

    public class Constant
    {

        public static class GrantTypes

        {

            public const string GrantType = "grant_type";

            public const string UserName = "username";

            public const string Password = "password";

            public const string AuthorizationCode = "authorization_code";

            public const string ClientCredentials = "client_credentials";

            public const string RefreshToken = "refresh_token";

            public const string AuthenticationType = "OAuth2";

        }

    }

    public class Helper
    {
        public static string GetHash(string input)
        {
            HashAlgorithm hashAlgorithm = new SHA256CryptoServiceProvider();

            byte[] byteValue = System.Text.Encoding.UTF8.GetBytes(input);

            byte[] byteHash = hashAlgorithm.ComputeHash(byteValue);

            return Convert.ToBase64String(byteHash);
        }
    }

}