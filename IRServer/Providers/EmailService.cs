using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Mail;
using System.Threading.Tasks;
using System.Web;
using Microsoft.AspNet.Identity;

namespace IRServer.Providers
{
    public class EmailService : IIdentityMessageService
    {
        public async Task SendAsync(IdentityMessage message)
        {
            await SendViaGmail(message);
        }

        private async Task SendViaGmail(IdentityMessage message)
        {
            // Example mail code
            try
            {
                // Instantiate your SMTP Client
                using (var smtp = new SmtpClient())
                {
                    // Configure your credentials
                    smtp.Host = "smtp.gmail.com";
                    smtp.Port = 587;
                    smtp.UseDefaultCredentials = false;
                    smtp.Credentials = new System.Net.NetworkCredential("yakovlevdimaaa@gmail.com", "gerod14dokar");
                    smtp.EnableSsl = true;

                    // Build your message
                    MailMessage mail = new MailMessage();
                    // Configure it
                    mail.To.Add("Your Target");
                    mail.From = new MailAddress("Your Destination");
                    mail.Subject = "Your Subject";
                    mail.Body = "Your Content";
                    // Enable if you are sending HTML content
                    mail.IsBodyHtml = true;

                    // Send your message
                    smtp.Send(mail);
                }
            }
            catch (Exception ex)
            {
                // Something went wrong sending your message; Handle accordingly
            }
        }
    }
}