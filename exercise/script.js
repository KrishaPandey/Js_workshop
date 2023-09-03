//  Write js code to take name of user,his/her faculty name, his/her gpa of 8 semesters(each using prompt) and his/her exam roll number as inputs and then calculate the cgpa of the 8 semesters and display the output as:
//  I am "Name" and I am enrolled in "Faculty name". My exam roll number is "Roll number" and I scored "Cgpa" CGPA in my Bachelor's.

let your_name= prompt("Enter your name:")
let faculty=prompt("Enter your  faculty: ")
let roll=prompt("Enter your roll no :")
let Database= parseFloat(prompt("Enter your GPA in Advanced Database:"));
let internship= parseFloat(prompt("Enter your GPA in Internship:"));
let Networking = parseFloat(prompt("Enter your Gpa in Advanced Networking with IPv6"));
let game = parseFloat(prompt("Enter your GPA in Game Technology:"));
let cloud= parseFloat(prompt("Enter your GPA in Introduction to Cloud Computing:"));

let CGPA = (Database+ internship + Networking + game+cloud) / 5
alert(`I am ${your_name} and I am enrolled in ${faculty} . My exam roll number is ${roll} and I scored ${CGPA} CGPA in my bachelor's`)

