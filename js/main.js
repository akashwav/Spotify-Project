let body = document.getElementById('body');
let main = document.getElementById('main');
let red = document.getElementById('poprockred');
let popsauce = document.getElementById('saucecolplay');
let olivia = document.getElementById('olplaypink');
let politics = document.getElementById('polpodyell');
let taylor = document.getElementById('taycolplay');
let economist = document.getElementById('ecopodred');
let header = document.getElementById('header');

popsauce.addEventListener('mouseover', function redpop() {
	body.style.backgroundImage = 'linear-gradient(rgb(227, 98, 144), rgb(227, 98, 144) 3%, rgb(25, 25, 25), rgb(25, 25, 25), rgb(25, 25, 25), rgb(25, 25, 25), rgb(25, 25, 25), rgb(25, 25, 25), rgb(25, 25, 25),  rgb(25, 25, 25), rgb(25, 25, 25), rgb(25, 25, 25), rgb(25, 25, 25), rgb(25, 25, 25))';
})

olivia.addEventListener('mouseover', function redpop() {
	body.style.backgroundImage = 'linear-gradient(rgb(135, 128, 195), rgb(135, 128, 195) 3%, rgb(25, 25, 25), rgb(25, 25, 25), rgb(25, 25, 25), rgb(25, 25, 25), rgb(25, 25, 25), rgb(25, 25, 25), rgb(25, 25, 25),  rgb(25, 25, 25), rgb(25, 25, 25), rgb(25, 25, 25), rgb(25, 25, 25), rgb(25, 25, 25))';
})

red.addEventListener('mouseover', function redpop() {
	body.style.backgroundImage = 'linear-gradient(rgb(225, 109, 120), rgb(225, 109, 120) 3%, rgb(25, 25, 25), rgb(25, 25, 25), rgb(25, 25, 25), rgb(25, 25, 25), rgb(25, 25, 25), rgb(25, 25, 25), rgb(25, 25, 25),  rgb(25, 25, 25), rgb(25, 25, 25), rgb(25, 25, 25), rgb(25, 25, 25), rgb(25, 25, 25))';
})

politics.addEventListener('mouseover', function redpop() {
	body.style.backgroundImage = 'linear-gradient(rgb(251, 243, 4, 0.7), rgb(251, 243, 4) 3%, rgb(25, 25, 25), rgb(25, 25, 25), rgb(25, 25, 25), rgb(25, 25, 25), rgb(25, 25, 25), rgb(25, 25, 25), rgb(25, 25, 25),  rgb(25, 25, 25), rgb(25, 25, 25), rgb(25, 25, 25), rgb(25, 25, 25), rgb(25, 25, 25))';
})

taylor.addEventListener('mouseover', function redpop() {
	body.style.backgroundImage = 'linear-gradient(rgb(91, 108, 120), rgb(91, 108, 120) 3%, rgb(25, 25, 25), rgb(25, 25, 25), rgb(25, 25, 25), rgb(25, 25, 25), rgb(25, 25, 25), rgb(25, 25, 25), rgb(25, 25, 25),  rgb(25, 25, 25), rgb(25, 25, 25), rgb(25, 25, 25), rgb(25, 25, 25), rgb(25, 25, 25))';
})

economist.addEventListener('mouseover', function redpop() {
	body.style.backgroundImage = 'linear-gradient(rgb(227, 19, 11), rgb(227, 19, 11) 3%, rgb(25, 25, 25), rgb(25, 25, 25), rgb(25, 25, 25), rgb(25, 25, 25), rgb(25, 25, 25), rgb(25, 25, 25), rgb(25, 25, 25),  rgb(25, 25, 25), rgb(25, 25, 25), rgb(25, 25, 25), rgb(25, 25, 25), rgb(25, 25, 25))';
})

main.addEventListener('scroll', function color() {
	main.style.background = 'white';
});





window.addEventListener('scroll', function headerToggle() {
	if (window.scrollY > 70) {
		header.style.backgroundColor = 'rgb(33, 147, 73)';
	}
	else {
		header.style.background = 'transparent';

	}
})



let falbum = document.getElementById('footeralbumimg');
let falbumcard = document.getElementById('albumimgcard');
let uparrow = document.getElementById('uparrowalbum');
let downarrow = document.getElementById('downarrowalbum');

uparrow.addEventListener('click', function falbumToggle() {
	falbum.style.display = 'none';
	falbumcard.style.display = 'block';
})

downarrow.addEventListener('click', function falbumcardToggle() {
	falbum.style.display = 'block';
	falbumcard.style.display = 'none';
})

