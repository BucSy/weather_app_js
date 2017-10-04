var city = "";
$(document).ready(function() {
  $.getJSON('http://ip-api.com/json', function(data) {
    city = data.city;
    $("#city").text(data.city);
    console.log(data.city);
  });
  $("#submit").on("click", function(e) {
    e.preventDefault();
      $.getJSON('http://api.openweathermap.org/data/2.5/weather?q=' + city +
      '&units=metric&appid=a635e0cd7234dedd518a542b488c65cd', function dataRequest(adat) {
        $("#temp").text(adat.main.temp);
        $("#windSpeed").text(adat.wind.speed);
        $("#windDegree").text(adat.wind.deg);
        $("#clouds").text(adat.clouds.all + " %");
        window.winddeg = adat.wind.deg;
        console.log(winddeg);
        windDegreeCalc();
      });
      function windDegreeCalc() {
          console.log(winddeg);
          if (winddeg == 0) {
            //icon paste here
          } else if (winddeg != 0 && winddeg <= 23) {
            console.log("wind is more than 0!");
          } else if (winddeg >= 24 && winddeg <=45) {

          } else if (winddeg >= 46 && winddeg <=68) {

          } else if (winddeg >= 69 && winddeg <= 90) {

          } else if (winddeg >= 91 && winddeg <= 113) {

          } else if (winddeg >= 114 && winddeg <= 135) {

          } else if (winddeg >= 136 && winddeg <= 158) {

          } else if (winddeg >= 159 && winddeg <= 180) {

          } else if (winddeg >= 181 && winddeg <= 203) {

          } else if (winddeg >= 204 && winddeg <= 225) {

          } else if (winddeg >= 226 && winddeg <= 248) {

          } else if (winddeg >= 249 && winddeg <= 270) {

          } else if (winddeg >= 271 && winddeg <= 293) {

          } else if (winddeg >= 294 && winddeg <= 313) {

          } else if (winddeg >= 314 && winddeg <= 336) {

          } else if (winddeg >= 337) {
            
          }
      };
    });
});
