window.addEventListener("scroll", function(){
    var nav = document.querySelector("nav"); nav.classList.toggle("abajo",window.scrollY>350);
    nav.classList.toggle("bg-transparent",window.scrollY<350);
    
})

