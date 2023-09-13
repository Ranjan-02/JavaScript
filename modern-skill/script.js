


// Throttling Function
const throttleFunction = (func, delay) => {

    let prev = 0;
    return (...args) => {
        let now = new Date().getTime();

        if (now - prev > delay) {
            prev = now;
            return func(...args);
        }
    }
}



document.querySelector(".center").addEventListener("mousemove", throttleFunction((e) => {
    let div = document.createElement("div")
    div.classList.add("imgBox")
    div.style.left = `${e.clientX}px`
    div.style.top = `${e.clientY}px`
    document.body.appendChild(div)
    setTimeout(function () {
        div.remove()
    }, 1000)
    let img = document.createElement("img")
    img.classList.add("img")
    img.setAttribute("src", "https://images.unsplash.com/photo-1694290124012-c1d19f091e5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80")
    div.appendChild(img)
}, 500));
