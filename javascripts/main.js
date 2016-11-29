function controlNavbarOffset(offset, bar, container) {
  var pos = container.offset().top;
  bar.css("top", "" + (Math.max((pos - offset), 0)) + "px");
}

function controlNavbarPosition() {
  controlNavbarOffset(window.pageYOffset, $("#navigation"), $("#navigation-container"));
}

$('document').ready(function(){
  controlNavbarPosition();
  
  $(window).scroll(controlNavbarPosition);
  $(window).resize(controlNavbarPosition);
}
);

