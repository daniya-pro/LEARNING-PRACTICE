let cont = document.getElementById("container")
let contTop = cont.offsetTop
let contLeft = cont.offsetLeft

let id = document.getElementById("animate");
document.addEventListener("mousemove", mousemove)

function mousemove(e) {
    if (e.x <= 375 && e.x >= contLeft + 20) {
        id.style.left = (e.x - 25) + "px";

    }
    if (e.y <= 365 + contTop && e.y >= contTop + 23) {
        id.style.top = (e.y - 130) + "px";
    }
}

//erase here 


function myMove() {
    var interval = setInterval(childMove, 5)
    var anim = document.getElementById("animate");
    var pos = 0
    document.removeEventListener("mousemove", mousemove)

    function childMove() {
        if (pos === 350) {


            clearInterval(interval)
            setTimeout(function() {
                document.addEventListener("mousemove", mousemove)
            }, 1000)


        } else {
            pos++
            anim.style.top = pos + "px"
            anim.style.left = pos + "px"



        }
    }
}