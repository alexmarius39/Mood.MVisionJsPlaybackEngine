const productIdsRegex = /[0-9]+(,[0-9]+)*$/;

function getConfigHardware() {
  return {
    "hardwareSettings.earlyAdopter": {
      label: "Early Adopter",
      editor: "checkbox"
    },
    "hardwareSettings.knownSerialProductIds": {
      label: "Known Serial Product Ids",
      getter: function(value) {
        var isArray = value instanceof Array;
        if (isArray == false || value.length == 0) {
            return "";
        }
        let productIds = "";
        value.forEach(function(val) {
          productIds += val + ", "
        });
        return productIds.slice(0, -2);
      },
      editor: "text",
      setter: function(initialValue, editedValue) {
        return editedValue.split(",").map(Number);
      },
      validator: function(value) {
        return productIdsRegex.test(value);
      },
      validatorMessage: "Only comma separated product ids are allowed"
    },
    "hardwareSettings.networkHostname": {
      label: "Hetwork Hostname",
      editor: "text"
    }
  }
}