using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace IrobusHelpLib
{
    public class UserSessions: BaseTable
    {

        public string OwnerUser { get; set; }
        public string AuthToken { get; set; }
        public DateTime ExpirationDateTime { get; set; }
    }
}
