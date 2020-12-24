const completedEl = document.getElementById("completed")
const activedEl = document.getElementById("actived")
const allEl = document.getElementById("allI")


var myData = []
getdata()

function getdata() {

    database()


    .ref(`items`)
        .on("child_added", on_Data)
    on_Data()



    database()
        .ref("items")
        .on("child_changed", dataUpdated)

}

function dataUpdated(data) {

    var datav = data.val();
    var el = document.getElementById(`${data.key}`);
    var el2 = document.getElementById(`${data.key}2`);
    //element=el

    var b = datav.checked;
    //b=boolean
    b ? el.className = "lineThough" : el.className = "";
    b ? el2.className = "complete td all" : el2.className = 'activei td all'
        //acoa = active complete or active


}

function on_Data(data) {
    if (data) {
        document.getElementById("spinner").style.display = 'none'

        console.log(data.key)
        let val = data.val()
        let text = val.text
        let checked = val.checked
        let id = data.key

        let myDataOBJ = { text, checked, id }

        myData.push(myDataOBJ)

    }

}


function renderHTML() {



    myData.forEach((todo, i) => {



    })
    document.getElementById("list").innerHTML += `

        <tr>

        <td id='${id}2' class="${checked?'complete':'activei'} td all">
        <div>
        <div class="ui ac checkbox">
        <input ${checked?"checked":""}  value="${text}" type="checkbox" name="checkbox" onChange="check(this,'${id}')">
      <label id='${id}' class='${checked?"lineThough" :"" }'> ${text}</label>
      </div>
      </div>

        </td>

    </tr>
    `
}

function addItem() {
    var itemname = document.getElementById("itemname");
    var itemnameval = itemname.value;
    var regex = /(|<([^>]+)>)/ig;
    itemnameval = itemnameval.replace(regex, '');

    var CEA = Array.from(document.getElementsByClassName("complete"))
    CEA.forEach(function() {




    })

    if (itemnameval.trim() !== "") {

        database().ref("items").push({ text: itemnameval, checked: false, time: new Date().getTime() });




        itemname.value = ''





    }
}







function check(el, id) {
    database().ref(`items/${id}`).update({ checked: el.checked })


}

function active() {
    activedEl.style.border = '1px orange solid'

    completedEl.style.border = 'none'

    allEl.style.border = 'none'

    if (document.getElementsByClassName("activei").length !== 0) {
        document.getElementById("nothing").style.display = "none"
            //acoa=active competed or all 
        localStorage.setItem("ACOA", "active")


        document.getElementById("all-add").style.display = "none"
            // /AEA=active elements array CEA = completed element array
        var AEA = Array.from(document.getElementsByClassName("activei"))
        var CEA = Array.from(document.getElementsByClassName("complete"))
        AEA.forEach(function(a, i) {
            a.style.display = 'block'
            CEA.forEach(function(el, i) {
                el.style.display = 'none'


            })
        })
    } else {

        document.getElementById("nothing").style.display = "block"
        document.getElementById("all-add").style.display = "none"
        var CEA = Array.from(document.getElementsByClassName("complete"))
        CEA.forEach(function(el, i) {
            el.style.display = 'none'


        })

    }
}



function complete(c) {

    completedEl.style.border = '1px orange solid'

    activedEl.style.border = 'none'

    allEl.style.border = 'none'


}

allEl.style.border = '1px orange solid'


function all() {
    allEl.style.border = '1px orange solid'
    document.getElementById("nothing").style.display = "none"

    localStorage.setItem("ACOA", "all")

    activedEl.style.border = 'none'
    document.getElementById("all-add").style.display = 'block'

    completedEl.style.border = 'none'

    var CEA = Array.from(document.getElementsByClassName("all"))

    CEA.forEach(function(a, i) {
        a.style.display = 'block'



    })
}







activedEl.addEventListener("click", active)
completedEl.addEventListener("click", complete)

allEl.addEventListener("click", all)

document.getElementById("add-item").addEventListener("click", addItem)