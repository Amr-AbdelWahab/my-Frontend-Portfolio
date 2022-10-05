// Select colors list
const colorList = document.querySelectorAll('.colors-List li');

colorList.forEach( li => {
    
})





// Select Landing Page
let landingPage = document.querySelector('.landingPage');

// Get Array from Img
let imgArray = [
    "BG-01.png",
    "BG-02.png",
    "BG-03.png",
    "BG-04.png",
    "BG-05.png"
];

setInterval ( () => {
    // Get Random Number
    let randomNumber = Math.floor(Math.random() * imgArray.length);

    // Change background img
    landingPage.style.backgroundImage = 'url("img/'+ imgArray[randomNumber] +'")';

}, 5000 );




// Spin Gear 
let gearCont = document.querySelector('.gearCont');
let settingsBox = document.querySelector('.settingsBox');
let gear = document.querySelector('.gear');

gearCont.addEventListener('click', ()=> {
    settingsBox.classList.toggle('open');
    gear.classList.toggle('open');
});

