
//
// document.getElementsByClassName('mob-icon').onclick = navBar;
//
//
// function navBar () {
//     document.getElementsByClassName("navbar").style.display = "block";
// }

// (function () {
//    var navBar = $(".navbar")
//        $(".mob-icon").on('click',function (e) {
//        navBar.toggleClass("navbar-mobile");
//        e.preventDefault();
//    })
// });



document.getElementsByClassName("mob-icon").onclick = function (e) {
    document.getElementById("navBar").className += " navbar-mob"

}
