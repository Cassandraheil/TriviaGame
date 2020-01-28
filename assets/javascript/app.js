window.onload = function() { 
    var questions =[
            { q:"What do the three pieces of the triforce stand for?", 
                a0: "the three different lands", 
                a1:"Zelda, Ganondorf, and Link", 
                a2:"Strength, Bravery, and Wisdom",
                a3:"Power, Wisdom, and Courage",
                    correctAnswer: "Power, Wisdom, and Courage"},
            { q:"In Ocarina of Time, how does Zelda hide from Ganondorf?", 
                a0: "travels to the Twilight realm", 
                a1:"finds a cave in the mountains to hide in", 
                a2:"diguises herself as a dude", 
                a3:"she doesn't, Zelda awaits rescue in Ganandorf's prison",
                    correctAnswer: "diguises herself as a dude"},
                       
            { q:"In Breath Of The Wild, what are the 4 main races?",
                a0: "Goron, Gerudo, Hylian, and Zora", 
                a1:"Fairy, Kokiri, Deku and Rito", 
                a2:"Rito, Tingles, Yamatami, and Hylian", 
                a3:"Zora, Goron, Deku, and Anouki",
                    correctAnswer: "Goron, Gerudo, Hylian, and Zora"},
           { q:"How many timelines are there in the Legend of Zelda universe?", 
                a0: "1", 
                a1: "2", 
                a2: "3", 
                a3: "4",
                    correctAnswer: "3"},
            { q:"Who is Zelda the reincarnate of?", 
                a0: "The Goddess Nayru", 
                a1: "the Goddess Din", 
                a2: "The Goddess Hylia", 
                a3: "The Goddess Farore",
                    correctAnswer: "The Goddess Hylia"},
            { q:"In Skyward Sword, who put the curse on Zelda and Link to forever deal with their hatred?", 
                a0: "Vaati", 
                a1: "Ganondorf", 
                a2: "Calamity Ganon", 
                a3: "Demise",
                    correctAnswer: "Demise"},
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
    document.getElementById("button").style.display = "none"
    nextQuestion();   
}


//basic game functions
    function nextQuestion() {
        
        if (questioni <= (questions.length-1)) {
            runTimer();
                $("#question").html(questions[questioni].q);
                $("#answer0").html(questions[questioni].a0);
                $("#answer1").html(questions[questioni].a1);
                $("#answer2").html(questions[questioni].a2);
                $("#answer3").html(questions[questioni].a3);
                console.log("questioni", questioni)
        }
        

            else {
            $("#question").html("Game Over!");
            document.getElementById("answer0").style.display = "none";
            document.getElementById("answer1").style.display = "none";
            document.getElementById("answer2").style.display = "none";
            document.getElementById("answer3").style.display = "none";
            document.getElementById("countDown").style.display = "none";
            $("#numberWrong").html("Wrong: " + wrong);
            $("#numberCorrect").html("Correct: " + correct);
            }
        
    }
    // function updateCorrect(){
    //     $("#correct").html("Correct: " + correct);
    // }

    // function updateWrong(){
    //     $("#wrong").html("wrong: " + wrong);
    // }


//timer
    function decrement(){
        if (countDown === 0){
            console.log("time's up")
            nextQuestion();
            questioni++;
        }
        else {
        countDown--;
        document.getElementById("countDown").textContent = "Timer: " + countDown;
    }
    }
    function runTimer(){
        countDown = 30;
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
            nextQuestion()
            }
        console.log($(this).text())
        let btnClicked = $(this).text();

            // If they guess the correct answer
            if (btnClicked === questions[questioni].correctAnswer) {
                // questions[questioni].correctAnswer) 
                console.log("correct");
                correct++;
                // $("#correct").html("Correct: " + correct);
                questioni++;
                nextQuestion()
            }
            // If wrong, update score
            else {
                console.log("Wrong!");
                wrong ++;
                // $("#wrong").html("wrong: " + wrong);
                nextQuestion();
            };
        });

            
}
// i did not have time to get a gif pop up in between each question, 
        // i would try to have an array of gifs that relate to the question index
