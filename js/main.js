// menu start
var menu = document.getElementById("menu");
var menuBtn = document.getElementById("menuBtn");
var body = document.body;
menuBtn.onclick = function () {
  menu.classList.toggle("active");
  menuBtn.classList.toggle("active");
  body.classList.toggle("active");
};
window.onclick = function (event) {
  if (event.target == menu) {
    menu.classList.remove("active");
    menuBtn.classList.remove("active");
    body.classList.remove("active");
  }
};
// menu end
// scroll start
let anchor = document.getElementById("anchor");
function getWindowHeight() {
  let body = document.body,
    html = document.documentElement;

  let height = Math.max(
    body.scrollHeight,
    body.offsetHeight,
    html.clientHeight,
    html.scrollHeight,
    html.offsetHeight
  );
  return height;
}
function scrollFunc() {
  if (window.pageYOffset >= 50) {
    anchor.classList.add("active");
  } else {
    anchor.classList.remove("active");
  }
}
window.onscroll = function () {
  scrollFunc();
};
// scroll end
// sliders
var $status = $(".pagingInfo");
$(".blog__inner-slider").each(function (index, element) {
  let $slickElement = $(element);
  $slickElement.slick({
    infinite: true,
    slidesToShow: 3,
    autoplay: false,
    arrows: true,
    prevArrow: $slickElement.next().find(".prev"),
    nextArrow: $slickElement.next().find(".next"),
    dots: true,
    dotsClass: "custom_paging",
    customPaging: function (slider, i) {
      return i + 1 + " " + "VON" + " " + slider.slideCount;
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});

var $status = $(".pagingInfo");
$(".winnerItem__slider").each(function (index, element) {
  let $slickElement = $(element);
  $slickElement.slick({
    infinite: true,
    slidesToShow: 1,
    autoplay: false,
    arrows: true,
    speed: 1,
    prevArrow: $slickElement.next().find(".prev"),
    nextArrow: $slickElement.next().find(".next"),
    dots: true,
    fade: true,
    adaptiveHeight: true,
    dotsClass: "custom_paging",
    
    customPaging: function (slider, i) {
      return i + 1 + " " + "VON" + " " + slider.slideCount;
    },
  });
});

var $status = $(".pagingInfo");
$(".bannerSlider").each(function (index, element) {
  let $slickElement = $(element);
  $slickElement.slick({
    infinite: true,
    slidesToShow: 1,
    autoplay: false,
    arrows: true,
    prevArrow: $slickElement.next().find(".prev"),
    nextArrow: $slickElement.next().find(".next"),
    dots: true,
    fade: true,
    dotsClass: "custom_paging",
    customPaging: function (slider, i) {
      return i + 1 + " " + "VON" + " " + slider.slideCount;
    },
  });
});

var $status = $(".pagingInfo");
$(".historySlider").each(function (index, element) {
  let $slickElement = $(element);
  $slickElement.slick({
    infinite: true,
    slidesToShow: 3,
    centerMode: true,
    arrows: true,
    prevArrow: $slickElement.next().find(".prev"),
    nextArrow: $slickElement.next().find(".next"),
    dots: true,
    speed: 800,
    dotsClass: "custom_paging",
    customPaging: function (slider, i) {
      return i + 1 + " " + "VON" + " " + slider.slideCount;
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          centerMode: false,
          slidesToScroll: 1,
          adaptiveHeight: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});

// faq start
const tabBtn = document.querySelectorAll(".tabBtn");
const tabEvent = document.querySelectorAll(".tabEvent");
tabBtn.forEach((e) => {
  onTabClick(tabBtn, tabEvent, e);
});
function onTabClick(tabBtns, tabItems, item) {
  item.addEventListener("click", function (e) {
    let currentBtn = item;
    let tabId = currentBtn.getAttribute("data-tab");
    let currentTab = document.querySelector(tabId);
    if (currentBtn.classList.contains("active")) {
      console.log("now active");
      const faq = currentBtn.parentElement.querySelector(".tabEvent");
      if (faq) {
        faq.classList.remove("active");
        currentBtn.classList.remove("active");
      }
    } else if (!currentBtn.classList.contains("active")) {
      tabBtns.forEach(function (item) {
        item.classList.remove("active");
      });

      tabItems.forEach(function (item) {
        item.classList.remove("active");
      });
      currentBtn.classList.add("active");
      currentTab.classList.add("active");
    }
  });
}
// faq end





function showPassword() {
  var x = document.getElementById("pass");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}





// // wow start
// var wow = new WOW({
//   boxClass: "wow",
//   animateClass: "animated",
//   offset: 0,
//   mobile: true,
//   live: true,
//   scrollContainer: null,
//   resetAnimation: true,
// });
// wow.init();
// // wow end
 
// // scroll start
// let header = document.getElementById("header");
// let anchor = document.getElementById("anchor");

// function scrollFunc() {
//   if (window.pageYOffset >= 50) {
//     header.classList.add("sticky");
//     anchor.classList.add("active");
//   } else {
//     header.classList.remove("sticky");
//     anchor.classList.remove("active");
//   }
// }
// window.onscroll = function () {
//   scrollFunc();
// }





