using BackEndLogic.Models;
using DataAccess.Features;
using System;
using System.Collections.Generic;
using System.Text;

namespace BackEndLogic.Features
{
    public class UserService : IUserService
    {

        private readonly IUserRepository m_UserRepository;

        public UserService(IUserRepository userRepository)
        {
            m_UserRepository = userRepository;
        }
        public User AddUser(User user)
        {
            if(user != null)
            {
               return  GetUserModel( m_UserRepository.AddUser(GetUserEntity(user)));
            }

            return null;
        }

        public bool DeleteUser(User user)
        {
            if (user != null)
            {
                return m_UserRepository.DeleteUser(GetUserEntity(user));
            }

            return false;
        }

        public ICollection<User> GetUsers(User user)
        {
            var result = m_UserRepository.GetUsers(GetUserEntity(user));

            if(result.Count > 0)
            {
                var usersList = new List<User>();
                foreach (var item in result)
                {
                    usersList.Add(GetUserModel(item));
                }

                return usersList;
            }
            return null;
        }

        public User UpdateUser(User user)
        {
            if (user != null)
            {
                return GetUserModel(m_UserRepository.UpdateUser(GetUserEntity(user)));
            }

            return null;
        }

        private User GetUserModel(DataAccess.Entities.Users users)
        {
            return new User()
            {
                Id = users.Id,
                trail_user = users.trail_user,
                customer_type_id = users.customer_type_id,
                email = users.email,
                first_name = users.first_name,
                last_name = users.last_name,
                role_id = users.role_id,
                username = users.username
            };
        }

        private DataAccess.Entities.Users GetUserEntity(BackEndLogic.Models.User users)
        {
            return new DataAccess.Entities.Users()
            {
                Id = users.Id,
                trail_user = users.trail_user,
                customer_type_id = users.customer_type_id,
                email = users.email,
                first_name = users.first_name,
                last_name = users.last_name,
                role_id = users.role_id,
                username = users.username
            };
        }
    }
}
