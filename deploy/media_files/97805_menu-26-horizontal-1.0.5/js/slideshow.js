var Slideshow = function (config) {
    var slideshow = {
        container: config.container,
        imagePaths: config.imagePaths,
        duration: config.duration || 3000,
        index: 0,
        interval: undefined,
        get visibleEl() {
            return slideshow.container.getElementsByClassName('slideshow-image-visible')[0];
        },
        get hiddenEl() {
            return slideshow.container.getElementsByClassName('slideshow-image-hidden')[0];
        },
        start: function() {
            if (slideshow.imagePaths.length > 1) slideshow.interval = window.setInterval(slideshow.advance, slideshow.duration);
        },
        advance: function () {
            // Swap visible and hidden elements
            var current = slideshow.visibleEl, next = slideshow.hiddenEl;
            current.classList.remove('slideshow-image-visible');
            current.classList.add('slideshow-image-hidden');
            next.classList.remove('slideshow-image-hidden');
            next.classList.add('slideshow-image-visible');

            // Increment index
            if (slideshow.index + 1 < slideshow.imagePaths.length) {
                slideshow.index += 1;
            } else {
                slideshow.index = 0;
            }

            // Load next image into the now-hidden element after animation finishes
            window.setTimeout(function () {
                slideshow.hiddenEl.style.backgroundImage = "url('" + slideshow.imagePaths[slideshow.index] + "')";
            }, 1000);
        }
    };

    if (slideshow.imagePaths.length > 0) {
        slideshow.visibleEl.style.backgroundImage = "url('" + slideshow.imagePaths[0] + "')";
        if (slideshow.imagePaths.length > 1) slideshow.hiddenEl.style.backgroundImage = "url('" + slideshow.imagePaths[1] + "')";
        slideshow.index = 1;
    }

    return slideshow;
};