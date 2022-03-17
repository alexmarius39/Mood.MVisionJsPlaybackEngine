var WeatherAPI = function (config) {
  var weatherAPI = {
    base: config.base ? config.base : "https://mvision-us.moodmedia.com/",
    endpoint: config.endpoint ? config.endpoint : "feeds/weather/forecastio",
    templateName: config.templateName ? config.templateName : "MVisionWeatherAPI",
    zipcode: config.zipcode ? config.zipcode : "78703",
    units: config.units ? config.units : "F",
    locationOverride: config.locationOverride,
    weatherType: config.weatherType ? config.weatherType : "daily",
    forceXHR: config.forceXHR ? config.forceXHR : false
  };

  var localStorageHash = function () { return weatherAPI.templateName + weatherAPI.weatherType + weatherAPI.zipcode + weatherAPI.units; };

  var getQueryString = function () {
    var api = weatherAPI.base + weatherAPI.endpoint + "/" + weatherAPI.weatherType + "/" + weatherAPI.zipcode + "/" + weatherAPI.units;
    return api;
  };

  var shouldUpdate = function (timestamp) {
    // After 10 minutes check for new data, but use cached data if server can't be reached
    var diff = (Math.abs(new Date() - new Date(timestamp)) / 1000) / 60;
    return diff >= 10;
  };

  var isExpired = function (timestamp) {
    // After two hours don't use cached data anymore
    var diff = (Math.abs(new Date() - new Date(timestamp)) / 1000) / 60;
    return diff >= 120;
  };

  weatherAPI.get = function () {
    return new Promise(function (resolve, reject) {
            return weatherXHR().then(resolve).catch(reject);
      var hasWeatherData = localStorage.getItem(localStorageHash());
      if (typeof (Storage) !== "undefined" && hasWeatherData && !weatherAPI.forceXHR) {
        var localData = JSON.parse(localStorage[localStorageHash()]);
        // Check to see if cached data is still fresh
        if (shouldUpdate(localData.timestamp)) {
          // Cached data is no longer fresh, try to get new data
          weatherXHR().then(
            resolve
          ).catch(function (error) {
            if (!isExpired(localData.timestamp)) {
              console.log('[WeatherAPI] XHR error, using cached data');
              resolve({
                weather: localData.weather,
                forecast: localData.forecast,
                city: weatherAPI.locationOverride ? weatherAPI.locationOverride : localData.city
              });
            } else {
              // Cached data is expired, reject
              reject(error);
            }
          });
        } else {
          // Cached data is still fresh, don't make a request
          resolve({
            weather: localData.weather,
            forecast: localData.forecast,
            city: weatherAPI.locationOverride ? weatherAPI.locationOverride : localData.city
          });
        }
      } else {
        weatherXHR().then(resolve).catch(reject);
      }
    });
  };

  var weatherXHR = function () {
    return new Promise(function (resolve, reject) {
      var api = getQueryString();
      var xhttp = new XMLHttpRequest();

     /*
      xhttp.timeout = 10000;

      xhttp.onreadystatechange = function () {
        if (xhttp.readyState === 4 && xhttp.status === 200) {
          var result = JSON.parse(xhttp.responseText);
          if (typeof result === "object") {
            var feed = {
              weather: result,
              forecast: weatherAPI.weatherType === "current" ? result : result.forecast,
              city: weatherAPI.locationOverride ? weatherAPI.locationOverride : result.location.shorthand
            };

            localStorage.setItem(localStorageHash(), JSON.stringify({
              weather: feed.weather,
              forecast: feed.forecast,
              city: feed.city,
              timestamp: new Date()
            })
            );
            resolve(feed);
          } else {
            reject(result);
          }
        }
        if (xhttp.readyState === 4 && xhttp.status !== 200) {
          var err = "[WeatherAPI] Error: " + xhttp.status;
          console.log(err);
          reject(err);
        }
      };

      xhttp.ontimeout = function () {
        var err = "[WeatherAPI] Timeout: " + xhttp.status;
        console.log(err);
        reject(err);
      };
      */

      xhttp.open('GET', api, false);
      xhttp.send();

          var result = JSON.parse(xhttp.responseText);
          if (typeof result === "object") {
            var feed = {
              weather: result,
              forecast: weatherAPI.weatherType === "current" ? result : result.forecast,
              city: weatherAPI.locationOverride ? weatherAPI.locationOverride : result.location.shorthand
            };

            localStorage.setItem(localStorageHash(), JSON.stringify({
              weather: feed.weather,
              forecast: feed.forecast,
              city: feed.city,
              timestamp: new Date()
            })
            );
            resolve(feed);
          } else {
            reject(result);
          }
    });
  };


  var weatherXHR2 = function () {
    return new Promise(function (resolve, reject) {
      var api = getQueryString();
      var xhttp = new XMLHttpRequest();
      xhttp.timeout = 10000;

      xhttp.onreadystatechange = function () {
        if (xhttp.readyState === 4 && xhttp.status === 200) {
          var result = JSON.parse(xhttp.responseText);
          if (typeof result === "object") {
            var feed = {
              weather: result,
              forecast: weatherAPI.weatherType === "current" ? result : result.forecast,
              city: weatherAPI.locationOverride ? weatherAPI.locationOverride : result.location.shorthand
            };

            localStorage.setItem(localStorageHash(), JSON.stringify({
              weather: feed.weather,
              forecast: feed.forecast,
              city: feed.city,
              timestamp: new Date()
            })
            );
            resolve(feed);
          } else {
            reject(result);
          }
        }
        if (xhttp.readyState === 4 && xhttp.status !== 200) {
          var err = "[WeatherAPI] Error: " + xhttp.status;
          console.log(err);
          reject(err);
        }
      };

      xhttp.ontimeout = function () {
        var err = "[WeatherAPI] Timeout: " + xhttp.status;
        console.log(err);
        reject(err);
      };

      xhttp.open('GET', api);
      xhttp.send();
    });
  };

  return weatherAPI;
};
