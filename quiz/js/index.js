// let usr = {

//     name: 'SMKH',
//     email: 'asn@new.com',
//     pass: '123456'
// };
// localStorage.setItem("user", JSON.stringify(usr));
//jsonparse

if (document.getElementById("sppiner")) {
    document.getElementById("close-icon").addEventListener("click", function() {
        $(".ui.modal").modal("hide")
    })

    function removeloading() {
        var sppiner = document.getElementById("sppiner");
        sppiner.style.display = "none"
    }
    setTimeout(removeloading, 700);

    function getUserData() {
        let user = null;
        try {
            user = JSON.parse(localStorage.getItem("user"));
        } catch (e) {
            console.error(e)
        }
        return user
    }

    function disnone() {
        if (localStorage.getItem('user')) {
            // var userinf = { Fname: fnamval, Lname: lnameval, Email: emailval, Password: passval };           

            var array = JSON.parse(localStorage.getItem("user"))

            document.getElementById("change-text").innerText = array[0].Fname + " " + array[0].Lname
            document.getElementById("nones").style.display = "inline-block";
            document.getElementById("nones1").style.display = "inline-block";
            document.getElementById("change-src").src = document.getElementById("uploadImg").src
        }

    }
    disnone()

    function createQuiz() {


        let user = getUserData()
        if (user) {
            document.getElementById("button-button").href = "./pages/form.html"
        } else {
            document.getElementById("First").value = ''
            document.getElementById("last").value = ''
            document.getElementById("mail").value = ''
            document.getElementById("un-hide").value = ''
            document.getElementById("disnones").style.display = "none"

            document.getElementById("nonone").display = "none"
            document.getElementById("nonone2").style.display = "none"
            document.getElementById("nonone0").display = "none"
            document.getElementById("errors").innerHTML = ""
            document.getElementById("errors").innerHTML = ""


            // $('.ui.modal')
            //     .modal('show');
            $('.ui.modal1')
                .modal({
                    blurring: true,

                })
                .modal('show');
        }

    }


    function eye() {
        if (document.getElementById("eye").className === "eye slash icon") {

            document.getElementById("un-hide").type = "text"
            document.getElementById("eye").className = "eye icon"

        }
    }

    function eye_slash() {
        if (document.getElementById("eye").className === "eye icon") {
            document.getElementById("un-hide").type = "password"

            document.getElementById("eye").className = "eye slash icon"


        }
    }





    function goToLogin() {
        document.getElementById("disnones").style.display = "none"

        document.getElementById("nonone").style.display = "none"
        document.getElementById("nonone2").style.display = "none"
        document.getElementById("nonone0").style.display = "none"
            //hide every element with class name signupOnly
        var signup = document.querySelectorAll('.signupOnly');
        signup.forEach(function(a) {
                a.setAttribute("style", "display:none !important")
            })
            //hiding funtion ends here


        //visible evey element with class name loginOnly
        var login = document.querySelectorAll('.loginOnly');
        login.forEach(function(a) {
                document.getElementById("changetext").innerText = "LOGIN"

                a.setAttribute("style", "display:inline-flex !important")
            })
            //visibling function ends here
            //an element will be visible with id loginonly
        document.getElementById("loginonly").setAttribute("style", "display:block !important")
    }


    function goToSignup() {
        document.getElementById("disnones").style.display = "none"

        document.getElementById("nonone").style.display = "none"
        document.getElementById("nonone2").style.display = "none"
        document.getElementById("nonone0").style.display = "none"

        //hide every element with class name loginOnly
        var login = document.querySelectorAll('.loginOnly');
        login.forEach(function(a) {
                a.setAttribute("style", "display:none !important")
            }) //hiding funtion ends here


        //visible evey element with class name signupOnly

        var signup = document.querySelectorAll('.signupOnly');
        signup.forEach(function(a) {
                document.getElementById("changetext").innerText = "SIGN UP"

                a.setAttribute("style", "display:inline-flex !important")

            })
            //visibling function ends here
            //an element will be hidden with id loginonly
        document.getElementById("loginonly").setAttribute("style", "display:none!important")


    }

    function getBase64(file) {
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function() {
            let img = reader.result

            console.log(img)

            document.getElementById("uploadImg").src = img
                // document.querySelector(".HalfCircle").remove()
            document.getElementById("fileText").innerText = "Change Profile"
        };
        reader.onerror = function(error) {
            console.error(error);

        };
    }

    function setImage(e) {

        console.log("e=> ", e)
        let file = e.target.files[0];

        if (file) {
            getBase64(file)

        }

    }

    function ValidSign() {
        //ids of inputs/vaiable portion
        var fname = document.getElementById("First")
        var lname = document.getElementById("last")
        var email = document.getElementById("mail")
        var pass = document.getElementById("un-hide")

        // thier values
        var err = document.getElementById("errors")
        var dinone = document.getElementById("disnones")
        var fnamval = fname.value;
        var lnameval = lname.value;
        var emailval = email.value;

        //    var pass = document.getElementById("un-hide")     var passval = pass.value


        var passval = pass.value
        var pasb;
        var fnameb;
        var mailb;
        var lnamb;

        //thier values ends here

        //variables ends here
        // err.innerHTML = ""
        var regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g

        //validation start here


        if (fnamval.length <= 2) {

            dinone.style.display = "block"
            fnamval.length === 0 ? err.innerHTML += `<li class="a" id="a" value="❌">&nbsp;please fill the first feild</li>` : err.innerHTML += `<li class="a" id="a" value="❌">&nbsp; please write atleast 3 letter in first field</li>`
            fnamval.length === 0 ? console.log("true lengh is 0") : console.log("false lengh is not 0")
            fnameb = false
        } else {
            console.log("value of input of first name is correct")

            var ida = document.getElementsByTagName("li")
            var realaray = Array.from(ida)


            if (localStorage.getItem("signup")) {

                var k = JSON.parse(localStorage.getItem("signup"))
                k.forEach(function(a, i) {
                    dinone.style.display !== "block" ? dinone.style.display = "block" : console.log("its display block aleady")

                    k[i].Fname.toLowerCase().trim() === fnamval.toLowerCase().trim() ? err.innerHTML += "<li class='a' id='a' value='❌'>please write any other first name in first field because it is taken by another user</li>" : console.log("all is right");

                    k[i].Fname.toLowerCase().trim() === fnamval.toLowerCase().trim() ? fnameb = false : fnameb = true
                    console.log("flag fnameb ==>", fnameb)


                })
            }

            realaray.forEach(function(abc, i) {

                if (realaray[i].className === "a") {
                    realaray[i].remove()
                }

            })

        }
        if (lnameval.length <= 2) {
            lnamb = false
            dinone.style.display === "block" ? console.log("its display block already") : dinone.style.display = "block"
            lnameval.length === 0 ? err.innerHTML += `<li class="b" id="b" value="❌">&nbsp;please fill the second feild</li>` : err.innerHTML += `<li class="b" id="b" value="❌">&nbsp; please write atleast 3 letter in second field</li>`

        } else {
            lnamb = true

            var idb = document.getElementsByTagName("li")

            var realaray = Array.from(idb)
            realaray.forEach(function(abc, i) {
                if (realaray[i].className === "b") {
                    var b = i;
                    realaray[i].remove()
                }


            })
        }

        if (regex.test(emailval) === false) {
            mailb = false
            dinone.style.display !== "block" ? dinone.style.display = "block" : console.log("its display block aleady")
            emailval.length === 0 ? err.innerHTML += `<li class="c" id="c" value="❌">&nbsp; please fill the third feild</li>` : err.innerHTML += `<li class="c" id="c" value="❌">&nbsp; please write a correct email in third field</li>`

        } else {
            if (localStorage.getItem("signup")) {

                var k = JSON.parse(localStorage.getItem("signup"))
                k.forEach(function(a, i) {

                    var non = document.getElementById("nonone")
                    var non2 = document.getElementById("nonone2")
                    k[i].Email.toLowerCase() === emailval.toLowerCase() ? non.style.display = "block" : console.log("all is right");
                    k[i].Email.toLowerCase() === emailval.toLowerCase() ? non2.style.display = "block" : console.log("all is right");

                    k[i].Email.toLowerCase() === emailval.toLowerCase() ? mailb = false : mailb = true

                    console.log("flag fnameb ==>", lnamb)

                })
            }
            var idc = document.getElementsByTagName("li")

            var realaray = Array.from(idc)
            realaray.forEach(function(abc, i) {

                if (realaray[i].className === "c") {
                    realaray[i].remove()
                }

            })

        }

        if (passval.length <= 5) {
            pasb = false

            passval.length === 0 ? err.innerHTML += `<li class="d" id="d" value="❌">&nbsp;please fill the fourth feild</li>` : err.innerHTML += `<li class="d" id="d" value="❌">&nbsp; please write atleast 6 letters for password in fourth feild</li>`

            dinone.style.display === "block" ? console.log("its display block already") : dinone.style.display = "block"

        } else {
            pasb = true

            var idd = document.getElementsByTagName("li")

            var realaray = Array.from(idd)
            realaray.forEach(function(abc, i) {

                if (realaray[i].className === "d") {
                    realaray[i].remove()
                }

            })

        }

        var a = document.getElementsByClassName("a")
        if (a.length !== 1) {

            for (var i = 0; i < a.length; i++) {
                a[i].remove()

            }

        }
        var b = document.getElementsByClassName("b")
        if (b.length !== 1) {

            for (var i = 0; i < b.length; i++) {
                b[i].remove()

            }

        }
        var c = document.getElementsByClassName("c")
        if (c.length !== 1) {

            for (var i = 0; i < c.length; i++) {
                c[i].remove()

            }

        }
        var d = document.getElementsByClassName("d")
        if (d.length !== 1) {

            for (var i = 0; i < d.length; i++) {
                d[i].remove()

            }

        }


        if (fnameb === true && lnamb === true && mailb === true && pasb === true) {
            var only1user = JSON.stringify({ Fname: fnamval, Lname: lnameval, Email: emailval, Password: passval })
            localStorage.setItem("user", only1user)
            dinone.style.display = "none"
            window.location.reload()

        }

        var non = document.getElementById("nonone")
        var non2 = document.getElementById("nonone2")
        var non0 = document.getElementById("nonone0")

        if (non.style.display.trim() !== "none" && dinone.style.display.trim() !== "none") {

            non0.style.display = "block"
            non2.style.display = "block"

        }
    }


    function ValidLog() {
        //variables
        var regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
        var email = document.getElementById("mail");
        var emailval = email.value;
        var mailb;
        var pass = document.getElementById("un-hide");
        var passval = pass.value;
        var pasb;




        var err = document.getElementById("errors");
        var dinone = document.getElementById("disnones")


        //variables end
        //validation
        var vamail;
        var ok = JSON.parse(localStorage.getItem("signup"))
        ok.forEach(function(a, i) {
            vamail = ok[i].Email.toLowerCase().trim() === emailval.toLowerCase().trim() ? ok[i].Email : ""

        })
        var vapass;
        ok.forEach(function(a, i) {
                vapass = ok[i].Password.toLowerCase().trim() === passval.toLowerCase().trim() ? ok[i].Password : ""

            })
            //for laterz
        if (vamail !== emailval) {
            mailb = false
            dinone.style.display === "block" ? console.log("its display block already in mail") : dinone.style.display = "block"
            ok ? emailval.length === 0 ? err.innerHTML += `<li class="c" id="c" value="❌">&nbsp; please fill the 3rd feild</li>` : regex.test(emailval) !== true ? err.innerHTML += `<li class="c" id="c" value="❌">&nbsp; please write a valid Email</li>` : err.innerHTML += `<li class="c" id="c" value="❌">&nbsp; sorry we cannot find any email like this</li>` : err.innerHTML += `<li class="c" id="c" value="❌">&nbsp; sorry we cannot find any email like this</li>`;

        } else {
            mailb = true

            var idc = document.getElementsByTagName("li")

            var realaray = Array.from(idc)
            realaray.forEach(function(abc, i) {

                if (realaray[i].className === "c") {
                    realaray[i].remove()
                }

            })

        }
        if (passval !== vapass) {
            pasb = false

            ok ? passval.length === 0 ? err.innerHTML += `<li class="d" id="d" value="❌">&nbsp; please fill the 4rth feild</li>` : err.innerHTML += `<li class="d" id="d" value="❌">&nbsp; sorry we cannot find any Password like this</li>` : err.innerHTML += `<li class="d" id="d" value="❌">&nbsp; sorry we cannot find any Password like this</li>`;
            dinone.style.display === "block" ? console.log("its display block already") : dinone.style.display = "block"

        } else {
            pasb = true

            var idd = document.getElementsByTagName("li")

            var realaray = Array.from(idd)
            realaray.forEach(function(abc, i) {

                if (realaray[i].className === "d") {
                    realaray[i].remove()
                }

            })


        }



        var c = document.getElementsByClassName("c")
        if (c.length !== 1) {

            for (var i = 0; i < c.length; i++) {
                c[i].remove()

            }

        }
        var d = document.getElementsByClassName("d")
        if (d.length !== 1) {

            for (var i = 0; i < d.length; i++) {
                d[i].remove()

            }

        }

        if (mailb === true && pasb === true) {

            localStorage.setItem("user", localStorage.getItem("signup"))
            window.location.reload()
            dinone.style.display = "none"


        }

        //validion end

    }

    function logout() {

        localStorage.removeItem("user")
        window.location.reload()

    }

    //Event Listners Below :-

    const EyeEl = document.getElementById("eye");
    document.getElementById("button-button").addEventListener('click', createQuiz);
    document.getElementById("Signup").addEventListener("click", ValidSign);
    document.getElementById("file").addEventListener("change", setImage);
    document.getElementById("Login").addEventListener("click", ValidLog);
    document.getElementById("logout").addEventListener("click", logout);
    EyeEl.addEventListener("mouseout", eye_slash);
    EyeEl.addEventListener("mouseover", eye);
} else {
    var myGlobalVar;
    var ddl = document.getElementById("drop");

    function drdown() {

        if (ddl.value.toLowerCase() === "multiple") {
            document.getElementById("radio").style.display = "none"
            var abcde = document.querySelectorAll(".check")
            abcde.forEach(function(a, i) { abcde[i].style.display = "inline-block" })
        }
        if (ddl.value.toLowerCase() === "single") {


            var abcde = document.querySelectorAll(".check")
            abcde.forEach(function(a, i) { abcde[i].style.display = "none" })
            document.getElementById("radio").style.display = "inline-block"

        }

    }
    ddl.addEventListener("change", drdown)
    var p;

    var quiz = document.getElementById('addquiz-next')
    var fo = document.getElementById('forms')
    document.getElementById("Add-sub").addEventListener("click", function() {
        drdown()
        document.getElementById("change-me").style.display = "none"
        document.getElementById("prewiewq").style.display = "block"
        var obj = JSON.parse(localStorage.getItem("draft"))
        var ansarr = []
        var doca = document.querySelectorAll(".ans")
        doca.forEach(function(a, i) {
            ansarr.push(doca[i].value)

        })
        var docq = document.querySelectorAll(".q")
        Object.assign(obj, {
            question: docq[0].value,
            ans: ansarr
        })
        localStorage.setItem("draft", JSON.stringify(obj))

    })
    document.getElementById("plus2").addEventListener("click", function() {



    })
    document.getElementById("plus1").addEventListener("click", function() {
        document.getElementById("change-me").style.display = "block"
        document.getElementById("prewiewq").style.display = "none"
        $('.ui.modal1').modal({
                allowMultiple: true
            })
            .modal('setting', 'closable', false)
            .modal('show');



        var modpar = document.querySelector(".ui.modal1.modal").parentNode
        if (modpar.id === "forms") {} else {
            modpar.className += " white"
                // modpar.className.eplace(active)
        }



    })

    document.getElementById("close").addEventListener("click", a)

    function a() {
        $(".ui.modal1.modal").modal("hide")
        document.getElementById('change-me').style.display = 'block';







    }

    //
    quiz.addEventListener("click", function() {
        var inp1 = document.getElementById("inp1");
        var t_a = document.getElementById("t-a");
        var r_m = document.getElementById("red-error");
        var te = document.getElementById("title");
        var nq = document.getElementById("no-q");
        var add = document.getElementById("add");
        var ib;
        var t_ab;
        if (inp1.value.trim().length <= 1) {
            ib = false
            r_m.style.display = "block"
            add.innerHTML += `<div class="a"><i class="x icon f-size-large inline-bl"></i>
            <span class="f-size-large">
            Please write atleast two letters in the title field
           </span></div>`

        } else {

            ib = true

            var idd = document.getElementsByTagName("div")

            var realaray = Array.from(idd)
            realaray.forEach(function(abc, i) {

                if (realaray[i].className === "a") {
                    realaray[i].remove()
                }

            })

        }

        if (t_a.value.trim().length > 200 || t_a.value.trim().length <= 1) {
            t_ab = false
            r_m.style.display = "block"
            t_a.value.trim().length <= 1 ? add.innerHTML += `<div class="b"><i class="x icon f-size-large inline-bl"></i> <span class="f-size-large">
            Please write atleast two letters in the description field
           </span></div>` : add.innerHTML += `<div class="b"><i class="x icon f-size-large inline-bl"></i>
            <span class="f-size-large">
            your description is too long. our max limit is 200. you have crossed the limit. 
           </span></div>`

        } else {

            t_ab = true
            var idd = document.getElementsByTagName("div")

            var realaray = Array.from(idd)
            realaray.forEach(function(abc, i) {

                if (realaray[i].className === "b") {
                    realaray[i].remove()
                }

            })

        }

        if (ib === true && t_ab === true) {
            var obj = { description: t_a.value, title: inp1.value }
            localStorage.setItem("draft", JSON.stringify(obj))
            r_m.style.display = "none"
            document.getElementById("h-q-n").style.display = "block"
            fo.style.display = "none"
            localStorage.getItem("draft") ? te.innerHTML = JSON.parse(localStorage.getItem("draft")) : console.error(SyntaxError("An Error Ocurred"))


        }



        var a = document.getElementsByClassName("a")
        if (a.length !== 1) {

            for (var i = 0; i < a.length; i++) {
                a[i].remove()

            }

        }
        var b = document.getElementsByClassName("b")
        if (b.length !== 1) {

            for (var i = 0; i < b.length; i++) {
                b[i].remove()

            }

        }
    })

    $('.ui.dropdown')
        .dropdown();

    function backk() {
        var fo = document.getElementById('forms')
        document.getElementById("h-q-n").style.display = "none"
        fo.style.display = "block"

    }

    var modpar = document.querySelector(".ui.modal1.modal").parentNode
    if (modpar.id === "forms") {} else {
        modpar.className += " white"
            // modpar.className.eplace(active)
    }
}