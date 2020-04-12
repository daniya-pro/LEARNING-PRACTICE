//1
var age = "i am" + 11 + 'years old'
alert(age)
//3

var date = new Date()
var fullyear = date.setFullYear(2009);
var birthyear = date.getFullYear()
var k = alert('me ' + birthyear)
//4
var Visitors_name = prompt('name')
var Product_title =  prompt('what do you want to buy') 
var Quantity = prompt('how much')
document.write('<h1>'+Visitors_name+' has buy '+Quantity+' '+Product_title+'</h1>')