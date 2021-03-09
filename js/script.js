const responsive = {
    0: {
        items: 1
    },
    320: {
        items: 1
    },
    560: {
        items: 2
    },
    960: {
        items: 3
    }
}
mybutton=document.getElementById("myBtn");
mydiv=document.getElementById("scrolldiv");
window.onscroll=function(){scrollFunction()};
function scrollFunction()
{
    if(document.body.scrollTop>50||document.documentElement.scrollTop>50){
        mybutton.style.display="block";
        mydiv.style.display="block";

    }else
    {
        mydiv.style.display="none";
        mybutton.style.display="none";
    }
}
function topFunction(){
    document.body.scrollTop=0;
    document.documentElement.scrollTop=0;
}
 
const navSlide=()=>{
    const burger=document.querySelector('.burger');
    const nav=document.querySelector('.nav-links');
    const navLinks=document.querySelectorAll('.nav-links li');
    burger.addEventListener('click',()=>{
        nav.classList.toggle('nav-active');
        navLinks.forEach((link,index)=>{
            if(link.style.animation){
                link.style.animation='';
            }
            else{
                link.style.animation=`navLinkFade 0.5s ease forwards ${index/7 +0.5}s`;
            }
        });
        burger.classList.toggle('toggle');
});

}
navSlide();
$(document).ready(function(){
    // banner image change
    let bannerCount = 0;
    setInterval(function(){
        hideAllBanner();
        changeBannerCount();
        changeBanner();
    }, 8000);

    function changeBanner(){
        $('.banner-item').each(function(idx){
            if(bannerCount == idx){
                $(this).addClass('active-banner');
            }
        });
    }

    function hideAllBanner(){
        $('.banner-item').each(function(idx){
            $(this).removeClass('active-banner');
        });
    }

    function changeBannerCount(){
        bannerCount++;
        if(bannerCount >= $('.banner-item').length){
            bannerCount = 0;
        }
    }

    // navigation bar toggle
    $('#navbar-toggler').click(function(){
        $('.navbar-collapse').slideToggle(600);
    });

    // fixed navbar 
    $(window).scroll(function(){
        let pos = $(window).scrollTop();
        if(pos >= 800){
            $('.navbar').addClass('fxd-navbar');
        } else {
            $('.navbar').removeClass('fxd-navbar');
        }
    });

    $('.subject_experts .owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            560: {
                items: 2
            }
        }
    })

     

}); 


