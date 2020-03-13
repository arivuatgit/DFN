using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WTS.DataContracts.MessageBase
{
   public enum AcknowledgeType : short
    {
        Failure=0,
        Success=1
    }
}
