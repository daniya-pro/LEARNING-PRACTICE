function checkForLastName(ev) {

     var conition = document.getElementById("lastNameField").value.length === 0


     if (conition) {
          document.getElementById("p").innerHTML = "Please Fill The Field"
          //return false;
     }
}

function checkForSelection() {
     if (document.getElementById("states").selectedIndex === 0) {
          alert("Please select a state.");
          return false;
     }
}


function validateRadios() {
     var radios = document.getElementsByName("r1");
     for (var i = 0; i < radios.length; i++) {
          if (radios[i].checked) {
                

                 
           
          }
     }

     alert("Please check one.");
    }