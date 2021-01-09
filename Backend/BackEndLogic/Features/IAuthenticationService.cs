using System;
using System.Collections.Generic;
using System.Text;

namespace BackEndLogic.Features
{
    public interface IAuthenticationService
    {
        bool Authenticate(string username, string password);
    }
}
