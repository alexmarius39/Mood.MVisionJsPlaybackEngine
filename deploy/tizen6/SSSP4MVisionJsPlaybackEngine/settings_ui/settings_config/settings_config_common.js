const ipAddressEditorParams = {
    maxLength: 15,
}

const ipAddressRegex = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
const integerNumberRegex = /^[0-9]+$/;
function ipAddressValidator(value) {
    return ipAddressRegex.test(value);
}

const ipAddressValidatorMessage = "Input a valid IPv4 address";

function emptyStringValidator(value) {
    if (value != null && value.trim().length === 0) {
        return true;
    }
    return false;
}

function nonEmptyStringValidator(value) {
    if (value != null && value.trim().length === 0) {
        return true;
    }
    return false;
}

function createIntegerTypeValidator(minValue, maxValue) {
    return function(value) {
        if (value == null) {
            return false;
        }

        if (!integerNumberRegex.test(value)) {
            return false;
        }
        if (value.startsWith("0") && value.length > 1) {
            return false;
        }
        const numericValue = parseInt(value);
        if (isNaN(numericValue)) {
            return false;
        }
        return minValue <= numericValue && numericValue <= maxValue;
    }
}

function integerSetter(initialValue, editedValue) {
    return parseInt(editedValue);
}

function anyValidator(...validators) {
    return function(value) {
        const validValidator = validators.find(validator => validator(value));
        return validValidator;
    }
}

function allValidators(...validators) {
    return function(value) {
        const invalidValidator = validators.find(validator => !validator(value));
        return !invalidValidator;
    }
}

function passwordValueToString(value) {
    if (!value || value.length === 0) {
        return "";
    }
    return "*".repeat(value.length);
}