// __________________________________________navigation____________________________________________________

let x = document.getElementById("manu");
let mIcon = document.getElementById("manuIcon");
let cIcon = document.getElementById("closeIcon");

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

// _________________Scroll effects________________________________________________
window.addEventListener("scroll", () => {
  const scrollWatcher = document.querySelector(".scroll-watcher");
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercentage = (window.scrollY / maxScroll) * 100;
  scrollWatcher.style.width = `${scrollPercentage}%`;
});
//  opacity_________________
document.addEventListener("scroll", () => {
  const boxes = document.querySelectorAll(".box");
  const triggerBottom = (window.innerHeight / 5) * 4;

  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
});
document.addEventListener("scroll", () => {
  const boxe = document.querySelectorAll(".boxe");
  const triggerBottom = (window.innerHeight / 5) * 4;

  boxe.forEach((boxe) => {
    const boxeTop = boxe.getBoundingClientRect().top;

    if (boxeTop < triggerBottom) {
      boxe.classList.add("show");
    } else {
      boxe.classList.remove("show");
    }
  });
});
document.addEventListener("scroll", () => {
  const boxs = document.querySelectorAll(".boxs");
  const triggerBottom = (window.innerHeight / 5) * 4;

  boxs.forEach((boxs) => {
    const boxsTop = boxs.getBoundingClientRect().top;

    if (boxsTop < triggerBottom) {
      boxs.classList.add("show");
    } else {
      boxs.classList.remove("show");
    }
  });
});
