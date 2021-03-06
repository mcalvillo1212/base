// $(document).ready(function () {
  //initialize swiper when document ready
  const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + '</span>';
      } // renderBullet
    }, //pagination

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    } // navigation
  }); // swiper

  // $('.modal').modal();

// });
