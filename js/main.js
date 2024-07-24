document.addEventListener('DOMContentLoaded', function() {
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}
});
// blog jump
document.addEventListener('DOMContentLoaded', function() {
    var accordionItems = document.querySelectorAll('.accordion_child0');
    accordionItems.forEach(function(item) {
    item.addEventListener('click', function() {
      var url = this.getAttribute('data-url');
      window.location.href = url;
    });
  });
});
// project card jump
document.addEventListener('DOMContentLoaded', function() {
    var cards = document.querySelectorAll('.card');
    cards.forEach(function(card) {
    card.addEventListener('click', function() {
      var url = this.getAttribute('data-url');
      window.location.href = url;
    });
  });
});


// document.addEventListener('DOMContentLoaded', function() {/* add things */});
