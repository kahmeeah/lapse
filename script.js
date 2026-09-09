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

    // lingering code 
    const p5canvas = document.querySelector('canvas')
    if (p5canvas){

        lingeringSrc = p5canvas.toDataURL('image/png') // take snapshot of curr canvas

        const lingering = document.createElement('img')
        lingering.src = lingeringSrc 
        lingering.classList.add('lingeringYou')

        const currentYou = whydoYourun.getBoundingClientRect(); // curr position

        lingering.style.left = `${currentYou.left}px`
        lingering.style.top = `${currentYou.top}px`
        lingering.style.width = `${currentYou.width}px`
        lingering.style.height = `${currentYou.height}px`

        document.body.appendChild(lingering)


        const favicon = document.getElementById('favicon')
        if (favicon){
            favicon.href = lingeringSrc
        }

    }




    // run away code below

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

const aboutLink = document.querySelector('.link-one')
const aboutModal = document.querySelector('.about-modal')
const aboutClose = document.querySelector('#about-close')
aboutLink.addEventListener('click', (event) =>{
    aboutModal.style.display = 'flex'
})
aboutClose.addEventListener('click', (event) => {
    aboutModal.style.display = 'none'
})

// gsaps!!!!!!!!!!!!!!

gsap.registerPlugin(Draggable);