const itemOverlay = document.querySelectorAll('.item');
const itemImage
= document.querySelectorAll('item-image'); 
let overlayOpen = false 

itemOverlay.forEach(itemOverlay => {
    itemOverlay.addEventListener('click', () => {
        if(!overlayOpen) {
            itemOverlay.classList.add('clicked');
            overlayOpen = true;
        }   else    {
            itemOverlay.classList.remove('clicked');
            overlayOpen = false;
        }
    })
})

