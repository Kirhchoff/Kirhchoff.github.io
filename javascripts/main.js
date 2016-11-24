
var previousOffset;

document.addEventListener("scroll", function() {
var bar = $("#navigation");
console.log(previousOffset);
if ((window.pageYOffset > 100) && (previousOffset <= 100)) {
  console.log("t");
  bar.removeClass("");
  bar.addClass("navbar-fixed-top");
}
  
else if (window.pageYOffset <= 100 && previousOffset > 100) {
  console.log("s");
  bar.removeClass("navbar-fixed-top");
  bar.addClass("");
}
previousOffset = window.pageYOffset;
});
