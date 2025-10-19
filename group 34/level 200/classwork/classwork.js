// 7kyu

// https://www.codewars.com/kata/559f89598c0d6c9b31000125/train/javascript

function archersReady(archers){
  return archers.length > 0 && archers.every(arrows => arrows >= 5);
}

// https://www.codewars.com/kata/57e1857d333d8e0f76002169/train/javascript

function changeCount(change){
  const total = change
    .split(' ')
    .filter(coin => coin)
    .reduce((sum, coin) => sum + CHANGE[coin], 0);
  return `$${total.toFixed(2)}`;
}

// https://www.codewars.com/kata/58bccdf56f25ff6b6d00002f/train/javascript

function rounding(n, m){
  const lower = Math.floor(n / m) * m;
  const upper = Math.ceil(n / m) * m;
  const distToLower = Math.abs(n - lower);
  const distToUpper = Math.abs(upper - n);
  if(distToLower === distToUpper){
    return n;
  }else{
    return distToLower < distToUpper ? lower : upper;
  }
}