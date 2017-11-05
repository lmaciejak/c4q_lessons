var outputDiv;

var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var operators = ['+', '-', '*', '/'];
var operations = ['add', 'sub', 'mul', 'div']

/**
 * @function calculate
 * @param  {string} mathExp {the expression to calculate}
 * @return {number} {the result of the calculation or NaN if it couldn't be done}
 */
function calculate(mathExp) {
  try {
    return eval(mathExp)
  } catch (e) {
    return NaN
  }
}


// document.addEventListener('DOMContentLoaded', function() {
//   outputDiv = document.getElementById('output');

//   document.addEventListener('click', function(event) {
//     var elementId = event.target.id;
//     var rows = document.querySelectorAll('div.row')

//       if (document.querySelectorAll('div.row') && ro)
//     // for (var i = 0; i < rows.length; i++) { 

//         outputDiv.innerText += event.target.innerText
//     }
//     outputDiv.innerText += elementId;
//     // logging the element id for debug purposes
//     console.log(elementId)

//   })
// })



document.addEventListener('DOMContentLoaded', function () {
  outputDiv = document.getElementById('output');

  console.log(event.target.innerHTML)
  document.addEventListener('click', function (event) {
    var elementInner = event.target.innerText;
    
    if (elementInner === '=') {
      outputDiv.innerText = calculate(outputDiv.innerText)
    } else if (elementInner === 'C') {
      outputDiv.innerText = ''
    }
    else if (elementInner === '7 8 9 +' ||
      elementInner === '4 5 6 -' ||
      elementInner === '1 2 3 *' ||
      elementInner === 'C 0 = /') {
      outputDiv.innerText += '';
    }
    else {
      outputDiv.innerText += elementInner;
    }
    // logging the element id for debug purposes
    console.log(elementInner)

  
  })

})


// var lastOutput = outputDiv.innerText[outputDiv.innerText.length-1]

// console.log(lastOutput)
// if(elementInner === lastOutput && elementInner === '+') {
//   outputDiv.innerText += ''}