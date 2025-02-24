const menu_btn=document.getElementById("menu_btn");
const menu_items=document.getElementById("menu_items");

menu_btn.onclick=()=>{

    menu_items.classList.toggle("active");
}


// const email=document.getElementById("email");

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

const show_pass=document.getElementById("show_pass");

show_pass.onclick=()=>{
  
    if(pass_input.type==="password"){
        pass_input.type="text";
    }
    else {
        pass_input.type="password";
    }
}


const submit_btn=document.getElementById("submit_btn");
const failed_mess=document.getElementById("failed_mess");
failed_mess.style.display="none";

submit_btn.onclick=()=>{
    console.log(email_input.value,pass_input.value);
    let email_id=email_input.value;
    let pass=pass_input.value;
    let modified_email=email_id.replace(/\s/g,""); //removes all space
    console.log(modified_email);

    if(modified_email==="abc@hello.com" && pass==="123"){
      //  console.log(" Authentic");
      failed_mess.style.display="none";
        window.location='/homepage.html';
    }
    else{
        console.log("Log in failed");
        failed_mess.style.display="flex";

    }
}

const copy_btn=document.getElementById("copy_btn");

  //console.log(copy_btn); 

  copy_btn.onclick=()=>{
    email_input.value="abc@hello.com";
    email_input.focus();
    email_input.select();
    navigator.clipboard.writeText("Noman");
  }

  const innerbody=document.body.innerHTML;

  document.body.onload=()=>{
    console.log("Page on load");
    email_input.value="";
    pass_input.value="";
     
  }