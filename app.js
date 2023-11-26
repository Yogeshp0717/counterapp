let count = 0;
// alert("hi");

const value = document.querySelector("#value")
const btns = document.querySelectorAll(".btn")

btns.forEach(btn => {
     btn.addEventListener("click", e=>{
         let elementId = e.currentTarget.id;
         // console.log(elementId);
         if(elementId == 'Decrease'){
            count--;
         }
         else if(elementId == 'Reset'){
            count = 0;
         }
         else{
            count++;
         }
         if(count > 0){
             value.style.color ="green"
        }
        if(count < 0){
            value.style.color ="red"
        }
        if (count == 0){
            value.style.color ="#222"
        }
        value.textContent = count;



     })


})

