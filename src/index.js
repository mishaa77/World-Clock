//LONDON
setInterval(function () {
  let londonElement = document.getElementById("london");
  if (londonElement) {
    let londonDateElement = londonElement.querySelector(".date");
    let londonTimeElement = londonElement.querySelector(".time");

    londonDateElement.innerHTML = moment().format("MMMM Do, YYYY ");
    londonTimeElement.innerHTML = moment()
      .tz("Europe/London")
      .format("H:mm:ss  [<small>]A[</small>]");
  }
});

//MELBOURNE
setInterval(function () {
  let melbourneElement = document.getElementById("melbourne");
  if (melbourneElement) {
    let melbourneDateElement = melbourneElement.querySelector(".date");
    let melbourneTimeElement = melbourneElement.querySelector(".time");

    melbourneDateElement.innerHTML = moment().format("MMMM Do, YYYY ");
    melbourneTimeElement.innerHTML = moment()
      .tz("Australia/Melbourne")
      .format("H:mm:ss [<small>]A[</small>]");
  }
});

//MULTIPLE CITIES
function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let cityElement = document.querySelector(".city");
  cityElement.innerHTML = `<div >
          <div class="city-name"><h2>${cityName}</h2></div>
         <div class="date" id="date">${cityTime.format("MMMM Do, YYYY")}</div>
         <div class="time">${cityTime.format(
           "H:mm:ss [<small>]A[</small>]"
         )}</div>
      </div>
    </div>`;
}

let citySelect = document.getElementById("cities");
citySelect.addEventListener("change", updateCity);
