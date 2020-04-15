window.addEventListener('scroll', function () {
    var topValue = this.scrollY;
    if (document.title == "Team" || document.title=="Portfolio" || document.title=="Contact" || document.title=="Home" ) {

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
            stopSlider();
             var count = Array.from(element.parentNode.children).indexOf(element);
             blogSliderCount = count;
             changeSlide(blogSliderCount);
             for(i=0;i<blogLinesCount;i++){
                 blogLines[i].classList.remove('active');
             }
             element.classList.add('active');
             blogSlider = setInterval(AutoBlogSlider,6000);
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

function stopSlider(){
    clearInterval(blogSlider);
}

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

var recentItems=document.querySelectorAll('.recent-list-item');
var recentItemsCount = recentItems.length;
var recentCounter=0;
var isMobile;
var maxCount=0;
function initializeRecentCaousel(){
    recentCounter=0;
    isMobile=false;
    if(recentItemsCount<3){
        document.querySelector('.recent-list-nav').style.display="none";
    }
    var windowWidth = window.innerWidth;

    if(windowWidth<786){
        document.querySelector('.recent-list-slider-wrapper').style.width=(recentItemsCount * 100)+'vw';
        maxCount = recentItemsCount-1;
        isMobile=true;
    }
    else{
        document.querySelector('.recent-list-slider-wrapper').style.width=(recentItemsCount * 33.33)+'vw';
        maxCount = Math.round((recentItemsCount-2)/2);
    }

    for(i=0;i<recentItemsCount;i++){
        recentItems[i].style.display="block";
    }
    document.querySelector('.recent-list-slider-wrapper').style.transform="none";
}


function moveLeft(){
    clearInterval(RecentSlide);
    if(recentCounter<maxCount){
        recentCounter++;
        if(recentCounter== maxCount){
            if(recentItemsCount%2==0){
                var transformValue= -(recentCounter*66.66)+"vw";
                if(isMobile){
                    transformValue = -(recentCounter*100)+"vw";
                }
                document.querySelector('.recent-list-slider-wrapper').style.transform="translateX("+transformValue+")";
            }
            else{
                var transformValue= -(recentCounter*66.66 - 33.33)+"vw";
                if(isMobile){
                    transformValue = -(recentCounter*100)+"vw";
                }
                document.querySelector('.recent-list-slider-wrapper').style.transform="translateX("+transformValue+")"; 
            }
        }
        else{
            var transformValue= -(recentCounter*66.66)+"vw";
            if(isMobile){
                transformValue = -(recentCounter*100)+"vw";
            }
            document.querySelector('.recent-list-slider-wrapper').style.transform="translateX("+transformValue+")";

        }   
    }
    else{
        recentCounter=0;
        document.querySelector('.recent-list-slider-wrapper').style.transform="none";
    }
    RecentSlide = setInterval(AutoRecentSlide,6000);

}

function moveRight(){ 
    clearInterval(RecentSlide);
    if(recentCounter>0 && recentCounter<=maxCount){
        recentCounter--;
        if(recentCounter>maxCount){
            if(recentItemsCount%2==0){
                var transformValue= -(recentCounter*66.66)+"vw";
                if(isMobile){
                    transformValue = -(recentCounter*100)+"vw";
                }
                document.querySelector('.recent-list-slider-wrapper').style.transform="translateX("+transformValue+")";
            }
            else{
                var transformValue= -(recentCounter*66.66 - 33.33)+"vw";
                if(isMobile){
                    transformValue = -(recentCounter*100)+"vw";
                }
                document.querySelector('.recent-list-slider-wrapper').style.transform="translateX("+transformValue+")"; 
            }
        }
        else{
            var transformValue= -(recentCounter*66.66)+"vw";
            if(isMobile){
                transformValue = -(recentCounter*100)+"vw";
            }
            document.querySelector('.recent-list-slider-wrapper').style.transform="translateX("+transformValue+")";

        }   
    }
    else{
        document.querySelector('.recent-list-slider-wrapper').style.transform="translateX("+transformValue+")";
        recentCounter=maxCount;
        if(recentItemsCount%2==0){
            var transformValue= -(recentCounter*66.66)+"vw";
            if(isMobile){
                transformValue = -(recentCounter*100)+"vw";
            }
            document.querySelector('.recent-list-slider-wrapper').style.transform="translateX("+transformValue+")";
        }
        else{
            var transformValue= -(recentCounter*66.66 - 33.33)+"vw";
            if(isMobile){
                transformValue = -(recentCounter*100)+"vw";
            }
            document.querySelector('.recent-list-slider-wrapper').style.transform="translateX("+transformValue+")"; 
        }
    } 
    RecentSlide = setInterval(AutoRecentSlide,6000);
}

function AutoRecentSlide(){
    if(recentCounter<maxCount){
        recentCounter++;
        if(recentCounter== maxCount){
            if(recentItemsCount%2==0){
                var transformValue= -(recentCounter*66.66)+"vw";
                if(isMobile){
                    transformValue = -(recentCounter*100)+"vw";
                }
                document.querySelector('.recent-list-slider-wrapper').style.transform="translateX("+transformValue+")";
            }
            else{
                var transformValue= -(recentCounter*66.66 - 33.33)+"vw";
                if(isMobile){
                    transformValue = -(recentCounter*100)+"vw";
                }
                document.querySelector('.recent-list-slider-wrapper').style.transform="translateX("+transformValue+")"; 
            }
        }
        else{
            var transformValue= -(recentCounter*66.66)+"vw";
            if(isMobile){
                transformValue = -(recentCounter*100)+"vw";
            }
            document.querySelector('.recent-list-slider-wrapper').style.transform="translateX("+transformValue+")";

        }   
    }
    else{
        recentCounter=0;
        document.querySelector('.recent-list-slider-wrapper').style.transform="none";
    }
}

var RecentSlide = setInterval(AutoRecentSlide,6000);






