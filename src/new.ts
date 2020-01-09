var score1 = 0;
let score2 = 1;

const defaultScore = 10;

function outer() {
  function inner() {
    var score = 0;
  }

  console.log(score);
}

outer();
