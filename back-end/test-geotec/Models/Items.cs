using System.ComponentModel.DataAnnotations;

namespace test_geotec.Models
{
    public class Items
    {
        [Key]
        public long ItemId { get; set; }
        [Required]
        public string Nombre { get; set; } = string.Empty;
        [Required]
        public string Descripcion { get; set; } = string.Empty;
        [Required]
        public string Talle { get; set; } = string.Empty;
        public string Imagen { get; set; } = string.Empty;
        [Required]
        public double Precio { get; set; }
    }
}