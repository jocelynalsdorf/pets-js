function Pet(petType, petName, birthYear) {
	this.petType = petType;
	this.petName = petName;
	this.birthYear = birthYear;
	this.lifestyleScores = [];
}

Pet.prototype.ageConverter = function() {
	alert("not done yet");
}

Pet.prototype.lifestyleFactors = function(newScore) {
 alert(score);
}

function Score(drinks,smokes,exercise,satisfaction,poop,weight) {
	this.drinks = drinks;
	this.smokes = smokes;
	this.exercise = exercise;
	this.satisfaction = satisfaction;
	this.poop = poop;
	this.weight = weight;
}


$(document).ready(function() {
	
	$("form#new-pet").submit(function(event){
	event.preventDefault();
	var inputtedPetType = $('input[name="pet-type"]:checked').val();
	var inputtedPetName = $("input#pet-name").val();
	var inputtedBirthYear = $("input#age").val();

	
		

	var newPet = new Pet(inputtedPetType, inputtedPetName,inputtedBirthYear);
		alert(newPet.petName);

		 $("#lifestyle-questions").each(function(){
			var inputtedDrinking = $(this).find('input[name="drinks"]:checked').val();
			var inputtedSmoking = $(this).find('input[name="smokes"]:checked').val();
			var inputtedExercise = $(this).find('input[name="exercise"]:checked').val();
			var inputtedSatisfaction = $(this).find('input[name="satisfaction"]:checked').val();
			var inputtedPoop = $(this).find('input[name="bowels"]:checked').val();
			var inputtedWeight = $(this).find('input[name="weight"]:checked').val();

			var newScore = {drinks: inputtedDrinking, smokes: inputtedSmoking , exercise: inputtedExercise, satisfaction: inputtedSatisfaction, poop: inputtedPoop, weight: inputtedWeight};
			newPet.lifestyleScores.push(newScore);
			console.log(newPet.lifestyleScores);
		});
	
	});

});