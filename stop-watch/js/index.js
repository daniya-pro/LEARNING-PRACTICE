$('.ui.modal')
  .modal('show')
;
$('.ui.dropdown')
  .dropdown();
  function sec0(){
if(document.getElementById("drop").value.toLowerCase() === "sec"){

  var sec= document.getElementById("num").value
var a=setInterval(()=>{
sec--;
console.log("Time Left: ", sec)
if(sec<1){
clearInterval(a)
}
},1000)


}
}