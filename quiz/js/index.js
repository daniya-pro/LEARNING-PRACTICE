// let usr = {

//     name: 'SMKH',
//     email: 'asn@new.com',
//     pass: '123456'
// };
// localStorage.setItem("user", JSON.stringify(usr));
//jsonparse

if (document.getElementById("sppiner")) {
    setTimeout(function() { document.getElementById("sppiner").style.display = "none" }, 1000)



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

            var UserData = JSON.parse(localStorage.getItem("user"))

            document.getElementById("change-text").innerText = UserData.Fname + " " + UserData.Lname
            document.getElementById("nones").style.display = "inline-block";
            document.getElementById("nones1").style.display = "inline-block";
            document.getElementById("change-src").src = document.getElementById("uploadImg").src
        } else {

            document.getElementById("nones").style.display = "none";
            document.getElementById("nones1").style.display = "none";
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
            document.getElementById("errors2").innerHTML = ""
            document.getElementById("errors2").innerHTML = ""


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

    function ValidSign() {
        //ids of inputs/vaiable portion
        var fname = document.getElementById("First")
        var lname = document.getElementById("last")
        var email = document.getElementById("mail")
        var pass = document.getElementById("un-hide")

        // thier values
        var erro = document.getElementById("errors");

        var err = document.getElementById("errors2")
        var dinone = document.getElementById("disnones")
        var fnamval = fname.value;
        var lnameval = lname.value;
        var emailval = email.value;
        err.innerHTML = ''

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


        if (fnamval.length === 0) {
            dinone.style.display = "block"
            err.innerHTML += `<li class="a" id="a" value="❌"> please fill the first feild</li>`
            alert(err.innerHTML)

            fnamval.length === 0 ? console.log("true lengh is 0") : console.log("false lengh is not 0")
            fnameb = false
        } else {
            fnameb = true
            console.log("value of input of first name is correct" + fnameb)







        }
        if (lnameval.length === 0) {
            lnamb = false
            dinone.style.display = "block"
            err.innerHTML += `<li class="b" id="b" value="❌"> please fill the second feild</li>`

        } else {

            lnamb = true
            console.log("lna", lnamb)
            var idb = document.getElementsByTagName("li")

            var realaray = Array.from(idb)
            realaray.forEach(function(abc, i) {
                if (realaray[i].className === "b") {
                    var b = i;
                    realaray[i].remove()
                }


            })
        }
        if (localStorage.getItem("signup")) {
            for (i = 0; i < JSON.parse(localStorage.getItem("signup").length); i++) {
                var stor = JSON.parse(localStorage.getItem("signup"))

                stor[i] = JSON.parse(stor[i])

                if (emailval.toLowerCase().trim() === stor[i].Email.trim().toLowerCase()) {
                    document.getElementById("nonone").style.display = "block"
                    mailb = false
                }
            }
        } else {

            if (regex.test(emailval.trim().toLowerCase()) === false) {
                mailb = false
                dinone.style.display !== "block" ? dinone.style.display = "block" : console.log("its display block aleady")
                emailval.length === 0 ? err.innerHTML += `<li class="c" id="c" value="❌">  please fill the third feild</li>` : err.innerHTML += `<li class="c" id="c" value="❌">  please write a correct email in third field</li>`

            } else {

                if (localStorage.getItem("signup")) {

                    var k = JSON.parse(localStorage.getItem("signup"))

                    k.forEach(function(a, i) {
                        k[i] = JSON.parse(k[i])
                        console.log(a)
                        console.log("flag mail ==>", mailb)
                        var non = document.getElementById("nonone")
                        var non2 = document.getElementById("nonone2")
                        k[i].Email.toLowerCase() === emailval.toLowerCase() ? non.style.display = "block" : console.log("all is right");
                        k[i].Email.toLowerCase() === emailval.toLowerCase() ? non2.style.display = "block" : console.log("all is right");

                        k[i].Email.toLowerCase() === emailval.toLowerCase() ? mailb = false : mailb = true


                    })
                } else {
                    mailb = true
                    console.log("mail " + mailb)




                }


                var idc = document.getElementsByTagName("li")

                var realaray = Array.from(idc)
                realaray.forEach(function(abc, i) {

                    if (realaray[i].className === "c") {
                        realaray[i].remove()
                    }

                })

            }
        }
        if (passval.length <= 5) {
            pasb = false

            passval.length === 0 ? err.innerHTML += `<li class="d" id="d" value="❌"> please fill the fourth feild</li>` : err.innerHTML += `<li class="d" id="d" value="❌">  please write atleast 6 letters for password in fourth feild</li>`

            dinone.style.display = "block"
        } else {

            pasb = true
            console.log("pass:" + pasb)

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
        var non = document.getElementById("nonone")
        var e = document.getElementsByClassName("e")
        if (e.length !== 1) {

            for (var i = 0; i < e.length; i++) {
                e[i].remove()

            }

        }

        if (fnameb === true && lnamb === true && mailb === true && pasb === true) {
            var only1user = JSON.stringify({ Fname: fnamval, Lname: lnameval, Email: emailval, Password: passval })
            var signupitem = localStorage.getItem("signup") ?
                Array.isArray(JSON.parse(localStorage.getItem("signup"))) ? JSON.parse(localStorage.getItem("signup")) : [JSON.parse(localStorage.getItem("signup"))] : []
            signupitem.push(only1user)
                //[JSON.parse(localStorage.getItem)]
            localStorage.setItem("signup", JSON.stringify(signupitem))

            localStorage.setItem("user", only1user)
            dinone.style.display = "none"


            window.location.reload()

        } else {

            console.log("first", fnameb, "last", lnamb, "@", mailb, "**", pasb)




            err.innerHTML += `<li class="e" id="e" value="❌"> please fill all the fields correctly </li>`




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
        var regex = /^[\w-\]+@([\w-]+\)+[\w-]{2,4}$/g
        var email = document.getElementById("mail");
        var emailval = email.value;
        var mailb;
        var pass = document.getElementById("un-hide");
        var passval = pass.value;
        var pasb;




        var err = document.getElementById("errors2")
        var dinone = document.getElementById("disnones")


        //variables end
        //validation
        var vamail;
        var vapass;
        if (localStorage.getItem("signup")) {
            var ok = JSON.parse(localStorage.getItem("signup"))
            ok.forEach(function(a, i) {
                ok[i] = JSON.parse(ok[i])
                vamail = ok[i].Email.toLowerCase().trim() === emailval.toLowerCase().trim() ? emailval : ""

                vapass = ok[i].Password.toLowerCase().trim() === passval.toLowerCase().trim() ? vapass : ""
            })





        }
        if (vamail !== emailval) {
            mailb = false
            dinone.style.display = "block"
            ok ? emailval.length === 0 ? err.innerHTML += `<li class="c" id="c" value="❌">  please fill the 3rd feild</li>` : regex.test(emailval) !== true ? err.innerHTML += `<li class="c" id="c" value="❌">  please write a valid Email</li>` : err.innerHTML += `<li class="c" id="c" value="❌">  sorry we cannot find any email like this</li>` : err.innerHTML += `<li class="c" id="c" value="❌">  sorry we cannot find any email like this</li>`;

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
        if (vapass === '' || vapass === " ") {
            pasb = false

            ok ? passval.length === 0 ? err.innerHTML += `<li class="d" id="d" value="❌">  please fill the 4rth feild</li>` : err.innerHTML += `<li class="d" id="d" value="❌">  sorry we cannot find any Password like this</li>` :
                err.innerHTML += `<li class="d" id="d" value="❌">  sorry we cannot find any Password like this</li>`;
            dinone.style.display = "block"

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
            var UsersData = JSON.parse(localStorage.getItem("signup"))
            UsersData.forEach(function(e, i) {

                UsersData[i] = JSON.parse(UsersData[i])
                if (emailval === UsersData[i].Email) {
                    Finame = UsersData[i].Fname
                    Laname = UsersData[i].Lname
                    localStorage.setItem("user", JSON.stringify({ Email: emailval, Password: passval, Fname: Finame, Lname: Laname }))

                }
            })
            window.location.reload()
            dinone.style.display = "none"


        }

        //validion end

    }

    function logout() {

        localStorage.removeItem("user")
        window.location.reload()

    }

    function LSDGDE() {
        if (localStorage.getItem("draft")) {

            document.getElementById("quizcontainer")


        }
    } //Event Listners Below :-

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

    function singmul() {
        var CL = console.log
        CL("singmul func")
        var BFFAIC;
        var doca = document.querySelectorAll(".ans")
        var QU = document.getElementById("q")
        doca.forEach(function(a, i) {
            if (doca[i].value === "") {
                CL("singmul func if")
                BFFAIC = false
                $(".modal#EMO").modal({
                    allowMultiple: true
                }).modal("show")
                var EMO = document.getElementById("EMO")
                var EMOPN = EMO.parentNode
                if (EMOPN.tagName !== "BODY") {
                    EMO.style.width = "-webkit-fill-available"

                    EMOPN.className += " p-abs"
                    EMOPN.style.top = "0px"
                    EMOPN.style.display = "flex"
                    EMOPN.setAttribute("style", "top: 0px !important; display:flex !important;")
                }
            } else if (QU.value ? QU.value.trim() === '' : true) {
                BFFAIC = false
                CL("singmul func elseif", QU.value ? QU.value.trim() === '' : true, QU.value)

                $(".modal#EMO").modal({
                    allowMultiple: true
                }).modal("show")

                var EMO = document.getElementById("EMO")
                var EMOPN = EMO.parentNode
                if (EMOPN.tagName !== "BODY") {
                    EMO.style.width = "-webkit-fill-available"

                    EMOPN.className += " p-abs"
                    EMOPN.style.top = "0px"
                    EMOPN.style.display = "flex"
                    EMOPN.setAttribute("style", "top: 0px !important; display:flex !important;")
                }

            } else {
                BFFAIC = true
                CL("singmul func else")
            }
            setTimeout(function() { $(".modal#EMO").modal("hide") }, 1000);

        })

        if (doca.length < 2) {
            var moda = document.getElementById("unkmodal")
            moda.style.width = "-webkit-fill-available"
            $('.erno1.modal')
                .modal({
                    centered: false,
                    allowMultiple: true,
                    onVisible: function() {
                        setTimeout(function() { $(".erno1.modal").modal("hide") }, 3000)
                    }



                }).modal('setting', 'closable', false)

            .modal('show');


        } else {
            if (BFFAIC === true) {
                chaange_html()
            }
        }
    }

    ddl.addEventListener("change", drdown)
    var p;

    function drdown() {
        var Radio_el_parent = document.getElementById("add-Radio_elements")
        Radio_el_parent.innerHTML = ""
        var Checkbox_el_parent = document.getElementById("add-checkboxes_elements")
        Checkbox_el_parent.innerHTML = ""
        var draftloc = JSON.parse(localStorage.getItem("draft"))
        var ansss = document.querySelectorAll(".ans")
        if (draftloc.question) {

            document.getElementById("QU").innerText = draftloc.question

        }
        if (ansss.length <= 2) {
            ddl.value = "Single"
            ddl.parentNode.style.display = "none"


        } else {

            ddl.parentNode.style.display = "block"


        }

        if (ddl.value.toLowerCase() === "multiple") {

            console.log("mult")
            if (draftloc.ans) {
                console.log("draftloc excist")
                for (var i = 0; i < draftloc.ans["length"]; i++) {
                    var IFC = document.getElementById(`${i}`) ? i++ : i;
                    console.log("draftloc.ans ", i, " ===> ", draftloc.ans[i], "element Radio_el_parent ===> ", Radio_el_parent)

                    Checkbox_el_parent.innerHTML += ` 
                    <div class="ui checkbox">
  <input type="checkbox" class="cun" id="c${IFC}" value="${draftloc.ans[i]}" name="example">
       <label id=l${IFC}></label>
                    </div>
                    <br>
              `
                    document.getElementById(`l${IFC}`).innerText = `${draftloc.ans[i].match(/<(.|\n)*?>/g)}`
                }

            }
            document.getElementById("radio").style.display = "none"
            var abcde = document.querySelectorAll(".check")
            abcde.forEach(function(el, i) { abcde[i].style.display = "inline-block" })
        }

        if (ddl.value.toLowerCase() === "single") {
            console.log("sing")

            if (draftloc.ans) {
                console.log("draftloc excist")
                for (var i = 0; i < draftloc.ans["length"]; i++) {
                    console.log("draftloc.ans ", i, " ===> ", draftloc.ans[i], "element Radio_el_parent ===> ", Radio_el_parent)

                    var IFR = document.getElementById(`${i}`) ? i++ : i
                    Radio_el_parent.innerHTML += `
                    
                    <div class="field">
                    <div class="ui radio checkbox">
                        <input type="radio" class="run" value="${draftloc.ans[i]}" id="r${IFR}" name="number">
                        <label id="la${i}">${draftloc.ans[i]}</label>
                    </div>
                </div>
                `
                    document.getElementById(`la${i}`).innerText = draftloc.ans[i]
                }

            }
            var abcde = document.querySelectorAll(".check")
            abcde.forEach(function(el, i) { abcde[i].style.display = "none" })
            document.getElementById("radio").style.display = "inline-block"

        }
    }
    var quiz = document.getElementById('addquiz-next')
    quiz.addEventListener("click", quiznextbtn)

    function quiznextbtn() {
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
        if (t_a.value.trim().length <= 1) {
            t_ab = false
            r_m.style.display = "block"
                // t_a.value.trim().length <= 1 ? 
            add.innerHTML += `<div class="b"><i class="x icon f-size-large inline-bl"></i> <span class="f-size-large">
        Please write atleast two letters in the description field
       </span></div>`
                //    : add.innerHTML += `<div class="b"><i class="x icon f-size-large inline-bl"></i>
                //     <span class="f-size-large">
                //     your description is too long. our max limit is 200. you have crossed the limit. 
                //     your description is too long. our max limit is 200. you have crossed the limit. 
                //     your description is too long. our max limit is 200. you have crossed the limit. 
                //    </span></div>`

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

            var obje = { description: t_a.value, title: inp1.value }
            localStorage.setItem("draft", JSON.stringify(obje))

            r_m.style.display = "none"
                // setTimeout(errormodel, 100)
            document.getElementById("h-q-n").style.display = "block"
            document.getElementById("h-q-n").className = "block"
            fo.style.display = "none"
            localStorage.getItem("draft") ? te.innerText = JSON.parse(localStorage.getItem("draft")).title : console.error(SyntaxError("An Error Ocurred"))


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
    }


    var fo = document.getElementById('forms')
    document.getElementById("Add-sub").addEventListener("click", singmul)

    function chaange_html() {
        var iq = document.getElementById("q")
        document.getElementById("change-me").style.display = "none"
        document.getElementById("prewiewq").style.display = "block"
        var obj = JSON.parse(localStorage.getItem("draft"))


        var answer = []
        var LGQQ = JSON.parse(localStorage.getItem("QAdraft"))
        var doca = document.querySelectorAll(".ans")
        var qu = LGQQ ? qu = LGQQ : qu = [];
        qu.push(iq.value)
        doca.forEach(function(el, i) {
            answer.push(doca[i].value)

        })

        var docq = document.querySelectorAll(".q");

        docq.forEach(function(el, i) {


            Object.assign(obj, {
                question: iq.value,
                ans: answer
            })
        })
        localStorage.setItem("draft", JSON.stringify(obj))
        localStorage.setItem("QAdraft", JSON.stringify(qu))
        console.log("next is function drdown")
        drdown()


    }
    document.getElementById("plus2").addEventListener("click", addanswer)

    function addanswer() {
        var addingans = document.getElementById("add-answers-inme")

        var MyNewDiv = document.createElement("DIV");

        MyNewDiv.className === '' ? MyNewDiv.className = "field center" : MyNewDiv.className = " field center"

        MyNewDiv.innerHTML += `
    <label>Answer</label> <br>
    <input placeholder="yes" class="ans m-w-70per" type="text">
    <span class="ui button inverted-black" onclick="delete_parentNode(this)">Remove/Delete</span>
<br><br>
`
        addingans.appendChild(MyNewDiv)
    }
    document.getElementById("plus1").addEventListener("click", namless)
        //civbq === clear input value by querySelectorAll
        //ECOIOEI === Element's Class Or Id Or Element Itself
        //CV === Console.Log's Value
        //WTD=what to do
    function CIVBQ(ECOIOEI, CV, WTD) {
        if (WTD.toLowerCase() === "el") {



        } else if (WTD.toLowerCase() === "cl") {

            var ecoi2 = document.querySelectorAll(`.${ECOIOEI}`)
            ECOIOEI = ecoi2
        } else if (WTD.toLowerCase() === "id") {

            var ecoi2 = document.querySelectorAll(`#${ECOIOEI}`)
            ECOIOEI = ecoi2
        }

        ECOIOEI.forEach(function(el, ind) {
            el.value = ""
            console.log(CV)
            ECOIOEI[ind].value = ''
        })

    }

    function namless() {
        var docq = document.querySelectorAll(".q")
        var tcons = "docq.value ==="
        CIVBQ(docq, tcons + docq[0].value, "el")

        // docq.forEach(function(el, ind) {
        //     el.value = ""
        //     console.log(".q ===", docq, "its value", docq[ind].value)
        //     docq[ind].value = ''
        // })

        var a_el = document.querySelectorAll(".ans")
        if (a_el.length > 2) {
            a_el.forEach(function(el, i) {
                if (i > 1) {
                    a_el[i].parentNode.remove()
                }

            })

        }
        if (a_el.length > 0) {
            console.log("hello i am a if inside a function namless")
            a_el.forEach(function(el, i) {

                a_el[i].value = ""

            })
        } else {
            console.log("hello i am a else inside a function named namless")

            addanswer()
            addanswer()
        }

        // document.querySelectorAll("")
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



    }


    function a(el, cc2) {
        el.modal("hide")
        document.getElementById('change-me').style.display = 'block';
        var draftit = JSON.parse(localStorage.getItem("draft"))
        if (cc2.trim() === 'close2' && draftit.ans) {

            delete draftit.ans
            delete draftit.question
            localStorage.setItem("draft", JSON.stringify(draftit))
        }
    }
    document.getElementById("SBOPQ").addEventListener("click", CROC)

    function CROC() {
        var EMO2 = document.getElementById("EMO2")
        var LKD = JSON.parse(localStorage.getItem("draft"))

        if (document.querySelectorAll("input[type=radio]").length > 0) {
            var BFRB;
            document.querySelectorAll("input[type=radio]").forEach(function(el, num) {
                if (el.checked) {
                    BFRB = true

                    LKD.ans.forEach(function(ele, i) {

                        if (LKD.ans[i] === el.value) {
                            LKD.ans[i] = { value: el.value, isCorrect: true }
                        }

                        localStorage.setItem("draft", JSON.stringify(LKD))
                    });
                }
            })
            if (BFRB && BFRB === true) {
                hidenoq($('.ui.modal1.modal'), 'i bfb am using hidenoq')
            } else {

                $(".modal#EMO2").modal({ allowMultiple: true }).modal('show')
                setTimeout(function() {

                    $(".modal#EMO2").modal("hide")

                }, 1000)

                EMO2.style.width = "-webkit-fill-available"
            }
        }

        if (document.querySelectorAll("input[type=checkbox]").length > 0) {
            var BFCB;

            document.querySelectorAll("input[type=checkbox]").forEach(function(el, num) {
                if (el.checked) {

                    BFCB = true
                    LKD.ans.forEach(function(ele, i) {

                        if (LKD.ans[i] === el.value) {
                            LKD.ans[i] = { value: el.value, isCorrect: true }
                        }
                        localStorage.setItem("draft", JSON.stringify(LKD))
                    });
                }
            })
        }

    }

    function noqtoq(cons) {
        var nq = document.getElementById("no-q")
        var dr = JSON.parse(localStorage.getItem("draft"))
        console.log(cons)
        if (dr && dr.question) {



            if (nq.innerText.toLowerCase() === "no questions") {

                nq.innerHTML = `${dr.question} <br>`

            } else {
                nq.innerHTML += `${dr.question} <br>`
            }
        }

    }
    var DGEITS = document.getElementById("title-sub")
    DGEITS.addEventListener("click", errormodel)

    function hidenoq(modaltohide, textToDisplayInConsole) {
        a(modaltohide);
        noqtoq(textToDisplayInConsole)

    }

    function addClassToAnElementByID(id_, class_) {

        document.getElementById(id_).className = class_;

    }
    addClassToAnElementByID("chose-h", "h-80px")

    function delete_parentNode(t) {

        t.parentNode.remove()
    }

}


$('.ui.dropdown')
    .dropdown();

function backk() {
    var fo = document.getElementById('forms')
    document.getElementById("h-q-n").style.display = "none"
    fo.style.display = "block"

}

function errormodel() {
    var nq = document.getElementById("no-q")
    var dr = JSON.parse(localStorage.getItem("draft"))

    if (!dr.ans) {
        $('.special.modal')
            .modal({
                centered: false

            }).modal('setting', 'closable', false)

        .modal('show');

        var modelparent = document.querySelector(".ui.special.modal").parentNode
        var model = document.querySelector(".ui.special.modal")
        if (modelparent.tagName.toUpperCase() === "body") {} else {
            model.style.width = "-webkit-fill-available"

            modelparent.className += " bg-tr p-abs"
            modelparent.style.top = "0px"
            modelparent.style.display = "flex"
            modelparent.setAttribute("style", "top: 0px !important; display:flex;")
                // modpar.className.eplace(active)
        }
    } else {


        window.location = "/"
    }

}