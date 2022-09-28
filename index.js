let flag=1;
let slides = document.querySelectorAll("img");
document.getElementById("left").addEventListener("click",function(){
  if(flag>0){
   flag=flag-1;
  }
  console.log(flag)
  slideShow(flag)
 })
 document.getElementById("right").addEventListener("click",function(){
  if(flag<(slides.length-1)){
   flag=flag+1;
  }
  slideShow(flag)

 })

slideShow(flag);
function slideShow(flag){
    slides.forEach(function(el){
        el.style.display="none"
    })
    slides[flag].style.display="block";
}

