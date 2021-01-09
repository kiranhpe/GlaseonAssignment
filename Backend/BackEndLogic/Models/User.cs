using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace BackEndLogic.Models
{
    public class User
    {
        public int Id { get; set; }

        public string username { get; set; }

        public string email { get; set; }

        public string first_name { get; set; }

        public string last_name { get; set; }

        public bool trail_user { get; set; }

        public int role_id { get; set; }

        public int customer_type_id { get; set; }

    }
}
