// scroll button js here 

// get the button
myButton = document.getElementById("myBtn");
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.documentElement.scrollTop > 300) {
        myButton.style.display = "block"
    } else {
        myButton.style.display = "none"
    }
}

function topFunction() {
    document.documentElement.scrollTop = 0;

}