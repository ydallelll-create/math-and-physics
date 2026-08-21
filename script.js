function openSection(sectionId) {

    // Hide the homepage
    document.querySelector(".hero").style.display = "none";

    document.querySelector(".featured").style.display = "none";


    // Hide every internal page
    document.querySelectorAll(".page").forEach(page => {

        page.classList.remove("active");

    });


    // Show the page we want
    const page = document.getElementById(sectionId);

    if (page) {

        page.classList.add("active");

    }


    window.scrollTo(0, 0);

}



/* =========================
   RETURN HOME
========================= */

function goHome() {

    // Hide all internal pages
    document.querySelectorAll(".page").forEach(page => {

        page.classList.remove("active");

    });


    // Show homepage
    document.querySelector(".hero").style.display = "block";

    document.querySelector(".featured").style.display = "block";


    window.scrollTo(0, 0);

}



/* =========================
   OPEN CALCULUS
========================= */

function openCalculus() {

    // Check that calculus.js exists
    if (typeof calculusCourse === "undefined") {

        alert("The Calculus course was not loaded.");

        return;

    }


    // Hide Mathematics
    document
        .getElementById("mathematics")
        .classList
        .remove("active");


    // Show Calculus
    document
        .getElementById("calculus")
        .classList
        .add("active");


    renderCalculus();


    window.scrollTo(0, 0);

}



/* =========================
   CREATE CALCULUS PAGE
========================= */

function renderCalculus() {

    const container =
        document.getElementById("calculusContent");


    container.innerHTML = `

        <h1>${calculusCourse.title}</h1>

        <p class="intro">

            ${calculusCourse.description}

        </p>


        <div class="chapter-grid">

            ${calculusCourse.chapters.map((chapter, index) => `

                <button
                    class="chapter"
                    onclick="openCalculusChapter(${index})"
                >

                    ${chapter.title}

                    <span>
                        OPEN →
                    </span>

                </button>

            `).join("")}

        </div>


        <div
            id="chapterContent"
            class="chapter-content"
        >

            <h2>
                Select a chapter
            </h2>

            <p>
                Choose a chapter above to begin.
            </p>

        </div>

    `;

}



/* =========================
   OPEN ONE CHAPTER
========================= */

function openCalculusChapter(index) {

    const chapter =
        calculusCourse.chapters[index];


    const container =
        document.getElementById("chapterContent");


    container.innerHTML = chapter.content;


    container.scrollIntoView({

        behavior: "smooth",

        block: "start"

    });

}
