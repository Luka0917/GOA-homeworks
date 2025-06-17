// 8kyu

// https://www.codewars.com/kata/5862f663b4e9d6f12b00003b

function guessBlue(blueStart, redStart, bluePulled, redPulled) {
  const blueRemaining = blueStart - bluePulled;
  const redRemaining = redStart - redPulled;
  const totalRemaining = blueRemaining + redRemaining;
  return blueRemaining / totalRemaining;
}