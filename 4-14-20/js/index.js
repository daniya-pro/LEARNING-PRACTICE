function Tutal(bill){
    /*Note if youre bill is 100$ or more than hundred so your tax and shipping is free butt if it is between 50 and 100 it will take shipping fee in $ and wewill also take tex of 3 percent(%)$ bu if it is smaller than 50 we will take only shipping fee*/
    
    
    
    //variables start here
    
    var total = 'Error NaN'
    
    //variables  end here
    var isnan =isNaN(bill)
    
    if(!isnan){
    
    if (bill >= 100){
      
      var total = bill
    
    
    }
    
    
    
    else if(bill <= 50){
    
    total = bill + 5
    
      }
    
    else if (bill > 50){
    
    total = (bill + (5 + 3))
    
    
    }
    }
    
    isnan? alert(total):alert(total)
    
    
    
    }