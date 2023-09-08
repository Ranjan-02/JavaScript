// rendom color
const rendonColorGenarate = function () {
    // 
    const hex = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color;
}
let intrvalID;

function startbgChange() {
    if (!intrvalID) {

        intrvalID = setInterval(changeBg, 1000)
    }


    function changeBg() {
        document.body.style.backgroundColor = rendonColorGenarate();
        console.log('ok');

    }
}
function stopbgChange() {
    clearInterval(intrvalID)
    intrvalID = null
}

document.querySelector(".start-btn").addEventListener("click", startbgChange)
document.querySelector(".stop-btn").addEventListener("click", stopbgChange)
