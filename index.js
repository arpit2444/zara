let flag=1;
let slides = document.querySelectorAll("img");
document.getElementById("left").addEventListener("click",function(){
  if(flag>0){
   flag=flag-1;
  }
  console.log(flag)
  slideShow(flag)
 })
 let r = document.getElementById("right");
 r.addEventListener("click",function(){
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

document.getElementById("hamburg").addEventListener("click",function(){
 
  var a = document.createElement('a'); 
                  
  a.href= "hamburger.html"

  // document.body.append(a)
  // var a = document.createElement('a'); 
                  

  // var link = document.createTextNode("This is link");
    

  // a.appendChild(link); 
    
  
  // a.title = "This is Link"; 
    
  
  // a.href = "hamburger.html"; 
  //   console.log(link)
  
//  document.body.appendChild(a); 

})
