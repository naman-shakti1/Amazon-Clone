
let slideBtnLeft = document.getElementById("slide-btn-left")
let slideBtnRight = document.getElementById("slide-btn-right")
let imgItem = document.querySelectorAll(".image-item")

console.log(imgItem.length-1)

let startSlider = 0
let endSlider = (imgItem.length - 1) * 100  //  400

slideBtnLeft.addEventListener("click", handleLeftBtn)

function handleLeftBtn(){
     if(startSlider  < 0){
            startSlider = startSlider + 100;   
     } 
     imgItem.forEach(element => {
            element.style.transform = `translatex(${startSlider}%)`
    }) 
}

slideBtnRight.addEventListener("click", handleRightBtn)

function handleRightBtn(){
    if(startSlider >= -endSlider + 100) {
        startSlider = startSlider - 100;
    }
    imgItem.forEach(element => {
        element.style.transform = `translatex(${startSlider}%)`
    }) 
}
   

//--------------------------------------render automatic---------------------------------------------------------//
function renderSlideAuto(){
    if(startSlider >= -endSlider +100) {
        handleRightBtn()
      /*  handleLeftBtn()*/
    }
   else{
       startSlider = 0;   
    }
}
setInterval(renderSlideAuto, 2000);



/********************************************************************sidebar-container-navigation*****************************************/
const sidebarNavigationE1 = document.getElementById("sidebar-container-navigation-id")
const sidebarOpenNavigationE1 = document.getElementById("open-nav-sidebar")
const sidebarCloseNavigationEl = document.getElementById("sidebar-navigation-close")

console.log(sidebarNavigationE1)

sidebarOpenNavigationE1.addEventListener("click",() =>{
    sidebarNavigationE1.classList.toggle("slidebar-show")
})
sidebarCloseNavigationEl.addEventListener("click",()=>{
    sidebarNavigationE1.classList.toggle("slidebar-show")
})
