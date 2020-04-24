var students = ['ayesha','imran','yousra','dua','daniya','amaan','tahira','zulqarnan','jaziba','kashan','fatima','zehra','aleena','roshanay','ahmad','abdullah','haris']

var sirask  = prompt('tell me name',"Ayesha")

var boleans = false;
sirask1 = sirask.slice(0,1).toUpperCase();
      sirask2 = sirask.slice(1).toLowerCase()
      sirask = sirask1 + sirask2
      
for(var i = 0; i > 16; i++ ){
    if(sirask.toLowerCase() === students[i]){
      var sirask1;
      var sirask2;
      
      
     alert(sirask + " is present")
     
     boleans = true;
     
    }
}
if (boleans = false){
    alert('the kid is not present the kid is apsent')
}