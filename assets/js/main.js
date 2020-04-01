window.addEventListener('scroll', function () {
    var topValue = this.scrollY;
    if (document.title == "Team" || document.title=="Portfolio" || document.title=="Contact" ) {

    }
    else {
        addclassOnNav(topValue);
    }
});

document.querySelector('.mobile-menu').addEventListener('click',function(){
    this.classList.toggle('open');
    document.querySelector('nav .right').classList.toggle('open');

});
function addclassOnNav(scrollValue) {
    if (scrollValue > 60) {
        document.querySelector('nav').classList.add('fixed');
    }
    else {
        document.querySelector('nav').classList.remove('fixed');
    }

}

function  openModal(){
    document.querySelector('.modal').classList.add('open');
    document.querySelector('body').style.overflow="hidden";
}

function closeModal(){
    document.querySelector('.modal').classList.remove('open');
    document.querySelector('body').style.overflow="auto";
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
            blogLines[i].classList.add('active');
        }
        else{
            slides[i].classList.remove('active');
            blogLines[i].classList.remove('active');
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

function showDelAddress(el){
    el.classList.add('active');
    document.getElementById('del-address').style.display="block";
    document.getElementById('ban-address').style.display="none";
    document.getElementById('delMap').style.display="inline-block";
    document.getElementById('banMap').style.display="none";
    document.querySelector('.tabs .tab:first-child').classList.remove('active');
}
function showBanAddress(el){
    el.classList.add('active');
    document.getElementById('del-address').style.display="none";
    document.getElementById('ban-address').style.display="block";
    document.getElementById('delMap').style.display="none";
    document.getElementById('banMap').style.display="inline-block";
    document.querySelector('.tabs .tab:nth-child(2)').classList.remove('active');
}






