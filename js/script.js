// Плавный скролл при клике на элементы навигации
var navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(function (navLink) {
    navLink.addEventListener('click', function (e) {
        e.preventDefault();

        var targetSectionId = this.getAttribute('href');
        var targetSection = document.querySelector(targetSectionId);

        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth'
        });
    });
});

// Анимация наведения на элементы в хедере
var headerLinks = document.querySelectorAll('header nav ul li a');

headerLinks.forEach(function (headerLink) {
    headerLink.addEventListener('mouseenter', function () {
        this.classList.add('hovered');
    });

    headerLink.addEventListener('mouseleave', function () {
        this.classList.remove('hovered');
    });
});

// Анимация наведения на типы доставки
var deliveryTypes = document.querySelectorAll('.delivery-type');

deliveryTypes.forEach(function (deliveryType) {
    deliveryType.addEventListener('mouseenter', function () {
        this.classList.add('hovered');
    });

    deliveryType.addEventListener('mouseleave', function () {
        this.classList.remove('hovered');
    });
});

// Анимация наведения на услуги
var services = document.querySelectorAll('.service');

services.forEach(function (service) {
    service.addEventListener('mouseenter', function () {
        this.classList.add('hovered');
    });

    service.addEventListener('mouseleave', function () {
        this.classList.remove('hovered');
    });
});

// Получаем ссылку на кнопку "Узнать больше"
var btn = document.querySelector('.btn');

// Получаем ссылку на раздел "О нас"
var aboutSection = document.querySelector('#about');

// Обработчик события для клика на кнопку "Узнать больше"
btn.addEventListener('click', function (event) {
    event.preventDefault(); // Отменяем стандартное поведение ссылки

    // Вычисляем позицию раздела "О нас" относительно верхней границы страницы
    var offsetTop = aboutSection.offsetTop;

    // Прокручиваем страницу до позиции раздела "О нас"
    window.scrollTo({
        top: offsetTop,
        behavior: 'smooth' // Добавляем плавную анимацию прокрутки
    });
});


window.addEventListener("scroll", function () {
    var elements = document.querySelectorAll(".fade-in");

    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        var position = element.getBoundingClientRect().top;
        var windowHeight = window.innerHeight;

        if (position < windowHeight) {
            element.classList.add("show");
        }
    }
});

window.addEventListener("scroll", function () {
    var scrollButton = document.querySelector(".scroll-to-top");
    if (window.scrollY > 200) {
        scrollButton.classList.add("show");
    } else {
        scrollButton.classList.remove("show");
    }
});
document.querySelector(".scroll-to-top").addEventListener("click", function (e) {
    e.preventDefault();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// Подключение скрипта для добавления функционала стрелок
const prevButton = document.querySelector('.slider-prev');
const nextButton = document.querySelector('.slider-next');
const slider = document.querySelector('.delivery-types-slider');

prevButton.addEventListener('click', () => {
  slider.scrollBy({
    left: -300,
    behavior: 'smooth'
  });
});

nextButton.addEventListener('click', () => {
  slider.scrollBy({
    left: 300,
    behavior: 'smooth'
  });
});
                        document.addEventListener("DOMContentLoaded", function () {
                          const closeButton = document.querySelector(".menu__btn"); // Получаем кнопку-крестик
                          closeButton.addEventListener("click", closeMenu); // Добавляем обработчик события для клика по кнопке-крестику
                        });

 // Закрытие меню при клике на кнопку-крестик
function closeMenu(event) {
    const menuToggle = document.getElementById("menu__toggle");
    menuToggle.checked = false;
    event.preventDefault(); // Предотвращение стандартного поведения для элемента
  }
  