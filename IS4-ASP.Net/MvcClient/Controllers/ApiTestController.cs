using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace MvcClient.Controllers
{
    [Route("apitest")]
    public class ApiTestController : Controller
    {
        [Route("open")]
        public async Task<ResModel> OpenApiCall()
        {
            var res = new ResModel { Text = "Open Api Call Reached and Completed", id = 1 };
            return res;
        }

        [Authorize]
        [Route("closed")]
        public async Task<ResModel> ClosedApiCall()
        {
            var res = new ResModel { Text = "Closed Api Call Reached and Completed", id = 2 };
            return res;
        }

        public class ResModel
        {
            public int id { get; set; }
            public string Text { get; set; }
        }
    }

}