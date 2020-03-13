using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WTS.DataContracts.MessageBase
{
   public class ResponseBase
    {
        public AcknowledgeType acknowledge = AcknowledgeType.Success;
        public string Message;
    }
}
