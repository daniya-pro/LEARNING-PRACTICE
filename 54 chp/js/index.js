// firrst way

function swapPic() {
    document.getElementById("before").src = "../images/before (2).png";
}
// sec way
function swapPic() {
    var pic = document.getElementById("before");
    pic.src = "../images/before (2).png";
}
function link() {
    var l = document.getElementById("a")

    if (l.innerText === 'click here to get link') {
        console.log("if")
        l.innerText = "Click Here to see what inside the link"

    } else {
        console.log("else")
        l.innerText === 'click here to get link'
        l.href = "../index.html"
    }

}
function link2() {

    var l = document.getElementById("a1")
    l.className = "a"


}
function button1() {
    var m = document.getElementById("p")
    m.style.fontSize = "xx-small"
    m.innerHTML = "i am so small"
}
function button2() {
    var m = document.getElementById("p")
    m.innerHTML = "i am medium text"
    m.style.fontSize = "large"

}
function button3() {
    var m = document.getElementById("p")
    m.style.fontSize = "xxx-large"
    m.innerHTML = "i am so big"

}
function button4() {

    var m = document.getElementById("p")
    m.innerHTML = ""

}
var pm = document.getElementById("pm")




function button5() {
    var inf = parseInt(document.getElementById("in").value)

    if (isNaN(inf)) {

        inf=1
    } 

    
    var font = parseInt( pm.style.fontSize.replace('px',''))+inf
    pm.style.fontSize =font
        console.log(font ,typeof font,inf)
    
}
function button6() {
    var inf = parseInt(document.getElementById("in").value)

    if (isNaN(inf)) {

        inf=1
    } 

    
    var font = parseInt( pm.style.fontSize.replace('px',''))-inf
    pm.style.fontSize =font
        console.log(font ,typeof font,inf)
}
function input() {

    var pm2 = document.getElementById("pm")
    pm2.style.fontSize = inf
}
var m = document.getComputedStyle("but")
console.log(m)