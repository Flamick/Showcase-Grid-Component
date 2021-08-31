let itemOverlay = Array.from(document.querySelectorAll('.item'));

// const handleClick = (e) => {
//     e.preventDefault();
//     itemOverlay.forEach(node => {
//         node.classList.remove('clicked');
//     });
//     e.currentTarget.classList.add('clicked');
// }

const handleClick = (e) => {
    e.preventDefault();
    const clicked = document.querySelector('.item.clicked');
    const unclicked = document.querySelector('.item');
    if(unclicked){
        e.currentTarget.classList.add('clicked');
        clicked.classList.remove('clicked');
    }   else  if (clicked){
        e.currentTarget.classList.remove('clicked');
    }   else    {
        clicked.classList.remove('clicked');
    }
}

itemOverlay.forEach(node => {
    node.addEventListener('click', handleClick)
});

