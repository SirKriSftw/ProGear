using System;
using System.Collections.Generic;

#nullable disable

namespace ProGearAPI.Models.EF
{
    public partial class Invoice
    {
        public int InvoiceId { get; set; }
        public int? UserId { get; set; }
        public int? Total { get; set; }

        public virtual User User { get; set; }
    }
}