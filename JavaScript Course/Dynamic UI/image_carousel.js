const rightChevron = document.querySelector("#right-arrow");
const leftChevron = document.querySelector("#left-arrow");
const images = document.querySelectorAll(".images");

var currentImage = 0;

export function arrowFunctions() {
  console.log(images.length);
  rightChevron.addEventListener("click", () => {
    
    if (currentImage >= 0 && currentImage < images.length -1) {        
      images[currentImage].classList.remove("active");
      images[currentImage].classList.add("inactive");
      currentImage += 1;
      images[currentImage].classList.remove("inactive");
      images[currentImage].classList.add("active");
    }
  });

  leftChevron.addEventListener("click", () => {
    if (currentImage > 0 && currentImage < images.length) {
      images[currentImage].classList.remove("active");
      images[currentImage].classList.add("inactive");
      currentImage -= 1;
      images[currentImage].classList.remove("inactive");
      images[currentImage].classList.add("active");
    }
  });
}
