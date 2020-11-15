var date = new Date();

var year = date.getFullYear();

var month = date.getMonth() + 1;
if (month < 10) month = "0" + month;

var day = date.getDate();
if (day < 10) day = "0" + day;

var todayDate = year + "-" + month + "-" + day;

var dateForm = document.querySelector("form");

function calculateAge(birthDate) {
  var date = new Date();
  var year = date.getFullYear();
  var birthYear = birthDate.getFullYear();
  var age = year - birthYear;
  if (date < new Date(birthDate.setFullYear(year))) {
    age = age - 1;
  }
  return age;
}

document.querySelector(".begin").max = todayDate; 

document.querySelector(".date").innerHTML = "Today is: " + todayDate; 

document.querySelector(".begin").focus();

dateForm.addEventListener("submit", (e) => {
	e.preventDefault();
	var birthYear = document.querySelector(".begin").value;
	var age = calculateAge(new Date(birthYear));
	if (age >= 18) {
		location.href = "file:///C:/Users/waldek/Desktop/Projekty/Age%20of%20majority%20App/index-yes.html";
	} else {
		location.href = "file:///C:/Users/waldek/Desktop/Projekty/Age%20of%20majority%20App/index-no.html";
	}
});




























