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
    }
}
