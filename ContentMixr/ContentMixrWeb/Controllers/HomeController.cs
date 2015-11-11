using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ContentMixrWeb.Controllers
{
    public class HomeController : Controller
    {
        // GET: Home
        [HttpGet]
        public ActionResult Index()
        {
            Models.FlickrSearchModel model = new Models.FlickrSearchModel();
            return View(model);
        }

        [HttpPost]
        public ActionResult Index(Models.FlickrSearchModel model)
        {
            string searchText = model.SearchText;

            return View(model);
        }
    }
}