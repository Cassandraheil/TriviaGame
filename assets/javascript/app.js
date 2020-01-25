window.onload = function() { 
    

   let questions =[
        { q:"What do the three pieces of the triforce stand for?", a: "Power, Wisdom, and Courage"},
        { q:"ask different questions here1?", a: "answer", a:"another answer", a:"again answer", a:"different answer"},
        { q:"ask different questions here2?", a: "answer", a:"another answer", a:"again answer", a:"different answer"},
        { q:"ask different questions here3?", a: "answer", a:"another answer", a:"again answer", a:"different answer"},
        // maybe these answers should be there own variable?
    ];

    let correct = 0;
    let wrong = 0;
    let questioni = 0;

    let countDown = 30;
    let interval = "";
    


    document.getElementById("button").addEventListener("click", startBtn);
        function startBtn() {
        nextQuestion();
        document.getElementById("button").style.display = "none"
        
    }

    function updateCorrect(){
        document.getElementById("#correct").innerHTML = "Correct: " + correct;
    }

    function updateWrong(){
        document.getElementById("#wrong").innerHTML = "wrong: " + wrong;
    }

    function nextQuestion() {
        for (let i = 0; i <questions.length; i++) {
            if (questioni <= (questions.length - 1)) {
            document.getElementById("question").textContent = questions[i].q;
            document.getElementById("answers").textContent = questions[i].a;
            runTimer();
            // setTimeout(thirtySec, 1000*30);
            // function thirtySec(){
            //     console.log("times up")
            // }
            }

            else {
            document.getElementById("question").textContent = "Game Over!";
            updateCorrect()
            updateWrong()
            }
        }
    }
    function decrement(){
        countDown--;
        document.getElementById("countDown").textContent = "Timer: " + countDown;
        if (countDown === 0){
            console.log("times up")
            nextQuestion()
            runTimer()
        }
    }
    function runTimer(){
        clearInterval(interval);
        interval = setInterval(decrement, 1000);
    }
    function stop(){
        clearInterval(interval);
        console.log("stop")
    }
        
        




        // //on click buttton if i have a button
        // //on key if i have user press enter

        //     // stops the function
        //     if (questioni === questions.length) {
        //     return;
        //     }
        //     // If they guess the correct answer, increase and update score, alert them they got it right.
        //     if (userInput === questions[questionIndex].a) {
        //         alert("Correct!");
        //         score++;
        //         updateCorrect();
        //     }
        //     // If wrong, update score
        //     else {
        //         alert("Wrong!");
        //         wrong ++;
        //         updateWrong()
        //     }

        //     // Increment the questionIndex variable and call the renderQuestion function.
        //     questioni++;
        //     nextQuestion();

            
}