

const cityDataElement = document.getElementById("data-weather");


function toggleList() {
    let locations = document.getElementById("locations");
    if (locations.style.display === "none") {
        locations.style.display = "block";
    } else {
        locations.style.display = "none";
    }
}

// Función para buscar el clima según el país y la ciudad seleccionados
 const  fetchWeather = async()=> {
    let selectedCity = document.getElementById("city").value;
    let cityName = document.getElementById("city")
    cityName = cityName.options[cityName.selectedIndex].text;
    const response = await fetch(`https://dataservice.accuweather.com/currentconditions/v1/${selectedCity}?apikey=cXJo2LYmtQkfjEGtHnTS1x8rC8AoYYZN`);
    let weatherData = await response.json();
    // console.log(weatherData[0])
    // console.log(weatherData[0].Temperature.Metric);
    displayCityData(weatherData[0],cityName);

}
function reset() {
    cityDataElement.innerHTML = "";
}


const displayCityData = async (cityData,cityName) => {

            reset();
            // Create the article element
            let article = document.createElement("article");

            // Create the h3 element and set its text content
            let h3 = document.createElement("h3");
            h3.textContent = cityName;

            let h4 = document.createElement("h4");
            h4.textContent = 'Temperature: ' + cityData.Temperature.Metric.Value + '°C';

            let h4text = document.createElement("h4");
            h4text.textContent = 'Weather: ' + cityData.WeatherText;

            let h4Date = document.createElement("h4");
            h4Date.textContent = 'Local Date: ' + cityData.LocalObservationDateTime;

             // Create the img element, set its src and alt attributes
            let img = document.createElement("img");
            let weatherIcon = cityData.WeatherIcon.toString();
            if (weatherIcon.length < 2) {
                weatherIcon = "0" + weatherIcon;
            }
            
            img.src = `https://developer.accuweather.com/sites/default/files/${weatherIcon}-s.png`;
            
            let moreInfo = document.createElement("a");
            moreInfo.textContent = 'More info';
            moreInfo.href = cityData.Link; 

            article.appendChild(h3);
            article.appendChild(img);
            article.appendChild(h4);
            article.appendChild(h4text);
            article.appendChild(h4Date);
            article.appendChild(moreInfo);
            
           // Append the article element to the templesElement
           cityDataElement.appendChild(article);
};