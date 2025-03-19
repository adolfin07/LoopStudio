
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

function changeClass() {
    if (window.innerWidth >= 1024) {
        responsiveNav.classList.remove("hiddenNav");

        responsiveNavAll.forEach(link => {

            link.addEventListener("click", () => {
                responsiveNav.classList.remove("hiddenNav");
            });

        });


    }
}


changeClass();

