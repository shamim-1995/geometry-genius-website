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
    addToCalculationEntry('Triangle', area);
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


    // Validate input:width and length

    if(isNaN(width) || isNaN(length)){
        alert('Please input a number.');
        return;
    }

    // Calculate area.
    const area = width * length;
    console.log(area);

    // show rectangle area.

    const areaSpan = document.getElementById('rectangle area');
    areaSpan.innerText = area;

    addToCalculationEntry('Rectangle', area);
}


// Reusable function....reduce duplicate code.

function calculateParallelogramArea() {
    const base = getInputValue('parallelogram base');
    // console.log(base);

    const height = getInputValue('parallelogram height');
    console.log(height);

    // Validate input.
    if(isNaN(base) || isNaN(height)){
        alert('Please insert a number.');
        return;
    }

    const area = base * height;
     setElementInnerText('parallelogram area', area);

     // Add to calculation entry.

     addToCalculationEntry('parallelogram', area)


}


// Ellipse function.

 function calculateEllipseArea(){
    const majorRadius = getInputValue('ellipse major radius');
    const minorRadius = getInputValue('ellipse minor radius');
    const area = 3.14 * majorRadius * minorRadius;
    const areaTwoDecimal = area.toFixed(2);
    setElementInnerText('ellipse area', areaTwoDecimal);

    addToCalculationEntry('Ellipse', areaTwoDecimal);
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


// Add to calculation entry.

/*

1. get the element where you want to add the dynamic HTML.

2.create an element you want to add.

3. If needed add some class.

4. set innerHTML . it could be dynamic Template string.

5. append the created element as a child of the parent.
*/ 

function addToCalculationEntry(areaType, area){
    console.log(areaType+ ' ' + area);
    const calculationEntry = document.getElementById('calculation-entry');

    const count = calculationEntry.childElementCount;

    const p = document.createElement('p');
    p.classList.add('my-4');
    p.innerHTML = `${count + 1}. ${areaType} ${area} cm<sup>2</sup> <button class="btn btn-sm btn-success">Convert</button>`;

    calculationEntry.appendChild(p);

}




// Data validation.

/*
1. set the proper type of the input field.(number, data, email).

2. check type using typeof.

3. ssNaN:means Not a Number. isNaN is checking whether the input is not a number or not.

*/ 