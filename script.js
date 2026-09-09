const youContained = document.querySelector('.you-container');
const youHovering = document.querySelector('.you-hover');

const changingAdj = document.querySelector('#changingAdj');

const words = [
    'dallying','delaying', 'dilatory', 'dillydallying','dragging', 'goofing', 'idling',
    'lagging', 'lazing', 'lingering', 'loafing', 'loitering', 'lolling', 'lollygagging',
     'lounging', 'moping', 'procrastinatory', 'shilly-shallying', 'tarrying', 'trifling',
     'waiting', 'wasting', 'timing', 'dawdling', 'laggard', 'procrastinating', 'inching',
    'stalling', 'plodding']

youContained.addEventListener('mousemove', (event) => {
    youHovering.style.left = (event.clientX + 10) + 'px'
    youHovering.style.top = (event.clientY + 10) + 'px'
})

youContained.addEventListener('mouseleave', (event) =>{
    let randIndex = Math.floor(Math.random() * words.length);
    changingAdj.textContent = words[randIndex]
    console.log(changingAdj)
})


// redundant variable but i'm thinking currently abt the poetic potential of variables .. 
const whydoYourun = document.querySelector('.you-container'); 

whydoYourun.addEventListener('mouseenter', (event)=>{

    const yourContainerWidth = whydoYourun.offsetWidth
    const yourContainerHeight = whydoYourun.offsetHeight

    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;


    whydoYourun.style.left = (Math.floor(Math.random() * (windowWidth - yourContainerWidth))) + 'px'
    whydoYourun.style.top = (Math.floor(Math.random() * (windowHeight -  yourContainerHeight))) + 'px'

})



const todayIs = document.querySelector('#todayIs')

function howAboutNow(){
    const today = new Date();
    const aBetterToday = today.toString().split(' GMT')[0];

    todayIs.innerText = aBetterToday
}

howAboutNow();

setInterval(howAboutNow, 1000);