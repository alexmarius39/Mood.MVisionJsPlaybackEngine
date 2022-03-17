/* globals DOMConsole */
if (window.Loader && window.Loader.dataJson === null) document.getElementById('preview').style.display = 'block';

var mediaId, playlistLastMediaId;

(function () {
    'use strict';

    window.mvTemplate = {
        setComponents: function (components) {
            window.Loader.setComponents(components);
            this.render();
        },
        render: function () {
            init();
        }
    };

    var init = function () {
        window.Loader.getComponents().then(function (components) {
            document.getElementById('preview').style.display = 'none';
            function p(componentName, paramName) {
                try {
                    var result = components.filter(function (component) {
                        return component.name === componentName;
                    })[0];
                    if (paramName) result = result.params.filter(function (param) {
                        return param.name === paramName;
                    })[0].value;
                    return result;
                } catch (e) {
                    console.error('Could not find component "' + componentName + '" and/or param "' + paramName + '"');
                    throw e;
                }
            }

            if (p('Debug Options', 'Show Console')) DOMConsole();
            
            document.getElementById("videoid").src = p('Template Options', 'Media')[0];
            //alert(document.getElementById("videoid").src);
            
            document.body.style.backgroundColor = p('Font & Color Options', 'Background Color');
            document.body.style.backgroundImage = "url('" + p('Template Options', 'Background Image')[0] + "')";

            document.getElementById('headerText').textContent = p('Template Options', 'Header Text');
            document.getElementById('headerText').style.fontFamily = cleanFontName(p('Font & Color Options', 'Header Text Font'));
            document.getElementById('headerText').style.color = p('Font & Color Options', 'Header Text Color');

            document.getElementById('bodyText').textContent = p('Template Options', 'Body Text');
            //document.getElementById('bodyText').textContent = p('Template Options', 'Media')[0];
            document.getElementById('bodyText').style.fontFamily = cleanFontName(p('Font & Color Options', 'Body Text Font'));
            document.getElementById('bodyText').style.color = p('Font & Color Options', 'Body Text Color');

            var textOnLeft = (p('Template Options', 'Body Text Position') === 'Left');

            if (textOnLeft) document.getElementById('bodyContainer').classList.add('text-left');

            if (p('Template Options', 'Media Border')) {
                document.getElementById('videoPlaceholder').style.color = p('Font & Color Options', 'Media Border Color');
                document.getElementById('videoPlaceholder').classList.add('border');
            }

            window.Loader.ready();

            if (p('Template Options', 'Media')[0]) {
                window.Loader.isStarted().then(function () {
                    mediaId = p('Template Options', 'Media')[0];

                    var zoneName = 'videoWithSupportingTextZone';
                    var loop = p('Template Options', 'Loop Media');

                    window.Loader.createCustomZone(
                        zoneName,
                        textOnLeft ? 39.01 : 3.073, // left
                        25.370, // top
                        57.813, // width
                        57.963, // height
                        false, // persistent
                        false // behind
                    );

                    window.Loader.openMediaInCustomZone(
                        mediaId,
                        zoneName,
                        loop, // loop
                        'IMMEDIATE_STOP_CURRENT_MEDIA'
                    );

                    if (!loop) window.Loader.getPlaylistContainerItems(mediaId, playlistItemsCallback);
                });
            }
        });
    };

    init();

    var cleanFontName = function (fontName) {
        return fontName
            .replace(' (script)', '')
            .replace(' (serif)', '')
            .replace(' (sans-serif)', '');
    };
}());

function playlistItemsCallback(playlistItems) {
    if (playlistItems) playlistLastMediaId = playlistItems[playlistItems.length - 1].id;

    window.Loader.addPlaybackListener(playbackEvent);
}

function playbackEvent(event) {
    if (event.mediaId === (playlistLastMediaId || mediaId) && event.type === 'MEDIA_FINISHED') {
        window.Loader.finished();
    }
}