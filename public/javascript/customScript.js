$(document).ready(function() {
    $('#my-icon').on('click', function() {
        $(this).toggleClass('is-active');
        $('.navbar-mobile').toggleClass('show')
    })
})

// Helper function to get an element's exact position
function getPosition(el) {
    var xPos = 0;
    var yPos = 0;
   
    while (el) {
      if (el.tagName == "BODY") {
        // deal with browser quirks with body/window/document and page scroll
        var xScroll = el.scrollLeft || document.documentElement.scrollLeft;
        var yScroll = el.scrollTop || document.documentElement.scrollTop;
   
        xPos += (el.offsetLeft - xScroll + el.clientLeft);
        yPos += (el.offsetTop - yScroll + el.clientTop);
      } else {
        // for all other non-BODY elements
        xPos += (el.offsetLeft - el.scrollLeft + el.clientLeft);
        yPos += (el.offsetTop - el.scrollTop + el.clientTop);
      }
   
      el = el.offsetParent;
    }
    return {
      x: xPos,
      y: yPos
    };
  }

var button = document.querySelector('.explore');
button.addEventListener('click', function() {
    var elem = document.querySelector('.board');
    elemPos = getPosition(elem);
    window.scrollTo(elemPos.x, elemPos.y);
});
