const itemOverlay = document.querySelectorAll('.item');
let overlayToggle = false 
const overlayOpen
= document.querySelectorAll('.item.clicked'); 

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

// if(itemOverlay) {
//     itemOverlay.forEach(function(image) {
//         image.onclick = function() {
//             this.classList.add('clicked');
//         }
//     });
// }

// function closeImg() {
//     document.querySelectorAll('.item.clicked').remove('clicked');
// }

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