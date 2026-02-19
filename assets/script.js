const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const leftArrow = document.querySelector(".arrow_left");
const rightArrow = document.querySelector(".arrow_right");
// console.log(leftArrow);
// console.log(rightArrow);

const dotsContainer = document.querySelector(".dots");
const dots = [];
const imgBanner = document.querySelector(".banner-img");
const defaultPath = "./assets/images/slideshow/";
const tagLine = document.querySelector("#banner p");
let currentIndex = 0;

for (let index = 0; index < slides.length; index++) {
	let dotElement = document.createElement("span");
	dotElement.classList.add("dot");
	dots.push(dotElement);
	dotsContainer.appendChild(dotElement);
}

imgBanner.src= defaultPath + slides[0].image;
tagLine.innerHTML= slides[0].tagLine;
dots[0].classList.toggle("dot_selected");

function ChangeImg(params) {
	if(params < 0){
		params = slides.length-1;
		currentIndex = slides.length-1;
	}

	if(params >= slides.length){
		params = 0;
		currentIndex = 0;
	}

	imgBanner.src= defaultPath + slides[params].image;
	tagLine.innerHTML= slides[params].tagLine;
	dots.forEach(dot => dot.classList.remove("dot_selected"));
	dots[params].classList.add("dot_selected");
	console.log(params);
}

leftArrow.addEventListener("click", () => {
	currentIndex--;
	ChangeImg(currentIndex);
})

rightArrow.addEventListener("click", () => {
	currentIndex++;
	ChangeImg(currentIndex);
})


