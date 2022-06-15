import { setFlag } from "./modules/Form.js";
const tabs = document.querySelectorAll(".tab");
   const tabsContent = document.querySelectorAll(".content__form");

   tabs.forEach(item => {

      item.addEventListener("click",function(event){
      const attrHref = this.getAttribute("data-href");

         tabs.forEach(item => {
            if(item.dataset.href === attrHref){
               item.classList.add("tab-active")

               tabsContent.forEach(function(item){
                  item.classList.remove("content__form-active");
      
                  if(item.id === attrHref){
                     item.classList.add("content__form-active");
                     setFlag()
                  }
               })
            } else {
               item.classList.remove("tab-active")
            }
         })
   
      })
   })