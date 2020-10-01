let sBTN = document.getElementById("switch")

var numOfClicks= 0
 changeState=()=>{
     numOfClicks ++ ;
console.log(numOfClicks)
    if(numOfClicks==2){
      sBTN.innerText= sBTN.innerText=="ON"?"OFF":"ON"
       numOfClicks= 0
      }else{
             setTimeout(()=>{numOfClicks=0},200)
       }
}


sBTN.addEventListener("click",changeState)
