// Foursquare API Info
const clientId = '1234';
const clientSecret = 'clientSecret';
const foursquareUrl = 'https://api.foursquare.com/v2/venues/search';

// OpenWeather Info
const openWeatherKey = '89f509647b25b6e537ff68991de1669e';
const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather';

// Page Elements
const $input = $('#city');
const $submit = $('#button');
const $destination = $('#destination');
const $container = $('.container');
const $venueDivs = [$("#venue1"), $("#venue2"), $("#venue3"), $("#venue4")];
const $weatherDiv = $("#weather1");
const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// Add AJAX functions here:
const getVenues = async () => {
  const city = $input.val();
  const limit = 10;
  const urlParams = new URLSearchParams({
    client_id: clientId,
    client_secret: clientSecret,
    v: '20230101', // API version
    near: city,
    limit: limit
  });
  const url = `${foursquareUrl}?${urlParams}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      console.log('Response object:', response);
      throw new Error(`HTTP error ${response.status}`);
    }
    const data = await response.json();
    const venues = data.response.venues;
    return venues;
  } catch (error) {
    console.error('Error getting venues:', error);
    throw error;
  }
};

const getForecast = async () => {
  const apiKey = openWeatherKey;
  const city = $input.val();

  try {
    const urlToFetch = `${weatherUrl}?q=${city}&APPID=${apiKey}&units=metric`;
    const response = await fetch(urlToFetch);

    if (response.ok) {
      const jsonResponse = await response.json();
      console.log('JSON Response:', jsonResponse);
      return jsonResponse;
    }
  } catch (error) {
    console.error('Error getting forecast:', error);
  }
};


const newVenue = {
  name: "Eiffel Tower",
  image: "https://example.com/icons/eiffel-tower.png",
  location: {
    address: "Champ de Mars, 5 Avenue Anatole France",
    city: "Paris",
    country: "France"
  }
};

const newVenueHTML = `
<div class="venue" id="venue4">
  <h2>${newVenue.name}</h2>
  <img class="venueimage" src="${newVenue.image}" />
  <h3>Address:</h3>
  <p>${newVenue.location.address}</p>
  <p>${newVenue.location.city}</p>
  <p>${newVenue.location.country}</p>
</div>
`;



// Render functions
const renderVenues = (venues) => {
  $venueDivs.forEach(($venue, index) => {
    const venue = venues[index];

    // 28. Create the venueIcon const to save the value of the venue icon object
    const venueIcon = venue.categories[0].icon;

    // 29. Construct the full source URL for the venue icon
    const venueImgSrc = `${venueIcon.prefix}bg_64${venueIcon.suffix}`;

    let venueContent = `
      <img src="${venueImgSrc}" alt="Venue Icon" class="venue-icon">
      <h2>${venue.name}</h2>
      <p>${venue.categories[0].name}</p>
      <p>${venue.location.address}, ${venue.location.city}, ${venue.location.state}</p>
    `;

    $venue.html(venueContent);
  });

  $destination.html(`<h2>${venues[0].location.city}</h2>`);
};

const renderForecast = (weatherData) => {
  const { name, weather, main } = weatherData;
  const { description, icon } = weather[0];
  const { temp, humidity } = main;

  const weatherContent = `
    <div class="weather" id="weather1">
      <h2>${name}</h2>
      <img src="http://openweathermap.org/img/w/${icon}.png" alt="${description}">
      <p>${description}</p>
      <p>Temperature: ${temp}°C</p>
      <p>Humidity: ${humidity}%</p>
    </div>
  `;

  $weatherDiv.html(weatherContent);
};

const venueName = "Eiffel Tower";
const venueLocation = {
  address: "Champ de Mars, 5 Avenue Anatole France",
  city: "Paris",
  country: "France"
};
const venueImageSrc = "https://example.com/icons/eiffel-tower.png";


const venueContent = createVenueHTML(venueName, venueLocation, venueImageSrc);

const venuesSection = document.getElementById('venues');
venuesSection.innerHTML += venueContent;

const executeSearch = () => {
  $venueDivs.forEach(venue => venue.empty());
  $weatherDiv.empty();
  $destination.empty();
  $container.css("visibility", "visible");
  getVenues().then(renderVenues);
  getForecast().then(renderForecast);
  return false;
};


/*const getForecast = async (city) => {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=YOUR_API_KEY`);
  const forecast = await response.json();
  return forecast;
};

const renderForecast = (forecast) => {
  const weatherContainer = document.getElementById('weather-content');
  let forecastHTML = '';

  forecast.list.forEach((day) => {
    forecastHTML += createWeatherHTML(day);
  });

  weatherContainer.innerHTML = forecastHTML;
};

const executeSearch = async () => {
  const city = document.getElementById('city').value;
  const venues = await getVenues(city);
  const forecast = await getForecast(city)
    .then((forecast) => {
      return renderForecast(forecast);
    });

  renderVenues(venues);
};

document.getElementById('search').addEventListener('click', executeSearch);*/





/*const executeSearch = () => {
  const searchTerm = document.getElementById('search').value;

  getVenues(searchTerm)
    .then(venues => {
      renderVenues(venues);
      return getForecast(searchTerm);
    })
    .then(forecast => {
      renderForecast(forecast);
    })
    .catch(error => {
      console.log(error);
    });
};*/

$submit.click(executeSearch);