using BackEndLogic.Models;
using System.Collections.Generic;

namespace BackEndLogic.Features
{
    public interface IUserService
    {
        User AddUser(User user);

        ICollection<User> GetUsers(User user);

        User UpdateUser(User user);

        bool DeleteUser(User user);
    }
}
