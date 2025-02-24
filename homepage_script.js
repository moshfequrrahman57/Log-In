const menu_btn=document.getElementById("menu_btn");
const menu_items=document.getElementById("menu_items");

menu_btn.onclick=()=>{

    menu_items.classList.toggle("active");
}

console.log("HOme page");