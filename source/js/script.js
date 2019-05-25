var menu = document.querySelector(".main-nav__mobile-wrapper");
var menuButton = document.querySelector(".main-nav__button");

var body = document.querySelector("body");
var modal = document.querySelector(".modal");
var modalOpenIndex = document.querySelector(".week-product__buy");
var modalOpenCatalog = document.querySelectorAll(".catalog__link");
var modalClose = document.querySelector(".modal__submit");

var isIndex = true;

menu.classList.remove("no-js");
menuButton.classList.remove("main-nav__button--no-js");

try {
  modalOpenIndex.addEventListener("click", function (evt) {});
} catch (err) {
  isIndex = false;
};

menuButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  menu.classList.toggle("main-nav__mobile-wrapper--open");
  menuButton.classList.toggle("main-nav__button--close");
})

if (isIndex) {
  modalOpenIndex.addEventListener("click", function (evt) {
    evt.preventDefault();
    modal.classList.add("modal--open");
    body.classList.add("blackout");
  });

  ymaps.ready(function () {
    var myMap = new ymaps.Map("map", {
      center: [59.938631, 30.323055],
      zoom: 16,
      controls: []
    }, {
      searchControlProvider: "yandex#search"
    }),

    myPlacemark = new ymaps.Placemark(myMap.getCenter(), false, {
        iconLayout: "default#image",
        iconImageHref: "../img/icon-map-pin.svg",
        iconImageSize: [67, 100],
        iconImageOffset: [-33.5, -100]
    });

    myMap.geoObjects
        .add(myPlacemark);
  });
} else {
  modalOpenCatalog.forEach(function(i) {
    i.addEventListener("click", function (evt) {
      evt.preventDefault();
      modal.classList.add("modal--open");
      body.classList.add("blackout");
    });
  });
};

modalClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  body.classList.remove("blackout");
  modal.classList.remove("modal--open");
});
