function colorchange(this1) {
  if (this1.innerText == "MOUSE IS ON") {
    this1.innerText = "MOUSE IS OFF";
  } else {
    this1.innerText = "MOUSE IS ON";
  }
}

function colorchange2(this2) {
  //this2.setAttribute("style", "background-color: yellow;");3
  this2.style.backgroundColor = "yellow";
}
function colorchange23(this23) {
  this23.style.backgroundColor = "white";
}
function colorchange3(this3) {
  //  this3.setAttribute("src", "../images/04cb5a80834ece33456879660d8fc00b.png");

  //alert(this3.src)
  if (
    b.src ==
    "file:///C:/Users/DANIYA/Desktop/work/LEARNING-PRACTICE/images/04cb5a80834ece33456879660d8fc00b8.png"
  ) {
    b.setAttribute("src", "../images/04cb5a80834ece33456879660d8fc00b.png");
  } else {
    b.setAttribute("src", "../images/04cb5a80834ece33456879660d8fc00b8.png");
  }
  var omg = document.getElementById("o");
  if (
    omg.src ==
    "file:///C:/Users/DANIYA/Desktop/work/LEARNING-PRACTICE/images/off.png"
  ) {
    omg.setAttribute("src", "../images/on.png");
  } else {
    omg.setAttribute("src", "../images/off.png");
  }
}
var color;
alert("box pr click kro ");
function colorchange52(this52) {
  var p;
  p = document.getElementById('p')
  color = prompt(
    "color batao box ka ya phr apna hi koi favourite color batao agr color galt hhua to tumhe koi respnd nhi milega ok?"
  );
  alert("pr hover karo");
  p.innerText = " Hover Me";
}
function colorchange5(this5) {
  this5.style.backgroundColor = color;
  p.innerText = " Click Me";


}

function colorchange4(this4) {
  if (this4.style.marginLeft === "0px") {
    this4.style.marginLeft = "1199px";
  } else {
    this4.style.marginLeft = "0";
  }
}

function checkAddress() {
  if (document.getElementById("email").value === "") {
    alert("Email address required.");
  }
}
