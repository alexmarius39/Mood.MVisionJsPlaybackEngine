/**
 * :: SRT BRAVO ::
 *
 *  @description This demo shows....
 *
 *  @author --@samsung.com
 */

var _LOGS = null,
  _LOGS_CONT = null,
  tvKey;

var Main = {};
var downloadRequest;
var counter = 0;

var dlList = [
  "https://www.w3schools.com/bootstrap/imgdefault.jpg",
  "https://www.w3schools.com/css/paris.jpg",
  "https://www.w3schools.com/bootstrap/bs_themes.jpg",
  "https://www.w3schools.com/w3images/lights.jpg",
  "https://www.w3schools.com/w3images/nature.jpg",
  "https://www.w3schools.com/w3images/fjords.jpg"
];

/**
 * This function is executed when the document is loaded, its function is to initialize everything necesary to the demo
 */
Main.init = function() {
  _LOGS = document.getElementById("logs");
  _LOGS_CONT = document.getElementById("logs-container");
  Main.registerKeys();
  Main.listenKeys();
  log("Init loaded");
};

Main.registerKeys = function() {
  tvKey = tizen.tvinputdevice.getSupportedKeys();
  for (var constant in tvKey) {
    tizen.tvinputdevice.registerKey(tvKey[constant].name);
  }
};

Main.listenKeys = function() {
  document.addEventListener("keydown", function(e) {
    switch (e.keyCode) {
      case 48: //ZERO
        Main.clearLogs();
        break;
      case 49: //ONE
        Main.startDownload()
        break;
      //log scroll up/down
      case 38: //UP
        e.preventDefault();
        _LOGS.parentElement.scrollTop = _LOGS.parentElement.scrollTop - 20;
        break;
      case 40: //Down
        e.preventDefault();
        _LOGS.parentElement.scrollTop = _LOGS.parentElement.scrollTop + 20;
        break;
      case 10009: //RETURN button
        tizen.application.getCurrentApplication().exit();
        break;
      default:
        log("Key code : " + e.keyCode);
        break;
    }
  });
};

/**
 * Obtain the Capacity -  AvailableCapacity - UsedCapacity
 */
Main.startDownload = function(){
    try{
      // log("Application Size: " + tizen.application.getAppInfo(null).size);
      tizen.systeminfo.getPropertyValue("STORAGE", onSuccessCallback, onErrorCallback);
      urlRequest(dlList[counter]);
    }catch(e){
    	log( e.toString() );
    	counter++;
    	if (counter == dlList.length) counter = 0;
    	Main.startDownload()
    }
}

function onErrorCallback(error) {
    log("Get Storages Not supported: " + error.message);
}
function onSuccessCallback(m) {
     for(var i=0; i < m.units.length; i++){
        log('GetTotalMemory: ' + m.units[i].capacity);
        log('Available Memory: ' + m.units[i].availableCapacity);
        log('Used Memory: ' + (m.units[i].capacity - m.units[i].availableCapacity));
        document.getElementById("total").innerHTML = m.units[i].capacity;
        document.getElementById("free").innerHTML = m.units[i].availableCapacity;
        document.getElementById("used").innerHTML = ((m.units[i].capacity - m.units[i].availableCapacity));
     }
}

/**
 * Download API
 */
function urlRequest(url) {
	log("Starting Download. URL Requested: " + url);
	var listener = {
			onprogress: function(id, receivedSize, totalSize) {
			   log('Received with id: ' + id + ', ' + receivedSize + '/' + totalSize);
		  },
		  onpaused: function(id) {
			  log('Paused with id: ' + id);
		  },
		  oncanceled: function(id) {
			  log('Canceled with id: ' + id);
		  },
		  oncompleted: function(id, fullPath) {
			  log('Completed with id: ' + id + ', full path: ' + fullPath);
        setTimeout(function(){
          counter++;
          if (counter == dlList.length) counter = 0;
          Main.startDownload();
        }, 5000)
		  },
		  onfailed: function(id, error) {
			  log('Failed with id: ' + id + ', error name: ' + error.name + ' msg: ' + error.message + ' file: ' + url);
        setTimeout(function(){
          counter++;
          if (counter == dlList.length) counter = 0;
          Main.startDownload();
        }, 5000)
		  },
		  onerror: function(id, error) {
			  log('Failed with id: ' + id + ', error name: ' + error.name + ' msg: ' + error.message + ' file: ' + url);
		  }
	  };
	downloadRequest = new tizen.DownloadRequest(url, 'wgt-private');
	var downloadId = tizen.download.start(downloadRequest, listener);
}


/**************    LOGS function   *******************/
var scrollbox = {};
var logCount = 0;
/**
 * Adds text to a UI element -  NOTE: THIS FUNCTION SHOULD NOT BE USED ON PRODUCTION APPS, it is only for visual demonstration of what is happening
 * @description This function is encharged of manage the logs in the screen
 * @param {string} str log text
 * @param {string} op optional parameter, "e" or "error" is expected.
 */
function log(str, op) {
  "use strict";
  console.log(str);
  logCount = logCount || 0;
  var numStr = ('00000000' + ++logCount).substr(-5);
  var p = document.createElement("p");
  // Add the error class
  if (op == "e" || op == "error") p.className = "error";
  //Print obj
  if(typeof(str) === "object")str = JSON.stringify(str);
  // Log string
  p.innerText = '[' + (new Date().toISOString()) + ' UTC] ' + numStr + " : " + str;
  // Add the text node to "div" logs
  _LOGS.appendChild(p);
  // Max log length
  if (_LOGS.children.length > 1000) _LOGS.removeChild(_LOGS.firstChild);
  //Shows the last element
  _LOGS.parentElement.scrollTop = _LOGS.offsetHeight;
};

/**
 * Clear the screen logs
 */
Main.clearLogs = function() {
  document.getElementById("logs").innerText = "";
  log("Logs cleared!");
};

/**
 * Generic Error handler for uncaught JS errors
 * @param errMsg
 * @param url
 * @param lineNum
 * @returns {boolean}
 */
window.onerror = function handleError(errMsg, url, lineNum) {
  "use strict";
  log('Error Message: ' + errMsg);
  log('  URL: ' + url);
  log('  Line: ' + lineNum);
  return false;
};

window.onload = Main.init;
