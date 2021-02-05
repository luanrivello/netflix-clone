$('.owl-carousel').owlCarousel({
    loop:true,
    margin:20,
    nav:false,
    responsive:{
        0:{
            items:3
        },
        1200:{
            items:6
        },
        1600:{
            items:8
        }
    }
})

function popup() {
    document.querySelector('.info').style.display = 'flex';
}

function closepop() {
    document.querySelector('.info').style.display = 'none';
}