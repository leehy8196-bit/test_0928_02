$(document).ready(function () { //시작


  // $(".gnb>li").mouseenter(function () {
  //   $(this).children(".depth2").stop().fadeIn();
  // });

  // $(".gnb>li").mouseleave(function () {
  //   $(this).children(".depth2").stop().fadeOut();
  // });

  //depth2
  //hover : mouseenter, mouseleave 한 문장 버전
  $(".gnb>li").hover(function () {
    $(this).children(".depth2").stop().fadeToggle();
  });


  //모바일 메뉴
  $(".ham").click(function () {
    $(".dim").fadeIn();
    $(".mgnb-wrap").animate({ "right": "0" });
  });
  $(".mgnb-close").click(function () {
    $(".dim").fadeOut();
    $(".mgnb-wrap").animate({ "right": "-100%" });
  });

  //검색창
  $(".btn-search").click(function () {
    $(".search").fadeIn();
  });

  $(".search-close").click(function () {
    $(".search").fadeOut();
  });

  const visual_list = new Swiper(".visual-list", {
    effect: 'fade',
    fadeEffect: { crossFade: true },
    loop: true,
    autoplay: {
      delay: 2500,
      // 슬라이드가 머무르는 시간 (2500 = 2.5초)
      disableOnInteraction: false,
      // 마우스로 클릭/터치해도 오토플레이가 멈추지 않고 계속 유지됨
    },
    speed: 2000,
    navigation: {
      nextEl: '.swiper-button-next',
      // 다음 버튼 연결
      prevEl: '.swiper-button-prev',
      // 이전 버튼 연결
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
    },
  });


  const about_txt_list = new Swiper(".about-txt-list", {
    effect: 'fade',
    // 밀려 넘어가지 않고, 서서히 사라지며 다음 장으로 바뀌는 효과(페이드인)
    fadeEffect: { crossFade: true },
  });


  const about_img_list = new Swiper(".about-img-list", {
    autoplay: {
      delay: 5000,
      // 슬라이드가 머무르는 시간 (2500 = 2.5초)
      disableOnInteraction: false,
      // 마우스로 클릭/터치해도 오토플레이가 멈추지 않고 계속 유지됨
    },

    speed: 1000,

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      // 버튼을 누르면 해당 페이지로 이동 - fraction일 경우 필요는 없음
    },
  });

  about_txt_list.controller.control = about_img_list;
  about_img_list.controller.control = about_txt_list;

  const prd_list = new Swiper(".prd-list", {
    slidesPerView: 1,
    breakpoints: {
      1000: {
        slidesPerView: 2,
      },
      1400: {
        slidesPerView: 3,
      },
    },
    loop: true,
    centeredSlides: true,
    speed: 1000,
    autoplay: {
      delay: 3000,
      // 슬라이드가 머무르는 시간 (2500 = 2.5초)
      disableOnInteraction: false,
      // 마우스로 클릭/터치해도 오토플레이가 멈추지 않고 계속 유지됨
    },
    navigation: {
      nextEl: '.prd-next',
      // 다음 버튼 연결
      prevEl: '.prd-prev',
      // 이전 버튼 연결
    },
  });

  $("#collection ul li").hover(function () {
    //사용자가 선택한 li -> this한테 클레스를 붙이고 나머지는 지워야함
    $(this).addClass("active").siblings().removeClass("active");
  });

}); //끝