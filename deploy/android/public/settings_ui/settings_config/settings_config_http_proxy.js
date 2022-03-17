const proxySettingsAreEditable = function(settingsValueGetter) {
    return settingsValueGetter("networkSettings.httpProxySettings.proxyEnabled");
}

function getConfigHttpProxy() {
    return {
        "networkSettings.httpProxySettings.excludedHostsList": {
            label: "Excluded Hosts List",
            getter: function(value) {
              var isArray = value instanceof Array;
              if (isArray == false || value.length == 0) {
                  return "";
              }
              let hosts = "";
              value.forEach(function(val) {
                hosts += val + ", "
              });
              return hosts.slice(0, -2);
            },
            editor: "text",
            setter: function(initialValue, editedValue) {
              return editedValue.split(",").map(String);
            }
        },
        "networkSettings.httpProxySettings.proxyEnabled": {
            label: "Proxy enabled",
            editor: "checkbox"
        },
        "networkSettings.httpProxySettings.host": {
            label: "Host",
            isEditable: proxySettingsAreEditable,
            editor: "text"
        },
        "networkSettings.httpProxySettings.port": {
            label: "Port",
            setter: integerSetter,
            isEditable: proxySettingsAreEditable,
            editor: "text",
            validator: createIntegerTypeValidator(0, 65535),
            validatorMessage: "Input an integer number between 0 and 65535"
        },
        "networkSettings.httpProxySettings.username": {
            label: "Username",
            isEditable: proxySettingsAreEditable,
            editor: "text"
        },
        "networkSettings.httpProxySettings.password": {
            label: "Password",
            valueToString: passwordValueToString,
            isEditable: proxySettingsAreEditable,
            editor: "text",
            editorParams: {
                type: "password"
            }
        }
    }
}