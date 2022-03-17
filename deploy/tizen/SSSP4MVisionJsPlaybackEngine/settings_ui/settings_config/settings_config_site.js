function getConfigSite() {
    return {
        "siteSettings.siteId": {
            label: "Site ID",
            editor: "text"
        },
        "siteSettings.zipCode": {
            label: "Zip code",
            editor: "text"
        },
        "siteSettings.latitude": {
            label: "Latitude",
            editor: "text"
        },
        "siteSettings.longitude": {
            label: "Longitude",
            editor: "text"
        },
        "siteSettings.sleepMode": {
            label: "Sleep Mode",
            editor: "select",
            editorParams: {
                options: [
                    {value: "SLEEP"},
                    {value: "SCREEN_SAVER"},
                    {value: "PLAYBACK"}
                ]
            }
        }
    }
}