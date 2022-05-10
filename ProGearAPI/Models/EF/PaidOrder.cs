using System;
using System.Collections.Generic;

#nullable disable

namespace ProGearAPI.Models.EF
{
    public partial class PaidOrder
    {
        public int? ProductId { get; set; }
        public int? InvoiceId { get; set; }
        public int? Qty { get; set; }

        public virtual Invoice Invoice { get; set; }
        public virtual Product Product { get; set; }
    }
}