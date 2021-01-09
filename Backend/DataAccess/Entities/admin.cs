using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace DataAccess.Entities
{
    public partial class Admin
    {
        [Key]
        [Column("id")]
        public int Id { get; set; }

        public string username { get; set; }

        public string password { get; set; }
    }
}
