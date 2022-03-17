var NewsAPI = function (config) {
  var newsAPI = {
  };

  var getQueryString = function () {
    var base = "https://mvision-us.moodmedia.com/";
    return base + "feeds/news/main";
  };

  newsAPI.get2 = function () {
    
    //return new Promise(function (resolve, reject) {
      newsXHR2(); //resolve, reject);
    //});
  };

  newsAPI.get = function () {
    return new Promise(function (resolve, reject) {
      newsXHR(resolve, reject);
    });
  };

  var newsXHR2 = function () //resolve, reject) 
  {
    var api = getQueryString();
    alert(api);
    var xhttp = new XMLHttpRequest();
    xhttp.open('GET', api, false);
    xhttp.send();
    var result = JSON.parse(xhttp.responseText);
    var feed = {
      news: result
    };
    alert(result);
    return feed;
    //resolve(feed);                        
  };

  var newsXHR = function (resolve, reject) {
    var api = getQueryString();
    var xhttp = new XMLHttpRequest();
    xhttp.timeout = 10000;

    xhttp.onreadystatechange = function () {
       if (xhttp.readyState === 4) 
       {
         if (xhttp.status === 200 || xhttp.status === 0) 
         {
        var result = JSON.parse(xhttp.responseText);
        var feed = {
          news: result
        };
        resolve(feed);
        } 
      }
       if (xhttp.readyState === 4) 
       {
         if (xhttp.status === 200 || xhttp.status === 0) 
         {
           var err = "[NewsAPI] Error: " + xhttp.status;
            console.log(err);
            reject(err);
          }
      }
    };

    xhttp.ontimeout = function() {
      var err = "[NewsAPI] Timeout: " + xhttp.status;
      console.log(err);
      reject(err);
    };

    xhttp.open('GET', api);
    xhttp.send();
  };

  return newsAPI;
};
