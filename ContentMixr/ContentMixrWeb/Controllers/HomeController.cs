using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using FlickrNet;

namespace ContentMixrWeb.Controllers
{
    public class HomeController : Controller
    {
        private readonly string apiKey = "f0e9cbc7070c2d9ae83e4f4712fb91d1";

        // GET: Home
        [HttpGet]
        public ActionResult Index()
        {
            Models.FlickrSearchModel model = new Models.FlickrSearchModel();
            model.Photos = new PhotoCollection();
            model.Page = 1;
            return View(model);
        }

        [HttpPost]
        public ActionResult Index(Models.FlickrSearchModel model, string paging)
        {
            string searchText = model.SearchText;
            int curPage = model.Page;
            int nextPage = curPage;

            switch (paging)
            {
                case "next":
                    nextPage++;
                    break;
                case "previous":
                    nextPage--;
                    break;
            }

            Flickr flickr = new Flickr(apiKey);
            var options = new PhotoSearchOptions { Tags = searchText, PerPage = 12, Page = nextPage };
            PhotoCollection photos = flickr.PhotosSearch(options);
            model.Photos = photos;
            model.Page = nextPage;

            return View(model);
        }
        
        // GET: Support
        public ActionResult Support()
        {
            return View();
        }
    }
}