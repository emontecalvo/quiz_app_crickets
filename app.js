$(document).ready(function(){
 $(".question_list").hide();
  $(".food_img").hide();
  $(".answer_options").hide();
});

var state = {
  exoticFood: [
    {
      question: "Guess this italian dish",
      answers: ["pasta", "spaghetti", "lasagna", "pizza"],
      correctAnswer: "pasta",
      image: "IMAGE",
    },
    {
      question: "guess this Turkish food",
      answers: ["Lokum", "bannock bread", "witchety grub", "bubbles and squeak"],
      correctAnswer: "Lokum",
      image: "IMAGE2",
    },
    {
      question: "Guess this Australian dish",
      answers: ["kangaroo burger", "vegemite", "koala burger", "surstomming"],
      correctAnswer: "kangaroo burger",
      image: "IMAGE3",
    },
    {
      question: "Guess this fun dish",
      answers: ["crickets", "ants", "maggot", "cavier"],
      correctAnswer: "crickets",
      image: "IMAGE4",
    },
    {
      question: "Guess this Scottish dish",
      answers: ["bannock bread", "Scotch egg", "soda bread", "beer bread"],
      correctAnswer: "bannock bread",
      image: "IMAGE5",
    } ],
    current_question: 0,
    score: 0,
    attempts: 0,
};


//start looping through an array. 

$(".start_button").click(function(){
  $(".start_button").hide();
  showQuestion();
});

function showQuestion(){
  $(".answer_options").show();
    var q = state.exoticFood[state.current_question]["question"];
    $(".title").html(q);



    $("#first_choice").text(state.exoticFood[state.current_question]["answers"][0]);
    $("#second_choice").text(state.exoticFood[state.current_question]["answers"][1]);
    $("#third_choice").text(state.exoticFood[state.current_question]["answers"][2]);
    $("#fourth_choice").text(state.exoticFood[state.current_question]["answers"][3]);
};

  $(".choice_button").click(function() {
    var user_guess = $(this).text();
    checkAnswer(user_guess);
  });

function checkAnswer(user_guess){
  if (user_guess === state.exoticFood[state.current_question]["correctAnswer"]) {
    state.score += 1;
    state.attempts += 1;
    nextQuestion();
  } else {
    state.attempts += 1;
  }
};

function nextQuestion(){
  state.current_question += 1;
  console.log(state.current_question, state.exoticFood.length, "--position");
  if (state.current_question < state.exoticFood.length) {
    showQuestion();
  } else {
    $(".title").text("Your final score is: " + state.score + " out of " + state.attempts);
    rePlay();
  }
};

function rePlay() {
    $(".start_button").show();
    state.current_question = 0;
    state.score = 0;
    state.attempts = 0;
    $(".answer_options").hide();
};

//click on an option, if the answer is correct 
// the submit button will say correct else incorrect if the answer 
// is wrong and will highlight right answer

//clicking on continue button
//will show the next array item

//end of all the questions, it will display score
//restart button


