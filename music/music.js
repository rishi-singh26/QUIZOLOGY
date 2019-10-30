var name;

function formFunction1() {
   // form management here
   name = document.getElementById("name").value;
   window.location.href = "quiz1.html";
}

function formFunction2() {
   // form management here
   name = document.getElementById("name").value;
   window.location.href = "quiz2.html";
}

function formFunction3() {
   // form management here
   name = document.getElementById("name").value;
   window.location.href = "quiz3.html";
}
// clicking enter button works as cicking the begin quiz button here

// document.getElementById("name").addEventListener("keyup", function(event) {
//    event.preventDefault();
//    if (event.keyCode === 16) {
//       document.getElementById("button1").click();
//    }
// });

// document.getElementById("name").addEventListener("keyup", function(event) {
//    event.preventDefault();
//    if (event.keyCode === 17) {
//       document.getElementById("button2").click();
//    }
// });

// document.getElementById("name").addEventListener("keyup", function(event) {
//    event.preventDefault();
//    if (event.keyCode === 18) {
//       document.getElementById("button3").click();
//    }
// });
