var pos = 0, test, test_status, question, choice, choices, chA, chB, chC, chD, correct = 0, name = 0;

var quizAnswers = [];

var questions =  [//questions which shuffle
	{question: "When did World War II Begin?",
	correctAnswer: "1939",
	answer0: "1941",
	answer1: "1939",
	answer2: "1918",
	answer3: "1914"
	},//1
	
	{question: "When did the United States enter the war?",
	correctAnswer:"1941",
	answer0:"1963",
	answer1: "1941",
	answer2:"1939",
	answer3:"None of the above"
	},//2
	
	{question: "When was the soviet union invaded?",
	correctAnswer:"1941",
	answer0:"1939",
	answer1:"1941",
	answer2:"1942",
	answer3:"1940"
	},//3
	
	{question: "What was the Line of defence called between Germany and France?",
	correctAnswer:"The Maginot Line",
	answer0:"The Maginot Line",
	answer1:"The Bagette Line",
	answer2:"The Surrender Line",
	answer3:"The Go around Line"
	},//4
	
	{question: "Who was Joseph Stalin?",
	correctAnswer:"The Soviet Leader",
	answer0:"Nobody",
	answer1:"The Soviet Leader",
	answer2:"The Nazi Leader",
	answer3:"Was in Abba"
	},//5
	
	{question: "Who was Theo Roosevelt?",
	correctAnswer:"The American President",
	answer0:"The American President",
	answer1:"The creator of the pen",
	answer2:"The creator of the Hawaiian Pizza",
	answer3:"Orange Import"
	},//6
	
	{question: "What City Stopped the Nazi advance?",
	correctAnswer:"Stalingrad",
	answer0:"Stalingrad",
	answer1:"Berlin",
	answer2:"Paris",
	answer3:"Tokyo"
	},//7
	
	{question: "Who were the U.S. fighting the pacific?",
	correctAnswer:"Japan",
	answer0:"Japan",
	answer1:"China",
	answer2:"Philippines",
	answer3:"Russia"
	},//8
	
	{question: "Who was the emperor of Japan?",
	correctAnswer:"Emperor Hirohito",
	answer0:"Emperor Hirohito",
	answer1:"Kim Jong Il",
	answer2:"Ji Sung park",
	answer3:"Mario"
	},//9
	
	{question: "What were german Submarines commonly referred to as?",
	correctAnswer:"U-Boats",
	answer0:"U-Boats",
	answer1:"H-Boats",
	answer2:"M-Boats",
	answer3:"F-Boats"
	},//10
	
	{question: "What brought America into the war?",
	correctAnswer:"Pearl Harbour",
	answer0:"Pearl Harbour",
	answer1:"The Treaty Of Varsille",
	answer2:"Shortage Of BMW's",
	answer3:"Civil Rights"
	},//11
	
	{question: "What Branch of the Military did JFK serve in?",
	correctAnswer:"Navy",
	answer0:"Army",
	answer1:"Navy",
	answer2:"Coastguard",
	answer3:"Airforce"
	},//12
	
	{question: "What was america's codename for the Development of the Atomic Bomb?",
	correctAnswer:"The Manhattan Project",
	answer0:"The Manhattan Project",
	answer1:"Project Gotham",
	answer2:"Project Runway",
	answer3:"Area 51"
	},//13
	
	{question: "How many Nazi Concentration camps were there?",
	correctAnswer:"42,500",
	answer0:"42,500",
	answer1:"400",
	answer2:"4000",
	answer3:"140,000"
	},//14
	
	{question: "Where did the D-Day landing take place?",
	correctAnswer:"Normandy",
	answer0:"Jersey Shore",
	answer1:"Normandy",
	answer2:"Berlin",
	answer3:"Africa"},//15
	
	{question: "What African country did Italy Invade?",
	correctAnswer:"Ethiopia",
	answer0:"Ethiopia",
	answer1:"South Africa",
	answer2:"The Congo",
	answer3:"Nigeria"
	},//16
	
	{question: "How many People died during WWII?",
	correctAnswer:"60 Million",
	answer0:"60 Million",
	answer1:"20 Million",
	answer2:"3 people",
	answer3:"100 Million"
	},//17
	
	{question: "What percentage of Poles Died During WWII?",
	correctAnswer:"20%",
	answer0:"20%",
	answer1:"60%",
	answer2:"50%",
	answer3:"0%"
	},//18
	
	{question: "What were the combined names of the victors in WWII?",
	correctAnswer:"The Allies",
	answer0:"The Allies",
	answer1:"The Axis",
	answer2:"Shield",
	answer3:"Avengers"
	},//19
	
	{question: "How many parts was Germany split up into after the war?",
	correctAnswer:"4",
	answer0:"3",
	answer1:"4",
	answer2:"2",
	answer3:"8"
	}//20



];

function shuffleArray(array) //shuffle function
{
	for (var i = array.length - 1; i > 0; i--) 
	{
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
	}
	return array;
}

function _(x){
return document.getElementById(x);
}

function renderQuestion(){//render question
	test = _("test");
	if(pos >= questions.length){
		test.innerHTML = "<h2>You got "+correct+" of "+questions.length+" questions correct(" + percent() + "%)</h2><button onclick='window.print()'>Print thispage</button><button onclick='Solutions()'>Solutions</button>";//print function
		_("test_status").innerHTML += "Quiz Complete";
		pos = 0;
		correct = 0;
		return false;
	}
	
	_("test_status").innerHTML = "Question "+(pos+1)+" of "+questions.length;
	var bar=document.getElementById("progressBar");
	bar.value = (pos+1)
	
	quizAnswers[0] = questions[pos].answer0;
	quizAnswers[1] = questions[pos].answer1;
	quizAnswers[2] = questions[pos].answer2;
	quizAnswers[3] = questions[pos].answer3;
	
	
	console.log("Unshuffled answers" + quizAnswers);
	
	var shuffledAnswers = shuffleArray(quizAnswers);

	console.log("Shuffled answers" + shuffledAnswers);

	
	question = questions[pos].question;
	chA = shuffledAnswers[0];
	chB = shuffledAnswers[1];
	chC = shuffledAnswers[2];
	chD = shuffledAnswers[3];
	
	
	
	test.innerHTML = "<h3>"+question+"</h3>";
	test.innerHTML += "<input type='radio' name='choices' value='"+chA+"'> "+chA+"<br>";
	test.innerHTML += "<input type='radio' name='choices' value='"+chB+"'> "+chB+"<br>";
	test.innerHTML += "<input type='radio' name='choices' value='"+chC+"'> "+chC+"<br>";
	test.innerHTML += "<input type='radio' name='choices' value='"+chD+"'> "+chD+"<br><br>";
	test.innerHTML += "<button onclick='checkAnswer()'>Submit </button>";
}

function percent()//gives percentage at end
{
    var perc = Math.round((correct/questions.length)*100);
    return perc;
}

function store(){
	var firstName = _("name").value;
	sessionStorage.name = firstName;
}








function checkAnswer(){
	choices = document.getElementsByName("choices");
	for(var i=0; i<choices.length; i++){
		if(choices[i].checked){
			choice = choices[i].value;
		}
	}
	console.log("Chosen answer is " + choice);
	if(choice == questions[pos].correctAnswer){
		correct++;
	}
	pos++;
	renderQuestion();
}

function Solutions(){
        window.location='Solutions.html';
    }

window.addEventListener("load", renderQuestion, false);

