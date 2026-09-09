const youContained = document.querySelector('.you-container');
const youHovering = document.querySelector('.you-hover');

youContained.addEventListener('mousemove', (event) => {
    youHovering.style.left = (event.clientX + 10) + 'px'
    youHovering.style.top = (event.clientY + 10) + 'px'
})
