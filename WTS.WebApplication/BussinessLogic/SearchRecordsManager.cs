using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WTS.DataContracts.Messages;
using WTS.DataContracts.MessageBase;
using WTS.DataContracts.SearchRecordsEntities;
using WTS.DataAccess;
namespace WTS.BussinessLogic
{
    public class SearchRecordsManager
    {
        public MResponse SearchRecords(string hospital)
        {
            List<RecordsInfo> dbRecords = null;
            dbRecords = new SearchRecordsDAL().SearchRecords(hospital);
            return new MResponse
            {
                acknowledge = AcknowledgeType.Success,
                records = dbRecords
            };
        }
    }
}
