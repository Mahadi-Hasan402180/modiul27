
function TriangleCalculate(){

//    triangle - base calculate 
   const baseField = document.getElementById('triangle-base');
   const baseFieldText = baseField.value;
   const base = parseFloat(baseFieldText);
   console.log(base);

//    triangle - height calculate 
   const heightField = document.getElementById('triangle-height');
   const heightFieldText = heightField.value;
   const height = parseFloat(heightFieldText);
   console.log(height); 

// calculate triangle-area

const area = 0.5 * base * height;
console.log(area);
const triangleArea = document.getElementById('triangle-area');
triangleArea.innerText = area;
addToCalculationEntry('Triangle',area);

}

function rectangleCalculate(){

    // set rectangle-width 
    const widthField = document.getElementById('rectangle-width');
    const rectangleWidthField = widthField.value;
    const width = parseFloat(rectangleWidthField);
    console.log(width);

    //set rectangle-length
    const lengthField = document.getElementById('rectangle-length');
    const rectangleLengthField = lengthField.value;
    const length = parseFloat(rectangleLengthField);
    console.log(length);

    //set rectangleCalculate area

    const area = width * length;
    console.log(area);
    const rectangleArea = document.getElementById('rectangle-area');
     rectangleArea.innerText = area;
     addToCalculationEntry('Rectangle',area);

}

//parallelogramCalculate

function parallelogramCalculate(){
   
    const base = inputField('parallelogram-base');
    const height = inputField('parallelogram-height');
    const area = base * height;
    setElementText('parallelogram-area',area);

    // add addToCalculationEntry

    addToCalculationEntry('parallelogram',area);
    
}

// ellipseCalculate

function  ellipseCalculate(){
    const majorRadius = inputField('ellipse-first-radius');
    const minorRadius = inputField('ellipse-second-radius');
    const area =(3.1416 * majorRadius * minorRadius).toFixed(2) ;
    setElementText('ellipse-area',area);
    addToCalculationEntry('ellipse',area);

    
}

//set reusable function 

function inputField(id){
    const inputField = document.getElementById(id);
    const inputFieldText = inputField.value;
    const input = parseFloat(inputFieldText);
    return input;
}

// get reusable function 
function setElementText (elementId,area){
    const element = document.getElementById(elementId);
    element.innerText = area;
}

// add addToCalculation Entry 

function addToCalculationEntry(areaType,area){


    const calculationEntry = document.getElementById('calculation-entry');

    const count = calculationEntry.childElementCount;

    const p = document.createElement('p');
    p.classList.add('my-4');
    p.innerHTML =`${count+1}${'.'} ${areaType} ${area} cm<sup>2</sup> <button class = "btn btn-primary">convert</button>`;
    calculationEntry.appendChild(p);
   
}