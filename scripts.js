window.onscroll = function () { stickyHeaderFunction() }

const header = document.getElementById("myHeader")
const sticky = header.offsetTop

const stickyHeaderFunction = () => {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky")
    } else {
        header.classList.remove("sticky")
    }
}
