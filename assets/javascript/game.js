// GLOBAL VARIABLES
//-------------------------------------------------------------
var compScore = 0;
var yourScore = 0;
var crystalOne = 0;
var crystalTwo = 0;
var crystalThree = 0;
var chrystalFour = 0;


// Game Counters
var wins = 0;
var losses = 0;

// FUNCTIONS
//-------------------------------------------------------------
function startGame() {
    // Chooses random number between 19 and 120
    compScore = Math.floor(Math.random() * 120) + 19;
    console.log("compScore: " + compScore);

    // Chooses random number for crystalOne between 1 and 12
    crystalOne = Math.floor(Math.random() * 12) + 1;
    console.log("Crystal1: " + crystalOne);

    // Chooses random number for crystalTwo between 1 and 12
    crystalTwo = Math.floor(Math.random() * 12) + 1;
    console.log("Crystal2: " + crystalTwo);

    // Chooses random number for crystalThree between 1 and 12
    crystalThree = Math.floor(Math.random() * 12) + 1;
    console.log("Crystal3: " + crystalThree);

    crystalFour = Math.floor(Math.random() * 12) + 1;
    console.log("Crystal4: " + crystalFour);

    wins = 0;
    losses = 0;

    // Won function   
    function won() {
        alert("You Won!")
        wins++
        $('#wins').html(wins);
        reset();
    }

    // Lost function
    function lost() {
        alert("You Lost!")
        losses++
        $('#losses').html(losses);
        reset();
    }

    // Crystal 1 click function
    $("#Crystal1").click(function() {

        // Adds crystal scores together
        yourScore = yourScore + crystalOne;
        console.log(yourScore);
        // If yourScore is the same as compScore, run won function  
        if (yourScore == compScore) {
            won();
        }
        // If your score is greater than compScore, run lost function
        else if (yourScore > compScore) {
            lost();

        }
        // Selects Id yourScore from HTML and displays score selected from clicking first crystal
        $('#yourScore').html(yourScore);
        // document.querySelector("#yourScore").innerHTML = yourScore;

    });
    // Crystal 2 click function
    $("#Crystal2").click(function() {

        // Adds crystal scores together
        yourScore = yourScore + crystalTwo;
        console.log(yourScore);
        // If yourScore is the same as compScore run won function   
        if (yourScore == compScore) {
            won();
        }
        // If your score is greater than compScore, run lost function
        else if (yourScore > compScore) {
            lost();

        }
        // Selects Id yourScore from HTML and displays score selected from clicking second crystal
        $('#yourScore').html(yourScore);
        // document.querySelector("#yourScore").innerHTML = yourScore;

    });
    // Crystal 3 click function
    $("#Crystal3").click(function() {

        // Adds crystal scores together
        yourScore = yourScore + crystalThree;
        console.log(yourScore);
        // If yourScore is the same as compScore run won function   
        if (yourScore == compScore) {
            won();
            // If your score is greater than compScore, run lost function
        } else if (yourScore > compScore) {
            lost();
        }
        // Selects Id yourScore from HTML and displays score selected from clicking second crystal
        $('#yourScore').html(yourScore);
        // document.querySelector("#yourScore").innerHTML = yourScore;
    });

    // Crystal 4 click function
    $("#Crystal4").click(function() {

        // Adds crystal scores together
        yourScore = yourScore + crystalFour;
        console.log(yourScore);
        // If yourScore is the same as compScore run won function   
        if (yourScore == compScore) {
            won();
            // If your score is greater than compScore, run lost function
        } else if (yourScore > compScore) {
            lost();
        }
        // Selects Id yourScore from HTML and displays score selected from clicking second crystal
        $('#yourScore').html(yourScore);
        // document.querySelector("#yourScore").innerHTML = yourScore;
    });


    $('#yourScore').html(yourScore);
    $('#randomScore').html(compScore);
    $('#wins').html(wins);
    $('#losses').html(losses);

    // document.querySelector("#yourScore").innerHTML = yourScore;
    // document.querySelector("#randomScore").innerHTML = compScore;
    // document.querySelector("#wins").innerHTML = wins;
    // document.querySelector("#losses").innerHTML = losses;
}

// Resets the game once you have either won or lost
function reset() {
    yourScore = 0;

    compScore = Math.floor(Math.random() * 120) + 19;
    console.log("compScore: " + compScore);

    crystalOne = Math.floor(Math.random() * 12) + 1;
    console.log("Crystal1: " + crystalOne);

    crystalTwo = Math.floor(Math.random() * 12) + 1;
    console.log("Crystal2: " + crystalTwo);

    crystalThree = Math.floor(Math.random() * 12) + 1;
    console.log("Crystal3: " + crystalThree);

    crystalFour = Math.floor(Math.random() * 12) + 1;
    console.log("Crystal4: " + crystalFour);


    $('#yourScore').html(yourScore);
    $('#randomScore').html(compScore);
    $('#wins').html(wins);
    $('#losses').html(losses);

    // document.querySelector("#yourScore").innerHTML = yourScore;
    // document.querySelector("#randomScore").innerHTML = compScore;
    // document.querySelector("#wins").innerHTML = wins;
    // document.querySelector("#losses").innerHTML = losses;
}

// CALLING FUNCTIONS
//-------------------------------------------------------------

// Initiates the code for the first time.
startGame();
