$(document).ready(function() {
    
    $(document).on("mousemove",function (e) {

        /*
        $("#moveme").animate({
            left: `${e.pageX}px`,
            top: `${e.pageY}px`
        },'slow','linear')
        */

        $("#moveme").css({
            left: `${e.pageX}px`,
            top: `${e.pageY}px`
        })
        
    })
    

});