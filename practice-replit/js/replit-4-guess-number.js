const txtNum = document.querySelector("#txtNum");
const btnStart = document.querySelector("#btnStart");
const btnGuess = document.querySelector("#btnGuess");
const txtResult = document.querySelector("#txtResult");

let randomNumber = 0;
const minRandomNumber = 1;
const maxRandomNumber = 100;
const totalShot = 10;

txtNum.setAttribute("placeholder", `Type number between ${minRandomNumber}-${maxRandomNumber}`)
let can=5;

const start = () => {
    randomNumber = getRandomNumber();
    txtNum.removeAttribute("disabled");
    txtNum.value = "";
    txtNum.focus();
    btnGuess.classList.remove("d-none");
    btnStart.innerHTML = "Reset game";
    txtResult.innerHTML = "";
}   

const reset = () => {
    btnGuess.classList.add("d-none");
    txtNum.setAttribute("disabled","true");
    btnStart.innerHTML = "Start game";
    can=5;
}

const guess = () => {
    do{
    const guessNumber = Number(txtNum.value);
        let b=false;
        if(!guessNumber || isNaN(guessNumber) || guessNumber>maxRandomNumber || guessNumber<minRandomNumber){
            txtResult.innerHTML = `Please type a number between ${minRandomNumber}-${maxRandomNumber}`;
            return;
        }
        
        if(guessNumber === randomNumber){
            txtResult.innerHTML = "🏆🏆🏆 You win! 🏆🏆🏆";
            txtResult.classList.replace("text-danger", "text-success");
            reset();
        }
        else if(guessNumber > randomNumber){
            can-=1; 
            txtResult.innerHTML = `${guessNumber} is too high! Lower the number! 👎 total shot ${can}`; 
                    
        }
        else{
            can-=1;
            txtResult.innerHTML = `${guessNumber} is too low! Raise the number! 👍 total shot ${can}`;
        }
        
        txtNum.focus();
        txtNum.value="";
       
        } while(can>0 && b)
        
        txtResult.innerHTML=`Hakkınız bitti`;
        reset();
    
    }
  
const getRandomNumber = () => {
    return Math.floor(Math.random() * (maxRandomNumber - minRandomNumber + 1) ) + minRandomNumber;
    /* 
        Math.floor(Math.random() * (max - min + 1) ) + min;
        5-60 arasında (5 ve 60 dahil) sayı tutmak istiyorsak formül:
        Math.floor(Math.random() * (max - min + 1) ) + min;
        Math.floor(Math.random() * (60 - 5 + 1) ) + 5;
        Math.floor(Math.random() * 56 ) + 5;
    */
}