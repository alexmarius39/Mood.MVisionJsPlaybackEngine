var NewsRenderer = function (config) {
  var newsRenderer = {
    templateName: config.templateName ? config.templateName : "MVisionNewsTemplate",
    parent: config.parent,
    themeName: config.themeName ? config.themeName : "default",
    categoriesExcluded: config.categoriesExcluded ? config.categoriesExcluded : [],
    blacklist: config.blacklist ? config.blacklist : [],
    blacklistCaseSensitive: config.blacklistCaseSensitive ? config.blacklistCaseSensitive : [],
    randomize: config.randomize ? config.randomize : false,
    slideDuration: config.slideDuration ? config.slideDuration : 3,
    limit: config.limit ? config.limit : null,
    slidesRemaining: config.limit ? config.limit : null,
    loop: config.loop === false ? false : true,
    showWeekday: config.showWeekday === false ? false : true,
    inTransition: config.inTransition,
    outTransition: config.outTransition
  };

  // Sanitizes a string to make it suitable for use in a regex pattern
  var escapeRegExp = function (string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
  };

  newsRenderer.parseNewsItems = function (data) {
    // var start = performance.now();

    if (data.news && Array.isArray(data.news)) data = data.news;

    // Assemble blacklist regex patterns
    var regexes = [];

    newsRenderer.blacklist.forEach(function (word) {
      var startToken = '(^\\W*|\\s\\W*)', endToken = '(\\W*$|\\W*\\s)';

      if (word[0] === '*') {
        startToken = '';
        word = word.slice(1);
      }

      if (word[word.length - 1] === '*') {
        endToken = '';
        word = word.slice(0, word.length - 1);
      }

      regexes.push(RegExp(startToken + escapeRegExp(word) + endToken, 'i'));
    });

    newsRenderer.blacklistCaseSensitive.forEach(function (word) {
      var startToken = '(^\\W*|\\s\\W*)', endToken = '(\\W*$|\\W*\\s)';

      if (word[0] === '*') {
        startToken = '';
        word = word.slice(1);
      }

      if (word[word.length - 1] === '*') {
        endToken = '';
        word = word.slice(0, word.length - 1);
      }

      regexes.push(RegExp(startToken + escapeRegExp(word) + endToken));
    });

    // Filter out excluded categories and blacklisted items
    if (newsRenderer.categoriesExcluded.length > 0 || regexes.length > 0) {
      data = data.filter(function (item) {
        var included = true;

        if (newsRenderer.categoriesExcluded.length > 0) {
          item.category = item.category.filter(function (itemCategory) {
            return !newsRenderer.categoriesExcluded.some(function (category) {
              return category.toLowerCase() === itemCategory.toLowerCase();
            });
          });

          included = item.category.length > 0;
        }

        if (included && regexes.length > 0) {
          for (var r = 0; r < regexes.length; r++) {
            if (regexes[r].test(item.title) || regexes[r].test(item.description)) {
              included = false;
              break;
            }
          }
        }

        return included;
      });
    }

    if (newsRenderer.randomize) data = shuffle(data);

    // console.debug('News renderer data took ' + (performance.now() - start) + ' ms to process.');
    return data;
  };

  newsRenderer.data = newsRenderer.parseNewsItems(config.data);

  var intervals = {
    main: null,
    time: null
  };

  var slideshowTimeout;
  var newsIdx = 0;
  newsRenderer.smartTextField = null;
  newsRenderer.title = null;
  newsRenderer.description = null;
  newsRenderer.category = null;
  newsRenderer.image = null;
  newsRenderer.imageBackground = null;

  newsRenderer.render = function () {
    if (newsRenderer.data && newsRenderer.data.length > 0) {
      if (customFnExists('render')) {
        execCustomFn('render', newsRenderer);
        return;
      } else {
        newsRenderer.renderSlideshow();
      }
    } else {
      throw "[News Renderer] No data provided.";
    }
  };

  newsRenderer.renderSlideshow = function () {
    return new Promise(function (resolve, reject) {
      xhr("./themes/" + newsRenderer.themeName + "/news.html").then(function (data) {
        var template = Array.prototype.slice.call(createElementFromString(data));

        var styleNodes = template.filter(function (node) {
          return node.nodeName === "LINK";
        });

        template = template.filter(function (node) {
          return node.nodeName !== "LINK";
        });

        var stylesLoaded = applyStyles(styleNodes);

        var container = template[template.length - 1];
        var title = container.getElementsByClassName('news-title')[0];
        var description = container.getElementsByClassName('news-description')[0];
        var category = container.getElementsByClassName('news-category')[0];
        var image = container.getElementsByClassName('news-image')[0];
        var imageBackground = container.getElementsByClassName('news-image-background')[0];
        var nextImage = container.getElementsByClassName('news-next-image')[0];
        var nextImageBackground = container.getElementsByClassName('news-next-image-background')[0];
        var date = container.getElementsByClassName('date')[0];
        var time = container.getElementsByClassName('time')[0];
        var animationWrapper = container.getElementsByClassName('animation-wrapper')[0];

        newsRenderer.container = container;
        newsRenderer.title = title;
        newsRenderer.description = description;
        newsRenderer.category = category;
        newsRenderer.image = image;
        newsRenderer.imageBackground = imageBackground;
        newsRenderer.nextImage = nextImage;
        newsRenderer.nextImageBackground = nextImageBackground;
        newsRenderer.animationWrapper = animationWrapper;

        if (newsRenderer.title) newsRenderer.smartTextFieldTitle = new smartTextField(newsRenderer.title, "");
        if (newsRenderer.description) newsRenderer.smartTextFieldDescription = new smartTextField(newsRenderer.description, "");

        forEachNode(template, function (templateNode) {
          newsRenderer.parent.appendChild(templateNode);
        });

        setTimeout(dynamicResize, 10);

        stylesLoaded.then(function () {
          setTimeout(function () {
            if (date) date.innerHTML = (newsRenderer.showWeekday ? getWeekday() + ", " : "") + getCurrentDate();
            if (time) time.innerHTML = getTime();

            if (!intervals.time) {
              intervals.time = setInterval(function () {
                if (time) time.innerHTML = getTime();
              }, 1000);
            }

            newsRenderer.renderSlide(true);
          }, 10);
        });

        resolve();
      }).catch(function (reason) {
        reject(reason);
      });
    });
  };

  newsRenderer.stopSlideshow = function () {
    if (slideshowTimeout) window.clearTimeout(slideshowTimeout);
  };

  newsRenderer.next = function () {
    newsIdx++;
    if (newsIdx === newsRenderer.data.length || (newsRenderer.limit != null && newsIdx === newsRenderer.limit)) {
      if (!newsRenderer.loop) {
        console.log("[News Renderer] Loop set to false. Attempting to end template.");
        if (window.Loader && window.Loader.finished) window.Loader.finished();
        return false;
      }
      newsIdx = 0;
    }
    return true;
  };

  newsRenderer.renderSlide = function (firstLoad) {
    var item = newsRenderer.data[newsIdx];
    if (newsRenderer.slidesRemaining) newsRenderer.slidesRemaining -= 1;
    var nextItem = newsRenderer.data[newsIdx + 1 < newsRenderer.data.length ? newsIdx + 1 : 0];

    if (firstLoad) {
      if (newsRenderer.inTransition) newsRenderer.animationWrapper.classList.add(newsRenderer.inTransition);

      newsRenderer.fillNewsElements(item, nextItem);

      if (!newsRenderer.next()) return;

      slideshowTimeout = setTimeout(newsRenderer.renderSlide, newsRenderer.slideDuration * 1000);
      return;
    }

    if (newsRenderer.inTransition) newsRenderer.animationWrapper.classList.remove(newsRenderer.inTransition);
    if (newsRenderer.outTransition) newsRenderer.animationWrapper.classList.add(newsRenderer.outTransition);

    setTimeout(function () {
      if (newsRenderer.outTransition) newsRenderer.animationWrapper.classList.remove(newsRenderer.outTransition);
      if (newsRenderer.inTransition) newsRenderer.animationWrapper.classList.add(newsRenderer.inTransition);

      newsRenderer.fillNewsElements(item, nextItem);

      if (!newsRenderer.next()) return;

      slideshowTimeout = setTimeout(newsRenderer.renderSlide, newsRenderer.slideDuration * 1000);
    }, 1000);
  };

  var genericCategories = ['AllStories', 'USNews'];

  newsRenderer.fillNewsElements = function (item, nextItem) {
    if (newsRenderer.image) newsRenderer.image.src = "";
    if (newsRenderer.imageBackground) newsRenderer.imageBackground.style.backgroundImage = 'none';
    if (newsRenderer.nextImage) newsRenderer.nextImage.src = "";
    if (newsRenderer.nextImageBackground) newsRenderer.nextImageBackground.style.backgroundImage = 'none';

    if (newsRenderer.category) {
      // If possible, choose a more specific category name
      var category = item.category[0];

      for (var c = 1; c < item.category.length; c++) {
        if (genericCategories.indexOf(item.category[c]) === -1) {
          category = item.category[c];
          break;
        }
      }

      newsRenderer.category.textContent = category
        .replace('AllStories', 'All Stories')
        .replace('USNews', 'US News');
    }

    if (!newsRenderer.smartTextFieldTitle) {
      if (newsRenderer.title) newsRenderer.smartTextFieldTitle = new smartTextField(newsRenderer.title, item.title);
    }
    else {
      newsRenderer.smartTextFieldTitle.setText(item.title);
    }

    if (!newsRenderer.smartTextFieldDescription) {
      if (newsRenderer.description) newsRenderer.smartTextFieldDescription = new smartTextField(newsRenderer.description, item.description);
    }
    else {
      newsRenderer.smartTextFieldDescription.setText(item.description);
    }

    try {
      if (newsRenderer.image) newsRenderer.image.src = item.image ? item.image : '';
      if (newsRenderer.imageBackground) newsRenderer.imageBackground.style.backgroundImage = item.image ? 'url("' + item.image + '")' : 'none';

      if (nextItem && newsRenderer.nextImage) newsRenderer.nextImage.src = nextItem.image ? nextItem.image : '';
      if (nextItem && newsRenderer.nextImageBackground) newsRenderer.nextImageBackground.style.backgroundImage = nextItem.image ? 'url("' + nextItem.image + '")' : 'none';
    } catch (e) {
      console.log('No image available for news item with title: ' + item.title);
    }
  };

  var smartTextField = function (parent, text, min, max) {
    var self = {};
    var el = document.createElement('div');
    self.parent = parent;
    el.style.overflow = 'hidden';
    el.style.width = '100%';
    el.style.height = '100%';
    self.parent.appendChild(el);

    self.domObject = document.createElement('div');
    self.domObject.classList.add('smart-textfield');

    var minFontSize = min || parseInt(parent.dataset.minFontSize) || 12;
    var maxFontSize = max || parseInt(parent.dataset.maxFontSize) || 100;

    self.text = text;
    self.fontSize = minFontSize;
    self.fontUnits = 'px';

    self.domObject.style.width = '100%';
    self.domObject.style.height = '100%';

    self.domObject.getPxProp = function (prop) {
      return Math.ceil(parseFloat(css(self.domObject, prop)));
    };

    var debug = function () { console.log({ "fontSize": self.fontSize, "scrollHeight": self.domObject.scrollHeight, "computedHeight": self.domObject.getPxProp('height'), "scrollWidth": self.domObject.scrollWidth, "computedWidth": self.domObject.getPxProp('width') }); };
    function css(element, property) {
      return window.getComputedStyle(element, null).getPropertyValue(property);
    }

    self.updateSize = function () {
      self.domObject.style.fontSize = self.fontSize + self.fontUnits;
    };

    self.resizeText = function () {
      if (self.domObject.scrollHeight > self.domObject.getPxProp('height') || self.domObject.scrollWidth > self.domObject.getPxProp('width')) {
        while ((self.domObject.scrollHeight > self.domObject.getPxProp('height') || self.domObject.scrollWidth > self.domObject.getPxProp('width')) && self.fontSize > minFontSize) {
          self.fontSize--;
          self.updateSize();
          //debug();
        }
        //debug();
        return;
      }
      //debug();
      while ((self.domObject.scrollHeight <= self.domObject.getPxProp('height') && self.domObject.scrollWidth <= self.domObject.getPxProp('width')) && self.fontSize < maxFontSize) {
        self.fontSize++;
        self.updateSize();
        //debug();
      }
      self.fontSize--;
      self.updateSize();
      //debug();
      //console.log("Final font size: " + self.fontSize);
    };

    self.setText = function (text) {
      self.text = text;
      self.domObject.innerHTML = self.text;
      self.updateSize();
      self.resizeText();
    };

    el.appendChild(self.domObject);
    self.setText(text);
    self.updateSize();
    self.resizeText();

    return self;
  };

  var applyStyles = function (styleNodes) {
    // Promise resolves when all style nodes have finished loading
    return new Promise(function (resolve) {
      var nodesPending = 0;
      var loopComplete = false;

      styleNodes.forEach(function (styleNode) {
        var headStyleNodes = Array.prototype.slice.call(document.head.getElementsByTagName('link'));
        var exists = headStyleNodes.some(function (headStyleNode) {
          return headStyleNode.href == styleNode.href;
        });

        if (!exists) {
          nodesPending++;

          styleNode.addEventListener('load', function () {
            nodesPending--;
            if (nodesPending === 0 && loopComplete) resolve();
          });

          document.head.appendChild(styleNode);
        }
      });

      loopComplete = true;
      if (nodesPending === 0) resolve();
    });
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
    //alert(url);
    var xhttp = new XMLHttpRequest();
    xhttp.open('GET', url, false);
    xhttp.send();
    var result = xhttp.responseText;
    //alert(result);
    return new Promise(function (resolve, reject) {
      resolve(result);
    });
    //return result;
    //resolve(feed);                        
   }

  var xhr2 = function (url) {
    return new Promise(function (resolve, reject) {
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (xhttp.readyState === 4 && xhttp.status === 200) {
          resolve(xhttp.responseText);
        }
        if (xhttp.readyState === 4 && xhttp.status !== 200) {
          var err = "[News Renderer] Error: " + xhttp.status;
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

  var customFnExists = function (fnName) {
    if (window.newsTheme && window.newsTheme[newsRenderer.themeName] && window.newsTheme[newsRenderer.themeName][fnName]) {
      return true;
    }
    return false;
  };

  var execCustomFn = function (fnName, arg) {
    if (customFnExists(fnName)) {
      window.newsTheme[newsRenderer.themeName][fnName](arg);
    }
  };

  var dynamicResize = function () {
    var wrapper = newsRenderer.parent;
    var newsWrapper = wrapper.getElementsByClassName(newsRenderer.themeName)[0];

    newsWrapper.classList.toggle('portrait', wrapper.clientHeight > wrapper.clientWidth);
  };

  function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  return newsRenderer;
};
