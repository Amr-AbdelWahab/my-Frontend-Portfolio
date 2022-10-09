// Open Settings Box & Spin Gear 
let gearCont = document.querySelector('.gearCont');
let settingsBox = document.querySelector('.settingsBox');
let gear = document.querySelector('.gear');

gearCont.addEventListener('click', ()=> {
    settingsBox.classList.toggle('open');
    gear.classList.toggle('open');
});


// Settings Box

// Select colors list

const colorList = document.querySelectorAll('.colors-List li');


// Local Storage Checker 
const savedColor = localStorage.getItem("color_option") ;

if (savedColor !== null) {
    // If Local Storage has saved color and change to it 
    document.documentElement.style.setProperty('--main-color', savedColor);
    // Change Active Class to Current Saved Color
    // Remove Active Class
    colorList.forEach(element => {
        // Remove Active Class
        element.classList.remove("active");
        // Add Active Class
        if ( element.dataset.color ===  savedColor ){
                element.classList.add("active");
            }
    })
}



// Change color from color option panel

colorList.forEach( li => {
    //set color on root
    li.addEventListener('click', (e) => {
        // Set color to Root 
        document.documentElement.style.setProperty('--main-color', e.target.dataset.color);
        // Set color to Local Storage
        localStorage.setItem('color_option', e.target.dataset.color);
        // Remove Active Class
        e.target.parentElement.querySelectorAll('.active').forEach(polit => {
            polit.classList.remove("active");
        })
        // Add Active Class on Active color Option
        e.target.classList.add("active");
    })
});




// Random Background Change

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

let backgroundInterval;

// Random Background Change
let randomBgOption = true;

function randomizeImgs () {
    if (randomBgOption === true ) {
        backgroundInterval = setInterval ( () => {
            // Get Random Number
            let randomNumber = Math.floor(Math.random() * imgArray.length);
        
            // Change background img
            landingPage.style.backgroundImage = 'url("img/'+ imgArray[randomNumber] +'")';
        
        }, 1000 );
    
    }
}



randomizeImgs();
// clearInterval(backgroundInterval);








// Switch Background option panel
const backgroundSwitch = document.querySelectorAll('.switch-container span');

backgroundSwitch.forEach(swit => {
    swit.addEventListener('click', (e) => {
        e.target.parentElement.querySelectorAll(".active").forEach(btn => {
            btn.classList.remove("active");
        })
        e.target.classList.add("active");
        if (e.target.dataset.BG === 'yes') {
            console.log("yes");
        }else{
            console.log("no");
        }
    
    })
})


