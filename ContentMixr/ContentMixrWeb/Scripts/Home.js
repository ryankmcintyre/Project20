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

            $('span.thumbnail').click(insertPhoto);
            $('.ms-ListItem-action').click(insertPhoto);
            $('#btnInsertCode').click(insertCode);
        });
    };

    // Initialize non-Office dependent events
    $(document).ready(function () {
        addTabEvent();

        $('#btnPrettifyCode').click(prettifyCode);
        $('#btnTryAgain').click(resetCode);
    });

    function addTabEvent() {
        $('.ms-Pivot').on('click', '.ms-Pivot-link', function (event) {
            //event.preventDefault();
            var clickedTabId = $(this).attr('id');
            var divToShow = clickedTabId.replace('tab', '');
            // Hide all divs, then show the one selected
            $('#Flickr').hide();
            $('#Code').hide();
            $('#' + divToShow).show();
        });
    }

    function insertPhoto() {
        //var photoUrl = $(this).children('#photoUrl').val();
        var photoUrl = $(this).parents('.ms-ListItem').find('#photoUrl').val();
        var html = "<img src='" + photoUrl + "' />";

        Office.context.document.setSelectedDataAsync(html, { coercionType: 'html' }, function (asyncResult) {
            if (asyncResult.status == 'failed') {
                app.showNotification('Error: ' + asyncResult.error.message);
            }
        });
    }

    function prettifyCode() {
        var code = $('#codeField').val();
        $('#codePreviewPre').text(code);
        prettyPrint();
        $('#codePaste').hide();
        $('#codePreview').show();
        //app.showNotification('Code' + code);
    }

    function resetCode() {
        $('.prettyprinted').removeClass('prettyprinted');
        $('#codePreviewPre').text('');
        $('#codePaste').show();
        $('#codePreview').hide();
    }

    function insertCode() {
        var code = $('#codePreviewPre').html().replace(/  /g, "&nbsp;&nbsp;").replace(/\n/g, "<br/>");
        /* Trying to replace an empty space using injected font size, which is done in prettify.js
        code = code.split("<span style=\"color: rgb(85, 85, 85); font-family: Consolas; font-size: 9pt;\"> </span>").join("&nbsp;"); */
        code = code.split("<span style=\"color: rgb(85, 85, 85);\"> </span>").join("&nbsp;"); 

        Office.context.document.setSelectedDataAsync(code, { coercionType: 'html' }, function (asyncResult) {
            if (asyncResult.status == 'failed') {
                app.showNotification('Error: ' + asyncResult.error.message);
            }
        });
    }

})();