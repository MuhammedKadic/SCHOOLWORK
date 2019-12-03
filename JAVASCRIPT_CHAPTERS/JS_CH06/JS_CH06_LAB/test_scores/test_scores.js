var names = ["Ben", "Joel", "Judy", "Anne"];
var scores = [88, 98, 77, 88];

var $ = function(id) {
  return document.getElementById(id);
};

let addScoreToArray = function() {
  let new_name_value = $('name').value;
  let new_score_value = parseFloat($('score').value);
  $('information-popup').innerHTML = "You have successfull added " + new_name_value + " to the database.<br>";
  setTimeout(function() {
    $('information-popup').innerHTML = "";
  }, 2000);
  names.push(new_name_value);
  scores.push(new_score_value);
}

let displayResults = function() {
  averageScore();
  highestScore();
}

let displayScores = function() {
	document.getElementById('scores_title').innerHTML = "Scores";
	document.getElementById('th_element').innerHTML = "";
	document.getElementById('th2_element').innerHTML = "";

	document.getElementById('on_load_name').innerHTML = "Name";
	document.getElementById('on_load_score').innerHTML = "Score";
  for (i = 0; i < names.length; i++){
		document.getElementById('th_element').innerHTML += names[i]+ "<br>";
		document.getElementById('th2_element').innerHTML += scores[i] + "<br>";

		console.log(names[i]);
		console.log(scores[i]);
	}

}
let addAnArray = function(total, num) {
  return total + num;
}
window.onload = function() {
  $("add").onclick = addScoreToArray;
  $("display_results").onclick = displayResults;
  $("display_scores").onclick = displayScores;
};


let highestScore = function() {
  let highest_score_calc = Math.max(...scores);
  let highest_score = scores.indexOf(highest_score_calc);
  let person = names[highest_score]
  $("highest_score").innerHTML = "<br>High Score = " + person + " with a score of " + highest_score_calc;
}

let averageScore = function() {
  //DOES SOME MATH
  let sumof_scores = scores.reduce(addAnArray);
  let cal_wow = sumof_scores / scores.length;

  document.getElementById('this_span').innerHTML = "Results";
  document.getElementById('average_score').innerHTML = "<br>Average Score = " + cal_wow;
}
