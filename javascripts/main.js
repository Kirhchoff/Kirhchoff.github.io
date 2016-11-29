function controlNavigationBar(offset, bar, container) {
  if (typeof this.previousOffset == "undefined"){
    this.previousOffset = 0;
  }
  var pos = container.offset().top;
  if ((offset > pos) && (previousOffset <= pos)) {
    //bar.addClass("navbar-fixed-top");
    bar.addClass("navigation-bar-fixed");
  }
    
  else if (offset <= pos && previousOffset > pos) {
    //bar.removeClass("navbar-fixed-top");
    bar.removeClass("navigation-bar-fixed");
  }
  this.previousOffset = offset;
}

$('document').ready(function(){
  controlNavigationBar(window.pageYOffset, $("#navigation"), $("#navigation-container"));
  
  document.addEventListener("scroll", function() {
    controlNavigationBar(window.pageYOffset, $("#navigation"), $("#navigation-container"));
  });
}
);

