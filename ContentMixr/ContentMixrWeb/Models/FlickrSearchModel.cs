using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ContentMixrWeb.Models
{
    public class FlickrSearchModel
    {
        public string SearchText { get; set; }
        public int Page { get; set; }
        public FlickrNet.PhotoCollection Photos { get; set; }
    }

}