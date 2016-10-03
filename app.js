$(document).ready(function(){
 $(".question_list").hide();
  $(".food_img").hide();
  $(".hint").hide();
  var score = 0;
});

var state = {
  exoticFood: [
    {
      question: "Guess this italian dish",
      answers: ["pasta", "spaghetti"],
      correctAnswer: "pasta",
      image: "IMAGE",
    },
    {
      question: "guess this Turkish food",
      answers: ["Lokum", "bannock bread", "witchety grub"],
      correctAnswer: "Lokum",
      image: "IMAGE2",
    },
    {
      question: "Guess this Australian dish",
      answers: ["kangaroo burger", "vegemite"],
      correctAnswer: "kangaroo burger",
      image: "IMAGE3",
    },
    {
      question: "Guess this fun dish",
      answers: ["crickets"],
      correctAnswer: "crickets",
      image: "IMAGE4",
    },
    {
      question: "Guess this Scottish dish",
      answers: ["bannock bread", "Scotch egg"],
      correctAnswer: "bannock bread",
      image: "IMAGE5",
    } ],
    current_question: 0,
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
    console.log(state.exoticFood[state.current_question]["question"]);
    var q = state.exoticFood[state.current_question]["question"];
    $(".title").html(q);
};



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


