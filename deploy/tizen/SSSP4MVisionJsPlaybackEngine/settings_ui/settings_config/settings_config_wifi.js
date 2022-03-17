const interfaceSettingsEditable = function(settingsValueGetter) {
    return settingsValueGetter("networkSettings.wifiSettings.allowConfigurationChange") 
        && settingsValueGetter("networkSettings.wifiSettings.interfaceEnabled");
}

const staticIpValuesAreEditable = function(settingsValueGetter) {
    return interfaceSettingsEditable(settingsValueGetter)
        && !settingsValueGetter("networkSettings.wifiSettings.dhcpEnabled");
}

function getConfigWifi() {
    return {
        "networkSettings.wifiSettings.allowConfigurationChange": {
            label: "Allow configuration changes",
            editor: "checkbox"
        },
        "networkSettings.wifiSettings.interfaceEnabled": {
            label: "Wi-Fi enabled",
            editor: "checkbox"
        },
        "networkSettings.wifiSettings.wifiAccessPointSettings.ssid": {
            label: "SSID",
            isEditable: interfaceSettingsEditable,
            editor: "text",
            editorParams: {
                maxLength: 32
            }
        },
        "networkSettings.wifiSettings.wifiAccessPointSettings.authenticationType": {
            label: "Authentication type",
            isEditable: interfaceSettingsEditable,
            editor: "select",
            editorParams: {
                options: [
                    {value: "WPA_PSK"},
                    {value: "NONE"},
                    {value: "EAP"},
                    {value: "WEP"}
                ]
            }
        },
        "networkSettings.wifiSettings.wifiAccessPointSettings.password": {
            label: "Password",
            valueToString: passwordValueToString,
            isEditable: function(settingsValueGetter) {
                return interfaceSettingsEditable(settingsValueGetter) &&
                    settingsValueGetter("networkSettings.wifiSettings.wifiAccessPointSettings.authenticationType") != "NONE";
            },
            editor: "text",
            editorParams: {
                type: "password"
            }
        },
        "networkSettings.wifiSettings.dhcpEnabled": {
            label: "DHCP enabled",
            isEditable: interfaceSettingsEditable,
            editor: "checkbox"
        },
        "networkSettings.wifiSettings.networkLinkSettings.ipAddress": {
            label: "Static IP address",
            isEditable: staticIpValuesAreEditable,
            editor: "text",
            editorParams: ipAddressEditorParams,
            validator: ipAddressValidator,
            validatorMessage: ipAddressValidatorMessage
        },
        "networkSettings.wifiSettings.networkLinkSettings.gateway": {
            label: "Gateway",
            isEditable: staticIpValuesAreEditable,
            editor: "text",
            editorParams: ipAddressEditorParams,
            validator: ipAddressValidator,
            validatorMessage: ipAddressValidatorMessage
        },
        "networkSettings.wifiSettings.networkLinkSettings.netmask": {
            label: "Netmask",
            isEditable: staticIpValuesAreEditable,
            editor: "text",
            editorParams: ipAddressEditorParams,
            validator: ipAddressValidator,
            validatorMessage: ipAddressValidatorMessage
        },
        "networkSettings.wifiSettings.networkLinkSettings.dns1": {
            label: "DNS 1",
            isEditable: staticIpValuesAreEditable,
            editor: "text",
            editorParams: ipAddressEditorParams,
            validator: ipAddressValidator,
            validatorMessage: ipAddressValidatorMessage
        },
        "networkSettings.wifiSettings.networkLinkSettings.dns2": {
            label: "DNS 2",
            isEditable: staticIpValuesAreEditable,
            editor: "text",
            editorParams: ipAddressEditorParams,
            validator: anyValidator(emptyStringValidator, ipAddressValidator),
            validatorMessage: ipAddressValidatorMessage
        }
    }
}