$(".page-scroll").on("click", function (event) {
  if (event != "undefined") {
    event.preventDefault();
  }
  var val = $(this).attr("href");
  var valF = $(val);
  var targetOffset = $(valF).offset().top - 80;
  var intTarget = parseInt(targetOffset);
  //   $("html, body").animate({
  //     scrollTop: 2000,
  //   });
  $("html, body").scrollTop(intTarget);
  event.preventDefault();
  console.log(intTarget);
});

let mybutton = document.getElementById("btn-back-to-top");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
