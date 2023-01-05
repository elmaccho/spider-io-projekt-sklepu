    // LANG

const choose_lang = document.querySelector("#choose_lang")
const lang_box = document.querySelector("#lang_box")

choose_lang.addEventListener("click", function(){
    console.log('ee')
    lang_box.classList.toggle("lang_box-toggle")
})

    // LANG

    // SHOW PASSWORD

const passOff = document.querySelector("#passOFF")
const passOn = document.querySelector("#passON")
const passSwitch = document.querySelector("#passSwitch")
const passInput = document.querySelector("#passInput")

passSwitch.addEventListener("click", function(){
    if(passOn.classList.contains("show")){
        passOn.classList.add("hide")
        passOn.classList.remove("show")

        passOff.classList.add("show")
        passOff.classList.remove("hide")
        passInput.type="text"
        console.log("eee")
    }
    else{
        passOn.classList.add("show")
        passOn.classList.remove("hide")

        passOff.classList.add("hide")
        passOff.classList.remove("show")
        passInput.type="password"
    }
})


    // SHOW PASSWORD