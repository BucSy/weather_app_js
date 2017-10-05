var city = "";
$(document).ready(function() {
  $('#left').hide(0);
  $('#right').hide(0);
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
        window.windspeed = adat.wind.speed;
        console.log(winddeg);
        windDegreeCalc();
        windSpeedCalc();
        $('#left').show(1000);
        $('#right').show(1000);
      });
      function windDegreeCalc() {
          console.log(winddeg);
          if (winddeg == 0) {
            $('#windDegreeSpan').html('<i class="wi wi-wind towards-0-deg"></i>');
          } else if (winddeg != 0 && winddeg <= 23) {
            $('#windDegreeSpan').html('<i class="wi wi-wind towards-23-deg"></i>');
          } else if (winddeg >= 24 && winddeg <=45) {
            $('#windDegreeSpan').html('<i class="wi wi-wind towards-45-deg"></i>');
          } else if (winddeg >= 46 && winddeg <=68) {
            $('#windDegreeSpan').html('<i class="wi wi-wind towards-68-deg"></i>');
          } else if (winddeg >= 69 && winddeg <= 90) {
            $('#windDegreeSpan').html('<i class="wi wi-wind towards-90-deg"></i>');
          } else if (winddeg >= 91 && winddeg <= 113) {
            $('#windDegreeSpan').html('<i class="wi wi-wind towards-113-deg"></i>');
          } else if (winddeg >= 114 && winddeg <= 135) {
            $('#windDegreeSpan').html('<i class="wi wi-wind towards-135-deg"></i>');
          } else if (winddeg >= 136 && winddeg <= 158) {
            $('#windDegreeSpan').html('<i class="wi wi-wind towards-158-deg"></i>');
          } else if (winddeg >= 159 && winddeg <= 180) {
            $('#windDegreeSpan').html('<i class="wi wi-wind towards-180-deg"></i>');
          } else if (winddeg >= 181 && winddeg <= 203) {
            $('#windDegreeSpan').html('<i class="wi wi-wind towards-203-deg"></i>');
          } else if (winddeg >= 204 && winddeg <= 225) {
            $('#windDegreeSpan').html('<i class="wi wi-wind towards-225-deg"></i>');
          } else if (winddeg >= 226 && winddeg <= 248) {
            $('#windDegreeSpan').html('<i class="wi wi-wind towards-248-deg"></i>');
          } else if (winddeg >= 249 && winddeg <= 270) {
            $('#windDegreeSpan').html('<i class="wi wi-wind towards-270-deg"></i>');
          } else if (winddeg >= 271 && winddeg <= 293) {
            $('#windDegreeSpan').html('<i class="wi wi-wind towards-293-deg"></i>');
          } else if (winddeg >= 294 && winddeg <= 313) {
            $('#windDegreeSpan').html('<i class="wi wi-wind towards-313-deg"></i>');
          } else if (winddeg >= 314 && winddeg <= 336) {
            $('#windDegreeSpan').html('<i class="wi wi-wind towards-336-deg"></i>');
          } else if (winddeg >= 337) {
            $('#windDegreeSpan').html('<i class="wi wi-wind towards-336-deg"></i>');
          }
      };
      function windSpeedCalc() {
        console.log(windspeed);
        if (windspeed == 0) {
          $('#windSpeedSpan').html('<i class="wi wi-wind-beaufort-0"></i>');
        } else if (windspeed >= 1 && windspeed < 2) {
          $('#windSpeedSpan').html('<i class="wi wi-wind-beaufort-1"></i>');
        } else if (windspeed >= 2 && windspeed < 3) {
          $('#windSpeedSpan').html('<i class="wi wi-wind-beaufort-2"></i>');
        } else if (windspeed >= 3 && windspeed < 4) {
          $('#windSpeedSpan').html('<i class="wi wi-wind-beaufort-3"></i>');
        } else if (windspeed >= 4 && windspeed < 5) {
          $('#windSpeedSpan').html('<i class="wi wi-wind-beaufort-4"></i>');
        } else if (windspeed >= 5 && windspeed < 6) {
          $('#windSpeedSpan').html('<i class="wi wi-wind-beaufort-5"></i>');
        } else if (windspeed >= 6 && windspeed < 7) {
          $('#windSpeedSpan').html('<i class="wi wi-wind-beaufort-6"></i>');
        } else if (windspeed >= 7 && windspeed < 8) {
          $('#windSpeedSpan').html('<i class="wi wi-wind-beaufort-7"></i>');
        } else if (windspeed >= 8 && windspeed < 9) {
          $('#windSpeedSpan').html('<i class="wi wi-wind-beaufort-8"></i>');
        } else if (windspeed >= 9 && windspeed < 10) {
          $('#windSpeedSpan').html('<i class="wi wi-wind-beaufort-9"></i>');
        } else if (windspeed >= 10 && windspeed < 11) {
          $('#windSpeedSpan').html('<i class="wi wi-wind-beaufort-10"></i>');
        } else if (windspeed >= 11 && windspeed < 12) {
          $('#windSpeedSpan').html('<i class="wi wi-wind-beaufort-11"></i>');
        } else if (windspeed >= 12 && windspeed < 13) {
          $('#windSpeedSpan').html('<i class="wi wi-wind-beaufort-12"></i>');
        }
      };
    });
});
