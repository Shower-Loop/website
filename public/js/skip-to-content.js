(function($) {

    $('.skip-to-content').click(function (e){
        skipTo();
        e.preventDefault();
    });
    $(".skip-to-content").keyup(function (e){
        if(e.which == '13'){
            skipTo();
            e.preventDefault();
        }
    });
})(jQuery);


function skipTo(){
    $('main').attr("tabindex",0).focus();
    $('html,body').animate({
        scrollTop: ($('main').offset().top)
    });
};

