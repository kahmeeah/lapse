const youContained = document.querySelector('.you-container');
const youHovering = document.querySelector('.you-hover');

youContained.addEventListener('mousemove', (event) => {
    youHovering.style.left = (event.clientX + 10) + 'px'
    youHovering.style.top = (event.clientY + 10) + 'px'
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