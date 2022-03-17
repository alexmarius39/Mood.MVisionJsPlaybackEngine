function identityFunction(value) { return value; };

function trueFunction() { return true };

function falseFunction() { return false };

function createElementWithStyle(name, ...styleClasses) {
    const element = document.createElement(name);
    element.classList.add(styleClasses);
    return element;
}