const bar = document.querySelector('#bar');
const times = document.querySelector('#times');
const menudiv = document.querySelector('#menudiv');
const heading = document.querySelector('h1');
const li = document.querySelectorAll("li");
const nav = document.querySelector("nav");

bar.onclick = ()=>{
 menudiv.style.display = "block";
 heading.style.display = "none";
 bar.style.display = "none";
 times.style.display = "block";
}

times.onclick = ()=>{
    menudiv.style.display = "none";
    heading.style.display = "block";
    bar.style.display = "block";
    times.style.display = "none";
   }


   document.addEventListener("scroll", ()=>{
    
        nav.classList.add('scrollnav');
    
     
   })