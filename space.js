const right = document.querySelector('.right');
const rightAll = document.querySelector('.rightall');
const rightList = document.querySelectorAll('.a');
const rightListAll = document.querySelectorAll('.b');
const upShop = document.querySelector('.upshop');
const hamburger = document.querySelector('.hamburger');
const burgerOpen = document.querySelector('.burger-open');
const burgerClose = document.querySelector('.burger-close');
const mediaQuery = window.matchMedia('(max-width: 768px)') ;
const showrightAll = document.querySelector('.showRight');

hamburger.addEventListener('click', toggleMenu);

function toggleMenu(){
    if(mediaQuery.matches){
            if(rightAll.classList.contains('showRightAll')) {
                rightAll.classList.remove('showRightAll');
                burgerClose.style.display = 'none';
                burgerOpen.style.display = 'block';
            } else {
                rightAll.classList.add('showRightAll');
                rightAll.style.display = 'block'
                burgerClose.style.display = 'block';
                burgerOpen.style.display = 'none';
            }
    } else {
        if(right.classList.contains('showRight')) {
            right.classList.remove('showRight');
            burgerClose.style.display = 'none';
            burgerOpen.style.display = 'block';
            upShop.style.display = 'block';
        } else {
            right.classList.add('showRight');
            right.style.display = 'block'
            burgerClose.style.display = 'block';
            burgerOpen.style.display = 'none';
            upShop.style.display = 'none';
        }
    }
}

rightList.forEach(
    function(a){
        a.addEventListener('click', toggleMenu);
    }
)

rightListAll.forEach(
    function(b){
        b.addEventListener('click', toggleMenu);
    }
)

document.addEventListener('keydown', pressAKey);
    function pressAKey(){
        console.log('a key was pressed');
        right.classList.remove('showRight');
        rightAll.classList.remove('showRightAll');
        burgerOpen.style.display = 'block';
        burgerClose.style.display = 'none';
    }
