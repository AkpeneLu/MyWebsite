window.onscroll = function () { stickyHeaderFunction() };

var header = document.getElementById("myHeader");
var nav = document.getElementsByClassName("nav-link");
var social = document.getElementsByClassName("social-linkInHeader");
var sticky = header.offsetTop;

function stickyHeaderFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
        nav.classList.add("sticky");
        social.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
        nav.classList.remove("sticky");
        social.classList.remove("sticky");
    }
}