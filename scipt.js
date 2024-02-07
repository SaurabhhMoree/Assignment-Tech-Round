var mySwiper = new Swiper('.mySwiper', {
    // Optional parameters
    loop: false, // Prevents repetition of slides
    slidesPerView: 1,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    autoplay: {
        delay: 3500,
    },
  });

  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });