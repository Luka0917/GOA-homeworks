fetch('https://fakestoreapi.com/products')
    .then(msg => msg.json())
    .then(msg_2 => {
        console.log(msg_2[0])
        for(let i = 0; i < msg_2.length; i++){
            let img = document.createElement('img');
            img.src = msg_2[i].image;
            document.querySelector('body').appendChild(img)
        }
    });