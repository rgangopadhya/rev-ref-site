const zine_path = "/assets/images";
const issue1_path = `${zine_path}/issue1`;
let currPage = 1;

const slideshowImage = document.querySelector("#slideshow-pane .slideshow-image");

const pageToSrc = (pageNumber) => `${issue1_path}/page${pageNumber}.png`;

// Carousel buttons
const leftArrow = document.querySelector("#left-arrow button");
const rightArrow = document.querySelector("#right-arrow button");

leftArrow.addEventListener("click", (event) => {
  currPage -= 1; 
  slideshowImage.src = pageToSrc(currPage);
  // set leftArrow disabled if we're now at 1
  leftArrow.disabled = (currPage === 1);
  rightArrow.disabled = false;
});

rightArrow.addEventListener("click", (event) => {
  currPage += 1; 
  slideshowImage.src = pageToSrc(currPage);
  rightArrow.disabled = (currPage === 8);
  leftArrow.disabled = false;
});
