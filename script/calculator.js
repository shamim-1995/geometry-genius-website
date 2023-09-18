function calculateTriangleArea() {
    // console.log('Button Clicked');

    // Get triangle base value.
    const baseField = document.getElementById('triangle base');

    const baseValueText = baseField.value;
    const base = parseFloat(baseValueText);
    console.log(base);

    // Get triangle height value.

    const heightField = document.getElementById('triangle height');
    const heightValueText = heightField.value;
    const height = parseFloat(heightValueText);
    console.log(height);

    // Calculate area.
    const area = 0.5 * base * height;
    console.log(area);

    // Show triangle area.

    const areaSpan = document.getElementById('triangle area');
    areaSpan.innerText = area;
}

function calculateRectangleArea() {
    // Get rectangle width

    const widthField = document.getElementById('rectangle width');
    const widthValueText = widthField.value;
    const width = parseFloat(widthValueText);
    console.log(width);

    // Get rectangle length.

    const lengthField = document.getElementById('rectangle length');
    const lengthValueText = lengthField.value;
    const length = parseFloat(lengthValueText);
    console.log(length);

    // Calculate area.
    const area = width * length;
    console.log(area);

    // show rectangle area.

    const areaSpan = document.getElementById('rectangle area');
    areaSpan.innerText = area;
}


// Reusable function....reduce duplicate code.

function calculateParallelogramArea() {
    const base = getInputValue('parallelogram base');
    console.log(base);

    const height = getInputValue('parallelogram height');
    console.log(height);

    const area = base * height;
     setElementInnerText('parallelogram area', area);


}


// Ellipse function.

 function calculateEllipseArea(){
    const majorRadius = getInputValue('ellipse major radius');
    const minorRadius = getInputValue('ellipse minor radius');
    const area = 3.14 * majorRadius * minorRadius;
    setElementInnerText('ellipse area', area);
 }







// Reusable get input value field in number.
function getInputValue(fieldId) {
    const inputField = document.getElementById(fieldId);
    const inputValueText = inputField.value;
    const value = parseFloat(inputValueText);
    return value;
}

// Reusable set span or paragraph or etc.

function setElementInnerText(elementId, area){
    const element = document.getElementById(elementId);
    element.innerText = area;


}