const choose_lang = document.querySelector("#choose_lang")
const lang_box = document.querySelector("#lang_box")

choose_lang.addEventListener("click", function(){
    console.log('ee')
    lang_box.classList.toggle("lang_box-toggle")
})

const toggle_account = document.querySelector("#toggle_account")
const account_main = document.querySelector("#account_main")
const account_box = document.querySelector("#account_box")
const header = document.querySelector("header")
const main = document.querySelector("main")
const footer = document.querySelector("footer")
const body = document.querySelector("body")

document.addEventListener("click", function closelang(event){
    if(!choose_lang.contains(event.target) && !lang_box.contains(event.target)){
        lang_box.classList.remove("lang_box-toggle")
    }
})

toggle_account.addEventListener("click", function(){
    console.log('eeeee')
    account_main.classList.toggle("account-main-toggle")
    header.classList.toggle("body_blur")
    main.classList.toggle("body_blur")
    footer.classList.toggle("body_blur")
    body.style.overflow="hidden"
})


document.addEventListener('click', function handleClickOutsideBox(event) {
 
    if (!document.querySelector('#account_box').contains(event.target) && !toggle_account.contains(event.target)) {
        console.log("account-box remove")
        account_main.classList.remove("account-main-toggle")
        header.classList.remove("body_blur")
        main.classList.remove("body_blur")
        footer.classList.remove("body_blur")
        body.style.overflow="auto"
    }
  });




const dropdownContent = document.querySelectorAll("#dropdown-content")
var i;

for(i=0; i<dropdownContent.length; i++){
    dropdownContent[i].addEventListener("click",function(){
        console.log('e')

        var dropdownMenu = this.nextElementSibling;


        if (!dropdownMenu.classList.contains("menu-open")) {
            dropdownMenu.classList.add("menu-open");
            dropdownMenu.classList.remove("menu-close")

            // document.querySelector("#menu-ion-icon").style.transform = "rotateX(180deg)";
            // document.querySelectorAll("#menu-ion-icon").forEach(el => {
            //     el.style.transform = "rotateX(180deg)";
            // });

        }else{
            dropdownMenu.classList.add("menu-close");
            dropdownMenu.classList.remove("menu-open");

            // document.querySelector("#menu-ion-icon").style.transform = "rotateX(0deg)";
        }
        
    })
}




const cartBtn = document.querySelectorAll(".cartBtn")
const cartMain = document.querySelector('.cart-main')

for (let i=0; i<cartBtn.length; i++){
    
    cartBtn[i].addEventListener("click", function(){


        if(cartMain.classList.contains("cartaddClose")){
            cartMain.classList.remove("cartaddClose")
            cartMain.classList.add("cartaddOpen")
            cartMain.style.display ="flex"

            header.classList.add("body_blur")
            main.classList.add("body_blur")
            footer.classList.add("body_blur")
            body.style.overflow="hidden"

            setTimeout(() => {

                header.classList.remove("body_blur")
                main.classList.remove("body_blur")
                footer.classList.remove("body_blur")
                body.style.overflow="auto"

                cartMain.classList.add("cartaddClose")
                cartMain.classList.remove("cartaddOpen")
                setTimeout(() => {
                    cartMain.style.display ="none"
                }, 900);
            }, 2000);
        }
    })
}


// cartBox.addEventListener("click", function(){
//     cartMain.style.transform = "translate(-50%, -50%) scale(1)"
//     header.classList.add("body_blur")
//     main.classList.add("body_blur")
//     footer.classList.add("body_blur")
//     body.style.overflow="hidden"

//     setTimeout(() => {
//         cartMain.style.transform = "translate(-50%, -50%) scale(0)"
//         header.classList.remove("body_blur")
//         main.classList.remove("body_blur")
//         footer.classList.remove("body_blur")
//         body.style.overflow="auto"
//     }, 2000);
// })
