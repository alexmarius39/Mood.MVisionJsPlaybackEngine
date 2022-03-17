if (window.Loader && window.Loader.dataJson === null) document.getElementById('preview').style.display = 'block';

(function () {
    window.mvTemplate = {
        setComponents: function (components) {
            window.Loader.setComponents(components);
            this.render();
        },
        render: function () {
            init();
        }
    };

    var slideshow;

    var init = function () {
        window.Loader.getComponents().then(function (components) {
            // console.log(components);
            document.getElementById('preview').style.display = 'none';

            function p(componentName, paramName) {
                try {
                    var returnValue = components.filter(function (component) {
                        return component.name === componentName;
                    })[0];
                    if (paramName) {
                        returnValue = returnValue.params.filter(function (param) {
                            return param.name === paramName;
                        })[0].value;
                    }
                    return returnValue;
                } catch (e) {
                    console.error('Could not find component "' + componentName + '" and/or param "' + paramName + '"');
                    throw e;
                }
            }

            // document.getElementById('console').style.display = p('Debug', 'Show Console') ? 'block' : 'none';

            // Apply custom colors
            var styleElem = document.getElementById('custom-style');
            if (!styleElem) {
                styleElem = document.createElement('style');
                styleElem.id = 'custom-style';
                document.head.appendChild(styleElem);
            }

            var styleString = 'body{background-color:' + p('Color Options', 'Menu Background') + ';}';
            styleString += '.header-text{color:' + p('Color Options', 'Menu Header') + ';}';
            styleString += '.sub-header-text{color:' + p('Color Options', 'Menu Sub-Header') + ';}';
            styleString += '.item-name{color:' + p('Color Options', 'Item Name') + ';}';
            styleString += '.item-price{color:' + p('Color Options', 'Item Price') + ';}';
            styleString += '.item-description{color:' + p('Color Options', 'Item Description') + ';}';
            styleString += '.item-calories{color:' + p('Color Options', 'Item Calories') + ';}';

            styleElem.textContent = styleString;

            // Set up slideshow
            if (p('Image Options', 'Images').length > 0) {
                document.getElementsByClassName('slideshow-image-container')[0].style.WebkitOrder = (p('Image Options', 'Menu Image Position') === 'Left') ? '-1' : '0';
                document.getElementsByClassName('slideshow-image-container')[0].style.order = (p('Image Options', 'Menu Image Position') === 'Left') ? '-1' : '0';

                if (slideshow && slideshow.interval) window.clearInterval(slideshow.interval);
                slideshow = new Slideshow({
                    container: document.getElementsByClassName('slideshow-image-container')[0],
                    imagePaths: p('Image Options', 'Images'),
                    duration: (p('Image Options', 'Slideshow Duration') >= 3) ? p('Image Options', 'Slideshow Duration') * 1000 : 3000
                });
            } else {
                document.getElementsByClassName('slideshow-image-container')[0].style.display = 'none';
                document.getElementsByClassName('menu-column')[0].style.width = '100%';
            }

            // Detect if we're running on an SoC and add a class to disable animations
            if (navigator.userAgent.indexOf('Maple2012') > -1) document.body.classList.add('soc');

            fillColumn(document.getElementsByClassName('menu-column')[0], p('Menu Options', 'Menu Content'));

            window.Loader.ready();

            // Preload images if necessary and start the template
            if (p('Image Options', 'Images').length > 0) {
                var imageCount = 0;

                for (var i = 0; i < p('Image Options', 'Images').length; i++) {
                    var preloadedImage = new Image();
                    preloadedImage.src = p('Image Options', 'Images')[i];

                    preloadedImage.onload = function () {
                        imageCount += 1;

                        if (imageCount === p('Image Options', 'Images').length) {
                            console.debug('Images preloaded, starting template');
                            window.Loader.isStarted().then(startTemplate);
                        }
                    };
                }

            } else {
                window.Loader.isStarted().then(startTemplate);
            }
        }).catch(function (reason) {
            // window.Loader.error(reason);
            console.error(reason);
            window.Loader.isStarted().then(window.Loader.finished);
        });
    };

    init();

    var startTemplate = function () {
        document.getElementById('cover').style.display = 'none';
        if (slideshow) slideshow.start();
    };

    var fillColumn = function (columnElement, contentArray) {
        columnElement.innerHTML = '';

        for (var l = 0; l < contentArray.length; l++) {
            var line = contentArray[l].trim();
            var isHeader = false;
            var isNamesOnly = false;

            if (line[0] === '[' && line[line.length - 1] === ']') {
                line = line.slice(1, line.length - 1);
                isHeader = true;
            }
            else if (line[0] === ')') {
                line = line.slice(1);
                isNamesOnly = true;
            }

            // Work around below regex not matching adjacent pipe pairs
            line = line.replace('||', '| |');

            // Split on pipes that aren't escaped with a backslash
            var tokens = (' ' + line + ' ').match(/([^\\\][^\|]|\\\|)+/g);

            for (var t = 0; t < tokens.length; t++) {
                tokens[t] = tokens[t].trim();
                // Remove backslash from escaped pipes
                tokens[t] = tokens[t].replace(/\\\|/g, '|');
            }

            if (isHeader) {
                var menuHeader = document.createElement('div');
                menuHeader.classList.add('menu-header');

                var headerText = document.createElement('div');
                headerText.classList.add('header-text');
                headerText.textContent = tokens[0];
                menuHeader.appendChild(headerText);

                var subHeaderText = document.createElement('div');
                subHeaderText.classList.add('sub-header-text');
                subHeaderText.textContent = tokens[1];
                menuHeader.appendChild(subHeaderText);

                columnElement.appendChild(menuHeader);

            }
            else if (isNamesOnly) {
                var menuItems = document.createElement('div');
                menuItems.classList.add('menu-items', 'names-only');

                for (var i = 0; i < tokens.length; i++) {


                    var menuItem = document.createElement('div');
                    menuItem.classList.add('menu-item');

                    if (i % 2 === 0) {
                        var itemLine1 = document.createElement('div');
                        itemLine1.classList.add('item-line1');
                        menuItem.appendChild(itemLine1);

                        var itemLine2 = document.createElement('div');
                        itemLine2.classList.add('item-line-2');
                        menuItem.appendChild(itemLine2);

                        var itemName1 = document.createElement('div');
                        itemName1.classList.add('item-name');
                        itemName1.textContent = tokens[i];
                        itemLine1.appendChild(itemName1);

                        var itemName2 = document.createElement('div');
                        itemName2.classList.add('item-name');
                        itemName2.textContent = tokens[i];
                        console.log(tokens[i]);
                    }
                    else {
                        var itemLine1 = document.createElement('div');
                        itemLine1.classList.add('item-line1');
                        menuItem.appendChild(itemLine1);

                        var itemLine2 = document.createElement('div');
                        itemLine2.classList.add('item-line-2');
                        menuItem.appendChild(itemLine2);

                        var itemName1 = document.createElement('div');
                        itemName1.classList.add('item-name');
                        itemName1.textContent = tokens[i];
                        itemLine1.appendChild(itemName1);

                        var itemName2 = document.createElement('div');
                        itemName2.classList.add('item-name');
                        itemName2.textContent = tokens[i];
                        console.log(tokens[i]);
                    }
                    menuItems.appendChild(menuItem);

                }
                columnElement.appendChild(menuItems);
            }
            else {
                var menuItem = document.createElement('div');
                menuItem.classList.add('menu-item');

                var itemLine1 = document.createElement('div');
                itemLine1.classList.add('item-line1');
                menuItem.appendChild(itemLine1);

                var itemLine2 = document.createElement('div');
                itemLine2.classList.add('item-line2');
                menuItem.appendChild(itemLine2);

                var itemName = document.createElement('div');
                itemName.classList.add('item-name');
                itemName.textContent = tokens[0];
                itemLine1.appendChild(itemName);

                if (tokens[1]) {
                    var itemPrice = document.createElement('div');
                    itemPrice.classList.add('item-price');
                    itemPrice.textContent = tokens[1];
                    itemLine1.appendChild(itemPrice);
                }

                var itemDescription = document.createElement('div');
                itemDescription.classList.add('item-description');
                itemDescription.textContent = tokens[2];
                itemLine2.appendChild(itemDescription);

                if (tokens[3]) {
                    var itemCalories = document.createElement('div');
                    itemCalories.classList.add('item-calories');
                    itemCalories.textContent = tokens[3];
                    itemLine2.appendChild(itemCalories);
                }

                columnElement.appendChild(menuItem);
            }
        }
    };
} ());