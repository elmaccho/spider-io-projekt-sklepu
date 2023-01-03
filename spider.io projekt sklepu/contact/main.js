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

    // CONTACT US FORM



function validateForm() {
    const namee = document.forms["myForm"]["namelastname"].value;
    const email = document.forms["myForm"]["email"].value;
    const topic = document.forms["myForm"]["topic"].value;
    const message = document.forms["myForm"]["message"].value;


        if (!namee || !email || !topic || !message) {
            alert("Wypełnij wszystkie dane!");
            return false;
        }
}

var namee = document.getElementById("namee")
var email = document.getElementById("email")
var topic = document.getElementById("topic")
var message = document.getElementById("message")

if(namee.value ==""){
    console.log('ee')
}else{
    namee.style.border="5px solid red"
}

    if(namee.value.length <= 0){
        console.log('eeeee')
    }else{
        namee.style.backgroundColor="$background4"
    }

    // CONTACT US FORM