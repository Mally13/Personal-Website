const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');
const readMoreBtn = document.querySelector(".read-more-btn");
const text = document.querySelector(".text");
const mycards=document.querySelector(".mycards");

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});



menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});

readMoreBtn.addEventListener("click", function(){
  text.classList.toggle("show-more");
  if (readMoreBtn.innerHTML === "Read More") {
    readMoreBtn.innerHTML = "Read Less";
  } else {
    readMoreBtn.innerHTML= "Read More";
  }
});

