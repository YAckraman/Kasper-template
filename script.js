"using strict";
const NUMBER_OF_ELEMENTS = 8;
const imageContainer = document.querySelector(".image-container");
const skillsArray = ["Adobe", "Html"];
console.log(imageContainer);
//imageContainer.addEventListener("load", function () {
//create Image components
(function () {
  for (let i = 0; i < NUMBER_OF_ELEMENTS; i++) {
    const html = `<div class="box">
    <img src="./images/shuffle-0${i + 1}.jpg" alt="portfolio" />
          <div class="caption">
            <h4>Awesome Image</h4>
            <p>Photography</p>
          </div>
        </div> `;

    imageContainer.insertAdjacentHTML("beforeend", html);
  }
})();
