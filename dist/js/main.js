const itemOverlay = document.querySelectorAll('.item');
// let overlayOpen
// = document.querySelectorAll('.item.clicked'); 
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

// itemOverlay.forEach((itemOverlay) => {
//     itemOverlay.addEventListener('click', () => {
//         itemOverlay.classList.add('clicked');
//     });
// });

// itemOverlay.addEventListener('click', (e) => {
//     if(e.target.classList.includes('item')){
//         itemOverlay.classList.remove('clicked');
//     }
// });