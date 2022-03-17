function showInputDialog(valueConfig, initialValue, commitFunction) {
    const inputHandler = inputHandlersMap.get(valueConfig.editor);
    inputHandler(valueConfig, initialValue, commitFunction);
}

const inputHandlersMap = new Map();
inputHandlersMap.set("text", showTextInputDialog);
inputHandlersMap.set("checkbox", showCheckboxInputDialog);
inputHandlersMap.set("range", showRangeInputDialog);
inputHandlersMap.set("select", showSelectInputDialog);

function showTextInputDialog(valueConfig, initialValue, commitFunction) {
    if (!valueConfig) {
        return;
    }

    if (!initialValue) {
        initialValue = "";
    }

    const contentContainer = createElementWithStyle("div", "dialogContentVerticalContainer");
    addLabel(contentContainer, valueConfig.label);

    const inputElement = document.createElement("input");
    inputElement.type = "text";
    if (valueConfig.editorParams) {
        for (const [paramKey, paramValue] of Object.entries(valueConfig.editorParams)) {
            inputElement[paramKey] = paramValue;
        }
    }

    if (inputElement.maxLength === -1) {
        inputElement.maxLength = 250;
    }
    inputElement.value = initialValue;
    contentContainer.appendChild(inputElement);

    let errorMessageElement;
    if (valueConfig.validatorMessage) {
        errorMessageElement = createElementWithStyle("div", "valueValidationMessageHint");
        errorMessageElement.textContent = valueConfig.validatorMessage;
        contentContainer.appendChild(errorMessageElement);
    } else {
        errorMessageElement = null;
    }

    inputElement.oninput = function() {
        if (errorMessageElement !== null) {
            errorMessageElement.classList.remove("valueValidationMessageHintError");
        }
    }

    showEditValueDialog(
        contentContainer,
        function() {
            return inputElement.value.trim();
        },
        function(editedValue) {
            const valid = valueConfig.validator(editedValue);
            if (!valid && errorMessageElement !== null) {
                errorMessageElement.classList.add("valueValidationMessageHintError");
            }
            return valid;
        }, 
        commitFunction
    );
}

function showRangeInputDialog(valueConfig, initialValue, commitFunction) {
    const contentContainer = createElementWithStyle("div", "dialogContentVerticalContainer");
    addLabel(contentContainer, valueConfig.label);

    const rangeContainer = createElementWithStyle("div", "dialogContentHorizontalContainer");
    const inputElement = createElementWithStyle("input", "settingsRangeInput");
    inputElement.type = "range";
    inputElement.value = initialValue;
    if (valueConfig.editorParams) {
        for (const [paramKey, paramValue] of Object.entries(valueConfig.editorParams)) {
            inputElement[paramKey] = paramValue;
        }
    }

    const rangeValueText = createElementWithStyle("div", "settingsRangeInputValueText");
    inputElement.oninput = function() {
        rangeValueText.textContent = valueConfig.editorParams.valueLabelPrefix + inputElement.value + valueConfig.editorParams.valueLabelSufix;
    }
    inputElement.oninput();
    rangeContainer.appendChild(inputElement);
    rangeContainer.appendChild(rangeValueText);

    contentContainer.appendChild(rangeContainer);

    showEditValueDialog(
        contentContainer,
        function() {
            return parseInt(inputElement.value);
        },
        valueConfig.validator, 
        commitFunction
    );
}

function showCheckboxInputDialog(valueConfig, initialValue, commitFunction) {
    const contentContainer = createElementWithStyle("div", "dialogContentHorizontalContainer");
    addLabel(contentContainer, valueConfig.label);

    const inputElement = document.createElement("input");
    inputElement.type = "checkbox";
    inputElement.checked = initialValue;
    contentContainer.appendChild(inputElement);

    showEditValueDialog(
        contentContainer,
        function() {
            return inputElement.checked;
        },
        valueConfig.validator, 
        commitFunction
    );
}

function showSelectInputDialog(valueConfig, initialValue, commitFunction) {
    const contentContainer = createElementWithStyle("div", "dialogContentVerticalContainer");
    addLabel(contentContainer, valueConfig.label);

    const selectElement = document.createElement("select");
    let index = 0;
    let selectedIndex = -1;
    valueConfig.editorParams.options.forEach(option => {
        const optionElement = document.createElement("option");
        optionElement.text = option.text ? option.text : option.value;
        selectElement.add(optionElement, null);

        if (selectedIndex === -1 && option.value == initialValue) {
            selectedIndex = index;
        }
        index ++;
    });
    selectElement.value = initialValue;
    selectElement.selectedIndex = selectedIndex;
    
    contentContainer.appendChild(selectElement);

    showEditValueDialog(
        contentContainer,
        function() {
            if (selectElement.selectedIndex == -1) {
                return null;
            }
            return valueConfig.editorParams.options[selectElement.selectedIndex].value;
        },
        valueConfig.validator, 
        commitFunction
    );
}

function addLabel(contentContainer, text) {
    const labelElement = createElementWithStyle("div", "dialogTitleText");
    labelElement.textContent = text;
    contentContainer.appendChild(labelElement);
}

function showEditValueDialog(content, editedValueProvider, validateFunction, commitFunction) {
    showDialog(
        content,
        {
            label: "Done",
            action: function() {
                const editedValue = editedValueProvider();
                if (validateFunction && !validateFunction(editedValue)) {
                    return false;
                }
                commitFunction(editedValue);
                return true;
            }
        },
        {
            label: "Cancel",
            action: function() {
                return true;
            }
        }
    );
}
