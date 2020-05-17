
function removeLoading(){ 
    document.getElementById("s").remove();
    document.getElementById("divcontainer").style.display=""

}

setTimeout(removeLoading, 600)

var H2 =document.getElementById("h2")
function daytell(){
var days_array =["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday","Sunday"]
var newday = new Date().getDay()
var TheResultDay = days_array[newday]
H2.innerHTML ="Today The Day Is = "+TheResultDay
}
function datetell(){
var date = new Date()
var TheResultDate =date.toLocaleDateString()
H2.innerHTML ="Today The Date Is = "+TheResultDate
}
function monthtell(){

    var month= ["January","February","March","April","May","June","July",
    "August","September","October","November","December"];
var newmonth = new Date().getMonth()
var TheResultMonth =month[newmonth]
H2.innerHTML = "Today The Month Is = "+TheResultMonth
}
function timetell(){

var time = new Date()
var TheResultTime =time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
H2.innerHTML ="Today The Time Is = "+TheResultTime}
function yeartell(){
    var newyear = new Date().getFullYear()
    var TheResultyear = newyear
H2.innerHTML ="we are living in = " +TheResultyear
}