function createAppHeader(appTitle, backButtonAction, ...actionButtons) {
    const appHeader = document.createElement("div");
    appHeader.classList.add('appHeader');
    const backButton = document.createElement("a");
    backButton.classList.add("backButton");
    backButton.href = "#";
    const dummySpan = document.createElement("span");
    dummySpan.classList.add("backButtonSpan");
    backButton.appendChild(dummySpan);
    backButton.addEventListener("click", backButtonAction);
    appHeader.appendChild(backButton);
    appHeader.appendChild(document.createTextNode(appTitle));
    appHeader.appendChild(createElementWithStyle("div", "appHeaderButtonsSeparator"));

    if (actionButtons) {
        actionButtons.forEach(button => {
            const buttonElement = createElementWithStyle("button", "appHeaderButton");
            buttonElement.id = button.id;
            buttonElement.textContent = button.text;
            buttonElement.onclick = button.action;
            if (button.initialStateDisabled === true) {
                buttonElement.disabled = true;
            }
            appHeader.appendChild(buttonElement);
        });
    }

    return appHeader;
}

function showMessageDialog(message, acknowledgeFunction = null) {
    const contentContainer = createElementWithStyle("div", "dialogContentVerticalContainer");
    const labelElement = createElementWithStyle("div", "dialogMessageText");
    labelElement.textContent = message;
    contentContainer.appendChild(labelElement);

    return showDialog(
        contentContainer,
        {
            label: "OK",
            action: function() {
                if (acknowledgeFunction) {
                    acknowledgeFunction();
                }
                return true;
            }
        }
    );
}

function showConfirmationDialog(message, confirmButtonData, cancelButtonData) {
    const contentContainer = createElementWithStyle("div", "dialogContentVerticalContainer");
    const labelElement = createElementWithStyle("div", "dialogMessageText");
    labelElement.textContent = message;
    contentContainer.appendChild(labelElement);

    return showDialog(
        contentContainer,
        confirmButtonData,
        cancelButtonData
    );
}

function showLoadingDialog(message, cancelButtonData = null) {
    const contentContainer = createElementWithStyle("div", "dialogContentVerticalContainer");
    const labelElement = createElementWithStyle("div", "dialogMessageText");
    labelElement.textContent = message;
    contentContainer.appendChild(labelElement);
    
    return showDialog(contentContainer, null, cancelButtonData);
}

function showDialog(dialogContent, positiveButtonData = null, negativeButtonData = null) {
    const dialog = document.createElement("dialog");
    dialog.appendChild(dialogContent);

    if (positiveButtonData || negativeButtonData) {
        const buttonsContainer = createElementWithStyle("div", "dialogButtonsContainer");

        if (negativeButtonData) {
            const negativeButton = createElementWithStyle("button", "dialogButton");
            negativeButton.textContent = negativeButtonData.label;
            registerDialogButtonAction(dialog, negativeButton, negativeButtonData.action);
            buttonsContainer.appendChild(negativeButton);
        }
    
        if (positiveButtonData) {
            const positiveButton = createElementWithStyle("button", "dialogButton");
            positiveButton.textContent = positiveButtonData.label;
            registerDialogButtonAction(dialog, positiveButton, positiveButtonData.action);
            buttonsContainer.appendChild(positiveButton);
        }
        
        dialog.appendChild(buttonsContainer);
    }

    document.body.appendChild(dialog);
    dialog.showModal();
    return dialog;
}

function registerDialogButtonAction(dialog, button, buttonAction) {
    button.onclick = function() {
        let done;
        if (buttonAction) {
            done = buttonAction();
        } else {
            done = true;
        }

        if (done) {
            dialog.close();
            dialog.remove();
        }
    }
}