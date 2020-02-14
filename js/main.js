//============== IBG =================================
function ibg() {
  $.each($(".ibg"), function(index, val) {
    if ($(this).find("img").length > 0) {
      $(this).css(
        "background-image",
        'url("' +
          $(this)
            .find("img")
            .attr("src") +
          '")'
      );
    }
  });
}

ibg();

//==============================================================

//============== SLIDER =================================
if ($(".slider__body").length > 0) {
  $(".slider__body").slick({
    //  autoplay: true,
    //  infinite: false,
    dots: false,
    arrows: true,
    accessibility: false,
    slidesToShow: 1,
    autoplaySpeed: 3000,
    adaptiveHeight: true,
    nextArrow: '<button type="button" class="slick-next"></button>',
    prevArrow: '<button type="button" class="slick-prev"></button>',
    responsive: [
      {
        breakpoint: 768,
        settings: {}
      }
    ]
  });
}

//==============================================================

//==============SPOILER "ABOUT"=================================

$(document).ready(function() {
  $(".spoiler__title").click(function(event) {
    if ($(".about__spoiler").hasClass("one")) {
      $(".spoiler__title")
        .not($(this))
        .removeClass("active");
      $(".spoiler__text")
        .not($(this).next())
        .slideUp(300);
    }
    $(this)
      .toggleClass("active")
      .next()
      .slideToggle(300);
  });
});

//==============================================================

//============== PORTFOLIO FILTER ==============================

var $grid = $(".grid").isotope({
  itemSelector: ".element-item",
  layoutMode: "fitRows"
});
// filter items on button click
$(".filter-button-group").on("click", "button", function() {
  var filterValue = $(this).attr("data-filter");
  $grid.isotope({ filter: filterValue });
});
// change is-checked class on buttons
$(".button-group").each(function(i, buttonGroup) {
  var $buttonGroup = $(buttonGroup);
  $buttonGroup.on("click", "button", function() {
    $buttonGroup.find(".is-checked").removeClass("is-checked");
    $(this).addClass("is-checked");
  });
});

//=============================================================

//============== PROGRESSBAR "OUR_SKILLS" =====================

$(function() {
  $(".chart").easyPieChart({
    //your options goes here
  });
});

//=============================================================
