//privacy 
document.addEventListener('contextmenu', function(e){
	e.preventDefault();
});



//variable for results

var mbti;
var first;
var second;
var third;
var fourth;


var progress =document.getElementById("progress");

var buttons = document.querySelectorAll('.btn');
var btnCount = {};

buttons.forEach(function(button){
	button.addEventListener('click',function(){
		var btnval = button.value;

		btnCount[btnval] = (btnCount[btnval] | 0)+1;
		// console.log(btnval+btnCount[btnval]);


		//first letter

		var count = btnCount[btnval];
		// colnsole.log(count);

		if (btnval == "I" && count >=2) {
			first = "I";
			// console.log(first);
		} else if (btnval == "E" && count >=2) {
			first = "E";
		}


		//second letter

		if (btnval == "S" && count >=2) {
			second = "S";
		} else if (btnval == "N" && count >=2) {
			second = "N";
		}


		//third letter

		if (btnval == "F" && count >=2) {
			third = "F";
		} else if (btnval == "T" && count >=2) {
			third = "T";
		}


		//fourth letter
		if (btnval == "J" && count >=2) {
			fourth = "J";
		} else if (btnval == "P" && count >=2) {
			fourth = "P";
		}

	});
});





function StartTest() {
	// body...
	document.getElementById("questions").style.display="block";
	document.getElementById("firstpage").style.display="none";

	window.location.href='#questions';


}

function QuestionOne() {
	document.getElementById("quest_one").style.display="none";
	document.getElementById("quest_two").style.display="block";

	progress.innerHTML = "2/12";


}

function QuestionTwo() {
	document.getElementById("quest_one").style.display="none";
	document.getElementById("quest_two").style.display="none";
	document.getElementById("quest_three").style.display="block";

	progress.innerHTML = "3/12";

}

function QuestionThree() {
	document.getElementById("quest_one").style.display="none";
	document.getElementById("quest_two").style.display="none";
	document.getElementById("quest_three").style.display="none";
	document.getElementById("quest_four").style.display="block";

	progress.innerHTML = "4/12";


}

function QuestionFour() {
	document.getElementById("quest_one").style.display="none";
	document.getElementById("quest_two").style.display="none";
	document.getElementById("quest_three").style.display="none";
	document.getElementById("quest_four").style.display="none";
	document.getElementById("quest_five").style.display="block";

	progress.innerHTML = "5/12";

}

function QuestionFive() {
	document.getElementById("quest_one").style.display="none";
	document.getElementById("quest_two").style.display="none";
	document.getElementById("quest_three").style.display="none";
	document.getElementById("quest_four").style.display="none";
	document.getElementById("quest_five").style.display="none";
	document.getElementById("quest_six").style.display="block";

	progress.innerHTML = "6/12";

}

function QuestionSix() {
	document.getElementById("quest_one").style.display="none";
	document.getElementById("quest_two").style.display="none";
	document.getElementById("quest_three").style.display="none";
	document.getElementById("quest_four").style.display="none";
	document.getElementById("quest_five").style.display="none";
	document.getElementById("quest_six").style.display="none";
	document.getElementById("quest_seven").style.display="block";

	progress.innerHTML = "7/12";

}

function QuestionSeven() {
	document.getElementById("quest_one").style.display="none";
	document.getElementById("quest_two").style.display="none";
	document.getElementById("quest_three").style.display="none";
	document.getElementById("quest_four").style.display="none";
	document.getElementById("quest_five").style.display="none";
	document.getElementById("quest_six").style.display="none";
	document.getElementById("quest_seven").style.display="none";
	document.getElementById("quest_eight").style.display="block";

	progress.innerHTML = "8/12";

}

function QuestionEight() {
	document.getElementById("quest_one").style.display="none";
	document.getElementById("quest_two").style.display="none";
	document.getElementById("quest_three").style.display="none";
	document.getElementById("quest_four").style.display="none";
	document.getElementById("quest_five").style.display="none";
	document.getElementById("quest_six").style.display="none";
	document.getElementById("quest_seven").style.display="none";
	document.getElementById("quest_eight").style.display="none";
	document.getElementById("quest_nine").style.display="block";

	progress.innerHTML = "9/12";

}

function QuestionNine() {
	document.getElementById("quest_one").style.display="none";
	document.getElementById("quest_two").style.display="none";
	document.getElementById("quest_three").style.display="none";
	document.getElementById("quest_four").style.display="none";
	document.getElementById("quest_five").style.display="none";
	document.getElementById("quest_six").style.display="none";
	document.getElementById("quest_seven").style.display="none";
	document.getElementById("quest_eight").style.display="none";
	document.getElementById("quest_nine").style.display="none";
	document.getElementById("quest_ten").style.display="block";

	progress.innerHTML = "10/12";

}

function QuestionTen() {
	document.getElementById("quest_one").style.display="none";
	document.getElementById("quest_two").style.display="none";
	document.getElementById("quest_three").style.display="none";
	document.getElementById("quest_four").style.display="none";
	document.getElementById("quest_five").style.display="none";
	document.getElementById("quest_six").style.display="none";
	document.getElementById("quest_seven").style.display="none";
	document.getElementById("quest_eight").style.display="none";
	document.getElementById("quest_nine").style.display="none";
	document.getElementById("quest_ten").style.display="none";
	document.getElementById("quest_eleven").style.display="block";

	progress.innerHTML = "11/12";

}

function QuestionEleven() {
	document.getElementById("quest_one").style.display="none";
	document.getElementById("quest_two").style.display="none";
	document.getElementById("quest_three").style.display="none";
	document.getElementById("quest_four").style.display="none";
	document.getElementById("quest_five").style.display="none";
	document.getElementById("quest_six").style.display="none";
	document.getElementById("quest_seven").style.display="none";
	document.getElementById("quest_eight").style.display="none";
	document.getElementById("quest_nine").style.display="none";
	document.getElementById("quest_ten").style.display="none";
	document.getElementById("quest_eleven").style.display="none";
	document.getElementById("quest_twelve").style.display="block";

	progress.innerHTML = "12/12";
}

function QuestionTwelve() {
	document.getElementById("quest_one").style.display="none";
	document.getElementById("quest_two").style.display="none";
	document.getElementById("quest_three").style.display="none";
	document.getElementById("quest_four").style.display="none";
	document.getElementById("quest_five").style.display="none";
	document.getElementById("quest_six").style.display="none";
	document.getElementById("quest_seven").style.display="none";
	document.getElementById("quest_eight").style.display="none";
	document.getElementById("quest_nine").style.display="none";
	document.getElementById("quest_ten").style.display="none";
	document.getElementById("quest_eleven").style.display="none";
	document.getElementById("quest_twelve").style.display="none";
	document.getElementById("questions").style.display="none";
	document.getElementById("canvas").style.display="none";

	setTimeout(function(){
		document.getElementById("mbti_result").style.display="block";
		var mbti = first+second+third+fourth;
		// console.log(mbti);
		// alert(mbti);
		
		var result = document.getElementById("result");

		if (mbti == "INFJ") {
			result.src = "result/infj.jpg"
		} else if (mbti == "INFP") {
			result.src = "result/infp.jpg"
		} else if (mbti == "INTJ") {
			result.src = "result/intj.jpg"
		} else if (mbti == "INTP") {
			result.src = "result/intp.jpg"
		} else if (mbti == "ISFJ") {
			result.src = "result/isfj.jpg"
		} else if (mbti == "ISFP") {
			result.src = "result/isfp.jpg"
		} else if (mbti == "ISTJ") {
			result.src = "result/istj.jpg"
		} else if (mbti == "ISTP") {
			result.src = "result/istp.jpg"
		} else if (mbti == "ENFJ") {
			result.src = "result/enfj.jpg"
		} else if (mbti == "ENFP") {
			result.src = "result/enfp.jpg"
		} else if (mbti == "ENTJ") {
			result.src = "result/entj.jpg"
		} else if (mbti == "ENTP") {
			result.src = "result/entp.jpg"
		} else if (mbti == "ESFJ") {
			result.src = "result/esfj.jpg"
		} else if (mbti == "ESFP") {
			result.src = "result/esfp.jpg"
		} else if (mbti == "ESTJ") {
			result.src = "result/estj.jpg"
		} else if (mbti == "ESTP") {
			result.src = "result/estp.jpg"
		}

	},5000);

}

