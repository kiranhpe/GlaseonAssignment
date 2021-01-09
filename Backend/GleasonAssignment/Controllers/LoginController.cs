using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BackEndLogic.Features;
using BackEndLogic.Models;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace GleasonAssignment.Controllers
{
    [EnableCors("MyPolicy")]
    [Route("api/login")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private readonly IAuthenticationService m_AuthenticationService;
        public LoginController(IAuthenticationService authenticationService)
        {
            m_AuthenticationService = authenticationService;
        }

        [HttpPost]
        public IActionResult Login([FromBody]Login login)
        {
            var result = m_AuthenticationService.Authenticate(login.username, login.password);
            if (result)
                return Ok();
            else
                return Unauthorized();
        }
    }
}