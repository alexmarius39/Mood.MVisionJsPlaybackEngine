var WeatherRenderer = function (config) {
  var weatherRenderer = {
    templateName: config.templateName ? config.templateName : "MVisionWeatherTemplate",
    parent: config.parent,
    themeName: config.themeName ? config.themeName : "default",
    daily: config.data.daily ? config.data.daily : null,
    current: config.data.current ? config.data.current : null,
    renderModes: config.renderModes ? config.renderModes :
      config.data.daily ? ["daily"] :
        config.data.current ? ["current"] :
          null,
    slideDuration: config.slideDuration ? config.slideDuration :
      config.renderModes.length > 1 ? 10 : null,
    units: config.units ? config.units : "",
    showUnits: config.showUnits != null ? config.showUnits : true,
    showDegrees: config.showDegrees != null ? config.showDegrees : true
  };

  var intervals = {
    daily: null,
    current: null
  };

  var slideshowTimeout;

  var renderModeIdx = 0;

  weatherRenderer.render = function () {
    switch (weatherRenderer.renderModes.slice().sort().join(" ")) {
      case "combined": weatherRenderer.renderCombined();
        break;
      case "current daily": weatherRenderer.renderSlideshow();
        break;
      case "current": weatherRenderer.renderCurrent();
        break;
      case "daily": weatherRenderer.renderDaily();
        break;
    }
  };

  weatherRenderer.renderSlideshow = function () {
    weatherRenderer.parent.innerHTML = '';
    weatherRenderer['render' + toTitleCase(weatherRenderer.renderModes[renderModeIdx])]();
    renderModeIdx++;
    if (renderModeIdx == weatherRenderer.renderModes.length) renderModeIdx = 0;
    slideshowTimeout = setTimeout(weatherRenderer.renderSlideshow, weatherRenderer.slideDuration * 1000);
  };

  weatherRenderer.stopSlideshow = function () {
    if (slideshowTimeout) window.clearTimeout(slideshowTimeout);
  };

  weatherRenderer.renderCurrent = function () {
    xhr("./themes/" + weatherRenderer.themeName + "/current.html").then(function (data) {
      var currentTemplate = Array.prototype.slice.call(createElementFromString(data));

      var styleNodes = currentTemplate.filter(function (node) {
        return node.nodeName === "LINK";
      });

      currentTemplate = currentTemplate.filter(function (node) {
        return node.nodeName !== "LINK";
      });

      var stylesLoadedPromise = applyStyles(styleNodes);

      var container = currentTemplate[currentTemplate.length - 1];
      var city = container.getElementsByClassName('city')[0];
      var date = container.getElementsByClassName('date')[0];
      var time = container.getElementsByClassName('time')[0];

      var dewpoint = container.getElementsByClassName('dewpoint')[0];
      var humidity = container.getElementsByClassName('humidity')[0];
      var wind = container.getElementsByClassName('wind')[0];
      var barometer = container.getElementsByClassName('barometer')[0];

      var conditions = container.getElementsByClassName('conditions')[0];
      var icon = container.getElementsByClassName('icon')[0];

      var currentTemp = container.getElementsByClassName('current-temp')[0];
      var currentHi = container.getElementsByClassName('current-hi')[0];
      var currentLo = container.getElementsByClassName('current-lo')[0];

      if (dewpoint) dewpoint.innerHTML = weatherRenderer.current.forecast.dew + temperatureSymbols();
      if (humidity) humidity.innerHTML = weatherRenderer.current.forecast.humidity;
      if (wind) wind.innerHTML = weatherRenderer.current.forecast.wind;
      if (barometer) barometer.innerHTML = weatherRenderer.current.forecast.barometer;
      if (conditions) conditions.innerHTML = weatherRenderer.current.forecast.weatherConditions;
      if (currentTemp) currentTemp.innerHTML = weatherRenderer.current.forecast.temp + temperatureSymbols();
      if (currentHi) currentHi.innerHTML = weatherRenderer.current.forecast.high + temperatureSymbols();
      if (currentLo) currentLo.innerHTML = weatherRenderer.current.forecast.low + temperatureSymbols();

      if (icon) icon.classList.add('weather-' + weatherRenderer.current.forecast.weatherConditionsIcon.toLowerCase());
      if (city) city.innerHTML = weatherRenderer.current.city;
      if (date) date.innerHTML = getWeekday() + ", " + getCurrentDate();
      if (time) time.innerHTML = getTime();

      if (intervals.current) clearInterval(intervals.current);
      intervals.current = setInterval(function () {
        if (time) time.innerHTML = getTime();
      }, 1000);

      stylesLoadedPromise.then(function () {
        forEachNode(currentTemplate, function (currentTemplateNode) {
          weatherRenderer.parent.appendChild(currentTemplateNode);
        });

        setTimeout(dynamicResize, 10);

        execCustomFn('renderCurrent', {
          weatherRenderer: weatherRenderer,
          container: container,
          dewpoint: dewpoint,
          humidity: humidity,
          wind: wind,
          barometer: barometer,
          currentTemp: currentTemp,
          currentHi: currentHi,
          currentLo: currentLo,
          city: city,
          date: date,
          time: time
        });
      });
    });
  };

  weatherRenderer.renderDaily = function () {
    xhr("./themes/" + weatherRenderer.themeName + "/daily.html").then(function (data) {
      var dailyTemplate = Array.prototype.slice.call(createElementFromString(data));

      var styleNodes = dailyTemplate.filter(function (node) {
        return node.nodeName === "LINK";
      });

      dailyTemplate = dailyTemplate.filter(function (node) {
        return node.nodeName !== "LINK";
      });

      var stylesLoadedPromise = applyStyles(styleNodes);

      var container = dailyTemplate[dailyTemplate.length - 1];
      var items = container.getElementsByClassName('item');

      var city = container.getElementsByClassName('city')[0];
      var date = container.getElementsByClassName('date')[0];
      var time = container.getElementsByClassName('time')[0];

      forEachNode(items, function (item, idx) {
        var day = item.getElementsByClassName('day')[0];
        var hi = item.getElementsByClassName('hi')[0];
        var lo = item.getElementsByClassName('lo')[0];
        var temp = item.getElementsByClassName('temp')[0];
        var icon = item.getElementsByClassName('icon')[0];
        var conditions = item.getElementsByClassName('conditions')[0];

        if (day) day.innerHTML = shortDay(weatherRenderer.daily.forecast[idx].iso8601);
        if (temp) temp.innerHTML = weatherRenderer.daily.forecast[idx].temp + temperatureSymbols();
        if (hi) hi.innerHTML = weatherRenderer.daily.forecast[idx].high + temperatureSymbols();
        if (lo) lo.innerHTML = weatherRenderer.daily.forecast[idx].low + temperatureSymbols();
        //if (icon) icon.classList.add('weather-' + weatherRenderer.daily.forecast[idx].weatherConditionsIcon.toLowerCase());
        if (conditions) conditions.innerHTML = weatherRenderer.daily.forecast[idx].weatherConditions;
      });

      if (city) city.innerHTML = weatherRenderer.daily.city;
      if (date) date.innerHTML = getWeekday() + ", " + getCurrentDate();
      if (time) time.innerHTML = getTime();

      if (intervals.daily) clearInterval(intervals.daily);
      intervals.daily = setInterval(function () {
        if (time) time.innerHTML = getTime();
      }, 1000);

      stylesLoadedPromise.then(function () {
        forEachNode(dailyTemplate, function (dailyTemplateNode) {
          weatherRenderer.parent.appendChild(dailyTemplateNode);
        });

        setTimeout(dynamicResize, 10);

        execCustomFn('renderDaily', {
          weatherRenderer: weatherRenderer,
          container: container,
          items: items,
          city: city,
          date: date,
          time: time
        });
      });
    });
  };

  weatherRenderer.renderCombined = function () {

  };

  var temperatureSymbols = function () {
    var s = "";
    if (weatherRenderer.showDegrees) s += "&deg;";
    if (weatherRenderer.showUnits && weatherRenderer.units !== "") s += weatherRenderer.units;
    return s;
  };

  var applyStyles = function (styleNodes) {
    // Returns a promise when all the stylesheets are loaded. This will avoid flash of unstyled content.
    var styleLoadPromises = [];
    styleNodes.forEach(function (styleNode) {
      styleLoadPromises.push(new Promise(function (resolve) {
        var headStyleNodes = Array.prototype.slice.call(document.head.getElementsByTagName('link'));
        var exists = headStyleNodes.some(function (headStyleNode) {
          return headStyleNode.href == styleNode.href;
        });
        if (!exists) {
          styleNode.addEventListener('load', resolve);
          document.head.appendChild(styleNode);
        } else {
          resolve();
        }
      }));
    });
    return Promise.all(styleLoadPromises);
  };

  var getNodeByClassName = function (nodeList, className) {
    return getNodesByClassName(nodeList, className)[0];
  };

  var getNodesByClassName = function (nodeList, className) {
    var items = [];
    forEachNode(nodeList, function (item) {
      if (hasClass(item, className)) items.push(item);
    });
    return items;
  };

  var forEachNode = function (nodeList, fn) {
    [].forEach.call(nodeList, fn);
  };

  var hasClass = function (target, className) {
    return new RegExp('(\\s|^)' + className + '(\\s|$)').test(target.className);
  };

  var toTitleCase = function (s) {
    return s.replace(/\b(\w+)/g, function (m, p) { return p[0].toUpperCase() + p.substr(1).toLowerCase(); });
  };

  var createElementFromString = function (string) {
    var temp = document.createElement('div');
    temp.innerHTML = string;
    return temp.childNodes;
  };

var xhr = function (url) {
    return new Promise(function (resolve, reject) {
      var xhttp = new XMLHttpRequest();
      /*
      xhttp.onreadystatechange = function () {
        if (xhttp.readyState === 4 && xhttp.status === 200) {
          resolve(xhttp.responseText);
        }
        if (xhttp.readyState === 4 && xhttp.status !== 200) {
          var err = "[WeatherAPI] Error: " + xhttp.status;
          console.log(err);
          reject(err);
        }
      };
      */
      xhttp.open('GET', url, false);
      xhttp.send();
      resolve(xhttp.responseText);
    });
  };

  var xhr2 = function (url) {
    return new Promise(function (resolve, reject) {
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (xhttp.readyState === 4 && xhttp.status === 200) {
          resolve(xhttp.responseText);
        }
        if (xhttp.readyState === 4 && xhttp.status !== 200) {
          var err = "[WeatherAPI] Error: " + xhttp.status;
          console.log(err);
          reject(err);
        }
      };
      xhttp.open('GET', url);
      xhttp.send();
    });
  };

  var shortDay = function (dateString) {
    var d = new Date(dateString);
    var weekdays = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
    return weekdays[d.getDay()];
  };

  var getCurrentDate = function () {
    var d = new Date();
    var month = [];
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";
    return month[d.getMonth()] + " " + d.getDate() + ", " + d.getFullYear();
  };

  var getWeekday = function () {
    var d = new Date();
    var weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return weekdays[d.getDay()];
  };

  var getTime = function () {
    var d = new Date();
    // return d.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
    var hours = (d.getHours() % 12 > 0) ? d.getHours() % 12 : 12;
    var minutes = (d.getMinutes() > 9) ? d.getMinutes() : '0' + d.getMinutes();

    return hours + ':' + minutes + ' ' + (d.getHours() < 12 ? 'AM' : 'PM');
  };

  var execCustomFn = function (fnName, arg) {
    if (window.weatherTheme && window.weatherTheme[weatherRenderer.themeName] && window.weatherTheme[weatherRenderer.themeName][fnName]) {
      window.weatherTheme[weatherRenderer.themeName][fnName](arg);
    }
  };

  var dynamicResize = function () {
    var wrapper = weatherRenderer.parent;
    // var weatherWrapper = wrapper.getElementsByClassName(weatherRenderer.themeName)[0];
    var weatherWrapper = wrapper.lastElementChild;

    weatherWrapper.classList.toggle('portrait', wrapper.clientHeight > wrapper.clientWidth);
  };

  return weatherRenderer;
};
