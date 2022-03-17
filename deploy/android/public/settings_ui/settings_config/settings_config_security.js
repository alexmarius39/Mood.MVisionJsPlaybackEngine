function getConfigSecurity() {
  return {
    "securitySettings.diagnosticsAppPassword": {
      label: "Diagnostics App Password",
      valueToString: passwordValueToString,
      editor: "text",
      editorParams: {
        type: "password"
      }
    },
    "securitySettings.encryptMediaFiles": {
      label: "Encrypt Media Files",
      editor: "checkbox"
    },
    "securitySettings.playerConfigAppPassword": {
      label: "Player Config App Password",
      valueToString: passwordValueToString,
      editor: "text",
      editorParams: {
        type: "password"
      }  
    },
    "securitySettings.vodAppPassword": {
      label: "VOD App Password",
      valueToString: passwordValueToString,
      editor: "text",
      editorParams: {
        type: "password"
      }  
    }
  }
}