function generateHoliday(event) {
  event.preventDefault();

  new Typewriter("#holiday", {
    strings: "Tulum, Mexico has riveting culture",
    autoStart: true,
    cursor: "",
    delay: 1,
  });
}

let travelFormElement = document.querySelector("#travel-generator-form");
travelFormElement.addEventListener("submit", generateHoliday);
