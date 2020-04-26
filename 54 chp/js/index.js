//firrst way

function swapPic() {
    document.getElementById("before").src = "../images/before (2).png";
}
//sec way
function swapPic() {
     var pic = document.getElementById("before");
     pic.src = "../images/before (2).png";
    }
function link(){
var l = document.getElementById("a")

if(l.innerText === 'click here to get link'){
    console.log("if") 
l.innerText = "Click Here to see what inside the link"

}
else{
    console.log("else") 
    l.innerText === 'click here to get link'
l.href="../index.html"
}

}
function link2(){

    var l = document.getElementById("a1")
    l.className = "a"


}