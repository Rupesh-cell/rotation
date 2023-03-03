const images = [
	['cat1.jpg', 'cat2.jpg', 'cat3.jpg'],
	['dog1.jpg', 'dog2.jpg', 'dog3.jpg'],
	['star1.jpg', 'star2.jpg', 'star3.jpg']
];

let counter = 0; 
let refreshTimer = null; 

function getRandomImage() {
	const theme = Math.floor(Math.random() * images.length);
	const index = Math.floor(Math.random() * images[theme].length);
	return images[theme][index]; 
}

function displayImages() {
	const img1 = document.getElementById('img1');
	const img2 = document.getElementById('img2');
	const img3 = document.getElementById('img3');

	img1.src = getRandomImage();
	img2.src = getRandomImage();
	img3.src = getRandomImage();
    remainingTime = 5000;
    updateImageChangeCount()
    
    
}
function do_animation( event ) {
    target = event.srcElement;
    target.classList.remove('spin');
    setTimeout( () => {target.classList.add('spin');}, 0 );
}


// function handleClick(event) {
// 	const img = event.target;

// 	// play transition animation
// 	img.style.transition = 'transform 1s';
// 	img.style.transform = 'rotate(360deg)';

// 	// set a timeout to change the image after the animation completes
// 	setTimeout(() => {
// 		img.src = getRandomImage();
//         img.style.transition = 'transform 1s';
// 	    img.style.transform = 'rotate(360deg)';
        
// 	}, 1000);

// 	// reset the refresh timer
// 	clearTimeout(refreshTimer);
// 	refreshTimer = setTimeout(displayImages, 5000);

	// increase the counter
// 	counter++;
// 	console.log(`Image ${img.alt} clicked ${counter} time(s)`);
// }

const img1 = document.getElementById('img1');
const img2 = document.getElementById('img2');
const img3 = document.getElementById('img3');

img1.addEventListener('click', do_animation);
img2.addEventListener('click', do_animation);
img3.addEventListener('click', do_animation);



let remainingTime = 5000; 

function countdownTimer() { 
    setInterval(() => {
  const timerElement = document.getElementById("timer");
  remainingTime -= 100;
  timerElement.innerText = `${remainingTime / 1000}s`;

  if (remainingTime <= 0) {
    clearInterval(remainingTime);
    remainingTime = 5000;
    


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
countdownTimer()



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
    remainingTime = 5000;
  });
});

const buttonchange = document.querySelectorAll(".buttonn");
buttonchange.forEach((button) => {
  image.addEventListener("click", (event) => {
    do_animation(event);
    updateImageChangeCount();
    remainingTime = 5000;
  });
});




