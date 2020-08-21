window.onscroll = function () { stickyHeaderFunction() };

var header = document.getElementById("myHeader");
var nav = document.getElementsByClassName("nav");
var social = document.getElementsByClassName("social-linkInHeader");
var sticky = header.offsetTop;

function stickyHeaderFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
        nav.classList.add("sticky"); // not working
        social.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
        nav.classList.remove("sticky"); // not working
        social.classList.remove("sticky");
    }
}
