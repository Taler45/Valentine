function Hearts (){
    let div = document.createElement('div')
    div.classList.add ("heart")
    div.innerHTML="❤️"
    div.style.left = Math.random() * 100 + "vw";
    div.style.animationDuration = Math.random() * 2 + 3 + "s";
    document.body.appendChild(div)
    setTimeout(() => {
        div.remove();
    }, 5000);
}

setInterval(Hearts, 200);