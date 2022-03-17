function getConfigDisplay() {
    return {
        "displaySettings.displayBrightness": {
            label: "Display brightness",
            getter: function(value) {
                var level = "";
                try {
                    level = value["level"];
                } catch(e) {
                    level = "";
                }
                return level;
            },
            setter: function(initialValue, editedValue) {
                var newValue = null;
                if (initialValue == null) {
                    newValue = {
                        "level":editedValue,
                        "mode": "AUTO"
                    }
                } else {
                    try {
                        newValue = JSON.parse(JSON.stringify(initialValue));
                        newValue["level"] = editedValue;
                    } catch(e) {
                        newValue = null;
                    }                        
                }
                return newValue;
            },
            editor: "range",
            editorParams: {
                min: 0,
                max: 100,
                step: 1,
                valueLabelPrefix: "",
                valueLabelSufix: ""
            }
        },
        "displaySettings.displayDensity": {
            label: "Display density",
            setter: integerSetter,
            editor: "select",
            editorParams: {
                options: [
                    {value: "120"},
                    {value: "160"},
                    {value: "213"},
                    {value: "240"},
                    {value: "280"},
                    {value: "320"},
                    {value: "360"},
                    {value: "400"},
                    {value: "420"},
                    {value: "480"},
                    {value: "560"},
                    {value: "640"}
                ]
            }
        },
        "displaySettings.displayOrientation": {
            label: "Display orientation",
            editor: "select",
            editorParams: {
                options: [
                    {value: "DEG_0"},
                    {value: "DEG_90"},
                    {value: "DEG_180"},
                    {value: "DEG_270"},
                    {value: "AUTO"}
                ]
            }
        },
        "displaySettings.displayResolution": {
            label: "Display resolution",
            editor: "text",
            getter: function(value) {
                var strVal = "";
                try {
                    strVal = JSON.stringify(value);
                } catch(e) {
                    strVal = "";
                }
                return strVal;
            },
            setter: function(initialValue, editedValue) {
                let jsonValue = JSON.parse(editedValue);
                return jsonValue;
            },
            validator: function(value) {
                var bRet = true;
                var jsonValue = null;
                try {
                    jsonValue = JSON.parse(value);
                } catch (e) {
                    bRet = false;
                }
                return jsonValue != null && bRet;
            },
            validatorMessage: 'Only JSON text with format {"auto":boolean, "width":integer, "height":integer, "freq":integer} is allowed'
        },
        "displaySettings.displayScale": {
            label: "Display scale",
            setter: integerSetter,
            editor: "range",
            editorParams: {
                min: 0,
                max: 100,
                step: 1,
                valueLabelPrefix: "",
                valueLabelSufix: ""
            }
        }      
    }
}