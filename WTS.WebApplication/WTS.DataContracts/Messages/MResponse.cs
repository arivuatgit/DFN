using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WTS.DataContracts.MessageBase;
using WTS.DataContracts.SearchRecordsEntities;
using WTS.DataContracts.UserManagement;
using WTS.DataContracts.UserManagementEntities;
namespace WTS.DataContracts.Messages
{
   public class MResponse :ResponseBase
    {
        public List<RecordsInfo> records { get; set; }
        public UserInfo LoginUser { get; set; }
       public List<UserInfoEntities> users { get; set; }
        public bool IsRowAffected { get; set; }
        public int LastInsertedRowId { get; set; }
    }
}
