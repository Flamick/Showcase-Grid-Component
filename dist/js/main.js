const itemOverlay = document.querySelectorAll('.item');
let overlayToggle = false 
var overlayOpen = document.getElementsByClassName('clicked'); 

itemOverlay.forEach(itemOverlay => {
    itemOverlay.addEventListener('click', () => {
        if(!overlayToggle) {
            itemOverlay.classList.add('clicked');
            overlayToggle = true;
        }   else    {
            itemOverlay.classList.remove('clicked');
            overlayToggle = false;
        }
    })
})