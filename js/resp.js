let resp = document.getElementById("responsive-menu-bar");
let responsiveClass = document.getElementById("responsive-nav-class");


resp.addEventListener('click', () => {
    if (responsiveClass.style.visibility === "inherit") {
        responsiveClass.style.visibility = "hidden";
    } else {
        responsiveClass.style.visibility = "inherit";
    }
})
// new comment for random push