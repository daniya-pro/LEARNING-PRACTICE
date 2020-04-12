var no1 = parseInt(prompt("give a number",5))
var no2 = parseInt(prompt("give a sec number",5))

var Minus = no1 - no2;
var Plus = no1 + no2;
var Devide = no1 / no2;
var Multi = no1 * no2;

var MinusString = no1 + " - " + no2 + " = ";
var PlusString = no1 + " + " + no2 + " = ";
var DevideString = no1 + " / " + no2 + " = ";
var MultiString = no1 + " x " + no2 + " = ";

                // "5 - 5 = " + 0
var MinusResult = MinusString + Minus; //"5 - 5 = 0"
                // "5 + 5 " + 10
var PlusResult = PlusString + Plus; // "5 + 5 = 10"
                // "5 / 5 = " + 1
var DevideResult = DevideString + Devide; //"5 / 5 = 1"
                // "5 x 5 " + 25
var MultiResult = MultiString + Multi; //"5 x 5 = 25"

alert("your answer is \n\n" + "Subtraction: " + "\n" + MinusResult + "\n" + "Addition: " + "\n" + PlusResult + "\n" + "Division: " + "\n" + DevideResult + "\n" + "Multiply" + "\n" + MultiResult)

