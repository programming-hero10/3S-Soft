

// __________________________________________navigation____________________________________________________


let x = document.getElementById('manu');
let mIcon = document.getElementById('manuIcon');
let cIcon = document.getElementById('closeIcon');


function openMenu() {
  x.style.display = "block";
  mIcon.style.display = "none";
  cIcon.style.display = "block";
}
function openMenu() {
  x.style.display = "block";
  mIcon.style.display = "none";
  cIcon.style.display = "block";
}
function closeMenu() {
  x.style.display = "none";
  mIcon.style.display = "block";
  cIcon.style.display = "none";
}


// __________________________________________FAQ____________________________________________________

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    this.parentElement.classList.toggle("active");

    var pannel = this.nextElementSibling;

    if (pannel.style.display === "block") {
      pannel.style.display = "none";
    } else {
      pannel.style.display = "block";
    }
  });
}
