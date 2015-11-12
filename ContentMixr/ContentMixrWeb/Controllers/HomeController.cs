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
            return View(model);
        }

        [HttpPost]
        public ActionResult Index(Models.FlickrSearchModel model)
        {
            string searchText = model.SearchText;

            Flickr flickr = new Flickr(apiKey);
            var options = new PhotoSearchOptions { Tags = searchText, PerPage = 12, Page = 1 };
            PhotoCollection photos = flickr.PhotosSearch(options);
            model.Photos = photos;

            return View(model);
        }
    }
}