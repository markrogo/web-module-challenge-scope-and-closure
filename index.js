// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 * 
 // counter 1 will return a function with am embedded counter, it will retain state information but within the 
 // returned function
 // counter 2 will keep the counter in the global variable count, which is declared outside but accessed inside
 // it allows multiple executions to keep incrementing the global but also other things to touch the function

 * 2. Which of the two uses a closure? How can you tell?

 // Counter 1 uses a closure
 // the innter function counter uses the enclosing function counterMaker's count variable
 // by contrast counter 2 uses a global variable count so it can be accessed by any function
 // 
 * 
 * 
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 *
*/ 
// if you want other functions to be able to touch the counter, counter 2 is better
// if you only want to increment the counter via the one method, counter 1 is better

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
   return count++;
  }
}

const counter1 = counterMaker();
console.log (counter1());
console.log (counter1());
console.log (counter1());
console.log (counter1());


// counter2 code
let count = 0;

function counter2() {
  return count++;
}

counter2();
counter2();
counter2();
counter2();
counter2();
counter2();
counter2();
counter2();
console.log(count); 

/* Task 2: inning() 

Write a function called `inning` that generates a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning() {

  let inningScore = Math.floor(Math.random() * 3 );
   return inningScore;
}

// for (i = 1; i <= 10; i++) {
//   console.log (`The score of inning ${i} is ${inning()}`);
  
// }


/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 

function finalScore(callback, numInnings){
  console.log ("A new game starts here");
 let myFinalScore = {};
  let awayScore = 0;
  let homeScore = 0;
  
  for (let i = 1; i <= numInnings; i++) {
    awayScore = awayScore + callback();
    homeScore = homeScore + callback();
    // console.log (awayScore);
    // console.log (`inning ${i} away score is ${awayScore}`);
    // console.log (homeScore);
    // console.log (`inning ${i} home score is ${homeScore}`);
    // console.log (`End of inning ${i}`)
  }
  
  //  console.log (`the final score is away ${awayScore}, home ${homeScore}`);
  myFinalScore.away = awayScore;
  myFinalScore.home = homeScore;
  return myFinalScore;

}

console.log(finalScore(inning, 9));


// for (i = 1; i < 20; i++) {
//   console.log(finalScore(inning, 9));

// }


/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `inning` that you wrote above
(2) A number of innings

and returns the score at each pont in the game, like so:

1st inning: 0 - 2
2nd inning: 1 - 3
3rd inning: 1 - 3
4th inning: 2 - 4
5th inning: 4 - 6
6th inning: 4 - 6
7th inning: 4 - 6
8th inning: 5 - 8
9th inning: 6 - 10

Final Score: 6 - 10 */

function scoreboard(callback, numInnings) {
  console.log ("Here's another game inning by inning");
  let myFinalScore = {};
  let awayScore = 0;
  let homeScore = 0;
  
  for (let i = 1; i <= numInnings; i++) {
    awayScore = awayScore + callback();
    homeScore = homeScore + callback();
    switch (i) {
      case 1:
          console.log (`${i}st inning: ${awayScore} - ${homeScore}`);
          break;
      case 2:
          console.log (`${i}nd inning: ${awayScore} - ${homeScore}`);
          break;
      case 3:
          console.log (`${i}rd inning: ${awayScore} - ${homeScore}`);
          break;
      default:
          console.log (`${i}th inning: ${awayScore} - ${homeScore}`);
    }
  }
  
   myFinalScore.away = awayScore;
  myFinalScore.home = homeScore;

  console.log (`The final score is Away ${awayScore} - Home ${homeScore}`)
  return myFinalScore;

}

scoreboard (inning,9);

// ******************
// THIS CODE IS FOR THE MODIFIED TASK 4
// IT IS MUCH WORSE CODE
// BUT IT MEETS THE POINTLESS REQUIREMENTS OF THE MODIFIED TASK 4
// AND I COULD TEACH IT TO SOMEONE, SO I SUPPOSE THIS ASSINGMENT HAS SERVED A PURPOSE
// BUT IT'S STILL BAD CODE
// AND I WILL DIE ON THIS HILL


function getInningScore (callback) {
  let inningScore = {away: 0, home: 0};
  inningScore.away = inningScore.away + callback();
  inningScore.home = inningScore.home + callback();
  // console.log ("This is the inning score " + inningScore.away + "-" + inningScore.home)
return inningScore  

}


function scoreboardRedux(callback, otherCallback, numInnings) {
  console.log ("Here's scoreboard redux inning by inning");
  let myFinalScore = {away: 0, home: 0};
 
  
  for (let i = 1; i <= numInnings; i++) {
     let inningScore = {away: 0, home: 0};

     // this it the shizzle

     inningScore = otherCallback(callback);
     
     
     myFinalScore.away = myFinalScore.away + inningScore.away;
     myFinalScore.home = myFinalScore.home + inningScore.home;
     

    switch (i) {
      case 1:
          console.log (`${i}st inning: ${myFinalScore.away} - ${myFinalScore.home}`);
          break;
      case 2:
          console.log (`${i}nd inning: ${myFinalScore.away} - ${myFinalScore.home}`);
          break;
      case 3:
          console.log (`${i}rd inning: ${myFinalScore.away} - ${myFinalScore.home}`);
          break;
      default:
          console.log (`${i}th inning: ${myFinalScore.away} - ${myFinalScore.home}`);
    }
  }
  
   
  console.log (`The final score is Away ${myFinalScore.away} - Home ${myFinalScore.home}`)
  return myFinalScore;

}

scoreboardRedux (inning, getInningScore, 9);

// function personalDice(name){
//   return function(){
//       // generate random number between 1 and 6
//     const newRoll = Math.floor(Math.random() * 6);
//     console.log(`${name} rolled a ${newRoll}`)
//   }
// }

// const dansRoll = personalDice("Dan");

// const zoesRoll = personalDice("Zoe");


// dansRoll();
// dansRoll();

// dansRoll();

// dansRoll();
// zoesRoll();