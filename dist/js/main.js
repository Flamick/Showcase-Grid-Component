let itemOverlay = Array.from(document.querySelectorAll('.item'));

const clickEffect = (e) => {
    e.preventDefault();
    let clicked = document.querySelector('.item.clicked');
    const unclicked = document.querySelectorAll('.item');
    if(unclicked){
        e.currentTarget.classList.add('clicked');
        clicked.classList.remove('clicked');
    }
}

itemOverlay.forEach(node => {
    node.addEventListener('click', clickEffect)
});

