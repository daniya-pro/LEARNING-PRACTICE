var students = ['ayesha','imran','yousra','dua','daniya','amaan','tahira','zulqarnan','jaziba','kashan','fatima','zehra','aleena','roshanay','ahmad','abdullah','haris']

var sirask  = prompt('tell me name',"kashan")

var boleans = false;

for(var i = 0; i > 16; i++ ){
    if(sirask === students[i]){
     alert("the kid is present")
     
     boleans = true;
    }
}
if (boleans = false){
    alert('the kid is not present the kid is apsent')
}