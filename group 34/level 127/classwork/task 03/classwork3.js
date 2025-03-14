fetch('https://fakestoreapi.com/products/1')
    .then(res => {
        if(!res.ok){
            throw new Error('Error!');
        }else if(res.status === 404){
            const img = document.createElement('img');
            img.src = '404.png';
            document.body.innerHTML = '';
            document.body.appendChild(img);
        };
        return  res.json();
    }).then(res_2 => {
        console.log(res_2);
        document.querySelector('p').textContent = res_2.title;
        document.querySelector('img').src = res_2.image;
        document.querySelector('b').textContent = `$${res_2.price}`;
    });