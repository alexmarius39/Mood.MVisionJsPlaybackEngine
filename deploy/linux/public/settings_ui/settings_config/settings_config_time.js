function getConfigTime() {
    return {
        "timeSettings.timeZone": {
            label: "Time-zone",
            editor: "select",
            editorParams: {
                options: global_SDKRenderer.timezones()
            }
        },
        "timeSettings.timeSyncSettings.syncMode": {
            label: "Time sync mode",
            editor: "select",
            editorParams: {
                options: [
                    {value: "NTP_DEFAULT"},
                    {value: "NTP_CUSTOM"},
                    {value: "MVISION"},
                    {value: "OFF"}
                ]
            }
        },
        "timeSettings.timeSyncSettings.customNtpServerUrl": {
            label: "Custom NTP server",
            editor: "text",
            isEditable: function(settingsValueGetter) {
                return settingsValueGetter("timeSettings.timeSyncSettings.syncMode") === "NTP_CUSTOM";
            }
        }
    }
}