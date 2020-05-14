//credit & winnings info
const txtCredit = document.getElementById("pCredit");
const txtWinnings = document.getElementById("pWinnings");

//images
const image1 = document.getElementById("img1");
const image2 = document.getElementById("img2");
const image3 = document.getElementById("img3");

//button 
const btnSpin = document.getElementById("btnSpin");
const btnCredit = document.getElementById("btnCredit");
const btnCollect = document.getElementById("btnCollect");

//message
const txtMsg = document.getElementById("message");

//event listener
btnSpin.addEventListener("click", spinSlots);
btnCredit.addEventListener("click", addCredit);
btnCollect.addEventListener("click", collectWinnings);

//page loaded
let creditCount = 0;
let winningsCount = 0;

btnSpin.disabled = true;
btnCollect.disabled = true;

txtCredit.innerText = "0";
txtWinnings.innerText = "0";

randomImages();

function randomImages() {
    randomNum1 = Math.round(Math.random() *7);
    image1.src = "images/fruit" + randomNum1 + ".png";
    randomNum2 = Math.round(Math.random() *7);
    image2.src = "images/fruit" + randomNum2 + ".png"; 
    randomNum3 = Math.round(Math.random() *7);
    image3.src = "images/fruit" + randomNum3 + ".png"; 
} 

function addCredit() {
    event.preventDefault();
    creditCount++;
    txtCredit.innerText = creditCount;
    btnSpin.disabled = false;
    txtMsg.innerText = "+1 Credit Added!"
}

function spinSlots() {
    event.preventDefault();
    randomImages();
    creditCount--;
    txtCredit.innerText = creditCount;
    txtMsg.innerText = "...";
    
    if (creditCount == 0) {
        btnSpin.disabled = true;
    }
    if (image1.src === image2.src && image1.src === image3.src) {
        winningsCount += 10;
        txtWinnings.innerText = winningsCount;
        txtMsg.innerText = "Congratulations, you win 10 coins!";
        btnCollect.disabled = false;

    }
    else if (image2.src === image3.src) {
        winningsCount += 5;
        txtWinnings.innerText = winningsCount;
        txtMsg.innerText = "Congratulations, you win 5 coins!";
        btnCollect.disabled = false;
    }
}

function collectWinnings() {
    event.preventDefault();
    winningsCount = 0;
    txtWinnings.innerText = winningsCount;
    btnCollect.disabled = true;
    txtMsg.innerText = "Winnings Collected!";
}


