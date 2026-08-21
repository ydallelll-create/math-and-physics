function openSection(sectionId) {

    document.querySelector(".hero").style.display = "none";

    document.querySelector(".featured").style.display = "none";

    document.querySelectorAll(".page").forEach(page => {
        page.classList.remove("active");
    });

    document
        .getElementById(sectionId)
        .classList
        .add("active");

    window.scrollTo(0, 0);
}


function goHome() {

    document.querySelectorAll(".page").forEach(page => {
        page.classList.remove("active");
    });

    document.querySelector(".hero").style.display = "block";

    document.querySelector(".featured").style.display = "block";

    window.scrollTo(0, 0);
}
