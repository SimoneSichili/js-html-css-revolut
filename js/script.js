$(document).ready(function () {
    // START JS

    $("#nav-right > ul.list-inline-r").children("li").mouseenter(
        function () {
            $(this).find(".dropdown").addClass("active");
        }
    );

    /* $("#nav-right .dropdown").mouseleave(
        function () {
            $(this).removeClass("active");
        }
    ); */

    $("#nav-right > ul.list-inline-r > li > ul").mouseleave(
        function () {
            $(this).removeClass("active");
        }
    );

    /* $(document).click(
        function () { 
            $("#nav-right .dropdown").removeClass("active");
        }
    );

    // END JS
});

