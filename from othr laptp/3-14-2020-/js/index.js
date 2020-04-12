var tablesforpromp= ''
ask = parseInt(prompt("no to multiply with",01 ))
for (var d = 0; d < 13; d++){
  if(d){



   tablesforpromp+= ask+" x "+d+" = " +(d*ask)+'\n\n'
  }
}

alert('table of \n'+tablesforpromp)
