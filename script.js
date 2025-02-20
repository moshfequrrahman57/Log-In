const menu_btn=document.getElementById("menu_btn");
const menu_items=document.getElementById("menu_items");

menu_btn.onclick=()=>{

    menu_items.classList.toggle("active");
}


const email=document.getElementById("email");

const email_placeholder=document.getElementById("email_placeholder");
const email_input=document.getElementById("email_input");
const pass_placeholder=document.getElementById("pass_placeholder");
const pass_input=document.getElementById("pass_input");

email_input.onfocus=()=>{
    email_placeholder.classList.add("email_pass_placeholder_style");
}
email_input.onblur=()=>{
    email_placeholder.classList.remove("email_pass_placeholder_style");
    if(email_input && email_input.value){
        email_placeholder.classList.add("email_pass_placeholder_style");
        
    }
}

pass_input.onfocus=()=>{
    pass_placeholder.classList.add("email_pass_placeholder_style");
}
pass_input.onblur=()=>{
    pass_placeholder.classList.remove("email_pass_placeholder_style");
    if(pass_input && pass_input.value){
        pass_placeholder.classList.add("email_pass_placeholder_style");
    }
}

const input_checkbox=document.getElementById("input_checkbox");

input_checkbox.onclick=()=>{
    if(input_checkbox.checked){
        console.log("Checked");
        pass_input.type="text";
        
    }
    else
    {
        console.log("nog checked");
        pass_input.type="password";
    }
}

   