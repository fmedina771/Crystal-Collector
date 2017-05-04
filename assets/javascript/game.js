// GLOBAL VARIABLES
//-------------------------------------------------------------
var compScore = 0;
var yourScore = 0;
var crystalOne = 0;
var crystalTwo = 0;
var crystalThree = 0;


// Game Counters
var wins = 0;
var losses = 0;




// FUNCTIONS
//-------------------------------------------------------------
function startGame() {
    compScore = Math.floor(Math.random() * 120) + 19;
    console.log(compScore);

    crystalOne = Math.floor(Math.random() * 12) + 1;
    console.log(crystalOne);

    crystalTwo = Math.floor(Math.random() * 12) + 1;
    console.log(crystalTwo);

    crystalThree = Math.floor(Math.random() * 12) + 1;
    console.log(crystalThree);

    wins = 0;
    losses = 0;

    // Won function   
    function won() {
        alert("You Won!")
        wins++
        document.querySelector("#wins").innerHTML = wins;
        reset();
    }

    // Lost function
    function lost() {
        alert("You Lost!")
        losses++
        document.querySelector("#losses").innerHTML = losses;
        reset();
    }



    // Crystal 1 function
    $("#Crystal1").click(function() {

        yourScore = yourScore + crystalOne;
        console.log("Crystal1: " + yourScore);
        // If yourScore is the same as compScore, run won function	
        if (yourScore == compScore) {
            won();
        }
        // If your score is greater than compScore, run lost function
        else if (yourScore > compScore) {
            lost();

        }
        // Selects Id yourScore from HTML and displays score selected from clicking first crystal
        document.querySelector("#yourScore").innerHTML = yourScore;

    });
    // Crystal 2 function
    $("#Crystal2").click(function() {
        yourScore = yourScore + crystalTwo;
        console.log("Crystal2: " + yourScore);
        // If yourScore is the same as compScore run won function	
        if (yourScore == compScore) {
            won();
        }
        // If your score is greater than compScore, run lost function
        else if (yourScore > compScore) {
            lost();

        }
        // Selects Id yourScore from HTML and displays score selected from clicking second crystal

        document.querySelector("#yourScore").innerHTML = yourScore;

    });
    // Crystal 3 function
    $("#Crystal3").click(function() {

        yourScore = yourScore + crystalThree;
        console.log("Crystal1: " + yourScore);
        // If yourScore is the same as compScore run won function	
        if (yourScore == compScore) {
            won();
            // If your score is greater than compScore, run lost function
        } else if (yourScore > compScore) {
            lost();
        }
        // Selects Id yourScore from HTML and displays score selected from clicking second crystal
        document.querySelector("#yourScore").innerHTML = yourScore;
    });
    document.querySelector("#yourScore").innerHTML = yourScore;
    document.querySelector("#randomScore").innerHTML = compScore;
    document.querySelector("#wins").innerHTML = wins;
    document.querySelector("#losses").innerHTML = losses;
}

function reset() {
    yourScore = 0;

    compScore = Math.floor(Math.random() * 120) + 19;
    console.log(compScore);

    crystalOne = Math.floor(Math.random() * 12) + 1;
    console.log(crystalOne);

    crystalTwo = Math.floor(Math.random() * 12) + 1;
    console.log(crystalTwo);

    crystalThree = Math.floor(Math.random() * 12) + 1;
    console.log(crystalThree);

    document.querySelector("#yourScore").innerHTML = yourScore;
    document.querySelector("#randomScore").innerHTML = compScore;
    document.querySelector("#wins").innerHTML = wins;
    document.querySelector("#losses").innerHTML = losses;
}








// CALLING FUNCTIONS
//-------------------------------------------------------------

// Initiates the code for the first time.
startGame();
