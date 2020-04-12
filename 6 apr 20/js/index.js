//variables of calculator
var promp = parseInt(prompt('number'))

var promp1 = parseInt(prompt('2nd number'))

var promp2 = prompt('what to do (i mean multiply(* or x) , devide(/), add(+) or subtract(-))')


//calculator
if (promp2 === '*' || promp2.toLowerCase() === 'x' || promp2.toLowerCase() === 'multiply' || promp2.toLowerCase() === 'multiplication') {
    alert('The answer is \n' + promp + " x " + promp1 + " = " + (promp * promp1))
} else if (promp2 === '/' || promp2.toLowerCase === 'divide' || promp2.toLowerCase === 'division') {
    alert('The answer is \n' + promp + " / " + promp1 + " = " + (promp / promp1))
} else if (promp2 === '+' || promp2.toLowerCase === 'add' || promp2.toLowerCase === 'addition') {
    var plus = (promp + promp1)
    alert('The answer is \n' + promp + " + " + promp1 + " = " + plus)

} else if (promp2 === '-' || promp2.toLowerCase === 'subtract' || promp2.toLowerCase === 'sub' || promp2.toLowerCase === 'subtraction') {
    alert('The answer is \n' + promp + " - " + promp1 + " = " + (promp - promp1))
}








//variables of tables
var promp = parseInt(prompt('number'))

//tables
alert(promp + " x 1 = " + (promp * 1) + '\n' + promp + " x 2 = " + (promp * 2) + '\n' + promp + ' x 3 = ' + (promp * 3) + '\n' + promp + ' x 4 = ' + (promp * 4) + '\n' + promp + " x 5 = " + (promp * 5) + '\n' + promp + 'x 6 = ' + (promp * 6) + '\n' + promp + ' x 7 = ' + (promp * 7) + '\n' + promp + ' x 8 = ' + (promp * 8) + '\n' + promp + ' x 9 = ' + (promp * 9) + '\n' + promp + ' x 10 = ' + (promp * 10))