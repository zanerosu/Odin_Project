const rightChevron = document.querySelector("#right-arrow");
const leftChevron = document.querySelector("#left-arrow");
const images = document.querySelectorAll(".images");

var currentImage = 0;

export function arrowFunctions() {
  console.log(images.length);
  rightChevron.addEventListener("click", () => {
    
    if (currentImage >= 0 && currentImage < images.length -1) {        
      currentImage += 1;
      images[currentImage].classList.add("active");
      images[currentImage].classList.remove("inactive");
      images[currentImage - 1].classList.remove("active");
      images[currentImage - 1].classList.add("inactive");
    }
  });

  leftChevron.addEventListener("click", () => {
    if (currentImage > 0 && currentImage < images.length) {
      currentImage -= 1;
      images[currentImage].classList.add("active");
      images[currentImage].classList.remove("inactive");
      images[currentImage + 1].classList.remove("active");
      images[currentImage + 1].classList.add("inactive");
    }
  });
}
