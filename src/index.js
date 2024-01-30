function displayHoliday(response) {
  new Typewriter("#holiday", {
    strings: response.data.answer,
    autoStart: true,
    cursor: "",
    delay: 1,
  });
}

function generateHoliday(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "2fe0035acto21f1ea33794b41270a58f";
  let prompt = `Generate a travel itinerary for ${instructionsInput.value}`;
  let context =
    "Always display a HTML title of the city and country that is big, bold and on its own line. You are a travel expert who loves providing quick days out with food suggestions. Generate a short brief that is only 3 lines about what the country has to offer and is not bold. After the description provide the user with what they can do for 3 days in the city/country in bullet points with a short description that is easy to read. Put the description as its own paragraph. Make the days bold and present them on their own line as titles with the activities following in bullet points. Please do not state the words title, description or anything with plan/itinerary. Only have one h1. Please finish sentences. Days have to be h2. You must be consistent and present the same layout every time.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let holidayElement = document.querySelector("#holiday");
  holidayElement.classList.remove("hidden");
  new Typewriter("#holiday", {
    strings: ["⏳ Preparing your itinerary"],
    autoStart: true,
    delay: 100,
    loop: true,
    pauseFor: 1000,
  });

  axios.get(apiUrl).then(displayHoliday);
}

let travelFormElement = document.querySelector("#travel-generator-form");
travelFormElement.addEventListener("submit", generateHoliday);
