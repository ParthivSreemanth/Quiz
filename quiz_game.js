const questions = [
    {
    question : "1) Which team won the Icc cricket world cup 2023 ?",
    a : "India",
    b : "Australlia",
    c : "England",
    d : "South Africa",
    correct : "b",
    },
    {
        question : "2) Who was Elected as the new Cheif Minsiter of Telangana ?",
        a : "KTR",
        b : "KCR",
        c : "Revanth Reddy",
        d : "Bhatti Vikramarka",
        correct : "c",
        },
        {
            question : "3) How many primitive data types are there in Java ?",
            a : "8",
            b : "9",
            c : "7",
            d : "6",
            correct : "a",
            },
            {
                question : "4) Which city is Financial capital of India ?",
                a : "Banglore",
                b : "Kolkata",
                c : "Chennai",
                d : "Mumbai",
                correct : "d",
                },
                {
                    question : "5) Which one is the longest river in the world ?",
                    a : "Amazon",
                    b : "Nile",
                    c : "Ganga",
                    d : "Mississippi",
                    correct : "b",
                    },
                    {
                        question : "6) Which among the following was the first city attacked by atom bomb ?",
                        a : "Hiroshima",
                        b : "Nagasaki",
                        c : "Yokohama",
                        d : "Kuwasaki",
                        correct : "a",
                        },
                        {
                            question : "7) Which is the smallest planet in the solar system ?",
                            a : "Mars",
                            b : "Earth",
                            c : "Neptune",
                            d : "Mercury",
                            correct : "d",
                            },
                            {
                                question : "8) Which team won more FIFA world cup titles ?",
                                a : "Argentina",
                                b : "France",
                                c : "Brazil",
                                d : "Germany",
                                correct : "c",
                                },
                                {
                                    question : "9) Which method removes the last element from an array and return that element ?",
                                    a : "pop()",
                                    b : "shift()",
                                    c : "remove()",
                                    d : "slice()",
                                    correct : "a",
                                    },
                                    {
                                        question : "10) Which indian actor received Padma Vibhushan award in the year 2024 ?",
                                        a : "Mohanlal",
                                        b : "Rajinikanth",
                                        c : "Amitabh Bachan",
                                        d : "Chiranjeevi",
                                        correct : "d",
                                        },
                    
                 
            
        
    
]

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll('.answer'); // Use querySelectorAll to select all elements

const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text'); 
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submit_button = document.getElementById('submit');
const timerEl = document.getElementById('timer');

let currentQuiz = 0;
let score = 0;
let timeLeft = 120;


loadQuiz();
startTimer();


function loadQuiz(){
    deselectAnswers();
    const currentQuizData = questions[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;



}

function deselectAnswers(){
    answerEls.forEach(answerEls => answerEls.checked = false);
}

/*function getSelected(){
    let answerEls
    answerEls.forEach(answerEl => {
        if(answerEl.checked){
            answer = answerEl.id
        }
        return answer;
    })
}*/

function getSelected(){
    let answer;  // Declare the variable only once
    answerEls.forEach(answerEl => {
        if(answerEl.checked){
            answer = answerEl.id
        }
    })
    return answer;
}





function startTimer() {
    const timerInterval = setInterval(() => {
        timerEl.innerText = `Time Left: ${timeLeft} seconds`;
        timeLeft--;

        if (timeLeft < 0) {
            clearInterval(timerInterval);
            finishQuiz();
        }
    }, 1000); // Update every second
}

submit_button.addEventListener('click', () => {
    const answer = getSelected()
    if(answer){
        if(answer === questions[currentQuiz].correct){
            score++;
        }
        currentQuiz++
        if(currentQuiz < questions.length){
            loadQuiz();
        }
        else{
            finishQuiz();
           
        }

    }
});

function finishQuiz(){
    
   // quiz.innerHTML = `Quiz Completed! Your score is ${score}/${questions.length}`;
    //timerEl.innerText = "Time's up!";
    if(score>=8){
    quiz.innerHTML = `Quiz Completed! Your score is ${score}/${questions.length}<br>`;
    quiz.innerHTML += '<span style = "color:green;">You have PASSED the Test</span><br>';
    quiz.innerHTML += '<button onclick="location.reload()">Reload</button>'
    timerEl.innerText = "Time's up!";
    }
    else{
        quiz.innerHTML = `Quiz Completed! Your score is ${score}/${questions.length}<br>`;
        quiz.innerHTML += '<span style = "color:red;">You have FAILED the Test</span><br>';
        quiz.innerHTML += '<button onclick="location.reload()">Reload</button>'
        timerEl.innerText = "Time's up!";
        

    }
}
function showSecondCard(){
    document.getElementById("firstcard").style.display='none';
    document.getElementById("secondcard").style.display='block';
}
