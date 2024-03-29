var questionsArray;
var random;
var noOfQuestions = 0;
var count = 0; //this counts the score of the player
var play = 0; //game os on if = 1, game is off
var questionNo = 1; //this puts the question number infront of each question
var askedQuestions = []; //this is an array which contains all the questions which has been asked
var questionIsAsked = 0; //0 means the question is not yet asked.

function takeQuiz() {
   // Quiz is below
   if (count <= 2) {
      if (play === 0) {
         var Questions = function(question, ans1, ans2, ans3, correct) {
            this.question = question;
            this.ans1 = ans1;
            this.ans2 = ans2;
            this.ans3 = ans3;
            this.correct = correct;
         };

         var question0 = new Questions(
            "Which of these is a fruit?",
            "A. apple",
            "B. rock",
            "C. paper",
            "apple"
         );
         var question1 = new Questions(
            "which is best?",
            "A. andriod",
            "B. ios",
            "C. kaios",
            "android"
         );
         var question2 = new Questions(
            "Which is a place from india?",
            "A. Delhi",
            "B. karchi",
            "C. dhaka",
            "Delhi"
         );

         questionsArray = [question0, question1, question2];
         if (play === 0) {
            random = Math.floor(Math.random() * 3);
            console.log(random);
            console.log(askedQuestions);

            for (i = 0; i < askedQuestions.length; i++) {
               if (random == askedQuestions[i]) {
                  questionIsAsked = 1;
                  console.log("question repeted");
               }
            }
            if (questionIsAsked == 0) {
               document.getElementById("playerName").textContent =
                  "Hello " + name;
               console.log(name);

               document.getElementById("question").innerHTML +=
                  "<h3>" +
                  questionNo +
                  ". " +
                  questionsArray[random].question +
                  "<br/>" +
                  questionsArray[random].ans1 +
                  "<br/>" +
                  questionsArray[random].ans2 +
                  "<br/>" +
                  questionsArray[random].ans3 +
                  "<br/>" +
                  "------------------------------------";

               questionNo += 1;
               askedQuestions.push(random);
            } else if (questionIsAsked == 1) {
               questionIsAsked = 0;
               takeQuiz();
            }
         }
      }
   }
}

// clicking enter button works as cicking the submit button here

document.getElementById("ans").addEventListener("keyup", function(event) {
   event.preventDefault();
   if (event.keyCode === 13) {
      document.getElementById("ansBtn").click();
   }
});

// function to validate the answer and display the result here

function run() {
   if (count <= 2) {
      var ans = document.getElementById("ans").value;

      if (questionsArray[random].correct === ans) {
         document.getElementById("res").innerHTML =
            "<h4>Your answer is " +
            "'" +
            ans +
            "'" +
            "<br />Correct answer</h4>";

         count += 1; //Increasing the value of count by one because we received a correct answer.

         noOfQuestions += 1; //incresing the no of questions by one.

         document.getElementById("score").innerHTML =
            "<h4>Score: " + count + "</h4>"; //displaying the score on the screen.
         document.getElementById("ans").value = "";

         document.getElementById("question").innerHTML +=
            "<h3 id=" + "correct" + ">Correct</h3>";
      } else {
         document.getElementById("res").innerHTML = "<h4>Wrong Answer.";

         // document.getElementById("ansTextbox").textContent = "";

         // document.getElementById("answeButton").textContent = "";

         count = 0;

         document.getElementById("score").innerHTML =
            "<h4>Score: " + count + "</h4>";
         noOfQuestions += 1; //incresing the no of questions by one.

         document.getElementById("ans").value = ""; //clearing the answer box

         document.getElementById("question").innerHTML +=
            "<h3 id=" + "wrong" + ">Wrong</h3>";

         // play = 1;
      }

      if (noOfQuestions == 3) {
         play = 1;
      }

      if (play != 1) {
         takeQuiz();
      }

      if (noOfQuestions == 3) {
         document.getElementById("answeButton").innerHTML = "";
         document.getElementById("newGameArea").innerHTML =
            "<p>You have completed all the questions in this category!! Congratulations</p>";
         document.getElementById("ansTextbox").textContent = "";
      }
   }
}

takeQuiz();

// function newGame() {
//    count = 0;
//    play = 0;
//    askedQuestions = [];
//    questionIsAsked = 0;
//    document.getElementById("res").innerHTML = "";
//    document.getElementById("question").innerHTML = "";
//    document.getElementById("newGameArea").innerHTML = "";
//    document.getElementById("score").innerHTML = "";
//    takeQuiz();
// }
