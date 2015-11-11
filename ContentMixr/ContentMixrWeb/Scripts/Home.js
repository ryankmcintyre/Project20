/// <reference path="../App.js" />

(function () {
    "use strict";

    // The initialize function must be run each time a new page is loaded
    Office.initialize = function (reason) {
        $(document).ready(function () {
            app.initialize();

            // Initialize Office UI Fabric Controls
            if ($.fn.Pivot) {
                $('.ms-Pivot').Pivot();
            }
            if ($.fn.SearchBox) {
                $('.ms-SearchBox').SearchBox();
            }

            addTabEvent();
        });
    };

    function addTabEvent() {
        $('.ms-Pivot').on('click', '.ms-Pivot-link', function (event) {
            //event.preventDefault();
            var clickedTabId = $(this).attr("id");
            var divToShow = clickedTabId.replace("tab", "");
            // Hide all divs, then show the one selected
            $('#Flickr').hide();
            $('#Code').hide();
            $('#' + divToShow).show();
        });
    }

})();