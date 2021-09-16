function dotsThrottle(t, e, o) {
    let n,
        i,
        d,
        l = null,
        c = 0;
    o || (o = {});
    const s = function () {
        (c = !1 === o.leading ? 0 : Date.now()),
            (l = null),
            (d = t.apply(n, i)),
            l || (n = i = null);
    };
    return function () {
        const a = Date.now();
        c || !1 !== o.leading || (c = a);
        const r = e - (a - c);
        return (
            (n = this),
            (i = arguments),
            r <= 0 || r > e
                ? (l && (clearTimeout(l), (l = null)),
                  (c = a),
                  (d = t.apply(n, i)),
                  l || (n = i = null))
                : l || !1 === o.trailing || (l = setTimeout(s, r)),
            d
        );
    };
}
let dotFixedNavPresent = !1,
    dotFixedNavId = '',
    dotFixedNavUp = !1,
    dotOffset = 0;
function easyScrollDots(t) {
    let e = document.querySelectorAll('.scroll-indicator');
    if (
        (!0 === t.fixedNav && (dotFixedNavPresent = !0),
        (dotFixedNavId = '' !== t.fixedNavId && t.fixedNavId),
        !0 === t.fixedNavUpward && (dotFixedNavUp = !0),
        t.offset > 0 && (dotOffset = t.offset),
        e.length)
    ) {
        const t = '<div class="scroll-indicator-controller"><span></span></div>';
        document.querySelector('body').lastElementChild.insertAdjacentHTML('afterend', t);
        const o = document.querySelector('.scroll-indicator-controller');
        (void 0 === window.orientation && -1 === navigator.userAgent.indexOf('IEMobile')) ||
            o.classList.add('indi-mobile');
        const n = Array.prototype.slice.call(e);
        n.forEach(function (t, e) {
            const n = t.getAttribute('id'),
                i = t.getAttribute('data-scroll-indicator-title');
            let d = '';
            0 == e && (d = 'active'),
                o.lastElementChild.insertAdjacentHTML(
                    'afterend',
                    '<div class="' +
                        d +
                        '" data-indi-controller-id="' +
                        n +
                        '" onclick="scrollIndiClicked(\'' +
                        n +
                        '\');"><span>' +
                        i +
                        '</span><div></div></div>',
                );
        });
        const i = o.querySelectorAll('[data-indi-controller-id]'),
            d = dotsThrottle(function () {
                let t = {};
                n.forEach(function (e) {
                    const o = e.getAttribute('id'),
                        n = e.getBoundingClientRect().top;
                    t[o] = n;
                });
                const e = Object.keys(t).map(function (e) {
                    return t[e];
                });
                Object.keys(t).forEach(function (n) {
                    t[n] ==
                        (function () {
                            const t = e.filter(function (t) {
                                return t > -150;
                            });
                            return Math.min.apply(null, t);
                        })() &&
                        (Array.prototype.forEach.call(i, function (t) {
                            t.classList.contains('active') && t.classList.remove('active');
                        }),
                        o
                            .querySelector('[data-indi-controller-id="' + n + '"]')
                            .classList.add('active'));
                });
            }, 300);
        window.addEventListener('scroll', d);
    }
}
function scrollIndiClicked(t) {
    if (window.jQuery) {
        const e = $('html, body');
        if (!0 === dotFixedNavPresent && dotFixedNavId.length) {
            const o = document.getElementById(dotFixedNavId).clientHeight,
                n = $('#' + t);
            if (!0 === dotFixedNavUp) {
                e.animate({ scrollTop: n.offset().top - dotOffset }, 700);
                const t = document.body.getBoundingClientRect().top;
                setTimeout(function () {
                    document.body.getBoundingClientRect().top > t &&
                        e.animate({ scrollTop: n.offset().top - o - dotOffset }, 400);
                }, 400);
            } else e.animate({ scrollTop: n.offset().top - o - dotOffset }, 700);
        } else e.animate({ scrollTop: $('#' + t).offset().top - dotOffset }, 700);
    } else if (!0 === dotFixedNavPresent && dotFixedNavId.length) {
        const e = document.getElementById(dotFixedNavId).clientHeight,
            o = document.getElementById(t);
        if (!0 === dotFixedNavUp) {
            window.scrollTo({ top: o.offsetTop - dotOffset, left: 0, behavior: 'smooth' });
            const t = document.body.getBoundingClientRect().top;
            setTimeout(function () {
                document.body.getBoundingClientRect().top > t &&
                    window.scrollTo({
                        top: o.offsetTop - e - dotOffset,
                        left: 0,
                        behavior: 'smooth',
                    });
            }, 400);
        } else window.scrollTo({ top: o.offsetTop - e - dotOffset, left: 0, behavior: 'smooth' });
    } else
        window.scrollTo({
            top: document.getElementById(t).offsetTop - dotOffset,
            left: 0,
            behavior: 'smooth',
        });
}

easyScrollDots({
	'fixedNav': false,
	'fixedNavId': '',
	'fixedNavUpward': false,
	'offset': 0
  });

document.addEventListener('DOMContentLoaded', () => {
    const deadline = new Date(2021, 08, 25);
    let timerId = null;

    function countdownTimer() {
        const diff = deadline - new Date();
        if (diff <= 0) {
            clearInterval(timerId);
        }
        const days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
        const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
        const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
        const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;
        $days.textContent = days < 10 ? '0' + days : days;
        $hours.textContent = hours < 10 ? '0' + hours : hours;
        $minutes.textContent = minutes < 10 ? '0' + minutes : minutes;
        $seconds.textContent = seconds < 10 ? '0' + seconds : seconds;
    }
    const $days = document.querySelector('.day');
    const $hours = document.querySelector('.hour');
    const $minutes = document.querySelector('.minute');
    const $seconds = document.querySelector('.second');
    countdownTimer();
    timerId = setInterval(countdownTimer, 1000);

    const swiper = new Swiper('.build', {
		allowTouchMove: true,
		breakpoints: {
			992: {
				allowTouchMove: false,
			}
		},
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        scrollbar: {
            el: '.swiper-scrollbar',
        },
        on: {
            slideChange: () => swiperCounter(),
        },
    });

    const swiperCounter = () => {
        const $counter = document.querySelector('.swiper-counter');
        const activeIndex = () => {
            const index = swiper.activeIndex + 1;
            return index < 10 ? `0${index}` : index;
        };
        $counter.textContent = activeIndex();
    };

    swiperCounter();

	const swiper2 = new Swiper('.helmet', {
		slidesPerView: 1,
        spaceBetween: 15,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
    });

    for (const dropdown of document.querySelectorAll('.select')) {
        dropdown.addEventListener('click', function () {
            this.querySelector('.select__selection').classList.toggle('open');
            this.querySelector('.select__trigger').classList.toggle('open');
        });
    }

    for (const option of document.querySelectorAll('.select__option')) {
        option.addEventListener('click', function () {
            if (!this.classList.contains('selected')) {
                this.parentNode
                    .querySelector('.select__option.selected')
                    .classList.remove('selected');
                this.classList.add('selected');
                this.closest('.select__selection').querySelector(
                    '.select__trigger span',
                ).textContent = this.textContent.substring(0, 2);
            }
        });
    }

    window.addEventListener('click', function (e) {
        for (const select of document.querySelectorAll('.select__selection')) {
            if (!select.contains(e.target)) {
                select.classList.remove('open');
            }
        }
    });

    const burger = document.querySelector('.burger');
    burger.addEventListener('click', function () {
        this.classList.toggle('open');
        document.querySelector('.burger__list').classList.toggle('open');
    });

	const tabItem = document.querySelectorAll('.tab__item');
	const tabCont =  document.querySelectorAll('.tab__cont');

	tabItem.forEach((item) => {
		item.addEventListener('click', function(e) {
			e.preventDefault();
			const id = e.target.getAttribute('href').replace('#', '');
			tabItem.forEach((child) => child.classList.remove('active'));
			tabCont.forEach((child) => child.classList.remove('active'));
			item.classList.add('active');
			document.getElementById(id).classList.add('active')
		})
	});
});
