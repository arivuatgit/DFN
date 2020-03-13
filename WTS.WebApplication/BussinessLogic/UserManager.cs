using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WTS.DataContracts.Messages;
using WTS.DataContracts.UserManagementEntities;
using WTS.DataAccess;
using WTS.DataContracts.MessageBase;
namespace WTS.BussinessLogic
{
   public class UserManager
    {
        public MResponse ValidateLogIn(MRequest request)
        {
            return new MResponse
            {
                LoginUser = new UserManagerDAL().ValidateLogInUser(request.User.UserName, request.User.Password)
            };
        }
        public MResponse FetchAccounts(string hospital)
        {
            
            return new MResponse
            {
                acknowledge = AcknowledgeType.Success,
                users = new UserManagerDAL().FetchAccounts(hospital)
            };
        }
        public MResponse InsertAccounts(MRequest reuest)
        {           
           
            return new MResponse
            {

                acknowledge=AcknowledgeType.Success,
                IsRowAffected=true,
                users= new UserManagerDAL().InsertAccount(reuest)
            };
        }
        public MResponse UpdateAccount(MRequest reuest)
        {

            return new MResponse
            {

                acknowledge = AcknowledgeType.Success,
                IsRowAffected = true,
                users = new UserManagerDAL().UpdateAccount(reuest)
            };
        }
        
             public MResponse DeleteAccount(MRequest reuest)
        {

            return new MResponse
            {

                acknowledge = AcknowledgeType.Success,
                IsRowAffected = true,
                users = new UserManagerDAL().DeleteAccount(reuest)
            };
        }
    }
}
