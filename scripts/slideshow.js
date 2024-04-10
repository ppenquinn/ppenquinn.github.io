let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

document.querySelectorAll(".grid-container").forEach(function(container) {
  container.querySelectorAll("div img").forEach(function(img) {
    var parentDiv = img.closest("div");
    var caption = parentDiv.querySelector("figcaption");
    img.dataset.caption = '<a class="link-light" target="_blank" href="' + parentDiv.querySelector("img").src + '">' + caption.innerHTML + '</a>';
    parentDiv.addEventListener("click", function(event) {
      event.preventDefault();
      BigPicture({
        el: event.target,
        gallery: container,
      });
    });
  });
});

