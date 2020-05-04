var  months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

var plans = [
    
    {
        name: "Basic",
        price: 2.99,
        space: 100,
        transfer: 1000,
        pages: 10,
        discountMonths: [2,6, 7]
    },
    {
        name: "Developes",
        price: 4.99,
        space: 200,
        transfer: 2000,
        pages: 50,
        discountMonths: [6, 7,9]
    },
     {
        name: "Premium",
        price: 6.99,
        space: 300,
        transfer: 3000,
        pages: 500,
        discountMonths: [6, 8]
    }
]



 function getMonthsNames(monthsArray){
  var MonthsNames = ''
    for(var I =0;I<monthsArray.length;I++){
        var MonthNum = monthsArray[I]
        MonthsNames +=months[MonthNum]+', '
    }
   return MonthsNames
 }
for (var i = 0; i < plans.length; i++) {
    console.log(plans[i].name)
    console.log(plans[i].price)
    console.log(plans[i].space)
    console.log(plans[i].transfer)
    console.log(plans[i].pages)
    console.log(plans[i].discountMonths)

var Basics = plans[i].name
var htmlCard =`
<div class="col-lg-4">
<div class="card mb-5 mb-lg-0">
  <div class="card-body">
    <h5 class="card-title text-muted text-uppercase text-center" >${plans[i].name}</h5>
    <h6 class="card-price text-center">$${plans[i].price}<span class="period">/Month
   <h6 class="h6" style="font-size:6px">20% Discount For The Month Of: ${getMonthsNames(plans[i].discountMonths)} </h6>
    </span></h6>
    <hr>
    <ul class="fa-ul">
      <li><span class="fa-li"><i class="fas fa-check"></i></span>${plans[i].space}GB Storage</li>
      <li><span class="fa-li"><i class="fas fa-check"></i></span>${plans[i].transfer} Data</li>
      <li><span class="fa-li"><i class="fas fa-check"></i></span>${plans[i].pages} Pages</li>
     <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>Dedicated Phone Support</li>
      <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>Free Subdomain</li>
      <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>Monthly Status Reports</li>
    </ul>
    <a href="#" class="btn btn-block btn-primary text-uppercase">Button</a>
  </div>
</div>
</div>
`
document.getElementById("rw").innerHTML += htmlCard
   
}

function removeLoading(){ 
    document.getElementById("s").remove();
    document.getElementById("rw").style.display=""

}

setTimeout(removeLoading, 1000);