const images = [
  ["cat1.jpg", "cat2.jpg", "cat3.jpg"],
  ["dog1.jpg", "dog2.jpg", "dog3.jpg"],
  ["star1.jpg", "star2.jpg", "star3.jpg"],
];

let counter = 0;
let refreshTimer = null;

function getRandomImage() {
  const theme = Math.floor(Math.random() * images.length);
  const index = Math.floor(Math.random() * images[theme].length);
  return images[theme][index];
}

function displayImages() {
  const img1 = document.getElementById("img1");
  const img2 = document.getElementById("img2");
  const img3 = document.getElementById("img3");

  img1.src = getRandomImage();
  img2.src = getRandomImage();
  img3.src = getRandomImage();
  remainingTime = parseInt(refreshTimeInput.value);
  updateImageChangeCount();
}
function do_animation(event) {
  target = event.srcElement;
  target.classList.remove("spin");
  setTimeout(() => {
    target.classList.add("spin");
  }, 0);
}

const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");
const img3 = document.getElementById("img3");

img1.addEventListener("click", do_animation);
img2.addEventListener("click", do_animation);
img3.addEventListener("click", do_animation);

let remainingTime;
console.log(remainingTime);
let refreshTimeInput = document.getElementById("refresh-time");
remainingTime = parseInt(refreshTimeInput.value);
console.log(remainingTime);

function countdownTimer() {
  setInterval(() => {
    const timerElement = document.getElementById("timer");
    remainingTime -= 100;
    timerElement.innerText = `${remainingTime / 1000}s`;

    if (remainingTime <= 0) {
      clearInterval(remainingTime);
      remainingTime = parseInt(refreshTimeInput.value);
      displayImages();
    } else if (remainingTime <= 2500) {
      timerElement.style.backgroundColor = "red";
      timerElement.style.color = "white";
    } else if (remainingTime <= 4000) {
      timerElement.style.backgroundColor = "yellow";
      timerElement.style.color = "black";
    } else {
      timerElement.style.backgroundColor = "green";
      timerElement.style.color = "white";
    }
  }, 100);
}
countdownTimer();

let imageChangeCount = 0;

function updateImageChangeCount() {
  imageChangeCount++;
  const counterElement = document.getElementById("counter");
  counterElement.innerText = `Image Change Count: ${imageChangeCount}`;
}

const imageElements = document.querySelectorAll(".image");
imageElements.forEach((image) => {
  image.addEventListener("click", (event) => {
    do_animation(event);
    updateImageChangeCount();
    remainingTime = parseInt(refreshTimeInput.value);
  });
});

const buttonchange = document.querySelectorAll(".buttonn");
buttonchange.forEach((button) => {
  image.addEventListener("click", (event) => {
    do_animation(event);
    updateImageChangeCount();
    remainingTime = parseInt(refreshTimeInput.value);
  });
});

let currentImageIndex = 0;

function changeImage() {
  const myImage = document.getElementsByClassName(".Image");
  currentImageIndex = (currentImageIndex + 1) % images.length;
  myImage.src = images[currentImageIndex];
}

function change1() {
    const img1 = document.getElementById("img1");
  
  img1.src = getRandomImage();
  
    
}
function change2() {
    const img2 = document.getElementById("img2");
  
  img2.src = getRandomImage();
}
function change3() {
    const img3 = document.getElementById("img3");
  
    img3.src = getRandomImage();
}
