let Up = document.querySelector(".up")

window.onscroll = () => {
    if(this.scrollY >= 1000) {
        Up.classList.add("show")
    } else {
        Up.classList.remove("show")
    }
}

Up.onclick = () => {
    window.scrollTo({
        behavior:"smooth",
        top:0,
    })
}