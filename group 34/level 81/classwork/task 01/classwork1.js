const div = document.querySelector("div");

let px = 0;

const moveCubeRight = setInterval(function(){
    div.style.left = `${px}px`;
    px++;
    if(px === 1780){
        clearInterval(moveCubeRight)
        let px1= 0;
        const moveCubeDown = setInterval(function(){
            div.style.top = `${px1}px`;
            px1++;
            if(px1 === 829){
                clearInterval(moveCubeDown);
                const moveCubeLeft = setInterval(function(){
                    div.style.left = `${px}px`;
                    px--;
                    if(px === -1){
                        clearInterval(moveCubeLeft);
                        const moveCubeUp = setInterval(function(){
                            div.style.top = `${px1}px`;
                            px1--;
                            if(px1 === -1){
                                clearInterval(moveCubeUp);
                            }
                        })
                    }
                })
            }
        })
    }
})