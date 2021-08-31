let itemOverlay = Array.from(document.querySelectorAll('.item'));

const handleClick = (e) => {
    e.preventDefault();
    itemOverlay.forEach(node => {
        node.classList.remove('clicked');
    });
    e.currentTarget.classList.add('clicked');

}

itemOverlay.forEach(node => {
    node.addEventListener('click', handleClick)
});