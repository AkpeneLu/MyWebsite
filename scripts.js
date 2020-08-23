window.onscroll = function () { stickyHeaderFunction() };

const header = document.getElementById("myHeader");
const nav = document.getElementsByClassName("nav");
const sticky = header.offsetTop;

function stickyHeaderFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
        //nav.classList.add("sticky");  not working
        //social.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
        //nav.classList.remove("sticky");  not working
        //social.classList.remove("sticky");
    }
}
