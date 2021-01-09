using DataAccess.Features;
using System;
using System.Collections.Generic;
using System.Text;

namespace BackEndLogic.Features
{
    public class AuthenticationService : IAuthenticationService
    {
        private readonly IAuthenticationRepository m_AuthenticateRepository;

        public AuthenticationService(IAuthenticationRepository authenticationRepository)
        {
            m_AuthenticateRepository = authenticationRepository;
        }
        public bool Authenticate(string username, string password)
        {
            return m_AuthenticateRepository.CheckAuthentication(username, password);
        }
    }
}
