using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace BeautyGardenMain.Data.Users
{
    internal static class Roles
    {
        public const string Admin = nameof(Admin);
        public const string Employee = nameof(Employee);
        public const string EmployeePlus = Admin + "," + Employee;

        private static bool HasAnyRole(ClaimsPrincipal user, string target)
        {
            foreach (var role in target.Split(","))
            {
                if (user.IsInRole(role))
                {
                    return true;
                }
            }
            return false;
        }
    }
}
