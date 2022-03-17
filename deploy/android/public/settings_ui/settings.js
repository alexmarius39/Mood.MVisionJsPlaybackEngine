   
    function closeApp() {
        var uiWindow = document.getElementById("myModal");
        if (uiWindow != null) {
            while(uiWindow.firstChild != null) {
                uiWindow.removeChild(uiWindow.firstChild);
            }
            uiWindow.style.display = "none";
        }
        var htmlUISettingsButton = document.getElementById("sync_settings_id");
        if (htmlUISettingsButton != null) {
            htmlUISettingsButton.style.display = "block";
        }
    }

    function closeAndRestartApp() {
        closeApp();
        if (global_SDKRenderer != null) {        
            global_SDKRenderer.restartDevice();
        }
    }

    function createSettingsAppControls(settingsOptions, settingsValues) {
        var uiWindow = document.getElementById("myModal");
        if (global_SDKRenderer == null || 
            typeof global_SDKRenderer.aSettingsSync != "function" || 
            typeof global_SDKRenderer.restartDevice != "function" || 
            uiWindow == null) 
        {
            return;
        }
        
        const settingsConfig = createSettingsConfig(settingsOptions);
        if (settingsConfig == null || settingsConfig.sections == null || settingsConfig.keysConfig == null)
            return;

        const settingsChanges = {};
    
        var backActionButton = function() {
            if (settingsChanges != null && Object.keys(settingsChanges).length > 0) {
                showConfirmationDialog(
                    "There are unsaved changes. Discard?",
                    {
                        label: "Discard",
                        action: function() {
                            closeApp();                            
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
            } else {
                closeApp();
                return true;
            }
        }

        var actionButtons = {
            id: "appHeaderSaveButton",
            text: "Save",
            action: function() {
                showConfirmationDialog(
                    "Application will be restarted to apply new settings.",
                    {
                        label: "Save & restart",
                        action: function() {
                            const aSettingsSyncService = global_SDKRenderer.aSettingsSync();
                            if (aSettingsSyncService != null && aSettingsSyncService._iSettingsSyncConfig != null) {
                                var aDefaultSettingsSync = aSettingsSyncService._iSettingsSyncConfig.getDefaultSettingsSync();
                                var crtTimestamp = Date.now();
                                for (const key in settingsChanges) {
                                    let settingValue = settingsChanges[key];
                                    if (settingValue != null) {
                                      settingValue["timestamp"] = crtTimestamp;
                                    }
                                }
                    
                                aSettingsSyncService._iSettingsSyncMain.updateServerSettings(settingsChanges, aDefaultSettingsSync, null, null, closeAndRestartApp);
                            } else {
                                closeAndRestartApp();
                            }

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
            },
            initialStateDisabled: true
        }

        var header = createAppHeader("Settings", backActionButton, actionButtons);
        uiWindow.appendChild(header);

        const sectionDetailsContainer = document.createElement("div");
        sectionDetailsContainer.classList.add('sectionDetailsContainer');
    
        const createSectionsButtons = function() {
            const sectionsContainer = document.createElement("div");
            sectionsContainer.classList.add('sectionsContainer');

            var settingsConfigSections = settingsConfig.sections;
            if (Object.keys(settingsConfigSections).length > 0) {
                settingsConfigSections.forEach(section => {
                    if (section.disabled === true) {
                        return;
                    }
                    const sectionButton = createSectionButton(section);
                    sectionButton.onclick = setSelectedSection.bind(
                        null, section, sectionButton
                    );
                    sectionsContainer.appendChild(sectionButton);
                });    
            }

            return sectionsContainer;
        }
    
        const createSectionButton = function(section) {
            const button = document.createElement("button");
            button.classList.add("listItemButton", "sectionButton");
            button.textContent = section.title;
            return button;
        }
    
        const setSelectedSection = function(section, sectionButton) {
            while(sectionDetailsContainer.firstChild != null) {
                sectionDetailsContainer.removeChild(sectionDetailsContainer.firstChild);
            }
    
            var sectionButtons = document.querySelectorAll(".sectionButton");
            if (sectionButtons != null && sectionButtons.length > 0) {
                sectionButtons.forEach(button => {
                    button.classList.remove("listItemButtonSelected");
                });
                sectionButton.classList.add("listItemButtonSelected");    
            }

            const updateEditableStates = function() {
                var dataViewButtons = sectionDetailsContainer.querySelectorAll(".dataViewButton");
                if (dataViewButtons != null && dataViewButtons.length > 0) {
                    dataViewButtons.forEach(button => {
                        button.disabled = !button.isEditable();
                    });    
                }
            }
    
            const getValue = function(getter, valueKey) {
                let value;
                if (settingsChanges[valueKey] != null) {
                    value = settingsChanges[valueKey].value;
                } else if (settingsValues[valueKey] != null) {
                    value = settingsValues[valueKey].value;
                } else {
                    value = null;
                }
    
                return getter(value);
            }
        
            var sectionKeys = section.keys;
            if (Object.keys(sectionKeys).length > 0) {
                sectionKeys.forEach(key => {
                    const button = document.createElement("button");
                    button.classList.add("listItemButton", "dataViewButton");
            
                    const settingsKeyConfig = settingsConfig.keysConfig[key];
                    if (settingsKeyConfig == null || 
                        settingsKeyConfig.label == null ||
                        settingsKeyConfig.valueKey == null || 
                        typeof settingsKeyConfig.getter != "function" ||
                        typeof settingsKeyConfig.setter != "function" ||
                        typeof settingsKeyConfig.valueToString != "function" ||
                        settingsValues[settingsKeyConfig.valueKey] == null)
                    {
                        return;
                    }
                        
                    const title = document.createElement("div");
                    title.classList.add("dataViewTitle");
                    title.textContent = settingsKeyConfig.label + ":";
                    button.appendChild(title);
            
                    const details = document.createElement("div");
                    details.classList.add("dataViewDetails");
                    details.textContent = settingsKeyConfig.valueToString(getValue(settingsKeyConfig.getter, settingsKeyConfig.valueKey));
                    button.appendChild(details);
                    sectionDetailsContainer.appendChild(button);
        
                    const valueCommit = function(value) {
                        const initialValue = getValue(identityFunction, settingsKeyConfig.valueKey);
                        const newValue = settingsKeyConfig.setter(initialValue, value);
                        if (newValue != settingsValues[settingsKeyConfig.valueKey].value) {
                            settingsChanges[settingsKeyConfig.valueKey] = {
                                value: newValue
                            };
                        } else {
                            delete settingsChanges[settingsKeyConfig.valueKey];
                        }
        
                        details.textContent = settingsKeyConfig.valueToString(getValue(settingsKeyConfig.getter, settingsKeyConfig.valueKey));
                        updateEditableStates();
                        var saveButton = document.getElementById("appHeaderSaveButton");
                        if (saveButton != null) {
                            saveButton.disabled = Object.keys(settingsChanges).length === 0;
                        }
                    }
        
                    button.onclick = function() {
                        showInputDialog(
                            settingsKeyConfig, 
                            getValue(settingsKeyConfig.getter, settingsKeyConfig.valueKey),
                            valueCommit
                        );
                    }
        
                    button.isEditable = settingsKeyConfig.isEditable ? settingsKeyConfig.isEditable.bind(null, getValue.bind(null, settingsKeyConfig.getter)) : trueFunction;
                });
        
                updateEditableStates();    
            }
        }
    
        uiWindow.appendChild(createSectionsButtons(
            sectionDetailsContainer, 
            settingsConfig, 
            settingsValues
        ));
        uiWindow.appendChild(sectionDetailsContainer);
        uiWindow.appendChild(createElementWithStyle("div", "verticalSeparator"));
    }    

    function init() {
        if (global_SDKRenderer != null && typeof global_SDKRenderer.aSettingsSync == "function") {
            const aSettingsSyncService = global_SDKRenderer.aSettingsSync();
            if (aSettingsSyncService != null && aSettingsSyncService._aPlaybackGlobalConfig != null) {
                var settingsValues = aSettingsSyncService._aPlaybackGlobalConfig.getJsonDeviceSettings();
                if (settingsValues == null)
                    return;
                const settingsOptions = {};
                createSettingsAppControls(settingsOptions, settingsValues);
            }
        }
    }
    
