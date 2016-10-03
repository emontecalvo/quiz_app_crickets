$(document).ready(function(){
 $(".question_list").hide();
  $(".food_img").hide();
  $(".hint").hide();
  var score = 0;
});

var current_question = 0;

//storing questions/options/correct answers/image into an object
var state = {
  exoticFood: [
    {
      question: "Guess this italian dish",
      answers: ["pasta", "spaghetti"],
      correctAnswer: "pasta",
      image: "IMAGE",
    },
    {
      question: "",
      answers: [],
      correctAnswer: "",
      image: "",
    },
    {
      question: "",
      answers: [],
      correctAnswer: "",
      image: "",
    },
  {
    question: "",
    answers: [],
    correctAnswer: "",
    image: "",
  },
  {
    question: "",
    answers: [],
    correctAnswer: "",
    image: "",
  } ]
};


//start looping through an array. 

$(".start_button").click(function(){
  $(".start_button").hide();
  showQuestion();
  // $(".question_list").show();
  // $(".food_img").show();
  // $(".hint").show();
});

function showQuestion(){
  if(current_question < state.exoticFood.length) {
    for (var i = 0; i < state.exoticFood.length; i++) {
      console.log(state.exoticFood[i]["question"]);
      var q = state.exoticFood[i]["question"];
      $(".title").html(q);
    };

  }
  
  /*var current_question = state.exoticFood[0];
  console.log(current_question);
  $(".hint").text(current_question);*/
};

//click on an option, if the answer is correct 
// the submit button will say correct else incorrect if the answer 
// is wrong and will highlight right answer

//clicking on continue button
//will show the next array item

//end of all the questions, it will display score
//restart button


