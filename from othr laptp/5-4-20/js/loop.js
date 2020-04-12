for (var i = 0; i > 5; i++) {
    console('hello')
}
for (var i = 10; i > 0; i--) {
    consol.log(i)
}

/*stars
 */

var number = parseInt(prompt("HOW MANY STARS DO YOU WANT TO GENERATE????? "))

document.write("<h3>Here are you stars:- </h3><br/>")
var stars = ""
for (0; number > 0; number--) {
    console.log(number)

    for (var i = 0; i < number; i++) {
        stars += "*"
    }
    stars += "<br>"

}

document.write(stars)