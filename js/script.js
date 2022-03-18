// event pada saat link di klik
$('.page-scroll').on('click', function(e){

    // ambil isi href
    var tujuan = $(this).attr('href');
    // tangkap elemen ybs
    var elemenTujuan = $(tujuan);

    // pindahkan scroll
    $('html, body').animate({
        scrollTop: elemenTujuan.offset().top - 50
    }, 1000, 'easeInOutExpo');

    e.preventDefault();

});


// parallax
// about
$(window).on('load', function(){
    $('.pLeft').addClass('pShow');
    $('.pRight').addClass('pShow');
});

// scroll
$(window).scroll(function(){
    var wScroll = $(this).scrollTop();

    // jumbotron
    $('.jumbotron img').css({
        'transform' : 'translate(0, '+wScroll/4+'%)'
    });

    $('.jumbotron h1').css({
        'transform' : 'translate(0, '+wScroll/2+'%)'
    });

    $('.jumbotron p').css({
        'transform' : 'translate(0, '+wScroll/1+'%)'
    });

    // portfolio
    if(wScroll > $('.portofolio').offset().top - 250){
        $('.portofolio .thumbnail').each(function (i){
            setTimeout(function(){
                $('.portofolio .thumbnail').eq(i).addClass('show');     
            }, 300 * (i+1));
        });
    }
});