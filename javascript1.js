// // Select the header element from the DOM
// const header = document.getElementById('header');

// // Store the last scroll position
// let lastScrollY = window.scrollY;

// // Listen for the scroll event
// window.addEventListener('scroll', () => {
//     // If the new scroll position is greater than the last one, it means we're scrolling down.
//     if (window.scrollY > lastScrollY) {
//         // Add the 'hidden' class to hide the header
//         header.classList.add('header--hidden');
//     } else {
//         // Otherwise, we are scrolling up, so remove the class to show the header
//         header.classList.remove('header--hidden');
//     }

//     // Update the last scroll position to the new current position
//     lastScrollY = window.scrollY;
// });

//Get header elememt
const header = document.getElementById('header');


let previousScrollY = window.scrollY;

window.addEventListener('scroll',()=>{

    const currentScrollY = window.scrollY;
    const scrollingDown = currentScrollY>previousScrollY;

    header.classList.toggle('header--hidden', scrollingDown);

    previousScrollY=currentScrollY;

})

function getHeaderHeight (){
    
    const headerHeight= header.offsetHeight;
    document.documentElement.style.setProperty('--header-height', `${headerHeight}px`);

};

getHeaderHeight();

