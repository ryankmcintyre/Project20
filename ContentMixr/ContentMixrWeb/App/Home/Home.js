/// <reference path="../App.js" />

(function () {
    "use strict";

    // The initialize function must be run each time a new page is loaded
    Office.initialize = function (reason) {
        $(document).ready(function () {
            app.initialize();

            // Initialize Office UI Fabric Pivot
            if ($.fn.Pivot) {
                $('.ms-Pivot').Pivot();
            }

            addTabEvent();
        });
    };

    function addTabEvent() {
        $('.ms-Pivot').on('click', '.ms-Pivot-link', function (event) {
            //event.preventDefault();
            var clickedTabId = $(this).attr("id");
            var divToShow = clickedTabId.replace("tab", "");

            app.showNotification("test", "clicked on: " + divToShow);
        });
    }

    function displayTab(tabToDisplay) {
        event.preventDefault();
        $(this).siblings('.ms-Pivot-link').removeClass('is-selected');
        $(this).addClass('is-selected');
    }

})();