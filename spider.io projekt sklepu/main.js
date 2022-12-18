const choose_lang = document.querySelector("#choose_lang")
const lang_box = document.querySelector("#lang_box")

choose_lang.addEventListener("click", function(){
    console.log('ee')
    lang_box.classList.toggle("lang_box-toggle")
})

const toggle_account = document.querySelector("#toggle_account")
const account_main = document.querySelector("#account_main")
const header = document.querySelector("header")
const main = document.querySelector("main")
const footer = document.querySelector("footer")
const body = document.querySelector("body")

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