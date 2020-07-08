var $WINDOW = $(window),
  $HTML = $('html'),
  $BODY = $('body');


/**
 * Change font size on resize
 */
function changeFontSize() {
  var step = 0.0499;
  var fontSize = Math.round(window.innerWidth * step * 10) / 10;
  $HTML.css('font-size', fontSize + '%');
}
changeFontSize();

/**
 * !Detects overlay scrollbars (when scrollbars on overflowed blocks are visible).
 * This is found most commonly on mobile and OS X.
 * */
var HIDDEN_SCROLL = Modernizr.hiddenscroll;
var NO_HIDDEN_SCROLL = !HIDDEN_SCROLL;
var TOUCHEVENTS = ("ontouchstart" in document.documentElement);

/**
 * !Add touchscreen classes
 * */
function addTouchClasses() {
  if (TOUCHEVENTS) {
    document.documentElement.className += " touchevents";
  } else {
    document.documentElement.className += " no-touchevents";
  }
}

/**
 * !Initial full page scroll plugin
 * */
function fullPageInitial() {
  var $fpSections = $('.fp-sections-js');

  // if (!DEVICE && window.innerWidth >= 992) {
  //
  // }
  if ($fpSections.length) {
    var fpSectionSelector = '.fp-section-js';
    var $fpSection = $(fpSectionSelector);
    var $word = $('.js-word-bg .wbg__word');
    var parallaxValue = 0.2;
    var duration = 750;
    // var breakpointWidth = 992;
    // var breakpointHeight = 400;

    function historyAnchors() {
      var anchors = [];

      $.each($fpSection, function (i, el) {
        anchors.push('section' + (i + 1));
      });

      return anchors;
    }

    function sectionReady(destination) {
      var $section = $(destination.item);
      $section.addClass('s-ready');
      if (destination.isLast) {
        $section.prev().addClass('s-ready');
      }
    }

    function sectionVisible(destination) {
      var $section = $(destination.item);
      $fpSections.removeClass('s-visible');
      $section.addClass('s-visible');
      if (destination.isLast) {
        $section.prev().addClass('s-visible');
      }
    }

    function toggleLogoTheme(destination) {
      var $section = $(destination.item);

      $HTML.removeClass('logo-theme-light');
      $BODY.addClass('logo-theme-dark');
      $BODY.removeClass('second_item');


      if (!$HTML.hasClass('logo-theme-light') && $section.attr('data-logo-theme') === "light") {
        $HTML.addClass('logo-theme-light');
        $BODY.removeClass('logo-theme-dark');
      }

      if ($section.attr('data-item') === "second") {
        $BODY.removeClass('third_item');
        $BODY.addClass('second_item');
      }
      if ($section.attr('data-item') === "third") {
        $BODY.removeClass('second_item');
        $BODY.addClass('third_item');
      }

    }

    $fpSections.fullpage({
      css3: true,
      licenseKey: '11111111-11111111-11111111-11111111',
      verticalCentered: false,
      anchors: historyAnchors(),
      recordHistory: false,
      scrollingSpeed: duration,
      sectionSelector: fpSectionSelector,

      // responsiveWidth: breakpointWidth, // and add css rule .fp-enabled
      // responsiveHeight: breakpointHeight, // and add css rule .fp-enabled
      navigation: false,
      onLeave: function (origin, destination, direction) {
        sectionReady(destination);

        sectionVisible(destination);

        var $spaceTop = destination.item.offsetTop + destination.item.clientHeight - window.innerHeight;
        var scrollValue = -$spaceTop * parallaxValue;

        if ($word.length) {
          $word.css({
            'transform': 'translate3d(' + scrollValue + 'px, 0px, 0px)',
            'transition': 'all ' + duration / 1000 + 's'
          });
        }

        // Добавлять класс светлой темы
        toggleLogoTheme(destination);

        // Менять цвет фона
        var bgColor = $(destination.item).attr('data-bg-color');
        if (bgColor && bgColor.length) {
          $BODY.css('background-color', bgColor);
        } else {
          $BODY.css('background-color', '');
        }

      },
      afterLoad: function (origin, destination, direction) {
        sectionReady(destination);
        $('.logo-js').on('click', function (e) {
          fullpage_api.moveTo(1);
          e.preventDefault();
        })
      },
    });

    $('.btn-next-section-js').on('click', function (e) {
      if ($fpSections.length) {
        fullpage_api.moveSectionDown();
      }
      e.preventDefault();
    });

    $('.btn-to-section-js').on('click', function (e) {
      var $thisBtn = $(this);
      if ($fpSections.length) {
        fullpage_api.moveTo($($thisBtn.attr('href')).index() + 1);
      }
      e.preventDefault();
    });
  }
}

/**
 * !Add placeholder for old browsers
 * */
// function placeholderInit() {
//   $('[placeholder]').placeholder();
// }

/**
 * !Main navigation
 */
function mainNavigation() {
  var $nav = $('.nav-js');
  if ($nav.length) {

    $nav.nav({
      submenuPosition: false,
    });
  }
}

$('.nav-opener-js').on('click', function (e) {
  var $curBtn = $(this);

  $curBtn.add($($curBtn.attr('href'))).addClass('is-open');

  $HTML.addClass('css-scroll-fixed open-only-mob');

  e.preventDefault();
});

function hideNav() {
  $('.is-open').removeClass('is-open');
  $HTML.removeClass('css-scroll-fixed open-only-mob');
}

$('.nav-close-btn-js').on('click', function (e) {
  hideNav();

  e.preventDefault();
});

$('.nav-overlay').on('click', function () {
  hideNav();
});

$HTML.keyup(function (event) {
  if (event.keyCode === 27) {
    hideNav();
  }
});


/**
 * !Form validation
 * */
function formValidation() {
  $.validator.setDefaults({
    submitHandler: function () {
      alert('Форма находится в тестовом режиме. Чтобы закрыть окно, нажмите ОК.');
      return false;
    }
  });

  var $form = $('.validate-js');

  if ($form.length) {
    var changeClasses = function (elem, remove, add) {
      // console.log('changeClasses');
      elem
        .removeClass(remove).addClass(add);
      elem
        .closest('form').find('label[for="' + elem.attr('id') + '"]')
        .removeClass(remove).addClass(add);
      elem
        .closest('.input-wrap')
        .removeClass(remove).addClass(add);
    };

    $.each($form, function (index, element) {
      $(element).validate({
        errorClass: "error",
        validClass: "success",
        errorElement: false,
        errorPlacement: function (error, element) {
          return true;
        },
        highlight: function (element, errorClass, successClass) {
          changeClasses($(element), successClass, errorClass);
        },
        unhighlight: function (element, errorClass, successClass) {
          changeClasses($(element), errorClass, successClass);
        }
      });
    });
  }
}

// Parallax
var rellax = new Rellax('.rellax');

// WOW + animate
new WOW().init();

$WINDOW.on('resize', function () {
  changeFontSize();
  getSizeForSocIcon();
});

$WINDOW.on('load', function () {
  changeFontSize();
});

function getSizeForSocIcon() {
  var menu = $('.tanks__menu');
  var t_m = menu.offset().top - 100;
  var t_n_m = menu.offset().top;
  var l_m = menu.offset().left + 8.4;
  var h_video = $('.tanks__video').offset().top - menu.outerHeight();
  var b_video = $('.tanks__video').offset().top + $('.anchor_game').outerHeight();
  var h_footer = b_video + $('.tanks__locacion').outerHeight() + $('.tanks__awards').outerHeight();

  //game sticky menu
  $(window).scroll(function () {
    if ($(this).scrollTop() > t_m) {
      menu.css({
        "position": 'fixed',
        "top": '140px',
        "left": l_m + 'px'
      });
    } else if ($(this).scrollTop() < t_n_m) {
      menu.css({
        "position": "relative",
        "top": "0",
        "left": "-90px"
      });
    }
    if ($(this).scrollTop() > h_video) {
      menu.css({
        "opacity": "0"
      });
    }
    if ($(this).scrollTop() > b_video) {
      menu.css({
        "opacity": "1"
      });
    }
    if ($(this).scrollTop() > h_footer) {
      menu.css({
        "opacity": "0"
      });
    }
    if ($(this).scrollTop() < h_footer) {
      menu.css({
        "opacity": "1"
      });
    }
    if ($(this).scrollTop() < b_video) {
      menu.css({
        "opacity": "0"
      });
    }
    if ($(this).scrollTop() < h_video) {
      menu.css({
        "opacity": "1"
      });
    }
  });
}
// game sticky const
if ($BODY.hasClass('hoopstars') || $BODY.hasClass('tanks')) {
  getSizeForSocIcon();
  $('.locacion_block_slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    infinite: true,
    centerMode: true,
    variableWidth: true,
    arrows: false
  });

  // button play video
  $('.play_button').on('click', function (e) {
    let video = $('.tanks_video');
    if (video.get(0).paused === true) {
      video.get(0).volume = 0.3;
      video.get(0).play();
      $('.play_button').css('display', 'none');
    }
    return false;
  });
  $('.tanks_video').on('click', function (e) {
    let video = $('.tanks_video');
    if (video.get(0).paused === false) {
      video.get(0).pause();
      $('.play_button').css('display', 'block');
    }
    return false;
  });
}

if ($BODY.hasClass('privacy')) {
  // custom scroll for privacy page
  $("html").niceScroll({
    cursorcolor: "#D8D8D8",
    cursorwidth: "4px",
    cursormaxheight: 203,
    cursorminheight: 203,
    cursorborder: 0,
    cursorborderradius: '5px',
    horizrailenabled: false
  });
}
if ($BODY.hasClass('vacancies')) {
  // custom scroll for privacy page
  $("html").niceScroll({
    cursorcolor: "#D8D8D8",
    cursorwidth: "4px",
    cursormaxheight: 203,
    cursorminheight: 203,
    cursorborder: 0,
    cursorborderradius: '5px',
    horizrailenabled: false
  });
}
// delete home item with menu on home page
if ($BODY.hasClass('index_page')) {
  $('.menu-item-home').css('display', 'none');
}

// game slider and custom scroll
if ($BODY.hasClass('tanks')) {
  $('.tanks-slider__video').slick({
    centerMode: true,
    slidesToShow: 1,
    dots: true,
    infinite: false,
    variableWidth: true,
    arrows: false
  });
  $(".tanks-scroll").niceScroll({
    cursorcolor: "#9179e6",
    cursorwidth: "4px",
    cursorminheight: 203,
    cursorborder: 0,
    cursorborderradius: '5px',
    horizrailenabled: false
  });
}
if ($BODY.hasClass('hoopstars')) {
  $('.hoop-slider__video').slick({
    centerMode: true,
    slidesToShow: 3,
    dots: true,
    infinite: false,
    variableWidth: true,
    arrows: false
  });
  $(".hoopstars-scroll").niceScroll({
    cursorcolor: "#f1a083",
    cursorwidth: "4px",
    cursorminheight: 203,
    cursorborder: 0,
    cursorborderradius: '5px',
    horizrailenabled: false
  });
}

$(document).ready(function () {
  fullPageInitial();
  $BODY.addClass('logo-theme-dark');
  changeFontSize();
  // Base
  addTouchClasses();
  //placeholderInit();
  //objectFitImages(); // object-fit-images initial
  // Common
  // mainNavigation();
  // toggleActiveMenuItem();

  // formValidation();
});