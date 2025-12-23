$(document).ready(function () {
  const slides = [
    "img_slideshow/F06.jpg",
    "img_slideshow/F07.jpg",
    "img_slideshow/F09.jpg"
  ];

  let index = 0;

  function showSlide(effect) {
    const img = $("#slideImage");

    if (effect === "next") {
      img
        .fadeOut(300)
        .slideUp(300, function () {
          img.attr("src", slides[index]).slideDown(300).fadeIn(300);
        });
    } else {
      img
        .slideUp(300)
        .fadeOut(300, function () {
          img.attr("src", slides[index]).fadeIn(300).slideDown(300);
        });
    }
  }
  $("#slideImage").attr("src", slides[index]).show();

  $("#nextBtn").click(function () {
    index = (index + 1) % slides.length;
    showSlide("next");
  });

  $("#prevBtn").click(function () {
    index = (index - 1 + slides.length) % slides.length;
    showSlide("prev");
  });
});
