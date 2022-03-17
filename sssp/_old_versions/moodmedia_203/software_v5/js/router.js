/* exported TemplateRouter */
class TemplateRouter {
    constructor(options) {
        this.routes = options.routes;
        this.defaultRoute = options.default;
        this.currentRoute;
        this.isRouting = false;

        // Create containers
        const mainContainer = document.createElement('main');
        mainContainer.id = 'routerMainContainer';
        document.body.appendChild(mainContainer);

        const transitionContainer = document.createElement('main');
        transitionContainer.id = 'routerTransitionContainer';
        document.body.appendChild(transitionContainer);

        // Load stylesheets
        Object.keys(options.routes).forEach(key => {
            if (options.routes[key].style) {
                const styleTag = document.createElement('link');
                styleTag.rel = "stylesheet";
                styleTag.href = options.routes[key].style;
                document.head.appendChild(styleTag);
            }
        });

        // Get transition duration from CSS custom property
        const durationProperty = window.getComputedStyle(document.documentElement).getPropertyValue('--router-transition-duration');

        if (durationProperty.endsWith('ms')) {
            this.transitionDuration = parseInt(durationProperty);
        } else if (durationProperty.endsWith('s')) {
            this.transitionDuration = parseInt(durationProperty) * 1000;
        } else {
            this.transitionDuration = 250;
        }

        window.onhashchange = this.hashChanged.bind(this);
        // Immediately route to correct hash
        this.hashChanged();
    }

    hashChanged() {
        const newHash = window.location.hash.substr(1);
        if (!newHash) {
            // Go to default route if hash is empty
            this.to(this.defaultRoute);
        } else if (newHash !== this.currentRoute) {
            this.to(newHash);
        }
    }

    makeRequest (method, url) {
  return new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.onload = function () {
      if (this.status >= 200 && this.status < 300) {
        resolve(xhr.response);
      } else {
        reject({
          status: this.status,
          statusText: xhr.statusText
        });
      }
    };
    xhr.onerror = function () {
      reject({
        status: this.status,
        statusText: xhr.statusText
      });
    };
    xhr.send();
  });
}

// Example:
/*
makeRequest('GET', 'http://example.com')
.then(function (datums) {
  console.log(datums);
})
.catch(function (err) {
  console.error('Augh, there was an error!', err.statusText);
});
*/



to(routeName, options) {
var xhttp = new XMLHttpRequest();
//alert(this.routes[routeName].view);
xhttp.open("GET", this.routes[routeName].view, false);//"file:///C:/html_templates/6411_dyson-airwrap-interactive-1.0.5/views/carousel.html", false);
xhttp.send();
//alert(xhttp.responseText);
this.to2(routeName, options, xhttp.responseText);
}

    to3(routeName, options)
    {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', "./views/carousel.html");//"file:///C:/html_templates/6411_dyson-airwrap-interactive-1.0.5/views/carousel.html");//this.routes[routeName].view);
     //alert(this.routes[routeName].view);
    xhr.onload = function () {

       //if (this.status >= 200 && this.status < 300) {
         if (this.readyState === 4 && this.status === 200) {
                //alert(this.routes[routeName].view);
                to2(routeName, options, this.response);
                 
      } else {
      }
    };
    xhr.onerror = function () {
          alert ("eroare: " + xhr.statusText);
    };
    xhr.send();
    }

    to2(routeName, options, htmlString) {
        if (this.routes[routeName] && !this.isRouting) {
            this.isRouting = true;
            // Get the view HTML
            //alert(htmlString);  
            //fetch(this.routes[routeName].view)
                    const mainContainer = document.getElementById('routerMainContainer');
                    const transitionContainer = document.getElementById('routerTransitionContainer');

                    const fragment = new Range().createContextualFragment(htmlString);
                    transitionContainer.appendChild(fragment);

                    const oldRootElement = mainContainer.firstElementChild;
                    const newRootElement = transitionContainer.firstElementChild;

                    // Load the new route's script and call the old route's routeUnloaded function
                    this.loadRouteScript(
                        routeName,
                        newRootElement,
                        options ? options.parameters : undefined,
                        oldRootElement
                    );

                    let transitionClass;
                    if (options && typeof options.transition === 'string') {
                        switch (options.transition.toLowerCase()) {
                            case 'left':
                                transitionClass = 'router-transition-left';
                                break;
                            case 'right':
                                transitionClass = 'router-transition-right';
                                break;
                            case 'fade':
                                transitionClass = 'router-transition-fade';
                                break;
                        }
                        document.body.classList.add('router-transition', transitionClass);
                    }

                    // Wait for transition to finish, or allow 33ms for rendering if there is no transition
                    window.setTimeout(() => {
                        // Swap main and transition containers and empty the new transition container
                        mainContainer.id = 'routerTransitionContainer';
                        transitionContainer.id = 'routerMainContainer';
                        mainContainer.innerHTML = '';

                        document.body.classList.remove('router-transition', transitionClass);

                        this.currentRoute = routeName;
                        window.location.hash = routeName;
                        this.isRouting = false;

                    }, transitionClass ? this.transitionDuration : 33);

        } else {
            this.isRouting = false;
            throw new Error(`Invalid route name ${routeName}`);
        }
    }

    loadRouteScript(routeName, viewRootElement, viewParameters, oldRootElement) {
        // Route scripts can declare a global routeUnloaded function for cleanup
        if (typeof window.routeUnloaded === 'function') window.routeUnloaded(oldRootElement);
        window.routeLoaded = undefined;
        window.routeUnloaded = undefined;

        // Script tag must be removed and re-added to load the new script
        if (document.getElementById('routerScriptContainer')) {
            document.getElementById('routerScriptContainer').remove();
        }

        if (this.routes[routeName].script) {
            const scriptContainer = document.createElement('script');
            scriptContainer.id = 'routerScriptContainer';
            scriptContainer.src = this.routes[routeName].script;

            scriptContainer.onload = () => {
                if (typeof window.routeLoaded === 'function') window.routeLoaded(viewRootElement, viewParameters);
            };
            scriptContainer.onerror = () => {
                throw new Error(`Couldn't load script for route ${routeName}`);
            };

            document.head.appendChild(scriptContainer);
        }
    }
}