let Numbers = document.querySelector("#Numbers")
let Input1 = document.querySelector("#Input-1")
let Input2 = document.querySelector("#Input-2")
let Add = document.querySelector("#Add")
let Subtract = document.querySelector("#Subtract")
let Multiply = document.querySelector("#Multiply")
let Divide = document.querySelector("#Divide")
let Reset = document.querySelector("#Reset")

Add.addEventListener("click", function (){
    Numbers.innerHTML = Number(Input1.value) + Number(Input2.value)
})

Subtract.addEventListener("click", function(){
    Numbers.innerHTML = (Input1.value) - (Input2.value)
})

Multiply.addEventListener("click", function(){
    Numbers.innerHTML = Input1.value * Input2.value
})

Divide.addEventListener("click", function () {
    Numbers.innerHTML = Input1.value / Input2.value
})

Reset.addEventListener("click", function(){
    Numbers.innerHTML = "0";
    Input1.value = ""
    Input2.value = ""
})