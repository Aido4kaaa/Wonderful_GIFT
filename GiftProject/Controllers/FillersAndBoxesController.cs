using GiftProject.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace GiftProject.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class FillersAndBoxesController : Controller
    {
        private DatabaseContext db;

        public FillersAndBoxesController(DatabaseContext context)
        {
            db = context;
        }

        [HttpGet("GetAllFillers")]
        public async Task<ActionResult<List<Filler>>> GetAllFillers()
        {
            return await db.Fillers.ToListAsync();
        }

        [HttpGet("GetAllBoxes")]
        public async Task<ActionResult<List<Box>>> GetAllBoxes()
        {
            return await db.Boxes.Include(b => b.description).ToListAsync();
        }

        [HttpGet("GetAllRBoxes")]
        public async Task<ActionResult<List<RBox>>> GetAllRBoxes()
        {
            var q = db.RBoxes.Include(b => b.fillers);
           
            var w = await q.Include(b => b.box).ToListAsync();
            foreach (var element in db.RBoxes)
            {
                int price = 0;
                foreach (var fillers in element.fillers)
                {
                    price += Int32.Parse(fillers.price.TrimEnd());
                }
                price += element.box.price;
                element.price = price;
            }
            return w;
        }
    }
}
