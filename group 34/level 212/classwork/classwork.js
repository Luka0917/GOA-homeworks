// 6kyu

// https://www.codewars.com/kata/5af304892c5061951e0000ce/train/javascript

function bingo(card, numbers){
  const headers = card[0];
  const called = new Set(numbers);
  const marked = [];
  for(let r = 1; r < card.length; r++){
    marked[r - 1] = [];
    for(let c = 0; c < headers.length; c++){
      const val = card[r][c];
      if(val === 'FREE SPACE'){
        marked[r - 1][c] = true;
      }else{
        const key = headers[c] + val;
        marked[r - 1][c] = called.has(key);
      };
    };
  };
  const size = 5;
  for(let r = 0; r < size; r++){
    if(marked[r].every(x => x)) return true;
  }
  for(let c = 0; c < size; c++){
    let win = true;
    for(let r = 0; r < size; r++){
      if(!marked[r][c]){
        win = false;
        break;
      };
    };
    if(win) return true;
  };
  let winDiag1 = true;
  let winDiag2 = true;
  for(let i = 0; i < size; i++){
    if(!marked[i][i]) winDiag1 = false;
    if(!marked[i][size - 1 - i]) winDiag2 = false;
  };
  if(winDiag1 || winDiag2) return true;
  return false;
};