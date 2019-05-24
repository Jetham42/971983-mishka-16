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
