const NO_OF_HIGH_SCORES = 10;
const HIGH_SCORES = 'highScores';


const highScoreString = localStorage.getItem(HIGH_SCORES);
const highScores = JSON.parse(highScoreString) ?? [];
  
//   const name = prompt(‘You got a high score! Enter name:’);


// const newScore = { score, name };


//   <h2>HIGH SCORES</h2>
// <ol id=”highScores”></ol>

// const highScoreList = document.getElementById(HIGH_SCORES);

// highScoreList.innerHTML = highScores.map((score) => 
//   `<li> ${score.name}- ${score.score} `
// );


function showHighScores() {
  console.log('yay');
    const highScores = JSON.parse(localStorage.getItem(HIGH_SCORES)) ?? [];
    const highScoreList = document.getElementById("highScores");
    
    highScoreList.innerHTML = highScores
      .map((score) => `<li>${score.name} - ${score.score}`)
      .join('');
  }
  showHighScores();