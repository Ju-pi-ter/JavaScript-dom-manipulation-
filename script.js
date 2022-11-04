'use strict'

const showButtons = document.querySelectorAll(".show") 

const closeOverlay = document.querySelector(".overlay")

const closeBtn = document.querySelector(".close")

const messageBox = document.querySelector(".box")

const removeHidden = function (className) {

return  className.classList.add("hidden-box")
  
}

const windowCloser = function () {
    
    removeHidden(messageBox)
    removeHidden(closeOverlay)
  
  
}
  
  closeBtn.addEventListener("click", windowCloser// () => {
   // removeHidden(messageBox)
  //  removeHidden(closeOverlay)
    
 // } 
                              )




closeOverlay.addEventListener("click", windowCloser // ()=>{ 
  
   //removeHidden(messageBox)
   //removeHidden(closeOverlay)
  
//}
                             )





//const openWindow = function (btns) {
for(let i = 0; i < showButtons.length; i++) {
  
 showButtons[i].addEventListener('click', () => {
messageBox.classList.remove("hidden-box")
closeOverlay.classList.remove("hidden-box")

})


  
 
}//}


//openWindow(showButtons)

document.addEventListener("keydown", (e) => {
  if(e.key === "Escape" && !messageBox.classList.contains("hidden-box")) {

   windowCloser()
   // removeHidden(messageBox)
   // removeHidden(closeOverlay)
  }
}
)




  

