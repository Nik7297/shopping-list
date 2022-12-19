
        let slct = document.querySelector(".section select")
        let nameinp = document.querySelector(".name input")
        let btn = document.querySelector(".btn button")
        let quantityinput = document.querySelector(".quantity input")
        let box1 =document.querySelector(".box1")
        let box2 =document.querySelector(".box2")
        let box3 =document.querySelector(".box3")
        let box4 =document.querySelector(".box4")
        let box5 =document.querySelector(".box5")
        let box6 =document.querySelector(".box6")
        let box7 =document.querySelector(".box7")
        let box8 =document.querySelector(".box8")
        let box9 =document.querySelector(".box9")


        btn.onclick = () => {

            let ico=document.createElement("i")
            ico.setAttribute("class","fa-solid fa-xmark")
             


            let h5 = document.createElement("h5")
             h5.innerHTML = nameinp.value

             let quantity = document.createElement("span")
             quantity.innerHTML = quantityinput.value

             h5.appendChild(quantity)
             ico.insertAdjacentElement("afterend",quantity)
             

             h5.appendChild(ico)
             h5.insertAdjacentElement("afterbegin",ico)
             
            if(slct.value === 'Fruits&Vegetables'){
                
                box1.appendChild(h5)
                box1.insertAdjacentElement("beforeend",h5)
            }
            if(slct.value === 'Meat&Seafoods'){
                box2.appendChild(h5)
            box2.insertAdjacentElement("beforeend",h5)
            }
            if(slct.value === 'Dairy'){
                box3.appendChild(h5)
            box3.insertAdjacentElement("beforeend",h5)
            }
            if(slct.value === 'FrozenFoods'){
                box4.appendChild(h5)
            box4.insertAdjacentElement("beforeend",h5)
            }
            if(slct.value === 'Breads&pasta'){
                box5.appendChild(h5)
            box5.insertAdjacentElement("beforeend",h5)
            }
            if(slct.value === 'Snacks'){
                box6.appendChild(h5)
            box6.insertAdjacentElement("beforeend",h5)
            }
            if(slct.value === 'Beverages'){
                box7.appendChild(h5)
            box7.insertAdjacentElement("beforeend",h5)
            }
            if(slct.value === 'Cleaning'){
                box8.appendChild(h5)
            box8.insertAdjacentElement("beforeend",h5)
            }
            if(slct.value === 'other'){
                box9.appendChild(h5)
            box9.insertAdjacentElement("beforeend",h5)
            }


        //    else{
        //     box9.appendChild(h5)
        //     box9.insertAdjacentElement("beforeend",h5)
        //    }
            
            ico.onclick = ()=>{
                h5.remove();
            }

        }




    