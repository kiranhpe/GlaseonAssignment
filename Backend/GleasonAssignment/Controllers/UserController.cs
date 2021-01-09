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
    [Route("api/user")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUserService m_UserService;

        public UserController(IUserService userService)
        {
            m_UserService = userService;
        }

        [HttpGet]
        public IActionResult GetUsers()
        {
            try
            {
                var result = m_UserService.GetUsers(null);

                if (result != null)
                   return  Ok(result);
                else
                   return NoContent();
            }
            catch(Exception ex)
            {
                return BadRequest();
            }
        }

        [HttpGet]
        [Route("{id}")]
        public IActionResult GetUser(int id)
        {
            try
            {
                var result = m_UserService.GetUsers(new User() {Id = id }).FirstOrDefault();

                if (result != null)
                    return Ok(result);
                else
                    return NoContent();
            }
            catch (Exception ex)
            {
                return BadRequest();
            }
        }

        [HttpPost]
        public IActionResult Adduser([FromBody]User user)
        {
            try
            {
                var result = m_UserService.AddUser(user);

                if (result != null)
                    return Ok(result);
                else
                    return NoContent();
            }
            catch (Exception ex)
            {
                return BadRequest();
            }
        }

        [HttpPut]
        public IActionResult UpdateUser([FromBody]User user)
        {
            try
            {
                var result = m_UserService.UpdateUser(user);

                if (result != null)
                    return Ok(result);
                else
                    return NoContent();
            }
            catch (Exception ex)
            {
                return BadRequest();
            }
        }

        [HttpDelete]
        [Route("{id}")]
        public IActionResult DeleteUser(int id)
        {
            try
            {
                var result = m_UserService.DeleteUser(new User() { Id = id });

                if (result != null)
                    return Ok(result);
                else
                    return NoContent();
            }
            catch (Exception ex)
            {
                return BadRequest();
            }
        }
    }
}