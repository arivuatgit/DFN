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
    public class SearchRecordsService:ISearchRecords
    {
        public MResponse SearchRecords(string hospital)
        {
            return new SearchRecordsManager().SearchRecords(hospital);
        }
    }
}
