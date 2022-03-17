function getConfigAppCommunication() {
    return {
        "appCommunicationSettings.multicastSettings.defaultMulticastAddress": {
            label: "Default Multicast IP address",
            editor: "text",
            editorParams: ipAddressEditorParams,
            validator: ipAddressValidator,
            validatorMessage: ipAddressValidatorMessage
        },
        "appCommunicationSettings.multicastSettings.defaultMulticastPort": {
            label: "Default Multicast Port",
            setter: integerSetter,
            editor: "text",
            validator: createIntegerTypeValidator(0, 65535),
            validatorMessage: "Input an integer number between 0 and 65535"
        },
        "appCommunicationSettings.p2pSettings.clientEnabled": {
            label: "P2P client enabled",
            editor: "checkbox"
        },
        "appCommunicationSettings.p2pSettings.serverEnabled": {
            label: "P2P server enabled",
            editor: "checkbox"
        },
        "appCommunicationSettings.p2pSettings.port": {
            label: "P2P server port",
            setter: integerSetter,
            editor: "text",
            validator: createIntegerTypeValidator(0, 65535),
            validatorMessage: "Input an integer number between 0 and 65535"
        }
    }
}