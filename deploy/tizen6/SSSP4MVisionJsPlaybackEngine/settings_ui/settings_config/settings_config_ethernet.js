const interfaceSettingsEditableEthernet = function(settingsValueGetter) {
    return settingsValueGetter("networkSettings.ethernetSettings.allowConfigurationChange") 
        && settingsValueGetter("networkSettings.ethernetSettings.interfaceEnabled");
}

const staticIpValuesAreEditableEthernet = function(settingsValueGetter) {
    return interfaceSettingsEditableEthernet(settingsValueGetter)
        && !settingsValueGetter("networkSettings.ethernetSettings.dhcpEnabled");
}

function getConfigEthernet() {
    return {
        "networkSettings.ethernetSettings.allowConfigurationChange": {
            label: "Allow configuration changes",
            editor: "checkbox"
        },
        "networkSettings.ethernetSettings.interfaceEnabled": {
            label: "Ethernet enabled",
            editor: "checkbox"
        },
        "networkSettings.ethernetSettings.dhcpEnabled": {
            label: "DHCP enabled",
            isEditable: interfaceSettingsEditableEthernet,
            editor: "checkbox"
        },
        "networkSettings.ethernetSettings.networkLinkSettings.ipAddress": {
            label: "Static IP address",
            isEditable: staticIpValuesAreEditableEthernet,
            editor: "text",
            editorParams: ipAddressEditorParams,
            validator: ipAddressValidator,
            validatorMessage: ipAddressValidatorMessage
        },
        "networkSettings.ethernetSettings.networkLinkSettings.gateway": {
            label: "Gateway",
            isEditable: staticIpValuesAreEditableEthernet,
            editor: "text",
            editorParams: ipAddressEditorParams,
            validator: ipAddressValidator,
            validatorMessage: ipAddressValidatorMessage
        },
        "networkSettings.ethernetSettings.networkLinkSettings.netmask": {
            label: "Netmask",
            isEditable: staticIpValuesAreEditableEthernet,
            editor: "text",
            editorParams: ipAddressEditorParams,
            validator: ipAddressValidator,
            validatorMessage: ipAddressValidatorMessage
        },
        "networkSettings.ethernetSettings.networkLinkSettings.dns1": {
            label: "DNS 1",
            isEditable: staticIpValuesAreEditableEthernet,
            editor: "text",
            editorParams: ipAddressEditorParams,
            validator: ipAddressValidator,
            validatorMessage: ipAddressValidatorMessage
        },
        "networkSettings.ethernetSettings.networkLinkSettings.dns2": {
            label: "DNS 2",
            isEditable: staticIpValuesAreEditableEthernet,
            editor: "text",
            editorParams: ipAddressEditorParams,
            validator: anyValidator(emptyStringValidator, ipAddressValidator),
            validatorMessage: ipAddressValidatorMessage
        }
    }
}