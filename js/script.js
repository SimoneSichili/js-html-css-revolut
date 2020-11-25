$(document).ready(function () {
    // START JS

    $("#nav-right > ul.list-inline-r").children("li").hover(
        function(){
            $(this).find(".dropdown").addClass("active");
        }, 
        function(){
            $(this).find(".dropdown").removeClass("active")
      });


    $(document).click(
        function () { 
            $("#nav-right .dropdown").removeClass("active");
        }
    ); 

    // END JS
});

