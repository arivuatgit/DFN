using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WTS.ServiceContracts;
using WTS.DataContracts.Messages;
using WTS.BussinessLogic;
namespace WTS.ServiceImplementation
{
   public class UserManagementService:IUserManagement
    {
        public MResponse ValidateLogIn(MRequest request)
        {
            return new UserManager().ValidateLogIn(request);
        }
        public MResponse FetchAccounts(string hospital)
        {
            return new UserManager().FetchAccounts(hospital);
        }
        public MResponse InsertAccounts(MRequest request)
        {
            return new UserManager().InsertAccounts(request);
        }
        public MResponse UpdateAccount(MRequest request)
        {
            return new UserManager().UpdateAccount(request);
        }
        public MResponse DeleteAccount(MRequest request)
        {
            return new UserManager().DeleteAccount(request);
        }
    }
}
