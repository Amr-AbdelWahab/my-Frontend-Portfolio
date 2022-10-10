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



//----------------------------------
// Random Background Change
//----------------------------------


// Variable to Control Interval
let backgroundInterval;

// Random Background Change
let randomBgOption = true;

// Switch Background option panel
const backgroundSwitch = document.querySelectorAll('.switch-container span');


//-------------------------------


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




// Local Storage Checker 
const savedIntervalStatus = localStorage.getItem("interval_option")


// If Local Storage has saved Interval Status  
if (savedIntervalStatus !== null) {
    // Remove Active class from All Switches
    backgroundSwitch.forEach(element => {
        element.classList.remove('active');
    });
    // Set Status and active class as Stored value in Local Storage
    if ( savedIntervalStatus === 'true') {
        randomBgOption = true;
        document.querySelector('.switch-container .on').classList.add('active');
    }else{
        randomBgOption = false;
        document.querySelector('.switch-container .off').classList.add('active');
    }
    console.log(savedIntervalStatus);
}



// Create Function for Randomize Background Images 
let setTime = document.getElementById('setTime').value;
let timer = setTime * 1000;

console.log(timer);

function randomizeImgs () {

    if (randomBgOption === true ) {
        backgroundInterval = setInterval ( () => {
            // Get Random Number
            let randomNumber = Math.floor(Math.random() * imgArray.length);
        
            // Change background img
            landingPage.style.backgroundImage = 'url("img/'+ imgArray[randomNumber] +'")';
        
        }, timer);
    
    }
}


// Trigger Random Background Images
randomizeImgs();



backgroundSwitch.forEach(swit => {
    // Add Click Event to Each Switch
    swit.addEventListener('click', (e) => {

        e.target.parentElement.querySelectorAll(".active").forEach(btn => {
            // Remove Active Class from all BTNs
            btn.classList.remove("active");
        });
        // Add Active Class to Selected BTN
        e.target.classList.add("active");

        if (e.target.dataset.background === 'on') { 
            // Set Random Background Option to false
            randomBgOption = true;

            // Trigger Randomize Imgs Function
            randomizeImgs();

            // Set local Storage to True
            localStorage.setItem('interval_option', true);  console.log("Random Background is ON");

        } else {
            // Set Random Background Option to false
            randomBgOption = false;

            // Clear background Interval Randomize Imgs
            clearInterval(backgroundInterval);

            // Set local Storage to False
            localStorage.setItem('interval_option', false); console.log("Random Background is OFF");
            
        }
    });
});


