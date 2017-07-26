import $ from 'jquery';

class SlideShow{
    
    constructor(){
        this.prev = $('.prev');
        this.next = $('.next');
        this.slideIndex = 0;
        
        this.showSlides();
    }
    
    
    showSlides(){
        var i;
        var slides = $('.mySlides');
        var dots = $('.dot');
        //hide slides
        for(i = 0; i < slides.length; i++){
            slides[i].style.display = 'none';
        }
        slideIndex++;
        
        if(this.slideIndex > slides.length){this.slideIndex = 1;}
        
        for(i = 0; i < dots.length; i++){
            dots[i].className = dots[i].className.replace(' active', '');
        }
        
        slides[this.slideIndex-1].style.display = 'block';
        dots[this.slideIndex-1].className += ' active';
        setTimeout(showSlides, 200);
    }
   
    
}

export default SlideShow;

/*

var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex> slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}
*/

/*
 events(){
        prev.on('click',plusSlides(-1));
        next.on('click',plusSlides(1));
        
        dot.on('click',currentSlide(1));
        dot.on('click',currentSlide(2));
        dot.on('click',currentSlide(3));
    }
    
    showSlides(n) {
        var i;
        for (i = 0; i < slides.length; i++) {
           slides[i].style.display = "none";  
        }
        
        slideIndex++;
        
        if (slideIndex> slides.length) {
            slideIndex = 1
        } 
        
        for (i = 0; i < dots.length; i++) {
            dots[i].className = this.dots[i].className.replace(" active", "");
        }
        
        slides[slideIndex-1].style.display = "block";  
        
        dots[slideIndex-1].className += " active";
        
        setTimeout(showSlides, 2000); // Change image every 2 seconds
    }
    
    
    plusSlides(n) {
      showSlides(slideIndex += n);
    }

    currentSlide(n) {
      showSlides(slideIndex = n);
    }
*/