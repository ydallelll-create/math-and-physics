// ============================================
// ADV RESEARCH V2
// ============================================

let currentSection = "home";
let previousSection = "home";

let researchProjects =
    JSON.parse(
        localStorage.getItem("ADV_RESEARCH_PROJECTS") || "[]"
    );

let currentResearchId = null;


// ============================================
// NAVIGATION
// ============================================

function showScreen(id) {

    document
        .querySelectorAll(".screen")
        .forEach(function(screen) {

            screen.classList.remove("active");

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
}


function openSection(section) {

    previousSection =
        currentSection;

    currentSection =
        section;

    showScreen(section);

    if (section === "research") {

        showSavedResearch();

    }
}


function goHome() {

    previousSection =
        currentSection;

    currentSection =
        "home";

    showScreen("home");

}


function goBackFromTool() {

    showScreen(previousSection);

    currentSection =
        previousSection;
}


// ============================================
// TOOL DATABASE
// ============================================

const toolData = {

    "Calculus": {

        category: "MATHEMATICS / ANALYSIS",

        symbol: "∫",

        description:
            "The mathematical study of change, accumulation and infinite processes.",

        boxes: [

            [
                "Limits",
                "Study limiting behaviour and continuity.",
                "$$\\lim_{x\\to a}f(x)$$"
            ],

            [
                "Derivatives",
                "Study rates of change and tangent behaviour.",
                "$$f'(x)=\\lim_{h\\to0}\\frac{f(x+h)-f(x)}{h}$$"
            ],

            [
                "Integrals",
                "Study accumulation and areas.",
                "$$\\int_a^b f(x)\\,dx$$"
            ]

        ]

    },


    "Real Analysis": {

        category: "MATHEMATICS / ANALYSIS",

        symbol: "ℝ",

        description:
            "Rigorous analysis of real-valued functions and sequences.",

        boxes: [

            [
                "Sequences",
                "Convergence, boundedness and subsequences.",
                "$$a_n\\to L$$"
            ],

            [
                "Continuity",
                "Rigorous study of continuous functions.",
                "$$\\lim_{x\\to a}f(x)=f(a)$$"
            ],

            [
                "Convergence",
                "Study convergence of sequences and series.",
                "$$\\sum_{n=1}^{\\infty}a_n$$"
            ]

        ]

    },


    "Complex Analysis": {

        category: "MATHEMATICS / ANALYSIS",

        symbol: "ℂ",

        description:
            "The theory of functions of a complex variable.",

        boxes: [

            [
                "Holomorphic Functions",
                "Study complex differentiability and analytic functions.",
                "$$f'(z)=\\lim_{h\\to0}\\frac{f(z+h)-f(z)}{h}$$"
            ],

            [
                "Contour Integrals",
                "Integrate complex functions along paths.",
                "$$\\int_\\gamma f(z)\\,dz$$"
            ],

            [
                "Residues",
                "Use isolated singularities and residues.",
                "$$\\operatorname{Res}(f,z_0)$$"
            ]

        ]

    },


    "Topology": {

        category: "MATHEMATICS / PURE MATHEMATICS",

        symbol: "T",

        description:
            "The study of spaces, continuity and properties preserved by deformation.",

        boxes: [

            [
                "Open Sets",
                "Study neighbourhoods and open subsets.",
                "$$U\\subseteq X$$"
            ],

            [
                "Closed Sets",
                "Study closed subsets and limit points.",
                "$$\\overline{A}=A$$"
            ],

            [
                "Continuity",
                "Study continuous mappings between spaces.",
                "$$f:X\\to Y$$"
            ]

        ]

    },


    "Vector Calculus": {

        category: "MATHEMATICS / CALCULUS",

        symbol: "∇",

        description:
            "Calculus of scalar and vector fields.",

        boxes: [

            [
                "Gradient",
                "Direction of greatest increase.",
                "$$\\nabla f$$"
            ],

            [
                "Divergence",
                "Measure of local field expansion.",
                "$$\\nabla\\cdot\\mathbf F$$"
            ],

            [
                "Curl",
                "Measure of local rotation.",
                "$$\\nabla\\times\\mathbf F$$"
            ]

        ]

    },


    "Linear Algebra": {

        category: "MATHEMATICS / ALGEBRA",

        symbol: "A",

        description:
            "Vector spaces, linear transformations and operators.",

        boxes: [

            [
                "Vector Spaces",
                "Study vectors, bases and subspaces.",
                "$$V\\text{ over }\\mathbb R$$"
            ],

            [
                "Matrices",
                "Study matrix transformations and operations.",
                "$$AB$$"
            ],

            [
                "Eigenvalues",
                "Study eigenvectors and invariant directions.",
                "$$A\\mathbf v=\\lambda\\mathbf v$$"
            ]

        ]

    },


    "Sequences & Series": {

        category: "MATHEMATICS / ANALYSIS",

        symbol: "Σ",

        description:
            "Infinite sequences, sums and convergence.",

        boxes: [

            [
                "Sequences",
                "Study ordered infinite collections.",
                "$$a_1,a_2,a_3,\\ldots$$"
            ],

            [
                "Series",
                "Study infinite sums.",
                "$$\\sum_{n=1}^{\\infty}a_n$$"
            ],

            [
                "Power Series",
                "Study expansions around a point.",
                "$$\\sum_{n=0}^{\\infty}a_n(x-x_0)^n$$"
            ]

        ]

    },


    "Differential Equations": {

        category: "MATHEMATICS / ANALYSIS",

        symbol: "∂",

        description:
            "Equations involving unknown functions and their derivatives.",

        boxes: [

            [
                "ODE",
                "Ordinary differential equations.",
                "$$y'=f(x,y)$$"
            ],

            [
                "PDE",
                "Partial differential equations.",
                "$$\\frac{\\partial u}{\\partial t}$$"
            ],

            [
                "Wave Equation",
                "A fundamental equation of mathematical physics.",
                "$$\\frac{\\partial^2u}{\\partial t^2}=c^2\\nabla^2u$$"
            ]

        ]

    },


    "Classical Mechanics": {

        category: "PHYSICS / MECHANICS",

        symbol: "F",

        description:
            "The mathematical description of motion and forces.",

        boxes: [

            [
                "Newtonian Mechanics",
                "Forces and equations of motion.",
                "$$\\mathbf F=m\\mathbf a$$"
            ],

            [
                "Momentum",
                "Linear momentum and conservation.",
                "$$\\mathbf p=m\\mathbf v$$"
            ],

            [
                "Dynamics",
                "Motion under applied forces.",
                "$$\\mathbf F=\\frac{d\\mathbf p}{dt}$$"
            ]

        ]

    },


    "Lagrangian Mechanics": {

        category: "PHYSICS / CLASSICAL MECHANICS",

        symbol: "L",

        description:
            "A formulation of mechanics based on the Lagrangian and stationary action.",

        boxes: [

            [
                "Lagrangian",
                "Difference between kinetic and potential energy.",
                "$$L=T-V$$"
            ],

            [
                "Euler-Lagrange",
                "Equations governing generalized coordinates.",
                "$$\\frac{d}{dt}\\left(\\frac{\\partial L}{\\partial\\dot q_i}\\right)-\\frac{\\partial L}{\\partial q_i}=0$$"
            ],

            [
                "Action",
                "The principle of stationary action.",
                "$$S=\\int L\\,dt$$"
            ]

        ]

    },


    "Hamiltonian Mechanics": {

        category: "PHYSICS / CLASSICAL MECHANICS",

        symbol: "H",

        description:
            "Hamiltonian formulation using phase-space variables.",

        boxes: [

            [
                "Hamiltonian",
                "Energy function in phase space.",
                "$$H=\\sum_i p_i\\dot q_i-L$$"
            ],

            [
                "Hamilton Equations",
                "Canonical equations of motion.",
                "$$\\dot q_i=\\frac{\\partial H}{\\partial p_i}$$"
            ],

            [
                "Phase Space",
                "State of a system in position-momentum space.",
                "$$(q_i,p_i)$$"
            ]

        ]

    },


    "Quantum Mechanics": {

        category: "PHYSICS / QUANTUM THEORY",

        symbol: "ψ",

        description:
            "The mathematical framework describing quantum systems.",

        boxes: [

            [
                "Schrödinger Equation",
                "Time evolution of a quantum state.",
                "$$i\\hbar\\frac{\\partial\\psi}{\\partial t}=\\hat H\\psi$$"
            ],

            [
                "Operators",
                "Observables represented by operators.",
                "$$\\hat A\\psi=a\\psi$$"
            ],

            [
                "Hilbert Spaces",
                "The vector-space structure of quantum states.",
                "$$\\langle\\phi|\\psi\\rangle$$"
            ]

        ]

    },


    "Relativity": {

        category: "PHYSICS / RELATIVITY",

        symbol: "c",

        description:
            "Spacetime, Lorentz symmetry and relativistic physics.",

        boxes: [

            [
                "Spacetime",
                "Events represented in four-dimensional spacetime.",
                "$$x^\\mu=(ct,x,y,z)$$"
            ],

            [
                "Lorentz Transformations",
                "Transform coordinates between inertial frames.",
                "$$x'^\\mu=\\Lambda^\\mu_{\\ \\nu}x^\\nu$$"
            ],

            [
                "Energy-Momentum",
                "Relativistic energy and momentum.",
                "$$E^2=p^2c^2+m^2c^4$$"
            ]

        ]

    },


    "Mathematical Physics": {

        category: "PHYSICS / MATHEMATICAL PHYSICS",

        symbol: "∂",

        description:
            "Mathematical structures used to formulate physical theories.",

        boxes: [

            [
                "Differential Equations",
                "Equations describing physical systems.",
                "$$\\mathcal L[u]=0$$"
            ],

            [
                "Fourier Analysis",
                "Represent functions using frequencies.",
                "$$f(x)=\\sum_n c_ne^{inx}$$"
            ],

            [
                "Operators",
                "Linear operators used throughout physics.",
                "$$A:V\\to V$$"
            ]

        ]

    },


    "Field Theory": {

        category: "PHYSICS / THEORETICAL PHYSICS",

        symbol: "Ω",

        description:
            "Fields, actions, symmetries and fundamental interactions.",

        boxes: [

            [
                "Fields",
                "Functions assigning physical quantities to spacetime.",
                "$$\\phi(x)$$"
            ],

            [
                "Action",
                "Dynamics derived from an action principle.",
                "$$S=\\int\\mathcal L\\,d^4x$$"
            ],

            [
                "Symmetry",
                "Symmetries and conserved quantities.",
                "$$\\delta S=0$$"
            ]

        ]

    },


    "Statistical Physics": {

        category: "PHYSICS / STATISTICAL MECHANICS",

        symbol: "Z",

        description:
            "Microscopic states, probability and macroscopic physics.",

        boxes: [

            [
                "Partition Function",
                "Central quantity of statistical mechanics.",
                "$$Z=\\sum_i e^{-\\beta E_i}$$"
            ],

            [
                "Entropy",
                "Measure associated with microscopic states.",
                "$$S=k_B\\ln\\Omega$$"
            ],

            [
                "Ensembles",
                "Statistical descriptions of physical systems.",
                "$$\\langle A\\rangle$$"
            ]

        ]

    }

};


// ============================================
// OPEN TOOL
// ============================================

function openTool(name) {

    const data =
        toolData[name];

    if (!data) {

        return;

    }

    previousSection =
        currentSection;

    currentSection =
        "tool";

    document
        .getElementById("tool-symbol")
        .textContent =
            data.symbol;

    document
        .getElementById("tool-category")
        .textContent =
            data.category;

    document
        .getElementById("tool-title")
        .textContent =
            name;

    document
        .getElementById("tool-description")
        .textContent =
            data.description;


    const content =
        document.getElementById(
            "tool-content"
        );

    content.innerHTML = "";


    data.boxes.forEach(function(box) {

        const div =
            document.createElement("div");

        div.className =
            "tool-box";

        div.innerHTML = `
            <h3>${box[0]}</h3>

            <p>
                ${box[1]}
            </p>

            <div class="formula">
                ${box[2]}
            </div>
        `;

        content.appendChild(div);

    });


    showScreen("tool");


    if (window.MathJax) {

        MathJax.typesetPromise([
            content
        ]);

    }

}


// ============================================
// RESEARCH
// ============================================

function newResearch() {

    currentResearchId =
        null;

    document
        .getElementById(
            "research-title"
        )
        .value = "";

    document
        .getElementById(
            "research-content"
        )
        .value = "";

    document
        .getElementById(
            "research-field-display"
        )
        .textContent =
            "General Research";

    document
        .getElementById(
            "research-date"
        )
        .textContent =
            new Date().toLocaleDateString();


    updatePreview();

    showScreen("editor");

}


function closeEditor() {

    showScreen("research");

    currentSection =
        "research";

    showSavedResearch();

}


function saveResearch() {

    const title =
        document
            .getElementById(
                "research-title"
            )
            .value
            .trim();

    const content =
        document
            .getElementById(
                "research-content"
            )
            .value;


    if (!title) {

        alert(
            "Please enter a research title."
        );

        return;

    }


    const now =
        new Date().toISOString();


    if (currentResearchId === null) {

        const project = {

            id: Date.now(),

            title: title,

            content: content,

            author:
                "Yassine Bechir Dallel",

            date: now

        };

        researchProjects.push(project);

        currentResearchId =
            project.id;

    } else {

        const project =
            researchProjects.find(
                item =>
                    item.id ===
                    currentResearchId
            );

        if (project) {

            project.title =
                title;

            project.content =
                content;

            project.date =
                now;

        }

    }


    localStorage.setItem(
        "ADV_RESEARCH_PROJECTS",
        JSON.stringify(
            researchProjects
        )
    );


    alert(
        "Research saved successfully."
    );


    showSavedResearch();

}


// ============================================
// SAVED RESEARCH
// ============================================

function showSavedResearch() {

    const area =
        document.getElementById(
            "research-area"
        );

    if (!area) {

        return;

    }


    area.innerHTML = "";


    if (
        researchProjects.length === 0
    ) {

        area.innerHTML = `
            <div class="saved-research">
                <h3>No research yet</h3>

                <p>
                    Your research projects
                    will appear here.
                </p>
            </div>
        `;

        return;

    }


    researchProjects
        .slice()
        .reverse()
        .forEach(function(project) {

            const div =
                document.createElement("div");

            div.className =
                "saved-research";

            const date =
                new Date(
                    project.date
                ).toLocaleDateString();

            div.innerHTML = `

                <h3>
                    ${escapeHTML(
                        project.title
                    )}
                </h3>

                <p>
                    Author:
                    ${escapeHTML(
                        project.author
                    )}
                </p>

                <p>
                    Date:
                    ${date}
                </p>

                <button
                    onclick="openResearch(
                        ${project.id}
                    )">

                    OPEN PROJECT

                </button>

                <button
                    onclick="deleteResearch(
                        ${project.id}
                    )">

                    DELETE

                </button>
            `;

            area.appendChild(div);

        });

}


function openResearch(id) {

    const project =
        researchProjects.find(
            item =>
                item.id === id
        );

    if (!project) {

        return;

    }


    currentResearchId =
        id;


    document
        .getElementById(
            "research-title"
        )
        .value =
            project.title;


    document
        .getElementById(
            "research-content"
        )
        .value =
            project.content;


    document
        .getElementById(
            "research-field-display"
        )
        .textContent =
            "Research";


    document
        .getElementById(
            "research-date"
        )
        .textContent =
            new Date(
                project.date
            ).toLocaleDateString();


    updatePreview();

    showScreen("editor");

}


function deleteResearch(id) {

    const confirmed =
        confirm(
            "Delete this research?"
        );

    if (!confirmed) {

        return;

    }


    researchProjects =
        researchProjects.filter(
            item =>
                item.id !== id
        );


    localStorage.setItem(
        "ADV_RESEARCH_PROJECTS",
        JSON.stringify(
            researchProjects
        )
    );


    showSavedResearch();

}


// ============================================
// PAPER TOOLS
// ============================================

function insertHeading() {

    insertAtCursor(
        "\n\n## Research Section\n\n"
    );

}


function insertBold() {

    insertAtCursor(
        "**bold text**"
    );

}


function insertEquation() {

    insertAtCursor(
        "\n\n$$\n\n\\boxed{}\n\n$$\n\n"
    );

}


function insertImage() {

    const url =
        prompt(
            "Enter the image URL:"
        );

    if (!url) {

        return;

    }


    insertAtCursor(
        `\n\n![Research Image](${url})\n\n`
    );

}


function insertVideo() {

    const url =
        prompt(
            "Enter the video URL:"
        );

    if (!url) {

        return;

    }


    insertAtCursor(
        `\n\n[Research Video](${url})\n\n`
    );

}


function insertAtCursor(text) {

    const textarea =
        document.getElementById(
            "research-content"
        );

    const start =
        textarea.selectionStart;

    const end =
        textarea.selectionEnd;


    textarea.value =
        textarea.value.substring(
            0,
            start
        ) +
        text +
        textarea.value.substring(
            end
        );


    textarea.focus();

    textarea.selectionStart =
        start + text.length;

    textarea.selectionEnd =
        start + text.length;


    updatePreview();

}


// ============================================
// PREVIEW
// ============================================

document.addEventListener(
    "input",
    function(event) {

        if (
            event.target.id ===
            "research-content"
        ) {

            updatePreview();

        }

    }
);


function updatePreview() {

    const content =
        document
            .getElementById(
                "research-content"
            )
            .value;


    const preview =
        document
            .getElementById(
                "research-preview"
            );


    let html =
        escapeHTML(content);


    html =
        html.replace(
            /^## (.*)$/gm,
            "<h2>$1</h2>"
        );


    html =
        html.replace(
            /\*\*(.*?)\*\*/g,
            "<strong>$1</strong>"
        );


    html =
        html.replace(
            /!\[.*?\]\((.*?)\)/g,
            '<img src="$1" alt="Research Image">'
        );


    html =
        html.replace(
            /\n/g,
            "<br>"
        );


    preview.innerHTML =
        html;


    if (window.MathJax) {

        MathJax.typesetPromise([
            preview
        ]);

    }

}


// ============================================
// SECURITY
// ============================================

function escapeHTML(text) {

    return String(text)

        .replace(
            /&/g,
            "&amp;"
        )

        .replace(
            /</g,
            "&lt;"
        )

        .replace(
            />/g,
            "&gt;"
        )

        .replace(
            /"/g,
            "&quot;"
        )

        .replace(
            /'/g,
            "&#039;"
        );

}


// ============================================
// START APP
// ============================================

document.addEventListener(
    "DOMContentLoaded",
    function() {

        showScreen("home");

    }
);
