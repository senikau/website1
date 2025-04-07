const fish = document.querySelectorAll('.fish');

fish.forEach(f => {
    f.addEventListener('click', function() {
        const {x, y} = getRandomLocation()
        f.style.top = `${y}px`
        f.style.left = `${x}px`
        const bubbleSound = new Audio('/sounds/bubble.mp3');
        bubbleSound.play();
    });
});


function getRandomLocation() {
    const fishTank = document.querySelector('.fish-tank');
    const { width, height, left, top } = fishTank.getBoundingClientRect(); 
    const x = Math.random() * (width - 75) + left;
    const y = Math.random() * (height - 75) + top;

    return { x, y };
}
