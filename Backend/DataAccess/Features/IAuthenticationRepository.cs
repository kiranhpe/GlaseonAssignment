using System;
using System.Collections.Generic;
using System.Text;

namespace DataAccess.Features
{
    public interface IAuthenticationRepository
    {
        bool CheckAuthentication(string username, string password);
    }
}
