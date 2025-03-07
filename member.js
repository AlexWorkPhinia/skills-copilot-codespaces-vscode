function skillsMember()  {
  var member = document.getElementById("member").value;
  var memberSkills = {
    "John": "HTML, CSS, JavaScript",
    "Jane": "Python, Ruby, Java",
    "Sam": "C#, .NET, SQL",
    "Tom": "PHP, MySQL, Laravel"
  };

  if (member in memberSkills) {
    document.getElementById("memberSkills").innerHTML = memberSkills[member];
  } else {
    document.getElementById("memberSkills").innerHTML = "Skills not found";
  }
}
