function q1test() {

    return "I can use this function several time";

}


function q2test(ev) {
    ev.preventDefault()
    var datetime = new Date();
    document.write("<p>" + datetime + "</p>")

}

function q3test(e) {
    e.preventDefault()

    var f = document.getElementById("first").value
    var l = document.getElementById("last").value
    var pf = document.getElementById("p1")
    var pl = document.getElementById("p2")
    if (! f) { // ""
        pf.innerHTML = "Error firstname require"
        // error
    }
    if (! l) {
        pl.innerHTML = "Error lastname require"
        // error of l
    } else {
        pl.innerHTML = ""
        pf.innerHTML = ""
        alert("Welcome " + l + ' ' + f)
        // nO errors
    }

}
function q4test(e) {
    e.preventDefault()
    var mix = parseInt(document.getElementById("no1").value) + parseInt(document.getElementById("no2").value)
    var mix2 = parseInt(document.getElementById("no1").value)
    var mix3 = parseInt(document.getElementById("no2").value)
    var p1 = document.getElementById("p3")
    var p2 = document.getElementById("p4")

    if (! mix2 || isNaN(mix2)) { // ""
        p1.innerHTML = "Error number must required"
        // error
    }
    if (! mix3 || isNaN(mix3)) {
        p2.innerHTML = "Error number must required"
        // error of l
    } else {
        p1.innerHTML = ""
        p2.innerHTML = ""

        alert("You're answer is " + mix2 + " + " + mix3 + " = " + mix)


    }
}
function q5test(ev) {
    ev.preventDefault()
    var regexToGetOnlyOperators = /(\-|\+|\/|\*)(?=[^\-\+\/\*]*$)/g  //This regex help us extract opertaors from string
    var n1 = document.getElementById("num1"); var n1Val =n1.value.replace(/[^0-9.]/g, "")
    var n2 = document.getElementById("num2"); var n2Val =n2.value.replace(/[^0-9.]/g, "")
    var n3 = document.getElementById("Op")
    var n3Val = n3.value.match(regexToGetOnlyOperators) //it returns array so we pick first index!
    var p7 = document.getElementById("p7")

    if ( n1Val=="" || n2Val==""  || n3Val ==null) {
        p7.style.color="red";
        console.log(typeof n1Val)
        p7.innerText = n1Val==""?"Number 1 is invalid. " :n2Val==""?"Number 2 is incorrect":"Invalid Operator"
        n1Val==""? n1.style.border= "2px solid red" :n2Val==""?n2.style.border= "2px solid red":n3.style.border= "2px solid red" ;
        return 
    }else{
        n1.style.border= "2px solid green" 
        n2.style.border= "2px solid green"
        n3.style.border= "2px solid green" 
        p7.setAttribute("style","color:green;font-size:18;font-weight:bold")
        n3Val = n3Val[0]
    }
    p7.innerText=n1Val+" "+n3Val+" "+n2Val+" = "+eval(n1Val+n3Val+n2Val ) //1 - 5 
  
}
function q6test(num, power) {

    return num ** power
}

// q6test(2, 8)

var arr = []

function q8test(ev) {
    ev.preventDefault()


    var no = document.getElementById("numb1").value
    var no2 = document.getElementById("numb2").value
    if (no === "") {
        alert("fill the field")
    } else if (no2 === "") {
        alert("fill the second field")
    } else {

        for (no; no <= no2; no++) {
            arr[no] = no


        }
        arr = arr.toString()
        alert(arr)

    }
}
function q10(ev) {
    ev.preventDefault()

    alert("length =" + arr.length)

}

function q11(ev) {
    ev.preventDefault()
    var no = document.getElementById("numbe1").value
    var no2 = document.getElementById("numbe2").value
    if (no === "") {
        alert("fill the field")
    } else if (no2 === "") {
        alert("fill the second field")
    } else {


        alert(no > no2 ? no + " is biggest number" : no2 + " is biggest number")

    }


}
function q12(hieght, width) {

    alert(hieght * width)

} // q12(3,4)

function q14(num){
    var num2 = num.toString()
    var num3;
        eval(num3 = num2.replace(/,/g,"+")) 
    alert(num3)
}
 //q14(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,)
var param = function q15(ev) {
    ev.preventDefault()
    return typeof q15;
}
// alert(param());


function dices(ev) {
    ev.preventDefault() // q17
    var p = Math.floor((Math.random() * 6) + 1)
    var q = document.getElementById("dice")
    q.src = './assets/imgs/dice/' + p + '.png'
}
// give a 4 digit number
function q18(ev) {
    ev.preventDefault()
    // alert("func wrkin")
    var myP = document.getElementById("reverseResult")

    var x = document.getElementById("n1").value
    if (x.length <= 1) {
        myP.style.color = "red"
        myP.innerText = "Please fill the feild before submitting"
        // alert("please fill the feild before submitting")
    } else {
        var e = '';
        // alert(x)
        for (var x2 = x.length - 1; x2 > -1; x2--) {
            e += x[x2]
        }
        myP.style.color = "black"
        myP.innerText = 'Your Answer Is: ' + e
    }

}
function q19(ev) {
    ev.preventDefault()
    var c = document.getElementById("n2").value
    var p = document.getElementById("p")
    var e = '';
    for (var c2 = c.length - 1; c2 > -1; c2--) {
        e += c[c2]
    }


    p.innerText = "Error: Not palindrome word. a palindrome word has atleast 3 letters"
    if (e <= 1 || e === '') {
        p.style.color = "red"
        p.innerText = "Error: Not palindrome word. a palindrome word has atleast 2-3 letters"
    } else if (e === c) {
        p.style.color = "green"
        p.innerText = "It is a palindrome word"

    } else {
        p.style.color = "red"
        p.innerText = "Error: Not palindrome word."
    }
}
function q20(str) {
    var array1 = str.split(' ');
    var newarray1 = [];

    for (var x = 0; x < array1.length; x++) {
        newarray1.push(array1[x].charAt(0).toUpperCase() + array1[x].slice(1));
    }
    return newarray1.join(' ');
}
/////console.log(q20("the quick brown fox"));

function q21(string) {
    var vowel_list = 'aeiouAEIOU';
    var vcount = 0;

    for (var x = 0; x < string.length; x++) {
        if (vowel_list.indexOf(string[x]) !== -1) {
            vcount += 1;
        }

    }
    return vcount;
}
////console.log(q21("The quick brown fox"));


function q22(value) {
    var dtypes = [
            Function,
            Number,
            String,
            Boolean,
            Object
        ],
        x,
        len;

    if (typeof value === "object" || typeof value === "function") {
        for (x = 0, len = dtypes.length; x < len; x++) {
            if (value instanceof dtypes[x]) {
                return dtypes[x];
            }
        }
    }

    return typeof value;
}
//console.log(q22(12));
//console.log(q22('hello '));
//console.log(q22(false));

function q22(string) {
    var str = string;
    var uniql = "";
    for (var x = 0; x < str.length; x++) {

        if (uniql.indexOf(str.charAt(x)) == -1) {
            uniql += str[x];

        }
    }
    return uniql;
}
//console.log(q22("thequickbrownfoxjumpsoverthelazydog"));


function q23(str, letter) {
    var letter_Count = 0;
    for (var position = 0; position < str.length; position++) {
        if (str.charAt(position) == letter) {
            letter_Count += 1;
        }
    }
    return letter_Count;
}

//console.log(q23('syeda daniya haider', 'd'));


function calculate_age(dob) {
    var diff_ms = Date.now() - dob.getTime();
    var age_dt = new Date(diff_ms);

    return Math.abs(age_dt.getFullYear() - 1970);
}

//console.log(calculate_age(new Date(1982, 11, 4)));

//console.log(calculate_age(new Date(1962, 1, 1)));

function calculateSupply(age, numPerDay) {
    var maxAge = 100;
    var totalNeeded = (numPerDay * 365) * (maxAge - age);
    var message = 'You will need ' + totalNeeded + ' cups of tea to last you until the ripe old age of ' + maxAge;
    //console.log(message);
}

calculateSupply(100, 36);
calculateSupply(28, 2.5);
calculateSupply(28, 400);

function calcCircumference(radius) {
    var circumference = (Math.PI * 2) * radius;
    var area = (Math.pow(radius, 2)) * Math.PI;

    //console.log("The circumference of a circle with a radius of " + radius + " is " + circumference + ".The area for this circle is " + area + ".")
}
// calcCircumference(37);
// calcCircumference(10);
// calcCircumference(5);
// calcCircumference(8);

function convert(degree) {
    var x;
    if (degree == "C") {
      x = document.getElementById("c").value * 9 / 5 + 32;
      document.getElementById("f").value = Math.round(x);
    } else {
      x = (document.getElementById("f").value -32) * 5 / 9;
      document.getElementById("c").value = Math.round(x);
    }
  }


var arr =[]
for (var i =0;i < 100;i++){

arr[i]=i

}
// alert(arr)
