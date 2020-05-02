var flag = true
var b  = getElement("box")
function getElement(id){

    return document.getElementById(id)
}
function cleaned(){
  //var b  = getElement("box")
  var cleanedB= b.value
  .replace(/\++/g,"+")
  .replace(/\-+\-/g,"-")
  .replace(/\/+\//g,"/")
  .replace(/\x+\x/g,"x")
  .replace(/\s/g, '')

 b.value=cleanedB
}
function onclicks(value){
 // cleaned()
 if(flag === false){
  b.value = ''
 flag = true
 }

//others
 //var b  = getElement("box")
  var cl = getElement("clear")
  b.style.color="black"

  b.value += value
  

  if(/[0-9]/.test(b.value[0])===false&&b.value.startsWith("+")===false&&b.value.startsWith("-")===false){

    b.value =""
    
    }
   cleaned()
   
}

function erase(){
b.value = ""
b.style.color="black"

}
function eq(){
if(b.value){

var x = document.getElementById("box").value
   var y= eval(x.replace('x','*'))

   b.value=y;
   flag = false;
}
}

 