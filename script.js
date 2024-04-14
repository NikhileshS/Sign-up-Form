const password = document.querySelector("#password");
const confirmpassword = document.querySelector("#confirm_pass");
const passalert = document.querySelector(".alert");

confirmpassword.addEventListener("input", () => {
    if(password.value !== confirmpassword.value){
        passalert.style.opacity = '100';
        password.style.border = "2px solid red"
        confirmpassword.style.border = "2px solid red"
    }
    else{
        passalert.style.opacity = '0';
    }
})

const btn = document.querySelector('button').addEventListener("click", (event) => {
    if(passalert.style.opacity === '100'){
        event.preventDefault()
    }
})