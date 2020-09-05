$(document).ready(function(){ 
  $(window).on('activate.bs.scrollspy', function () {
    if($('#secondary-active').hasClass('active')) {
      console.log('Active');
      /* $('.main-menu').addClass('d-none'); */
      $('.secondary-menu').removeClass('d-none').addClass('fixed-top');
     /*  $('#main').addClass('mt-14'); */
    }else {
      console.log('Deactive');
      /* $('.main-menu').removeClass('d-none'); */
      $('.secondary-menu').addClass('d-none');
     /*  $('#main').removeClass('mt-14'); */
    }
  })
}
)
