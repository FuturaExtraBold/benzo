(function($) {

  console.log("lazy load!");

  var $window = $(window);
  var $images = $("img[data-src]");
  var $backgrounds = $("div[data-background-src]");
  var images = [];
  var backgrounds = [];
  var loadOffset = 1400;

  $images.each(function(idx) {
    images.push($(this));
  });

  $backgrounds.each(function(idx) {
    backgrounds.push($(this));
  });

  function loadImage(img) {
    img.attr("srcset", img.attr("data-srcset"));
    img.attr("src", img.attr("data-src"));
    img.on("load", function() {
      console.log("image loaded:", img.attr("data-src"));
      img.removeAttr("data-srcset");
      img.removeAttr("data-src");
      img.css("opacity", 1);
    });
  }

  function loadBackgroundImage(img) {
    console.log("background image loaded:", img.attr("data-background-src"));
    img.attr("style", "background-image: url('" + img.attr("data-background-src") + "');");
    img.removeAttr("data-background-src");
  }

  function checkScroll(evt) {
    var windowTop = $window.scrollTop();
    var $thisImage, thisImageOffset;
    for (var a = 0; a < images.length; a++) {
      $thisImage = $(images[a]);
      thisImageOffset = $thisImage.offset().top;
      if (windowTop > thisImageOffset - loadOffset) {
        loadImage($thisImage);
        images.splice(a, 1);
        checkScroll();
        break;
      }
    }
    for (var b = 0; b < backgrounds.length; b++) {
      $thisImage = $(backgrounds[b]);
      thisImageOffset = $thisImage.offset().top;
      if (windowTop > thisImageOffset - loadOffset) {
        loadBackgroundImage($thisImage);
        backgrounds.splice(b, 1);
        checkScroll();
        break;
      }
    }
  }

  $window.on("scroll.lazy-load-scroll", checkScroll);
  checkScroll();

})(jQuery);
