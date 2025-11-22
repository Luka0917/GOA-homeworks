// 6kyu

// https://www.codewars.com/kata/546f922b54af40e1e90001da/train/javascript

function alphabetPosition(text){
    const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m', 'n','o','p','q','r','s','t','u','v','w','x','y','z'];
    text = text.toLowerCase();
    const result = [];
    for(let i = 0; i < text.length; i++){
        const letter = text[i];
        if(alphabet.includes(letter)){
            result.push((alphabet.indexOf(letter) + 1).toString());
        }
    }
    return result.join(" ");
}