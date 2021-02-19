window.onload = function() { 
    document.getElementById("gif").style.display = "none";

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
                a0: "Goron, Gerudo, Rito, and Zora", 
                a1:"Fairy, Kokiri, Deku, and Rito", 
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
            { q:"In Wind Waker, who does the King Of Red Lions turn out to be?", 
                a0: "Daphnes Nohansen Hyrule", 
                a1: "Prince Komali", 
                a2: "Tingle", 
                a3: "Helmaroc King",
                    correctAnswer: "Daphnes Nohansen Hyrule"},
            { q:"Which of the following is not one of the seven sages in Ocarina of Time", 
                a0: "Zelda", 
                a1: "Saria", 
                a2: "Epona", 
                a3: "Impa",
                    correctAnswer: "Epona"},
            
            ];

    var gifArray =["https://media.giphy.com/media/NVBR6cLvUjV9C/giphy.gif", "https://media.giphy.com/media/5MjQ87rBCRIB2/giphy.gif", "https://media.giphy.com/media/tsW2ZGhWGTQhG/giphy.gif", "https://media.giphy.com/media/YWUpVw86AtIbe/giphy.gif", "https://media.giphy.com/media/3ohjUSz7NyYWHNNQeA/giphy.gif", "https://media.giphy.com/media/144Q1gg0FkTEVG/giphy.gif", "https://media.giphy.com/media/e6mVL4gs5axZS/giphy.gif", "https://media.giphy.com/media/12ixBgnB8tVex2/giphy.gif", "https://media.giphy.com/media/WoWpouO164dBS/giphy.gif", "https://media.giphy.com/media/RkymcOKhoCRTG/giphy.gif", "https://media.giphy.com/media/PR6eLRwKaPnMaRYzVb/giphy.gif"]
    var wrongGif =["https://media.giphy.com/media/Urc6CzW703XFajktll/giphy.gif", "https://media.giphy.com/media/DkAaVkOaj74vS/giphy.gif", "https://media.giphy.com/media/tU4DoyFpHLSIE/giphy.gif", "https://media.giphy.com/media/z3fzetnSnRjLa/giphy.gif", "https://media.giphy.com/media/3NpzwnO0KfSIo/giphy.gif", "https://media.giphy.com/media/3ohc1bjC02MJjwly9i/giphy.gif", "https://media.giphy.com/media/ClybQ8ksHCmYw/giphy.gif", "https://media.giphy.com/media/nbAXNSL8nyDHfVnNuL/giphy.gif", "https://media.giphy.com/media/z3fzetnSnRjLa/giphy.gif", "https://media.giphy.com/media/fe3NDdz8tl6Vwm4xbr/giphy.gif", "https://media.giphy.com/media/GJtfejeAtTuJa/giphy.gif", "https://media.giphy.com/media/YAa6eYva5IMEw/giphy.gif", "https://media.giphy.com/media/DIJCGh2Rq1fs4/giphy.gif"]


    let correct = 0;
    let wrong = 0;
    let questioni = 0;

    let countDown = 5;
    let interval;

// hide the buttons
document.getElementById("answer0").style.display = "none";
document.getElementById("answer1").style.display = "none";
document.getElementById("answer2").style.display = "none";
document.getElementById("answer3").style.display = "none";
document.getElementById("countDown").style.display = "none";
document.getElementById("nextQuest").style.display = "none";


//start button
$("#start-button").on("click", startBtn);
function startBtn() {
    document.getElementById("start-button").style.display = "none"
    nextQuestion();   
}


//basic game functions
    function nextQuestion() {
        
        if (questioni <= (questions.length-1)) {
            runTimer();

            document.getElementById("correct").style.display = "none";
            document.getElementById("wrong").style.display = "none";
            document.getElementById("gif").style.display = "none";
            document.getElementById("nextQuest").style.display = "none";

            document.getElementById("answer0").style.display = "block";
            document.getElementById("answer1").style.display = "block";
            document.getElementById("answer2").style.display = "block";
            document.getElementById("answer3").style.display = "block";
            document.getElementById("countDown").style.display = "block"

                $("#question").html(questions[questioni].q);
                $("#answer0").html(questions[questioni].a0);
                $("#answer1").html(questions[questioni].a1);
                $("#answer2").html(questions[questioni].a2);
                $("#answer3").html(questions[questioni].a3);
                console.log("questioni", questioni)
        }
        

            else {
            $("#correct").html("Correct: "+ correct);
            $("#wrong").html("Wrong: "+ wrong);
            if (correct > 6){
                $("#question").html("Game Over! You are truly a Legend of Zelda Master");
            }else if (correct > 4){
                $("#question").html("Game Over! You did well.");
            }else {
                $("#question").html("Game Over! You should play the game more...");
            }
            document.getElementById("answer0").style.display = "none";
            document.getElementById("answer0").style.display = "none";
            document.getElementById("answer2").style.display = "none";
            document.getElementById("answer3").style.display = "none";
            document.getElementById("countDown").style.display = "none";
            document.getElementById("nextQuest").innerHTML = "play again";
            }
        
    }


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

        console.log("this is the button text " +$(this).text())
        let btnClicked = $(this).text();
        console.log("this is the correct answer: "+ questions[questioni].correctAnswer)
        // <img src="./images/crystal.jpg" alt="Blue Crystal">


            if (btnClicked === questions[questioni].correctAnswer) {

                console.log("correct");
                correct++;

                document.getElementById("correct").style.display = "block";
                document.getElementById("wrong").style.display = "block";
                document.getElementById("gif").style.display = "block";
                document.getElementById("nextQuest").style.display = "block";

                $("#question").html("Correct!");
                $("#correct").html("Correct: "+ correct);
                $("#wrong").html("Wrong: "+ wrong);
                var num = Math.floor(Math.random()* gifArray.length)
                $("#gif").attr("src", gifArray[num])
                console.log("the gif src", gifArray[num])

                document.getElementById("answer0").style.display = "none";
                document.getElementById("answer1").style.display = "none";
                document.getElementById("answer2").style.display = "none";
                document.getElementById("answer3").style.display = "none";
                document.getElementById("countDown").style.display = "none";
                

                questioni++;
                setTimeout(nextQuestion,1000*7);
            }
            // If wrong, update score
            else {
                console.log("Wrong!");
                wrong ++;
                
                document.getElementById("correct").style.display = "block";
                document.getElementById("wrong").style.display = "block";
                document.getElementById("gif").style.display = "block";

                $("#question").html("Wrong!");
                $("#correct").html("Correct: "+ correct);
                $("#wrong").html("Wrong: "+ wrong);
                var num = Math.floor(Math.random()* gifArray.length)
                console.log("random num", num)
                $("#gif").attr("src", wrongGif[num])
                console.log("the gif src", wrongGif[num])

                document.getElementById("answer0").style.display = "none";
                document.getElementById("answer1").style.display = "none";
                document.getElementById("answer2").style.display = "none";
                document.getElementById("answer3").style.display = "none";
                document.getElementById("countDown").style.display = "none";
                
                questioni++               
                
                setTimeout(nextQuestion,1000*7);
            };
        });
        //maybe

            
}

