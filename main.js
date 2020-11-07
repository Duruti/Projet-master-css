window.onload = function(){

   let btnMenu = document.querySelector(".btnMenu")
   let menuPhone = document. querySelector(".menuPhone")
   let liens = menuPhone.querySelectorAll(".lien")
   // debug
   console.log("width : "+screen.width);
   console.log("height : "+screen.height);

   btnMenu.addEventListener("click",function(){
      if (menuPhone.style.display == "none") {
         menuPhone.style.display = "flex";
         btnMenu.style.width = "40px"
         btnMenu.style.height = "40px"

         btnMenu.style.backgroundImage = "url(ressources/close.svg)";
      } 
      else
      {
         menuPhone.style.display = "none"
         btnMenu.style.backgroundImage = "url(ressources/menu.svg)";
         btnMenu.style.width = "35px"
         btnMenu.style.height = "35px"
      }      
   })

   liens.forEach(l => {
      l.addEventListener("click",function(){
         menuPhone.style.display = "none"
         btnMenu.style.backgroundImage = "url(ressources/menu.svg)";
         btnMenu.style.width = "35px"
         btnMenu.style.height = "35px"
      })
   });
}