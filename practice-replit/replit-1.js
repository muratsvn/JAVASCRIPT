
function sayi() {
     let num1El = document.querySelector("#num1").value;
     let num2El = document.querySelector("#num2").value;

     let sum= Number(num1El) + Number(num2El);

     document.querySelector("#hey").innerHTML= `Sonuç: ${sum}`;
}