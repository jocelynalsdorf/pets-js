function Pet(petType, petName, birthYear) {
	this.petType = petType;
	this.petName = petName;
	this.birthYear = birthYear;
	this.lifestyleScores = [];
}

Pet.prototype.ageConverter = function() {
	var currentYear = parseInt(new Date().getFullYear());
	var baseAge = 0;
	if(this.petType === "dog") {
		baseAge = currentYear - parseInt(this.birthYear);
		baseAge = baseAge * 7;
	}
	else if(this.petType === "cat") {
		baseAge = currentYear - parseInt(this.birthYear);
		if(baseAge === 2) {
			baseAge === 25;
		}
		else if (baseAge === 1) {
			baseAge === 10;
		}
		else {
			baseAge -= 2;
			baseAge = (baseAge * 4) + 25;
		}
		
	}
	else if(this.petType === "fish") {
		baseAge = currentYear - parseInt(this.birthYear);
		baseAge = baseAge * 5;
	}
	else if(this.petType === "horse") {
		baseAge = currentYear - parseInt(this.birthYear);
		
		if (baseAge === 1) {
			baseAge === 12;
		}
		else if(baseAge === 2) {
			baseAge === 19;
		}
		else if (baseAge === 3) {
			baseAge === 23;
		}
		else if (baseAge === 4) {
			baseAge === 27;
		}
		else if (baseAge === 5) {
			baseAge === 31;
		}
		else {
			baseAge -= 5;
			baseAge = (baseAge * 2.5) + 31;
		}
		
	}
		else {
			alert("that's not a legal pet, stupid")
		}
return baseAge;
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
Pet.prototype.addUp = function() {
var totalScore = 0;
var obj = this.lifestyleScores[0]
	for(var prop in obj) {
		totalScore += obj[prop];
	}
	return totalScore;
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
			var inputtedDrinking = parseInt($(this).find('input[name="drinks"]:checked').val());
			var inputtedSmoking = parseInt($(this).find('input[name="smokes"]:checked').val());
			var inputtedExercise = parseInt($(this).find('input[name="exercise"]:checked').val());
			var inputtedSatisfaction = parseInt($(this).find('input[name="satisfaction"]:checked').val());
			var inputtedPoop = parseInt($(this).find('input[name="bowels"]:checked').val());
			var inputtedWeight = parseInt($(this).find('input[name="weight"]:checked').val());

			var newScore = {drinks: inputtedDrinking, smokes: inputtedSmoking , exercise: inputtedExercise, satisfaction: inputtedSatisfaction, poop: inputtedPoop, weight: inputtedWeight};
			newPet.lifestyleScores.push(newScore);
			console.log(newPet.lifestyleScores);
		});

	alert(newPet.ageConverter());
	});

});