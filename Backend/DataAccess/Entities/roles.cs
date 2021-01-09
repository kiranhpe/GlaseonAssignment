using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace DataAccess.Entities
{
    public partial class Roles
    {
        [Key]
        [Column("id")]
        public int Id { get; set; }

        public string role { get; set; }

        public Users user { get; set; }
    }
}
