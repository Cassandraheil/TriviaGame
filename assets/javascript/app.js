window.onload = function() { 
    var questions =[
            { q:"What do the three pieces of the triforce stand for?", 
                a0: "Power, Wisdom, and Courage", 
                a1:"Zelda, Ganondorf, and Link", 
                a2:"Strength, Bravery, and Wisdom",
                a3:"the three different lands",
                    correctAnswer: "a0"},
            { q:"In Ocarina of Time, how does Zelda hide from Ganondorf?", 
                a0: "diguises herself as a dude", 
                a1:"finds a cave in the mountains to hide in", 
                a2:"travels to the Twilight realm", 
                a3:"she doesn't, Zelda awaits rescue in Ganandorf's prison",
                    correctAnswer: "a0"},
            { q:"In Breath Of The Wild, what are the 4 main races?",
                a0: "Goron, Gerudo, Hylian, and Zora", 
                a1:"Fairy, Kokiri, Deku and Rito", 
                a2:"Rito, Tingles, Yamatami, and Hylian", 
                a3:"Zora, Goron, Deku, and Anouki",
                    correctAnswer: "a0"},
            { q:"ask different questions here3?", 
                a0: "answer", 
                a1: "another answer", 
                a2: "again answer", 
                a3: "different answer",
                    correctAnswer: "a0"},
            ];

    // var gifArray =[]
    console.log(questions[0].correctAnswer)


    let correct = 0;
    let wrong = 0;
    let questioni = 0;

    let countDown = 5;
    let interval;

//start button
$("#button").on("click", startBtn);
function startBtn() {
    nextQuestion();
    document.getElementById("button").style.display = "none"
}


//basic game functions
    function nextQuestion() {
        
        runTimer();
    
        if (questioni <= (questions.length - 1)) {
                $("#question").html(questions[questioni].q);
                $("#answer0").html(questions[questioni].a0);
                $("#answer1").html(questions[questioni].a1);
                $("#answer2").html(questions[questioni].a2);
                $("#answer3").html(questions[questioni].a3);
                console.log("questioni", questioni)
        }
        

            else {
            $("#question").html("Game Over!");
            updateCorrect()
            updateWrong()
            }
        
    }
    function updateCorrect(){
        $("#correct").html("Correct: " + correct);
    }

    function updateWrong(){
        $("#wrong").html("wrong: " + wrong);
    }


//timer
    function decrement(){
        if (countDown === 0){
            console.log("time's up")
            reset();
        }
        else {
        countDown--;
        document.getElementById("countDown").textContent = "Timer: " + countDown;
    }
    }
    function runTimer(){
        clearInterval(interval);
        interval = setInterval(decrement, 1000);
    }
    function reset(){
        nextQuestion()
        
       countDown = 30;
       console.log(nextQuestion)

    }


   

        
// on click right or wrong answer, updates score
    $(".btn").click(function(event){
            // stops the function
            if (questioni === questions.length) {
            return;
            }

        var a = $("<button>");
        a.attr("data-name", );
        $(".btn").append(a);  

            // If they guess the correct answer
            if (a === questions[questioni].a0) {
                // questions[questioni].correctAnswer) 
                console.log("correct");
                correct++;
                updateCorrect();
            }
            // If wrong, update score
            else {
                console.log("Wrong!");
                wrong ++;
                updateWrong()
                
            }

         questioni++;
         nextQuestion();
        });

            
}