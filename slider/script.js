let flag = 0;

function controller(x) {
    flag += x;
    if(flag == 4){
        flag = 0;
    }
    if(flag == -1){
        flag = 3;
    }
    slideshow(flag);
}

slideshow(flag);

function slideshow(num) {
    let num1;
    num1 = num;
    let slides = document.getElementsByClassName('slide');
    for(let y of slides){
        y.style.display = none;
    }
    slides[num].style.display = block;
}