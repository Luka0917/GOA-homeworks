// https://www.codewars.com/kata/53dbd5315a3c69eed20002dd/train/python

function filter_list(l) {
    result = []
    for (let i of l){
      if (typeof i === "number"){
        result.push(i)
      }
    }
    return result
}