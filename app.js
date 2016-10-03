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
};


//start looping through an array. 

$(".start_button").click(function(){
  $(".start_button").hide();
  showQuestion();
});

function showQuestion(){
  $(".answer_options").show();
    console.log(state.exoticFood[state.current_question]["question"]);
    var q = state.exoticFood[state.current_question]["question"];
    $(".title").html(q);
    $("li:nth-child(1)").html("<li><input type='checkbox'/>" + state.exoticFood[state.current_question]["answers"][0]) + "</li>";
    $("li:nth-child(2)").html("<li><input type='checkbox'/>" + state.exoticFood[state.current_question]["answers"][1]) + "</li>";
    $("li:nth-child(3)").html("<li><input type='checkbox'/>" + state.exoticFood[state.current_question]["answers"][2]) + "</li>";
    $("li:nth-child(4)").html("<li><input type='checkbox'/>" + state.exoticFood[state.current_question]["answers"][3]) + "</li>";
};
// $("#element2").replaceWith("This is the second element");

function nextQuestion(){
  state.current_question += 1;
  showQuestion();
};

//click on an option, if the answer is correct 
// the submit button will say correct else incorrect if the answer 
// is wrong and will highlight right answer

//clicking on continue button
//will show the next array item

//end of all the questions, it will display score
//restart button


