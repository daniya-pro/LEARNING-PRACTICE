//1
var pro = prompt('name')
var al = alert('aslamu alaikum ' + pro)
    //2
var myVar = parseInt(prompt('no'))
var myString = "";
for (i = 1; i < 13; i++) {
    myString += myVar + " x " + i + " = " + (i * myVar) + '\n';
}
alert(myString);
//4
var gender = prompt('tell me your gender')
if (gender === 'female') {
    alert("good morning ma'am")
} else if (gender === 'male') {
    alert('good morning sir')
} else {

    alert("sorry but it is not a gender you can't enter this website read privacy policy also we have written there that only educated person can join the web")

}
//5
var promp = prompt('tell us traphic light color(between red yellow green if u wite anything else i will not respond or reply . ok? ) we will tell u mening')
if (promp === 'red') {
    alert('vehicle must stop')

} else if (promp === 'yellow') {
    alert('vehicle should get ready to move')

} else {
    alert('vehicle should move now')
}

//9
var totalmarks = 300;
var marksobtain = parseInt(prompt('marks batao'));
var percentage = (marksobtain / totalmarks) * 100
if (percentage >= 80) {
    alert('Mark Sheet \n Total Marks : ' + totalmarks + '\n Marks Obtained : ' + marksobtain + '\n Percentge : ' + percentage + ' % \n Grade : A-one ' + '\n Remarks : Excellent')

} else if (percentage >= 70) {
    alert('Mark Sheet \n Total Marks : ' + totalmarks + '\n Marks Obtained : ' + marksobtain + '\n Percentge : ' + percentage + ' % \n Grade : A ' + '\n Remarks : Good')

} else if (percentage >= 60) {
    alert('Mark Sheet \n Total Marks : ' + totalmarks + '\n Marks Obtained : ' + marksobtain + '\n Percentge : ' + percentage + ' % \n Grade : B ' + '\n Remarks : Need improvemet')

} else {
    alert('Mark Sheet \n Total Marks : ' + totalmarks + '\n Marks Obtained : ' + marksobtain + '\n Percentge : ' + percentage + ' % \n Grade : fail' + '\n Remarks : tooo bod need very very hard work!. better luck next time!.')
}

//10

////prompts portion started

var NameOfItem1 = prompt('tell us what you buy 1st');

var NameOfItem2 = prompt('tell us what you buy 2nd');

var PriceOfItem1 = parseInt(prompt('tell us price of ' + NameOfItem1 + '(donot tell us numbers in word only write numbes like 1,2,3 nothing else)'))

var PriceOfItem2 = parseInt(prompt('tell us price of ' + NameOfItem2 + '(donot tell us numbers in word only write numbes like 1,2,3 nothing else)'))

var QuantityoFItem1 = parseInt(prompt('tell us quantity of ' + NameOfItem1 + '(donot tell us numbers in word only write numbes like 1,2,3 nothing else)'));

var QuantityoFItem2 = parseInt(prompt('tell us quantity of ' + NameOfItem2 + '(donot tell us numbers in word only write numbes like 1,2,3 nothing else)'))

var ShippingCharges = parseInt(prompt('tell us shipping charges donot tell us numbers in word only write numbes like 1,2,3 nothing else)'))

//prompt portion ended

//variables portion has been stated

var TotalPriceOfItem1 = (PriceOfItem1 * QuantityoFItem1)

var TotalPriceOfItem2 = (PriceOfItem2 * QuantityoFItem2)

var FinalTotal = (TotalPriceOfItem1 + TotalPriceOfItem2 + ShippingCharges)

//variable portion has been ended

//alert portion has been started



alert(FinalTotal >= 2000 ? 'your bill is ' + FinalTotal + ' but we are you discount of 10% because your bill is greater than or equals to 2000 so your real bill is ' + (FinalTotal * 0.10) : 'your bill is' + FinalTotal)
    //alert portion has been ended

//14
//var types of var
var stringsorstring = 'pakistan'
var numberornumbers = 33;
var boleanorboleans = true;
//checking types
var typeeofstring = typeof stringsorstring
var typeeofnumbers = typeof numberornumbers
var typeeofboleans = typeof boleanorboleans
alert('type of ' + stringsorstring + ' is ' + typeeofstring + '\n type of ' + numberornumbers + ' is ' + typeeofnumbers + '\n' + ' type of ' + boleanorboleans + ' is ' + typeeofboleans + '\n')