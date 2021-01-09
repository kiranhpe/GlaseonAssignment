using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace DataAccess.Entities
{
    [Table("customer_type")]
    public partial class CustomerType
    {
        [Key]
        [Column("id")]
        public int Id { get; set; }

        public string type { get; set; }

        public ICollection<Users> users { get; set; }
    }
}
