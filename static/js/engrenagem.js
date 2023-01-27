function local(event, duracao) {
    clearInterval(id);
    var engrenagem = document.getElementById('engrenagem');
    var cursor = document.getElementById('cursor');
    
    let cX = event.clientX
    let cY = event.clientY
    cursor.style.left = cX - (40) + "px";
    cursor.style.top = cY - (40) + "px";

    var left = engrenagem.getBoundingClientRect().left;
    var top = engrenagem.getBoundingClientRect().top;

    function mover() {
        if (engrenagem.getBoundingClientRect().left < cursor.getBoundingClientRect().left){
            left++;
        }else if (engrenagem.getBoundingClientRect().left > cursor.getBoundingClientRect().left){
            left--;
        }

        if (engrenagem.getBoundingClientRect().top < cursor.getBoundingClientRect().top){
            top++;
        }else if (engrenagem.getBoundingClientRect().top > cursor.getBoundingClientRect().top){
            top--;
        }
        
        engrenagem.style.left = left + 'px';
        engrenagem.style.top = top + 'px';
        if (engrenagem.getBoundingClientRect().left >= 2500 || engrenagem.getBoundingClientRect().left <= -100 || engrenagem.getBoundingClientRect().top >= 2500 || engrenagem.getBoundingClientRect().top <= -100){
            clearInterval(id);
            engrenagem.style.left = 50 + '%';
            engrenagem.style.top = 10 + 'px';
        }

        if (engrenagem.getBoundingClientRect().left == cursor.getBoundingClientRect().left && engrenagem.getBoundingClientRect().top == cursor.getBoundingClientRect().top){
            clearInterval(id);
        }

        document.getElementById("crX").value = cursor.getBoundingClientRect().left;
        document.getElementById("crY").value = cursor.getBoundingClientRect().top;
        document.getElementById("enX").value = engrenagem.getBoundingClientRect().left;
        document.getElementById("enY").value = engrenagem.getBoundingClientRect().top;
    }
    var id = setInterval(mover, 10);
}