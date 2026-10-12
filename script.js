const counter = document.querySelector("#counter");
const clickButton = document.querySelector("#click-button");
const buttonCaption = document.querySelector("#button-caption");

let clickCount = 0;

clickButton.addEventListener("click", () => {
	clickCount += 1;
	counter.textContent = clickCount;
	clickButton.classList.add("is-counted");
	buttonCaption.textContent = "좋아! 한 번 더 눌러봐";
});
