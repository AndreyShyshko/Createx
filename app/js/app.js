// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'

import Swiper from 'swiper/bundle';
// or
// import Swiper, { Navigation, Pagination } from 'swiper';
// Swiper.use([Navigation, Pagination]);

document.addEventListener('DOMContentLoaded', () => {

	// Custom JS

	//tabs and tabcontent
	const list = document.querySelector(".benefits__list");
	const tabs = document.querySelectorAll(".benefits__tab");
	const tabContent = document.querySelectorAll(".benefits__column-item");

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

	list.addEventListener("click", (e) => {
		let target = e.target;
		if(target && target.classList.contains("benefits__tab")) {
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

})
