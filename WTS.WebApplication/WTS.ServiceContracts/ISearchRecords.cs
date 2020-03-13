using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WTS.DataContracts.Messages;
namespace WTS.ServiceContracts
{
    public interface ISearchRecords
    {
        MResponse SearchRecords(string request);
    }
}
