var greetings;
function greeetings() {
  greetings = "helllo world";
}
greeetings();

var theSum = 1000;

function addNumbers() {
  theSum = 2 + 2;
  // var theSum = 2 + 2;
  theSum = theSum;
}
addNumbers();





function marksheet(marks) {
  switch (marks) {
    case 100:
      alert("WoW! you got A++ you are my fav student exelent good or anything else like this is less for your praise");
      break;
    case 90:
      alert("Exelent you got A+");
      break;
    case 80:
      alert("good you got A");
      break;
    case 70:
      alert("good you got B");
      break;
    case 60:
      alert("not so bad you got C");
      break;
    case 50:
      alert("marks are okay you got D you need improvement");
      break;
    case 40:
      alert("need improvement E");
      break;
    case 30:
      alert("you Failed need very very iprovement");
      break;
    case 20:
      alert("you Failed! need very very very improvement");
      break;
    case 10:
    

alert(  "you Failed! need very very very improvement very much because his time you cannot enter school go out and start bagging now its yoour punishment")
    break;
    case 0:
      alert("you Failed! you must kill yourself nothing will go with hum 0");

    default:
      alert(
        "sorry invalid marks (marks must be like 90 or 50 ,80 if it is like 99 you shuld write 90 or 100)"
      );
  }
}

marksheet(
  parseInt(
    prompt(
      "tell me your marks so i can tell you you're gradess (marks must be like 90 or 50 ,80 if it is like 99 you should write 90 or 100)"
    )
  )
);
