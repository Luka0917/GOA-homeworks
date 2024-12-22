const obj = {
    firstName: "Luka",
    lastName: "Tatuashvili"
}

for(let i in obj){
    if(obj[i].length > 5){
        console.log(`${i}: ${obj[i]} --- is over 5 symbol`)
    }
    else{
        console.log(`${i}: ${obj[i]} --- is below 5 symbol`)
    }
}