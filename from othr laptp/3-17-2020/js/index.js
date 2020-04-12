var cleanestCities = ["lahore","islamabad","quetta","peshawar","karachi"]
cityToCheck = prompt("tell me your city","karachi")
var hello = false 
for(var p = 0; p < 4; p++ ){ 
  if (cityToCheck === cleanestCities[p]){ 
    hello = true 
    alert("your city have corona virus so sad")
  }
}
if (cityToCheck.length > 9 || cityToCheck.length < 6){ 
  alert ("your city dont have corona virus")
}
