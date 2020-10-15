$(document).ready(function() {


});
$('.open-popup-link').magnificPopup({
  type:'inline',
  midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
});
// 애니메이션
$('.animate').scrolla({
	mobile: true,
	once: true
});
//슬라이더
var mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

})


$( window ).resize(function() {
var width=window.innerWidth;
if (width <= 1280){
	$('.page1_img1 img').attr('src','img/m/page1_img1.png');
	$('.page2_img1 img').attr('src','img/m/page2_img1.png');
	$('.content_logo img').attr('src','img/m/content_logo.png');
	$('.tab3_ico_1 img').attr('src','img/m/tab3_ico_1.png');
	$('.tab3_ico_2 img').attr('src','img/m/tab3_ico_3.png');
	$('.tab3_ico_3 img').attr('src','img/m/tab3_ico_2.png');
	

}else{
	$('.page1_img1 img').attr('src','img/page1_img1.png');
	$('.page2_img1 img').attr('src','img/page2_img1.png');
	$('.content_logo img').attr('src','img/content_logo.png');
	$('.tab3_ico_1 img').attr('src','img/tab3_ico_1.png');
	$('.tab3_ico_2 img').attr('src','img/tab3_ico_3.png');
	$('.tab3_ico_3 img').attr('src','img/tab3_ico_2.png');

}

}).resize();

