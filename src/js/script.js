
let openNav = document.querySelector("#openNav");
let responsiveNav = document.querySelector("#responsiveNav");
let responsiveNavAll = document.querySelectorAll("#responsiveNav")

openNav.addEventListener("click", () => {
    responsiveNav.classList.toggle("hiddenNav");
});

responsiveNavAll.forEach(link => {

    link.addEventListener("click", () => {
        responsiveNav.classList.toggle("hiddenNav");
    });

});


