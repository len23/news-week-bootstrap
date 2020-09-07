$(document).ready(function(){ 

  $(window).scroll(function (event) {
    if($(window).scrollTop()==0) {
      $('.secondary-menu').addClass('d-none');
    }
  });

  $(window).on('activate.bs.scrollspy', function (event) {
    console.log(event);
    if($('#secondary-active').hasClass('active')) {
      $('.secondary-menu').removeClass('d-none').addClass('fixed-top');
    }else {
      $('.secondary-menu').addClass('d-none');
    }
  })
}
)
