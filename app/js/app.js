// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'

import Swiper from 'swiper/bundle';
// or
// import Swiper, { Navigation, Pagination } from 'swiper';
// Swiper.use([Navigation, Pagination]);

document.addEventListener('DOMContentLoaded', () => {

	// Custom JS

	//tabs and tabcontent
	const list = document.querySelector(".tabs__list");
	const tabs = document.querySelectorAll(".tabs__label");
	const tabContent = document.querySelectorAll(".tabs-content__item");

	function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.add('hide');
        }
    }

	hideTabContent(1);

	function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
        }
    }

	if(list !== null) {
		list.addEventListener("click", (e) => {
			let target = e.target;
			if(target && target.classList.contains("tabs__label")) {
				for (let tab of tabs) {
					if(tab.classList.contains("active")) {
						tab.classList.remove("active");
					} 
				}
				target.classList.add("active");
	
				for(let i = 0; i < tabs.length; i++) {
					if (target == tabs[i]) {
						hideTabContent(0);
						showTabContent(i);
						break;
					}
				}
			};
		});
	}


	//swiper-slider
	const swiperTutors = new Swiper('.tutors-swiper', {
		// Optional parameters
		direction: 'horizontal',
		loop: true,
		slidesPerView: 4,
		spaceBetween: 30,

		// Navigation arrows
		navigation: {
			nextEl: '.button-next',
			prevEl: '.button-prev',
		},
	});	

	const swiperTestimonials = new Swiper('.testimonials-swiper', {
		// Optional parameters
		direction: 'horizontal',
		loop: true,
		slidesPerView: "auto",
		centeredSlides: true,
		spaceBetween: 105,

		// Navigation arrows
		navigation: {
			nextEl: '.button-next',
			prevEl: '.button-prev',
		},
		//Pagination
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
	});	

	const swiperCheckCourses = new Swiper('.check-course-swiper', {
		// Optional parameters
		direction: 'horizontal',
		loop: true,
		slidesPerView: 2,
		spaceBetween: 30,

		// Navigation arrows
		navigation: {
			nextEl: '.button-next',
			prevEl: '.button-prev',
		},
	});	

	//active link
	const navLinks = document.querySelectorAll(".header-nav__link");

	for (let navLink of navLinks) {
		if (window.location.href === navLink.href) {
			navLink.classList.add("active");
		}
	}

	if (window.location.pathname.includes('course.html')) {
		navLinks[1].classList.add("active");
	}

	//accordion
	const accordion = document.querySelectorAll('.accordion__item');

	if(accordion !== null) {
		for (let i = 0; i < accordion.length; i++) {
			accordion[i].addEventListener('click', () => {
				for (let j = 0; j < accordion.length; j++) {
					if(accordion[i] === accordion[j]) {
						accordion[j].classList.toggle('active')
					} else {
						accordion[j].classList.remove('active')
					}
				}
			})
		}
	}

	//list-grid mode
	const modeBtns = document.querySelector(".events__mode-buttons");
	const modeList = document.querySelector(".events__mode-list");
	const modeGrid = document.querySelector(".events__mode-grid");
	const eventsList = document.querySelector(".events__list");

	if(modeBtns !== null) {
		modeBtns.addEventListener("click", (e) => {
			let target = e.target;
			if(target === modeList) {
				modeList.classList.add("active");
				modeGrid.classList.remove("active");
				eventsList.classList.remove("grid-mode");
				eventsList.classList.add("list-mode");
			}
			if(target === modeGrid) {
				modeGrid.classList.add("active");
				modeList.classList.remove("active");
				eventsList.classList.remove("list-mode");
				eventsList.classList.add("grid-mode");
			}
		})
	}
})
