function getConfigSound() {
    return {
        "soundSettings.volumeLevels.media": {
            valueKey: "soundSettings.volumeLevels",
            label: "Media volume",
            getter: function(value) {
                var volume = "";
                try {
                    volume = value["MEDIA"]
                } catch(e) {
                    volume = "";
                }
                return volume;
            },
            setter: function(initialValue, editedValue) {
                var newValue = null;
                if (initialValue == null) {
                    newValue = {
                        "MEDIA":editedValue
                    }
                } else {
                    try {
                        newValue = JSON.parse(JSON.stringify(initialValue));
                        newValue["MEDIA"] = editedValue;
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
        }
    }
}
