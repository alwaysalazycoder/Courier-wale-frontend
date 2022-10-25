// 🔥 navigation bar responsiveness ....

let menubtn = document.getElementById("responsive-menu-bar");
let responsivediv = document.getElementById("responsive-nav-class")
let count = 0;
menubtn.addEventListener('click' , ()=>{
    count++;
    if(count%2 == 0){
        responsivediv.style.left = "-100%";

    }
    else{
        responsivediv.style.left = "0%";

    }
})


