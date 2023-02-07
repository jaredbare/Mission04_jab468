using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Mission04_jab468.Models
{
    public class CalcModel
    {
        [Required]
        public byte Assignments { get; set; }
        [Required]
        public byte GroupProject { get; set; }
        [Required]
        public byte Quizzes { get; set; }
        [Required]
        public byte Midterm { get; set; }
        [Required]
        public byte Final { get; set; }
        [Required]
        public byte Intex { get; set; }
    }
}
