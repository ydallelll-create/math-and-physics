let currentCourse = null;

let currentLesson = 0;

let courseHistory = [];



/* ================= PAGE NAVIGATION ================= */


function showPage(id) {

    document
        .querySelectorAll(".page")
        .forEach(page => {

            page.classList.remove("active");

        });


    const target =
        document.getElementById(id);


    if (target) {

        target.classList.add("active");

    }


    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });


    if (id === "research") {

        renderResearch();

    }

}



/* ================= COURSE BACK ================= */


function goBackFromCourse() {

    const previous =
        courseHistory.pop();


    showPage(
        previous || "home"
    );

}



/* ================= HTML SAFETY ================= */


function escapeHTML(value) {

    return String(value)
        .replace(/[&<>"']/g, character => {

            return {

                "&": "&amp;",

                "<": "&lt;",

                ">": "&gt;",

                '"': "&quot;",

                "'": "&#039;"

            }[character];

        });

}



/* ================= COURSE CARDS ================= */


function renderCourseCards() {

    const mathematics =
        window.MATH_COURSES || [];


    const physics =
        window.PHYSICS_COURSES || [];


    document.getElementById(
        "mathCourses"
    ).innerHTML = mathematics
        .map(
            (course, index) =>
                courseCard(
                    course,
                    index,
                    "M"
                )
        )
        .join("");


    document.getElementById(
        "physicsCourses"
    ).innerHTML = physics
        .map(
            (course, index) =>
                courseCard(
                    course,
                    index,
                    "P"
                )
        )
        .join("");

}



/* ================= COURSE CARD ================= */


function courseCard(course, index, prefix) {

    return `

        <article
            class="course-card"
            onclick="openCourse('${escapeHTML(course.id)}')"
        >

            <div class="number">

                ${prefix}${String(index + 1).padStart(2, "0")}

            </div>


            <h2>

                ${escapeHTML(course.title)}

            </h2>


            <p>

                ${escapeHTML(course.description)}

            </p>


            <div class="count">

                ${course.lessons.length}
                lessons • complete course

            </div>

        </article>

    `;

}



/* ================= FIND COURSE ================= */


function findCourse(id) {

    const mathematics =
        window.MATH_COURSES || [];


    const physics =
        window.PHYSICS_COURSES || [];


    return [

        ...mathematics,

        ...physics

    ].find(
        course => course.id === id
    );

}



/* ================= OPEN COURSE ================= */


function openCourse(id) {

    const course =
        findCourse(id);


    if (!course) {

        return;

    }


    const currentPage =
        document
            .querySelector(".page.active");


    courseHistory.push(
        currentPage
            ? currentPage.id
            : "home"
    );


    currentCourse = course;

    currentLesson = 0;


    renderCourse();

    showPage("course");

}



/* ================= RENDER COURSE ================= */


function renderCourse() {

    const course =
        currentCourse;


    document.getElementById(
        "courseView"
    ).innerHTML = `

        <div class="course-header">

            <span class="eyebrow">

                ${escapeHTML(course.field)}

            </span>


            <h1>

                ${escapeHTML(course.title)}

            </h1>


            <p>

                ${escapeHTML(course.description)}

            </p>

        </div>



        <div class="lesson-layout">


            <aside class="lesson-nav">

                ${course.lessons
                    .map(
                        (lesson, index) => `

                            <button
                                class="${
                                    index === currentLesson
                                        ? "active"
                                        : ""
                                }"

                                onclick="
                                    openLesson(${index})
                                "
                            >

                                ${String(
                                    index + 1
                                ).padStart(2, "0")}

                                ·

                                ${escapeHTML(
                                    lesson.title
                                )}

                            </button>

                        `
                    )
                    .join("")}

            </aside>



            <article
                id="lessonContent"
                class="lesson-content"
            >

            </article>


        </div>

    `;


    renderLesson();

}



/* ================= OPEN LESSON ================= */


function openLesson(index) {

    currentLesson =
        index;


    renderCourse();

}



/* ================= RENDER LESSON ================= */


function renderLesson() {

    const lesson =
        currentCourse
            .lessons[currentLesson];


    const content =
        document.getElementById(
            "lessonContent"
        );


    if (!content) {

        return;

    }


    content.innerHTML =
        lesson.content;


    if (
        window.MathJax &&
        window.MathJax.typesetPromise
    ) {

        MathJax.typesetPromise([
            content
        ]);

    }

}



/* ================= RESEARCH STORAGE ================= */


function getResearch() {

    try {

        return JSON.parse(

            localStorage.getItem(
                "advResearchV3"
            ) || "[]"

        );

    }

    catch {

        return [];

    }

}



/* ================= SAVE RESEARCH ================= */


function saveResearch() {

    const title =
        document
            .getElementById(
                "researchTitle"
            )
            .value
            .trim();


    const field =
        document
            .getElementById(
                "researchField"
            )
            .value;


    const type =
        document
            .getElementById(
                "researchType"
            )
            .value;


    const content =
        document
            .getElementById(
                "researchContent"
            )
            .value
            .trim();


    if (!title || !content) {

        alert(
            "Please enter a title and content."
        );

        return;

    }


    const research =
        getResearch();


    research.unshift({

        id: Date.now(),

        title: title,

        field: field,

        type: type,

        content: content,

        date:
            new Date()
                .toLocaleDateString()

    });


    localStorage.setItem(

        "advResearchV3",

        JSON.stringify(research)

    );


    clearEditor();

    renderResearch();


    alert(
        "Research saved locally."
    );

}



/* ================= CLEAR ================= */


function clearEditor() {

    document.getElementById(
        "researchTitle"
    ).value = "";


    document.getElementById(
        "researchContent"
    ).value = "";

}



/* ================= RENDER RESEARCH ================= */


function renderResearch() {

    const data =
        getResearch();


    const list =
        document.getElementById(
            "researchList"
        );


    const featured =
        document.getElementById(
            "featuredResearch"
        );


    if (!data.length) {

        const empty = `

            <div class="research-item">

                <h3>
                    No research yet
                </h3>

                <div class="research-meta">

                    Your notes and conjectures
                    will appear here.

                </div>

            </div>

        `;


        if (list) {

            list.innerHTML = empty;

        }


        if (featured) {

            featured.innerHTML = empty;

        }


        return;

    }



    const html =
        data.map(
            research => `

                <article
                    class="research-item"
                >

                    <h3>

                        ${escapeHTML(
                            research.title
                        )}

                    </h3>


                    <div
                        class="research-meta"
                    >

                        ${escapeHTML(
                            research.type
                        )}

                        •

                        ${escapeHTML(
                            research.field
                        )}

                        •

                        ${escapeHTML(
                            research.date
                        )}

                    </div>


                    <div
                        class="research-body"
                    >

                        ${escapeHTML(
                            research.content
                        )}

                    </div>

                </article>

            `
        )
        .join("");


    if (list) {

        list.innerHTML = html;

    }



    if (featured) {

        featured.innerHTML =
            data
                .slice(0, 3)
                .map(
                    research => `

                        <article
                            class="research-item"
                        >

                            <h3>

                                ${escapeHTML(
                                    research.title
                                )}

                            </h3>


                            <div
                                class="research-meta"
                            >

                                ${escapeHTML(
                                    research.type
                                )}

                                •

                                ${escapeHTML(
                                    research.field
                                )}

                            </div>


                            <div
                                class="research-body"
                            >

                                ${escapeHTML(
                                    research.content
                                        .slice(0, 280)
                                )}

                                ${
                                    research.content
                                        .length > 280
                                        ? "…"
                                        : ""
                                }

                            </div>

                        </article>

                    `
                )
                .join("");

    }

}



/* ================= START APP ================= */


document.addEventListener(
    "DOMContentLoaded",
    () => {

        renderCourseCards();

        renderResearch();

    }
);
