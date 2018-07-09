using System;
using System.Configuration;
using System.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using IRServer.App_Start;
using IRServer.Models;
using IRServer.Providers;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using Microsoft.AspNet.Identity.Owin;
using Microsoft.Owin;
using Microsoft.Owin.Security;
using Microsoft.Owin.Security.Cookies;
using Microsoft.Owin.Security.DataHandler.Encoder;
using Microsoft.Owin.Security.Jwt;
using Microsoft.Owin.Security.OAuth;
using Owin;
using Thinktecture.IdentityModel.Tokens;

namespace IRServer
{
    public partial class Startup
    {
        public static OAuthAuthorizationServerOptions OAuthOptions { get; private set; }
        public static Func<UserManager<IdentityUser>> UserManagerFactory { get; set; }
        public static string PublicClientId { get; private set; }

        // For more information on configuring authentication, please visit https://go.microsoft.com/fwlink/?LinkId=301864
        public void ConfigureAuth(IAppBuilder app)
        {
            UserManagerFactory = () => new UserManager<IdentityUser>(new UserStore<IdentityUser>());
            // Configure the db context and user manager to use a single instance per request
            app.CreatePerOwinContext(IrobusModel.Create);
            app.CreatePerOwinContext<UserManager<IdentityUser>>(CreateManager);
            app.CreatePerOwinContext<ApplicationUserManager>(ApplicationUserManager.Create);
            app.CreatePerOwinContext<ApplicationSignInManager>(ApplicationSignInManager.Create);
            // Enable the application to use a cookie to store information for the signed in user
            // and to use a cookie to temporarily store information about a user logging in with a third party login provider
            app.UseCookieAuthentication(new CookieAuthenticationOptions
            {
                AuthenticationType = DefaultAuthenticationTypes.ApplicationCookie,
                CookieName = ".AspNet.Irobus",

                LoginPath = new PathString("/Account/Login/"),
                ExpireTimeSpan = TimeSpan.FromMinutes(90)

            });
            app.UseExternalSignInCookie(DefaultAuthenticationTypes.ExternalCookie);
            // Configure the application for OAuth based flow
            PublicClientId = "self";
            OAuthOptions = new OAuthAuthorizationServerOptions
            {
                TokenEndpointPath = new PathString("/Token"),
                Provider = new ApplicationOAuthProvider(PublicClientId),
                AuthorizeEndpointPath = new PathString("/api/AccountApi/ExternalLogin"),
                AccessTokenExpireTimeSpan = TimeSpan.FromMinutes(60),
                // In production mode set AllowInsecureHttp = false
               // AccessTokenFormat = new CustomJwtFormat(ConfigurationManager.AppSettings["JWTPath"]),
                RefreshTokenProvider = new SimpleRefreshTokenProvider(),
                AllowInsecureHttp = true,
                AuthenticationMode = AuthenticationMode.Passive,
                
            };

            // Enable the application to use bearer tokens to authenticate users
            app.UseOAuthAuthorizationServer(OAuthOptions);
            app.UseOAuthBearerAuthentication(new OAuthBearerAuthenticationOptions());
            // Uncomment the following lines to enable logging in with third party login providers
            //app.UseMicrosoftAccountAuthentication(
            //    clientId: "",
            //    clientSecret: "");

            //app.UseTwitterAuthentication(
            //    consumerKey: "",
            //    consumerSecret: "");

            //app.UseFacebookAuthentication(
            //    appId: "",
            //    appSecret: "");

            app.UseGoogleAuthentication(
                clientId: "446560481241-pbuoje4gqrmsv5q1to3ntu1to045f39t.apps.googleusercontent.com",
                clientSecret: "6aVq9SSI8wZRqyNU4GhHnfBQ");
        }
        private static UserManager<IdentityUser> CreateManager(IdentityFactoryOptions<UserManager<IdentityUser>> options, IOwinContext context)
        {
            var userStore = new UserStore<IdentityUser>(context.Get<IrobusModel>());
            var manager = new UserManager<IdentityUser>(userStore);

            return manager;
        }
    }
    
}