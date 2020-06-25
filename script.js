$(document).ready(function () {
    //wire search button
    $("#search-button").on("click", function () {
        var SearchVar = $("#search-value").val();
        weatherSearch(SearchVar);
    })
    //wire search history

    $(".history").on("click", "li", function () {
        weatherSearch($(this).text());
    });
    function makeRow(text) {
        var li = $("<li>").addClass("list-group-item list-group-item-action").text(text);
        $(".history").append(li);
    }
    var history = JSON.parse(window.localStorage.getItem("history")) || [];

    if (history.length > 0) {
        weatherSearch(history[history.length - 1]);
    }
    for (var i = 0; i < history.length; i++) {
        makeRow(history[i]);
    }

    //gener search function
    function weatherSearch(SearchVar) {
        console.log(SearchVar);
        var APIKey = "1b0acfd92c6b981e124abef88b0b0bb1";

        // Here we are building the URL we need to query the database
        var queryURL =
            "https://api.openweathermap.org/data/2.5/weather?q=" + SearchVar + "&appid=" +
            APIKey + "&units=imperial";
        $.ajax({
            url: queryURL,
            method: "GET",
        }).then(function (response) {
            console.log(response);
            if (history.indexOf(SearchVar) === -1) {
                history.push(SearchVar);
                window.localStorage.setItem("history", JSON.stringify(history));

                makeRow(SearchVar);
            }

            $("#today").html("");
            // create the div in order to get a better layout.
            var localtime = moment().subtract(10, 'days').calendar();
            console.log(localtime);
            var nameAndDay = $("<h2>").addClass("card-text").text(response.name + " (" + localtime + ")");

            var card = $("<div>").addClass("card");
            var cardBody = $("<div>").addClass("card-body");
            var temp = $("<p>").addClass("card-text").text("Temperature: " + response.main.temp + " \u2109");
            var humi = $("<p>").addClass("card-text").text("Humidity: " + response.main.humidity + " %");
            var windSpeed = $("<p>").addClass("card-text").text("Wind Speed: " + response.wind.speed + " MPH");

            cardBody.append(nameAndDay);
            cardBody.append(temp);
            cardBody.append(humi);
            cardBody.append(windSpeed);
            card.append(cardBody);
            $("#today").append(card);


        })

    }
    //get focast for 5 days
    function getForecast(event) {

    event.preventDefault();
    var city = $("#city-input").val();

    var APIKey = "1b0acfd92c6b981e124abef88b0b0bb";

    // Here we are building the URL we need to query the database
    var queryURL =
      "https://api.openweathermap.org/data/2.5/forecast?q=" +
      city +
      "&appid=" +
      APIKey +
      "&units=imperial";

    $.ajax({
      url: queryURL,
      method: "GET",
    }).then(function (response) {
      console.log(response);
      var forecastDays = [];
      forecastDays.push(response.list[0]);
      forecastDays.push(response.list[8]);
      forecastDays.push(response.list[16]);
      forecastDays.push(response.list[24]);
      forecastDays.push(response.list[32]);

      console.log(forecastDays);

      for (var i = 0; i < forecastDays.length; i += 1) {
        var forecastContainer = $("<div>").addClass("forecast-day");
        var dateEl = $("<div>").text(forecastDays[i].dt);
        var iconEl = $("<div>").text("icon id: " + forecastDays[i].weather[0].icon);
        var tempEl = $("<div>").text("Temp: " + forecastDays[i].main.temp + " °F");
        var humidityEl = $("<div>").text("Humidity: " + forecastDays[i].main.humidity + "%");
        
        forecastContainer.append(dateEl, iconEl, tempEl, humidityEl);
        $("#forecast").append(forecastContainer);
      }
    });
  }


    //function get uvindex

    function getUV() {




    }


})