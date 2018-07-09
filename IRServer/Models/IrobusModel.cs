using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using System.Web;
using IrobusHelpLib;
using IRServer.App_Start;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using Microsoft.AspNet.Identity.Owin;
using Microsoft.Owin;
using Microsoft.Owin.Security;
using MySql.Data.Entity;

namespace IRServer.Models
{
    [DbConfigurationType(typeof(MySqlEFConfiguration))]
    public class IrobusModel : IdentityDbContext<ApplicationUser>
    {
        public IrobusModel()
            : base("Server=localhost;port=3306;database=mycontext;uid=root;password=qwerty;Allow User Variables=True;SslMode=none")
        {
        }
        public static IrobusModel Create()
        {
            return new IrobusModel();
        }
        public DbSet<Avtomobile> Avtomobiles { get; set; }
        public DbSet<ResultField> ResultFields { get; set; }
        //public DbSet<User> Users { get; set; }
        public DbSet<RegexUrlToScript> RegexUrlToScripts { get; set; }
        public DbSet<Script> Scripts { get; set; }
        public DbSet<Rabota> Rabotas { get; set; }
        public DbSet<Nedvigimost> Nedvigimosts { get; set; }
        public DbSet<ErrorTable> ErrorTables { get; set; }
        public DbSet<Category> Categorys { get; set; }
        public DbSet<ResultTable> ResultTables { get; set; }
        public DbSet<Template> Templates { get; set; }
        public DbSet<TypeTemplate> TypeTemplates { get; set; }
        public DbSet<Client> Clients { get; set; }
        public DbSet<RefreshToken> RefreshTokens { get; set; }
        public DbSet<UserSessions> UserSessionss { get; set; }
    }

    public class ApplicationUser : IdentityUser
    {
        public async Task<ClaimsIdentity> GenerateUserIdentityAsync(UserManager<ApplicationUser> manager, string authenticationType)
        {
            // Note the authenticationType must match the one defined in CookieAuthenticationOptions.AuthenticationType
            var userIdentity = await manager.CreateIdentityAsync(this, authenticationType);
            // Add custom user claims here
            return userIdentity;
        }

        public async Task<ClaimsIdentity> GenerateUserIdentityAsync(UserManager<ApplicationUser> manager)
        {
            // Note the authenticationType must match the one defined in CookieAuthenticationOptions.AuthenticationType
            var userIdentity = await manager.CreateIdentityAsync(this, DefaultAuthenticationTypes.ApplicationCookie);
            // Add custom user claims here
            return userIdentity;
        }
    }

    public class ApplicationSignInManager : SignInManager<ApplicationUser, string>
    {
        public ApplicationSignInManager(ApplicationUserManager userManager, IAuthenticationManager authenticationManager)
            : base(userManager, authenticationManager)
        {
        }

        public override Task<ClaimsIdentity> CreateUserIdentityAsync(ApplicationUser user)
        {
            return user.GenerateUserIdentityAsync((ApplicationUserManager)UserManager);
        }

        public static ApplicationSignInManager Create(IdentityFactoryOptions<ApplicationSignInManager> options, IOwinContext context)
        {
            return new ApplicationSignInManager(context.GetUserManager<ApplicationUserManager>(), context.Authentication);
        }
    }
}