const menu_btn=document.getElementById("menu_btn");
const menu_items=document.getElementById("menu_items");

const email_placeholder=document.getElementById("email_placeholder");
const email_input=document.getElementById("email_input");
const pass_placeholder=document.getElementById("pass_placeholder");
const pass_input=document.getElementById("pass_input");

const show_pass=document.getElementById("show_pass");

const submit_btn=document.getElementById("submit_btn");
const failed_mess=document.getElementById("failed_mess");

const copy_btn=document.getElementById("copy_btn");

console.log("Rnn script");
// toggle menu button dropdown window
menu_btn.onclick=()=>{

    menu_items.classList.toggle("active");
}


//focus and remove focus on inputs
email_input.onfocus=()=>{
    email_placeholder.classList.add("email_pass_placeholder_style");
    console.log("email on click");
}
email_input.onblur=()=>{
    email_placeholder.classList.remove("email_pass_placeholder_style");
    console.log("email remove focus");
    if( email_input.value){
        email_placeholder.classList.add("email_pass_placeholder_style");
        console.log("email has value");
        
        
    }
}

pass_input.onfocus=()=>{
    pass_placeholder.classList.add("email_pass_placeholder_style");
    console.log("password focus");
}
pass_input.onblur=()=>{
    pass_placeholder.classList.remove("email_pass_placeholder_style");
    console.log("password focus remove");
    if(pass_input.value){
        pass_placeholder.classList.add("email_pass_placeholder_style");
        console.log("password has value");
    }
}


//check passwords
show_pass.onclick=()=>{
  
    if(pass_input.type=="password"){
        pass_input.type="text";
        console.log("pass show");
    }
    else {
        pass_input.type="password";
        console.log("pass vanish");
    }
}
//copy email to input field

copy_btn.onclick=()=>{
     email_input.value="abc@hello.com";
    email_input.focus();
    email_input.select();
    // navigator.clipboard.writeText("Noman");
    console.log("copy btn click");
  }



 submit_btn.onclick=()=>{
       let email_id=email_input.value;
        let pass=pass_input.value;
        let modified_email=email_id.replace(/\s/g,""); //removes all space
         console.log(modified_email);

    if(modified_email==="abc@hello.com" && pass==="123"){
        console.log(" Authentic");
       failed_mess.style.display="none";
        // location.replace('homepage.html');
        
        email_input.value="";
        pass_input.value="";
        window.location.href="homepage.html";
      }
        else{
            console.log("Log in failed");
           failed_mess.style.display="flex";
          
            return false;
  }
}






  
