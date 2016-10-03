$(document).ready(function(){
 $(".question_list").hide();
  $(".food_img").hide();
  $(".answer_options").hide();
});

var state = {
  exoticFood: [
    {
      question: "Guess this delicasy from the Philipines",
      answers: ["egg", "spaghetti", "balut", "pizza"],
      correctAnswer: "balut",
      image: "https://usercontent2.hubstatic.com/12189345_f520.jpg",
    },
    {
      question: "guess this Turkish food",
      answers: ["Lokum", "bannock bread", "witchety grub", "bubbles and squeak"],
      correctAnswer: "Lokum",
      image: "http://f.tqn.com/y/candy/1/W/2/e/-/-/Turkish-Delight2-Andrew-Dernie-Photodisc-Getty-Images.jpg",
    },
    {
      question: "Guess this Australian dish",
      answers: ["kangaroo burger", "vegemite", "koala burger", "surstomming"],
      correctAnswer: "vegemite",
      image: "http://i2.cdn.turner.com/cnnnext/dam/assets/120607040650-vegemite-toast-story-top.jpg",
    },
    {
      question: "Guess this fun dish",
      answers: ["crickets", "ants", "maggot", "cavier"],
      correctAnswer: "crickets",
      image: "https://upload.wikimedia.org/wikipedia/commons/e/ef/Chingrit_thot.jpg",
    },
    {
      question: "Guess this Scottish dish",
      answers: ["bannock bread", "Scotch egg", "soda bread", "beer bread"],
      correctAnswer: "bannock bread",
      image: "http://www.juliegolob.com/wp-content/uploads/2013/07/Julie_Golob_Bannock_Bread.jpg",
    } ],
    current_question: 0,
    score: 0,
    attempts: 0,
};

$(".start_button").click(function(){
  $(".start_button").hide();
  showQuestion();
});

function showQuestion(){
  $(".answer_options").show();
    var q = state.exoticFood[state.current_question]["question"];
    $(".title").html(q);
    $(".food_img").show();
    $(".food_img img").attr("src", state.exoticFood[state.current_question]['image']);
    console.log(state.exoticFood[state.current_question]['image']);
    console.log($(".food_img img"));

    $("#first_choice").text(state.exoticFood[state.current_question]["answers"][0]);
    $("#second_choice").text(state.exoticFood[state.current_question]["answers"][1]);
    $("#third_choice").text(state.exoticFood[state.current_question]["answers"][2]);
    $("#fourth_choice").text(state.exoticFood[state.current_question]["answers"][3]);
};

  $(".choice_button").click(function() {
    var user_guess = $(this).text();
    $(this).addClass("turn_red");
    checkAnswer(user_guess);
  });

function checkAnswer(user_guess){
  if (user_guess === state.exoticFood[state.current_question]["correctAnswer"]) {
    $(".choice_button").removeClass("turn_red");
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
    $(".food_img").hide();
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

