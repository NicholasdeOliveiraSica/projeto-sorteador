const input1 = document.querySelector(".number-1")
const input2 = document.querySelector(".number-2")
const buttonPush = document.querySelector(".push")

buttonPush.addEventListener("click", pushRandom)

function pushRandom() {
    let min = Math.ceil(input1.value)
    let max = Math.floor(input2.value)

    let result = Math.floor(Math.random() * (max - min + 1)) + min 

    console.log(min, max, result)

    alert(result)
}