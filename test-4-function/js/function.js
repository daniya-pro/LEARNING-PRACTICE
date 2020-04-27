function q1test(){

return "I can use this function several time";

}

q1test()
q1test()
q1test()
q1test()
q1test()
q1test()
q1test()
q1test()
q1test()
q1test()

function q2test(){
var datetime = new Date();
document.write("<p>"+datetime+"</p>")

}

function q3test(){

    var f = document.getElementById("first").value
    var l = document.getElementById("last").value
    var pf= document.getElementById("p1")
    var pl= document.getElementById("p2")
  if(!f){ //""
    pf.innerHTML = "Error firstname require"
//error
  }
 if(!l){
    pl.innerHTML = "Error lastname require"
 //error of l
  }
  else{
    pl.innerHTML = ""
    pf.innerHTML = ""
    alert("Welcome "+ l + ' ' +f)
           // nO errors
  }
           
}
function q4test(e){
e.preventDefault()
var mix = parseInt( document.getElementById("no1").value )+ parseInt( document.getElementById("no2").value )
var mix2 =parseInt(document.getElementById("no1").value)
var mix3 =parseInt(document.getElementById("no2").value)
var p1 = document.getElementById("p3")
var p2 = document.getElementById("p4")

if(!mix2||isNaN(mix2)){ //""
p1.innerHTML = "Error number must required"
//error
}
if(!mix3||isNaN(mix3)){
p2.innerHTML = "Error number must required"
//error of l
}
else{
    p1.innerHTML = ""
    p2.innerHTML = ""

alert("You're answer is " +mix2+" + "+mix3+" = "+mix )


}}
function q5test(){
    var n1 =parseInt(document.getElementById("num1").value)
    var n2 =parseInt(document.getElementById("num2").value)
    var n3 =document.getElementById("Op").value
    var p5 =document.getElementById("p5")
    var p6 =document.getElementById("p6")
    var p7 =document.getElementById("p7")
if(isNaN(n1)){

    p5.innerHTML = "need a number"

}
if(isNaN(n2)){
    p6.innerHTML = "need a number"
}
if(n3 === '' ||typeof n3 === Number){

    p7.innerHTML = "need a operator"

}
else{

p5.innerHTML = ""
p6.innerHTML = ""
p7.innerHTML = ""

}

//if
if(n3 === '-'){}
else if(n3==="+"){

alert(n1 +' + ' + n2 + " = " +parseInt(n1 + n2))

}
else if(n3==="/"){

    alert(n1 +' / ' + n2 + " = " +parseInt(n1 / n2))

}
else if(n3==="*"){
    
    alert(n1 +' * ' + n2 + " = " +parseInt(n1 * n2))

}
else{
p5.innerHTML = "wrong no"
p6.innerHTML = "wrong no"
p7.innerHTML = "wrong Operator"
}

}
function q6test(num,power){

    return num**power
    }

    solvePower(2,8)
