window.addEventListener('scroll', function () {
    var topValue = this.scrollY;
    if (document.title == "Team") {

    }
    else {
        addclassOnNav(topValue);
    }
});
function addclassOnNav(scrollValue) {
    if (scrollValue > 60) {
        document.querySelector('nav').classList.add('fixed');
    }
    else {
        document.querySelector('nav').classList.remove('fixed');
    }

}

function pullDown() {
    window.scrollTo()
}

// blog slider
var blogSliderCount= 0;
var blogLines = document.querySelectorAll('.line');
var blogLinesCount = blogLines.length;


 function activateSlide(element){
             var count = Array.from(element.parentNode.children).indexOf(element);
             blogSliderCount = count;
             changeSlide(blogSliderCount);
             for(i=0;i<blogLinesCount;i++){
                 blogLines[i].classList.remove('active');
             }
             element.classList.add('active');
    }

function changeSlide(count){
    var slides = document.querySelectorAll('.blog-slide-item');
    var slidesCount = slides.length;
    for(i=0;i<slidesCount;i++){
        if(i==count){
            slides[i].classList.add('active');
        }
        else{
            slides[i].classList.remove('active');
        }
    }
}

function AutoBlogSlider(){
        if(blogSliderCount<2){
            blogSliderCount++;
            changeSlide(blogSliderCount);
        }
        else{
            blogSliderCount=0;
            changeSlide(blogSliderCount);
        }
        
}
var blogSlider = setInterval(AutoBlogSlider,6000);





