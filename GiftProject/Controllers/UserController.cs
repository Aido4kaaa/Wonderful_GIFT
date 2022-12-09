using GiftProject.Models;
using Microsoft.AspNetCore.Mvc;

namespace GiftProject.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UserController : Controller
    {
        private DatabaseContext db;

        public UserController(DatabaseContext context)
        {
            db = context;
        }

        [HttpPost("SignUp")]
        public async Task<ActionResult<User>> AddNewUser(User body)
        {
            var _user = db.Users.FirstOrDefault(u => u.name == body.name);
            if (_user == null)
            {
                var newUser = new User { name = body.name, password = body.password};
                await db.Users.AddAsync(newUser);
                await db.SaveChangesAsync();
                var currentUser = db.Users.FirstOrDefault(u => u.name == newUser.name);
                return currentUser;
            }
            return BadRequest("Такой пользователь уже есть");
        }

        [HttpGet("SignIn/{name}/{password}")]
        public ActionResult<User> LogIn(string name, string password)
        {
            var user = db.Users.FirstOrDefault(u => u.name == name &&
                                            u.name == password);
            if (user != null)
                return Ok(user);
            return NotFound();
        }
    }
}
