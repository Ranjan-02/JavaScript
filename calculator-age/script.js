function findAge(getAge) {

    let date = new Date()
    let getYear = date.getFullYear()

    console.log(getYear - getAge);
}



const userAge = "1998"

findAge(userAge)