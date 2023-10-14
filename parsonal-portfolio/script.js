const bars = document.querySelector("#bar")
const links = document.querySelectorAll("ul li a")



links.forEach(function (element) {
    element.addEventListener("click", function () {
        links.forEach(function (iteam) {
            iteam.classList.remove("active")
        })
        element.classList.add("active")
    })
})
bars.addEventListener("click", function () {

    let ul = document.querySelector("ul")
    ul.classList.toggle("showData")
    if (ul.className == "showData") {
        bars.className = "fa-solid fa-xmark"
    } else {
        bars.className = "fa-solid fa-bars"
    }
})


const contactBtn = document.querySelector("#btn")

contactBtn.addEventListener("click", function (e) {
    e.preventDefault()
    let contactName = document.querySelector("#name").value
    let contactEmail = document.querySelector("#email").value
    let contactMassage = document.querySelector("#massage").value
    const valid = document.querySelector(".validation")
    if (contactName == "" || contactEmail == "" || contactMassage == "") {
        valid.style.display = 'block'
        return false


    } else {
        valid.style.display = 'none'



    }

    let body = `<h3>Username : ${contactName}</h3> <br/>
                <h3>Email : ${contactEmail}</h3> <br/>
                <h3>massage : ${contactMassage}</h3> <br/>
    `
    Email.send({
        SecureToken: "2b17cb5b-0bfa-46fc-a755-bbe2db0ec665",
        To: "ranjanmaji098@gmail.com",
        From: "ranjanmaji098@gmail.com",
        Subject: "This is the subject",
        Body: body
    }).then(
        message => {
            if (message == "OK") {
                swal("send massage Successfully", "You clicked the button!", "success")
            } else {
                swal("something went error", "You clicked the button!", "error")

            }
        }

    );


})

let mode = document.querySelector(".fa-solid")
mode.addEventListener("click", function () {
    // 
})
