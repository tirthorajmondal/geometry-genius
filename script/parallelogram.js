function calculateParallelogramArea() {
    const base = getInputValueById('parallelogram-base');
    console.log('value of base:', base);
    const height = getInputValueById('parallelogram-height');
    console.log('value of height:', height);

    const area = base * height;
    console.log('value of area is:', area);


    setInnerTextById('parallelogram-area', area);
}

function getInputValueById(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputValueText = inputField.value;
    const inputValue = parseFloat(inputValueText);
    return inputValue;
}

function setInnerTextById(elementId, area) {
    const element = getElementById(elementId);
    element.innerText = area;
}