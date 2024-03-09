document.querySelectorAll('.js-logo').forEach((element)=>{
    element.addEventListener('click',()=>{
        location.reload();
    });
});

document.querySelector('.js-home').addEventListener('click',()=>{
    let targetElementPosition = document.querySelector('.js-page-container-1').offsetTop;
    window.scrollTo({
        top: targetElementPosition,
        behavior: 'smooth'
    });
});

document.querySelectorAll('.js-about-us').forEach((element)=>{
    element.addEventListener('click',()=>{
        let targetElementPosition = document.querySelector('.js-page-container-2').offsetTop;
        window.scrollTo({
            top: targetElementPosition +20,
            behavior: 'smooth'
        });
    });
});

document.querySelector('.js-contact-us').addEventListener('click',()=>{

    let windowHeight = window.innerHeight; // Height of the viewport
    let documentHeight = document.body.scrollHeight;
    window.scrollTo({
        top: documentHeight - windowHeight,
        behavior: 'smooth'
    });
});

document.querySelector('.js-button-1').addEventListener('click',()=>{
    let targetElementPosition = document.querySelector('.js-features-section-1').offsetTop;
    window.scrollTo({
        top: targetElementPosition -85,
        behavior: 'smooth'
    });
});