window.addEventListener('DOMContentLoaded', function () {

	'use strict';

	//ТАБЫ
	let tab = document.querySelectorAll('.info-header-tab'),
		info = document.querySelector('.info-header'),
		tabContent = document.querySelectorAll('.info-tabcontent');

	function hideTabContent(a) {
		for (let i = a; i < tabContent.length; i++) {
			tabContent[i].classList.remove('show');
			tabContent[i].classList.add('hide');
		}
	};
	hideTabContent(1);

	function showTabContent(b) {
		if (tabContent[b].classList.contains('hide')) {
			tabContent[b].classList.remove('hide');
			tabContent[b].classList.add('show');
		}
	};

	info.addEventListener('click', function (event) {
		let target = event.target;
		if (target && target.classList.contains('info-header-tab')) {
			for (let i = 0; i < tab.length; i++) {
				if (target == tab[i]) {
					hideTabContent(0);
					showTabContent(i);
					break;
				}
			}
		}
	});

	//ТАЙМЕР
	let deadLine = '2020-04-12'; // YYYY-MM-DD

	function getTimeRemaining(endtime) {
		let t = Date.parse(endtime) - Date.parse(new Date()),
			seconds = Math.floor((t / 1000) % 60),
			minutes = Math.floor((t / 1000 / 60) % 60),
			hours = Math.floor((t / (1000 * 60 * 60)));

		// hours = Math.floor((t/1000/60/60) % 24) // ЧАСЫ
		// days = Math.floor((t/(1000*60*60*24))) // ДНИ

		return {
			'total': t,
			'hours': hours,
			'minutes': minutes,
			'seconds': seconds,
		};
	};

	function setClock(id, endtime) {
		let timer = document.getElementById(id),
			hours = timer.querySelector('.hours'),
			minutes = timer.querySelector('.minutes'),
			seconds = timer.querySelector('.seconds'),
			timeInterval = setInterval(updateClock, 1000);

		function updateClock() {
			let t = getTimeRemaining(endtime);
			hours.textContent = String(t.hours);
			minutes.textContent = String(t.minutes);
			seconds.textContent = String(t.seconds);

			if (seconds.textContent.length < 2) {
				seconds.textContent = '0' + t.seconds
			};
			if (minutes.textContent.length < 2) {
				minutes.textContent = '0' + t.minutes
			};
			if (hours.textContent.length < 2) {
				hours.textContent = '0' + t.hours;
			};
			if (t.total <= 0) {
				clearInterval(timeInterval);
				hours.textContent = '00';
				minutes.textContent = '00';
				seconds.textContent = '00';
			};
		};

	};
	setClock('timer', deadLine);

	//modal 
	let more = document.querySelector('.more'), // КНОПКА узнать больше
		overlay = document.querySelector('.overlay'),
		close = document.querySelector('.popup-close'), // крестик
		moreBtnTabs = document.querySelectorAll('.description-btn');

	more.addEventListener('click', function () {
		overlay.style.display = 'block';
		this.classList.add('.more-splash');
		document.body.style.overflow = 'hidden';
	});

	close.addEventListener('click', function () {
		overlay.style.display = 'none';
		more.classList.remove('.more-splash');
		document.body.style.overflow = '';
	});

	for (let i = 0; i < moreBtnTabs.length; i++) {
		moreBtnTabs[i].addEventListener('click', function () {
			overlay.style.display = 'block';
			moreBtnTabs[i].classList.add = '.more-splash';
		});
	}

});
