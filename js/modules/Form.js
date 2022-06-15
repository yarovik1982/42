

export const setFlag = () =>{
   const currentTab = document.querySelector('.content__form-active')
   const flag = currentTab.querySelector(".tab__form-title-star")
   if(currentTab.dataset.save == "0"){
      flag.textContent = "*"
   }else{
      flag.textContent = ""
   }
}

