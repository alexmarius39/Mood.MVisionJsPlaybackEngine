var FeedRenderer = function (config) {
    var feedRenderer = {
        feedPath: config.feedPath,
        slideDuration: config.slideDuration || 5000,
        refreshRate: Number.isFinite(config.refreshRate) ? config.refreshRate : 0,
        itemOrder: config.itemOrder || 'Item Date',
        itemLimit: config.itemLimit || 50,
        bodyFontSize: config.bodyFontSize || { min: 24, max: 42 },
        clamp: config.clamp || {},
        showImages: config.showImages,
        feedTitleOverride: config.feedTitleOverride,
        useDefaultBlacklist: config.useDefaultBlacklist,
        blacklist: config.blacklist || [],
        blacklistCaseSensitive: config.blacklistCaseSensitive || [],
        slideshow: undefined,
        refreshInterval: undefined
    };

    feedRenderer.render = function (callbacks) {
        // Callbacks are used here instead of returning a promise so that they can be run multiple
        // times if refreshing is enabled.
        if (feedRenderer.refreshInterval) {
            window.clearInterval(feedRenderer.refreshInterval);
            feedRenderer.refreshInterval = undefined;
        }

        if (feedRenderer.refreshRate > 0) {
            feedRenderer.refreshInterval = window.setInterval(function () {
                console.log('Refreshing data and restarting slideshow');
                getFeedData()
                    .then(function (data) {
                        buildSlideshow(data)
                            .then(callbacks.success)
                            .catch(callbacks.failure);
                    })
                    .catch(callbacks.failure);
            }, feedRenderer.refreshRate);
        }

        getFeedData()
            .then(function (data) {
                buildSlideshow(data)
                    .then(callbacks.success)
                    .catch(callbacks.failure);
            })
            .catch(callbacks.failure);
    };

    var getFeedData3 = function () {
                 var request = new XMLHttpRequest();
                //alert("loadAppInfo()");
                 request.open("GET", feedRenderer.feedPath, false);
                 request.send();
                        try {
                            RSSParser.parseString(
                                request.response,
                                {
                                    customFields: {
                                        item: [
                                            'enclosure',
                                            'media:group',
                                            'media:content',
                                            'media:thumbnail',
                                            // Sometimes the parser fails on the itunes:image
                                            // property with relative paths, but this works
                                            ['itunes:image', 'itunes-image']
                                        ]
                                    }
                                },
                                function (err, parsed) {
                                    //resolve(parsed.feed);
                                    return new Promise(function (resolve, reject) {
                                        resolve( parsed.feed);
                                    });
                                    //return parsed.feed; 
                                });
                        } catch (err) {
                            console.log(err);
                        }
      };

    var getFeedData = function () {
        return new Promise(function (resolve, reject) {
            if (feedRenderer.feedPath) {
                var request = new XMLHttpRequest();
                request.open('get', feedRenderer.feedPath, false);
                //request.timeout = 5000;
                //request.ontimeout = function () {
                  //  reject('Request timed out');
                //};

                request.send();

                //request.onreadystatechange = function () {
                    //if (request.readyState === 4) {
                        //if (request.status === 200) {
                            RSSParser.parseString(
                                request.response,
                                {
                                    customFields: {
                                        item: [
                                            'enclosure',
                                            'media:group',
                                            'media:content',
                                            'media:thumbnail',
                                            // Sometimes the parser fails on the itunes:image
                                            // property with relative paths, but this works
                                            ['itunes:image', 'itunes-image']
                                        ]
                                    }
                                },
                                function (err, parsed) {
                                    resolve(parsed.feed);
                                });
                        //} else {
                            //reject(request.response);
                        //}
                    //}
                //};

            } else {
                reject('No feed path');
            }
        });
    };

    var getFeedData2 = function () {
        return new Promise(function (resolve, reject) {
            if (feedRenderer.feedPath) {
                var request = new XMLHttpRequest();
                request.open('get', feedRenderer.feedPath, true);
                request.timeout = 5000;

                request.onreadystatechange = function () {
                    if (request.readyState === 4) {
                        if (request.status === 200) {
                            RSSParser.parseString(
                                request.response,
                                {
                                    customFields: {
                                        item: [
                                            'enclosure',
                                            'media:group',
                                            'media:content',
                                            'media:thumbnail',
                                            // Sometimes the parser fails on the itunes:image
                                            // property with relative paths, but this works
                                            ['itunes:image', 'itunes-image']
                                        ]
                                    }
                                },
                                function (err, parsed) {
                                    resolve(parsed.feed);
                                });
                        } else {
                            reject(request.response);
                        }
                    }
                };

                request.ontimeout = function () {
                    reject('Request timed out');
                };

                request.send();
            } else {
                reject('No feed path');
            }
        });
    };

    var buildSlideshow = function (data) {
        return new Promise(function (resolve, reject) {
            if (feedRenderer.slideshow) {
                window.clearInterval(feedRenderer.slideshow.interval);
                feedRenderer.slideshow = undefined;
            }
            document.getElementById('slideContainer').innerHTML = '';

            var feedTitle = document.getElementById('feedTitle');
            if (feedTitle) {
                if (feedRenderer.feedTitleOverride) {
                    feedTitle.textContent = feedRenderer.feedTitleOverride;
                } else if (data.title) {
                    feedTitle.textContent = data.title;
                }

                if (feedRenderer.clamp.feedTitle) {
                    $clamp(feedTitle, { clamp: feedRenderer.clamp.feedTitle });
                }
            }

            // Apply blacklists
            data.entries = applyBlacklists(data.entries);

            if (data.entries.length > 0) {
                // Sort items if necessary
                switch (feedRenderer.itemOrder) {
                    case 'Item Date':
                        data.entries.sort(function (a, b) {
                            return new Date(b.pubDate) - new Date(a.pubDate);
                        });
                        break;
                    case 'Random':
                        for (var i = data.entries.length - 1; i > 0; i--) {
                            var j = Math.floor(Math.random() * (i + 1));
                            var temp = data.entries[i];
                            data.entries[i] = data.entries[j];
                            data.entries[j] = temp;
                        }
                        break;
                }

                // Apply item limit
                data.entries = data.entries.slice(0, feedRenderer.itemLimit);

                feedRenderer.slideshow = new Slideshow({
                    container: document.getElementById('slideContainer'),
                    data: data.entries,
                    slideFunction: function (index) {
                        return createSlide(this.data[index]);
                    },
                    duration: feedRenderer.slideDuration,
                    loop: false
                });

                resolve();
            } else {
                reject('No items to display');
            }
        });
    };

    var createSlide = function (entry) {
        var article = document.createElement('div');
        article.classList.add('article');

        if (feedRenderer.showImages) {
            // Try to get an image for the item
            var imageSrc = getItemImage(entry);

            // Insert the image if available
            if (imageSrc) {
                var articleImage = document.createElement('div');
                articleImage.classList.add('article-image');
                articleImage.style.backgroundImage = "url('" + imageSrc + "')";
                article.appendChild(articleImage);
            }
        }

        var articleText = document.createElement('div');
        articleText.classList.add('article-text');
        article.appendChild(articleText);

        var articleTitle = document.createElement('div');
        articleTitle.classList.add('article-title');
        articleTitle.textContent = entry.title;
        articleText.appendChild(articleTitle);

        var articleBody = document.createElement('div');
        articleBody.classList.add('article-body', 'full-height');
        window.setTimeout(function () {
            renderSmartText(entry.contentSnippet || '', {
                fontSize: feedRenderer.bodyFontSize,
                parent: articleBody
            });
            articleBody.classList.remove('full-height');

            if (feedRenderer.clamp.title) {
                $clamp(articleTitle, { clamp: feedRenderer.clamp.title });
            }
            if (feedRenderer.clamp.body) {
                $clamp(
                    articleBody.parentElement.querySelector('.article-body > div > div'),
                    { clamp: feedRenderer.clamp.body }
                );
            }
        }, 0); // use timeout to wait until the element is appended to the DOM
        articleText.appendChild(articleBody);

        return article;
    };

    var getItemImage = function (entry) {
        // Look for an enclosure element
        if (entry.enclosure &&
            entry.enclosure.type &&
            entry.enclosure.type.indexOf('image') === 0
        ) {
            return entry.enclosure.url;
        }

        // Look for a media:content element with an image
        if (entry['media:content']) {
            var mediaContentImage = getImageFromMediaContent(entry['media:content']);
            if (mediaContentImage) return mediaContentImage;
        }

        // Look for a media:group element containing a media:content element with an image
        if (entry['media:group'] &&
            entry['media:group']['media:content'] &&
            entry['media:group']['media:content'].length
        ) {
            var mediaGroupImage;
            entry['media:group']['media:content'].some(function (mediaContent) {
                mediaGroupImage = getImageFromMediaContent(mediaContent);
                return mediaGroupImage;
            });
            if (mediaGroupImage) return mediaGroupImage;
        }

        // Look for a media:thumbnail element
        if (entry['media:thumbnail'] && entry['media:thumbnail'].$) {
            return entry['media:thumbnail'].$.url;
        }

        // Look for an iTunes image (for podcast feeds)
        if (entry.itunes && entry.itunes.image) {
            return entry.itunes.image;
        }

        // Look for our renamed iTunes image
        if (entry['itunes-image'] && entry['itunes-image'].$) {
            return entry['itunes-image'].$.href;
        }

        // Try getting the first image in the HTML content
        var tempElement = document.createElement('div');
        tempElement.innerHTML = entry['content:encoded'] || entry.content;
        var imageEl = tempElement.querySelector('img');
        if (imageEl) return imageEl.src;
    };

    var getImageFromMediaContent = function (mediaContent) {
        if (mediaContent.$ &&
            (
                (mediaContent.$.medium && mediaContent.$.medium.indexOf('image') === 0) ||
                (mediaContent.$.type && mediaContent.$.type.indexOf('image') === 0)
            )
        ) {
            return mediaContent.$.url;
        }
    };

    var renderSmartText = function (text, config) {
        var self = {};
        var el = document.createElement('div');

        el.style.overflow = 'hidden';
        el.style.width = '100%';
        el.style.height = '100%';
        config.parent.appendChild(el);

        self.domObject = document.createElement('div');
        el.appendChild(self.domObject);

        var minFontSize = config.fontSize.min;
        var maxFontSize = config.fontSize.max;

        self.text = text;
        self.fontSize = minFontSize;
        self.fontUnits = 'px';

        self.domObject.style.width = '100%';
        self.domObject.style.height = '100%';

        function css(element, property) {
            return window.getComputedStyle(element, null).getPropertyValue(property);
        }

        self.domObject.getPxProp = function (prop) {
            return Math.ceil(parseFloat(css(self.domObject, prop)));
        };

        self.updateSize = function () {
            self.domObject.style.fontSize = self.fontSize + self.fontUnits;
        };

        self.resizeText = function () {
            if (self.domObject.scrollHeight > self.domObject.getPxProp('height') || self.domObject.scrollWidth > self.domObject.getPxProp('width')) {
                while ((self.domObject.scrollHeight > self.domObject.getPxProp('height') || self.domObject.scrollWidth > self.domObject.getPxProp('width')) && self.fontSize > minFontSize) {
                    self.fontSize--;
                    self.updateSize();
                }
                return;
            }
            while ((self.domObject.scrollHeight <= self.domObject.getPxProp('height') && self.domObject.scrollWidth <= self.domObject.getPxProp('width')) && self.fontSize < maxFontSize) {
                self.fontSize++;
                self.updateSize();
            }
            self.fontSize--;
            self.updateSize();
        };

        self.setText = function (text) {
            self.text = text;
            self.domObject.innerHTML = self.text;
            self.updateSize();
            self.resizeText();
        };

        self.setText(text);
    };

    var applyBlacklists = function (items) {
        // Assemble blacklist regex patterns
        var _perf_start = performance.now();
        var regexes = [];

        if (feedRenderer.useDefaultBlacklist && GlobalBlacklist) {
            regexes.push(RegExp('(^\\W*|\\s\\W*)(' + GlobalBlacklist.join('|') + ')(\\W*$|\\W*\\s)', 'i'));
        }

        feedRenderer.blacklist.forEach(function (word) {
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

        feedRenderer.blacklistCaseSensitive.forEach(function (word) {
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

        console.info('blacklist assembly: ' + (Math.ceil((performance.now() - _perf_start) * 100) / 100) + ' ms');

        _perf_start = performance.now();

        var filteredItems = items.filter(function (item) {
            return regexes.every(function (regex) {
                var result = !(regex.test(item.title) || regex.test(item.contentSnippet));
                // if (!result) {
                //     console.log(item);
                //     console.log(regex);
                // }
                return result;
            });
        });

        console.info('blacklist application: ' + (Math.ceil((performance.now() - _perf_start) * 100) / 100) + ' ms');

        return filteredItems;
    };

    // Sanitizes a string to make it suitable for use in a regex pattern
    var escapeRegExp = function (string) {
        return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
    };

    return feedRenderer;
};