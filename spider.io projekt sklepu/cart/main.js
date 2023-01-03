    // LANG

const choose_lang = document.querySelector("#choose_lang")
const lang_box = document.querySelector("#lang_box")

choose_lang.addEventListener("click", function(){
    console.log('ee')
    lang_box.classList.toggle("lang_box-toggle")
})

    // LANG

    // ACCOUNT

const toggle_account = document.querySelector("#toggle_account")
const account_main = document.querySelector("#account_main")
const account_box = document.querySelector("#account_box")
const header = document.querySelector("header")
const main = document.querySelector("main")
const footer = document.querySelector("footer")
let body = document.querySelector("body")

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
    body.style.overflow = "scroll"
})

document.addEventListener('click', function handleClickOutsideBox(event) {
 
    if (!document.querySelector('#account_box').contains(event.target) && !toggle_account.contains(event.target)) {
        console.log("account-box remove")
        account_main.classList.remove("account-main-toggle")
        header.classList.remove("body_blur")
        main.classList.remove("body_blur")
        footer.classList.remove("body_blur")
    }
  });

    // ACCOUNT

    
const price = document.querySelector("#price")

const minus = document.querySelector(".minus")
const plus = document.querySelector(".plus")

var valueIn = document.getElementById("quantity").value
// function pluss(){
//     plus.addEventListener("click", function(){
//         price.innerHTML = valueIn*69
//     })
// }
function myFunction(val) {
    document.getElementById("price").innerHTML = val * 69.00; 
  }

        plus.addEventListener("click", function(){
            price.innerHTML = valueIn*69
            valueIn++
        })

        minus.addEventListener("click", function(){
            price.innerHTML = valueIn*69
            valueIn--
        })