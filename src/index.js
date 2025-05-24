//LONDON
setInterval(function () {
  let londonElement = document.getElementById("london");
  londonDateElement = londonElement.querySelector(".date");
  londonTimeElement = londonElement.querySelector(".time");

  londonDateElement.innerHTML = moment().format("MMMM Do, YYYY ");
  londonTimeElement.innerHTML = moment()
    .tz("Europe/London")
    .format("H:mm:ss  [<small>]A[</small>]");
}, 1000);

setInterval(function () {
  let melbourneElement = document.getElementById("melbourne");
  melbourneDateElement = melbourneElement.querySelector(".date");
  melbourneTimeElement = melbourneElement.querySelector(".time");

  melbourneDateElement.innerHTML = moment().format("MMMM Do, YYYY ");
  melbourneTimeElement.innerHTML = moment()
    .tz("Australia/Melbourne")
    .format("H:mm:ss [<small>]A[</small>]");
});
