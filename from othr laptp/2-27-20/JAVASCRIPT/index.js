var age = parseInt(prompt("what is your age"))
var condition = (age >=18 && age <=40) || prompt("what is your name??")=="kashan"||prompt("how much money do you have")>=1000||prompt("how much marks did you get in your last paper")>=70;

if (condition) {
    alert("sit down kid do you want to drink tea or water")
}
else{
    alert("get out from my class or i will push you out")
}