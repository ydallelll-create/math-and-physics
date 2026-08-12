/* =====================================================
ADV RESEARCH — V3
GitHub-only version
===================================================== */

/* =====================================================
PAGE SYSTEM
===================================================== */

function showPage(pageId) {

```
document.querySelectorAll(".page").forEach(page => {
    page.classList.remove("active");
});

const page = document.getElementById(pageId);

if (!page) {
    console.error("Page not found:", pageId);
    return;
}

page.classList.add("active");

window.scrollTo({
    top: 0,
    behavior: "smooth"
});

typesetMath();
```

}

/* =====================================================
MATHJAX
===================================================== */

function typesetMath() {

```
if (
    window.MathJax &&
    typeof MathJax.typesetPromise === "function"
) {
    MathJax.typesetPromise();
}
```

}

/* =====================================================
CHAPTER SYSTEM
===================================================== */

function openChapter(chapter) {

```
if (chapter === "calculus") {
    showPage("calculus");
    return;
}

showPage(chapter);
```

}

/* =====================================================
CALCULUS TOPICS
===================================================== */

const calculusTopics = {

```
foundations: {

    title: "FOUNDATIONS OF CALCULUS",

    description:
        "Before learning techniques, we investigate why calculus was created and what mathematical problems force its development.",

    sections: [

        {
            title: "01 — THE PROBLEMS THAT CREATED CALCULUS",

            text: `
                <p>
                Calculus did not begin as a collection of derivative
                and integral formulas. Its origins are connected to
                difficult geometric and physical problems.
                </p>

                <p>
                Two fundamental questions appear repeatedly:
                How can we determine the instantaneous rate of change
                of something that is moving? And how can we determine
                an accumulated quantity from infinitely many small pieces?
                </p>

                <p>
                The first question leads toward differentiation.
                The second leads toward integration.
                </p>
            `
        },

        {
            title: "02 — FINITE TO INFINITE",

            text: `
                <p>
                A major conceptual transition in calculus is the passage
                from finite processes to limiting processes.
                </p>

                <p>
                We may approximate a complicated quantity by simpler
                quantities and then investigate what happens when the
                approximation becomes arbitrarily fine.
                </p>

                <div class="math-block">
                $$
                x_1,\;x_2,\;x_3,\ldots
                $$
                </div>

                <p>
                This simple idea eventually leads to limits,
                convergence, derivatives, integrals and infinite series.
                </p>
            `
        }

    ]
},


limits: {

    title: "LIMITS",

    description:
        "The limit is the central mechanism allowing calculus to reason rigorously about processes that approach a value.",

    sections: [

        {
            title: "01 — THE INTUITIVE IDEA",

            text: `
                <p>
                Suppose a function depends on a variable $x$.
                We may ask what happens to the function when $x$
                gets closer and closer to a particular value $a$.
                </p>

                <div class="math-block">
                $$
                \lim_{x\\to a} f(x)
                $$
                </div>

                <p>
                The important point is that the question concerns
                the behavior near $a$, not necessarily the value
                exactly at $a$.
                </p>
            `
        },

        {
            title: "02 — THE ε–δ IDEA",

            text: `
                <p>
                Intuition is useful, but mathematics eventually needs
                a precise definition.
                </p>

                <p>
                We say that $f(x)$ approaches $L$ as $x$ approaches $a$
                when every desired accuracy around $L$ can be achieved
                by taking $x$ sufficiently close to $a$.
                </p>

                <div class="math-block">
                $$
                \\forall \\varepsilon>0,
                \\;\\exists\\delta>0
                $$
                </div>

                <p>
                The relationship between $\\varepsilon$ and $\\delta$
                is the foundation of rigorous analysis.
                </p>
            `
        },

        {
            title: "03 — WHY THIS MATTERS",

            text: `
                <p>
                The limit concept is not merely a technical definition.
                It allows us to define instantaneous change,
                continuity and infinite accumulation without
                pretending that infinitely small quantities are ordinary
                real numbers.
                </p>
            `
        }

    ]
},


differentiation: {

    title: "DIFFERENTIATION",

    description:
        "The derivative is constructed from the tangent problem, rather than simply introduced as a formula.",

    sections: [

        {
            title: "01 — THE TANGENT PROBLEM",

            text: `
                <p>
                Consider a curve $y=f(x)$ and a point
                $P=(a,f(a))$.
                </p>

                <p>
                A line through two points on the curve is a secant.
                Its slope measures an average rate of change.
                </p>

                <div class="math-block">
                $$
                \\frac{f(a+h)-f(a)}{h}
                $$
                </div>

                <p>
                But what if we want the rate of change at exactly one
                point? We move the second point toward the first.
                </p>
            `
        },

        {
            title: "02 — FROM SECANT TO TANGENT",

            text: `
                <p>
                Let $h$ become smaller and smaller.
                The second point approaches the first.
                </p>

                <p>
                The secant slope approaches a limiting value.
                That limiting value becomes the tangent slope.
                </p>

                <div class="math-block">
                $$
                f'(a)
                =
                \\lim_{h\\to0}
                \\frac{f(a+h)-f(a)}{h}
                $$
                </div>

                <p>
                This is the derivative from first principles.
                </p>
            `
        },

        {
            title: "03 — DIFFERENTIABILITY",

            text: `
                <p>
                A function is differentiable at $a$ when the
                difference quotient above has a finite limit.
                </p>

                <p>
                Differentiability is stronger than continuity.
                A function can be continuous at a point without
                being differentiable there.
                </p>

                <div class="proof-box">

                <strong>Important theorem</strong>

                <p>
                If $f$ is differentiable at $a$, then $f$ is continuous
                at $a$.
                </p>

                </div>
            `
        },

        {
            title: "04 — PRODUCT RULE",

            text: `
                <p>
                Instead of memorizing the product rule, we can derive it
                directly from the definition of the derivative.
                </p>

                <div class="math-block">
                $$
                (fg)'(x)=f'(x)g(x)+f(x)g'(x)
                $$
                </div>

                <p>
                The derivation begins by writing the difference quotient
                of $f(x)g(x)$ and adding and subtracting a carefully
                chosen term.
                </p>
            `
        },

        {
            title: "05 — CHAIN RULE",

            text: `
                <p>
                The chain rule describes how rates of change propagate
                through a composition of functions.
                </p>

                <p>
                Suppose
                $$
                y=f(g(x)).
                $$
                A small change in $x$ first changes $g(x)$,
                which then changes $f$.
                </p>

                <div class="math-block">
                $$
                \\frac{dy}{dx}
                =
                f'(g(x))g'(x)
                $$
                </div>

                <p>
                In the complete chapter, we will derive this from
                the definition of the derivative rather than treating
                it as a formula to memorize.
                </p>
            `
        },

        {
            title: "06 — MEAN VALUE THEOREM",

            text: `
                <p>
                The Mean Value Theorem connects local information
                about derivatives with global information about a
                function over an interval.
                </p>

                <div class="math-block">
                $$
                f'(c)
                =
                \\frac{f(b)-f(a)}{b-a}
                $$
                </div>

                <p>
                for some $c$ between $a$ and $b$, under the appropriate
                hypotheses.
                </p>
            `
        },

        {
            title: "07 — YOUR DERIVATIONS",

            text: `
                <p>
                This section is reserved for original derivations
                developed inside ADV RESEARCH.
                </p>

                <p>
                Instead of merely storing known formulas, this space
                will allow you to record your own route toward a result,
                compare it with the standard proof and develop it further.
                </p>

                <div class="proof-box">
                <strong>Research space</strong>
                <p>
                Add your own derivation from the Research Laboratory.
                </p>
                </div>
            `
        },

        {
            title: "08 — YOUR CONJECTURES",

            text: `
                <p>
                A conjecture is a mathematical statement proposed
                because evidence or reasoning suggests that it may be true,
                but which has not yet been established by proof.
                </p>

                <p>
                This section will eventually contain your own conjectures
                and the arguments, examples and counterexamples surrounding
                them.
                </p>
            `
        }

    ]
},


integration: {

    title: "INTEGRATION",

    description:
        "Integration begins with accumulation and the problem of reconstructing a whole quantity from infinitely many contributions.",

    sections: [

        {
            title: "01 — THE AREA PROBLEM",

            text: `
                <p>
                How can we calculate the area under a curve when
                the boundary is not a simple geometric shape?
                </p>

                <p>
                We approximate the region using many simple rectangles.
                As the rectangles become thinner, the approximation
                approaches the true area.
                </p>
            `
        },

        {
            title: "02 — RIEMANN SUMS",

            text: `
                <p>
                Partition an interval into smaller pieces and choose
                a representative point in each piece.
                </p>

                <div class="math-block">
                $$
                \\sum_{k=1}^{n}
                f(x_k^*)\\Delta x
                $$
                </div>

                <p>
                The integral emerges when the mesh of the partition
                tends toward zero.
                </p>
            `
        },

        {
            title: "03 — THE FUNDAMENTAL CONNECTION",

            text: `
                <p>
                One of the deepest results in elementary calculus is
                that differentiation and integration are essentially
                inverse processes under suitable conditions.
                </p>

                <div class="math-block">
                $$
                \\frac{d}{dx}
                \\int_a^x f(t)\\,dt
                =
                f(x)
                $$
                </div>
            `
        }

    ]
},


sequences: {

    title: "SEQUENCES",

    description:
        "Sequences provide one of the fundamental rigorous ways of studying infinite processes.",

    sections: [

        {
            title: "01 — CONVERGENCE",

            text: `
                <p>
                A sequence is an ordered collection
                $a_1,a_2,a_3,\\ldots$.
                </p>

                <p>
                We investigate whether the terms approach a definite
                real number as the index becomes arbitrarily large.
                </p>

                <div class="math-block">
                $$
                \\lim_{n\\to\\infty}a_n=L
                $$
                </div>
            `
        },

        {
            title: "02 — CAUCHY SEQUENCES",

            text: `
                <p>
                Instead of asking whether the sequence approaches
                a known number, we can ask whether its terms eventually
                become arbitrarily close to one another.
                </p>

                <p>
                This leads to the concept of a Cauchy sequence and,
                ultimately, to the completeness of the real numbers.
                </p>
            `
        }

    ]
},


series: {

    title: "INFINITE SERIES",

    description:
        "Infinite series study the convergence of accumulated terms and lead naturally to power series, Taylor expansions and Fourier analysis.",

    sections: [

        {
            title: "01 — PARTIAL SUMS",

            text: `
                <p>
                An infinite series is studied through its finite partial sums.
                </p>

                <div class="math-block">
                $$
                S_n=\\sum_{k=1}^{n}a_k
                $$
                </div>

                <p>
                The infinite series converges when the sequence of
                partial sums converges.
                </p>
            `
        },

        {
            title: "02 — POWER SERIES",

            text: `
                <p>
                Power series allow functions to be represented through
                infinite polynomial-like expansions.
                </p>

                <div class="math-block">
                $$
                \\sum_{n=0}^{\\infty}a_n(x-c)^n
                $$
                </div>

                <p>
                Their convergence behavior introduces the concepts
                of radius and interval of convergence.
                </p>
            `
        }

    ]
},


multivariable: {

    title: "MULTIVARIABLE CALCULUS",

    description:
        "Calculus extends naturally from one variable to functions defined on multidimensional spaces.",

    sections: [

        {
            title: "01 — FUNCTIONS OF SEVERAL VARIABLES",

            text: `
                <p>
                Instead of a function mapping one real variable to one
                real value, we can study maps such as
                $f:\\mathbb{R}^n\\to\\mathbb{R}$.
                </p>

                <div class="math-block">
                $$
                f(x,y,z)
                $$
                </div>
            `
        },

        {
            title: "02 — THE GRADIENT",

            text: `
                <p>
                The gradient collects the partial derivatives of a scalar
                field and points in the direction of greatest increase.
                </p>

                <div class="math-block">
                $$
                \\nabla f
                =
                \\left(
                \\frac{\\partial f}{\\partial x},
                \\frac{\\partial f}{\\partial y},
                \\frac{\\partial f}{\\partial z}
                \\right)
                $$
                </div>
            `
        }

    ]
},


vector: {

    title: "VECTOR CALCULUS",

    description:
        "Vector calculus studies differentiation and integration of vector fields and provides the mathematical language behind many physical theories.",

    sections: [

        {
            title: "01 — VECTOR FIELDS",

            text: `
                <p>
                A vector field assigns a vector to every point in a region.
                </p>

                <div class="math-block">
                $$
                \\mathbf{F}:\\mathbb{R}^3\\to\\mathbb{R}^3
                $$
                </div>

                <p>
                Vector fields are central in electromagnetism,
                fluid mechanics and classical field theory.
                </p>
            `
        },

        {
            title: "02 — DIVERGENCE AND CURL",

            text: `
                <p>
                Divergence measures the local tendency of a vector field
                to behave like a source or sink.
                </p>

                <p>
                Curl measures local rotational behavior.
                </p>

                <div class="math-block">
                $$
                \\nabla\\cdot\\mathbf{F}
                \\qquad
                \\nabla\\times\\mathbf{F}
                $$
                </div>
            `
        }

    ]
}
```

};

/* =====================================================
OPEN CALCULUS TOPIC
===================================================== */

function openTopic(topicId) {

```
const topic = calculusTopics[topicId];

if (!topic) {
    console.error("Topic not found:", topicId);
    return;
}

let html = `
    <div class="topic-header">

        <h1>${topic.title}</h1>

        <p>
            ${topic.description}
        </p>

    </div>

    <div class="topic-navigation">
`;

topic.sections.forEach((section, index) => {

    html += `
        <button
            onclick="scrollToSection('topic-section-${index}')">
            ${section.title.split("—")[0].trim()}
        </button>
    `;

});

html += `</div>`;

topic.sections.forEach((section, index) => {

    html += `
        <article
            id="topic-section-${index}"
            class="content-section">

            <h2>${section.title}</h2>

            ${section.text}

        </article>
    `;

});

document.getElementById("topicContent").innerHTML = html;

showPage("topicViewer");

setTimeout(typesetMath, 100);
```

}

function scrollToSection(id) {

```
const element = document.getElementById(id);

if (element) {
    element.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}
```

}

/* =====================================================
PHYSICS
===================================================== */

function showPhysicsTopic(topic) {

```
const content = {

    classical: `
        <div class="topic-header">
            <h1>CLASSICAL MECHANICS</h1>
            <p>
                From Newton's laws to Lagrangian and Hamiltonian mechanics.
            </p>
        </div>

        <div class="content-section">
            <h2>THE STRUCTURE</h2>

            <p>
                Classical mechanics can be formulated in several mathematically
                equivalent ways. Newton's formulation emphasizes forces,
                while Lagrangian mechanics emphasizes generalized coordinates
                and variational principles.
            </p>

            <div class="math-block">
                $$
                \\frac{d}{dt}
                \\left(
                \\frac{\\partial L}{\\partial \\dot q_i}
                \\right)
                -
                \\frac{\\partial L}{\\partial q_i}
                =0
                $$
            </div>

            <p>
                Later, Hamiltonian mechanics reformulates the dynamics
                in phase space and provides the foundation for several
                areas of modern theoretical physics.
            </p>
        </div>
    `,

    quantum: `
        <div class="topic-header">
            <h1>QUANTUM MECHANICS</h1>
            <p>
                The mathematical framework describing quantum states,
                observables and dynamics.
            </p>
        </div>

        <div class="content-section">
            <h2>FOUNDATIONS</h2>

            <p>
                Quantum mechanics replaces classical state descriptions
                with states represented mathematically in Hilbert spaces.
            </p>

            <div class="math-block">
                $$
                i\\hbar
                \\frac{\\partial}{\\partial t}
                |\\psi(t)\\rangle
                =
                \\hat H|\\psi(t)\\rangle
                $$
            </div>
        </div>
    `,

    relativity: `
        <div class="topic-header">
            <h1>RELATIVITY</h1>
            <p>
                Spacetime, Lorentz transformations and relativistic dynamics.
            </p>
        </div>

        <div class="content-section">
            <h2>SPACETIME</h2>

            <p>
                Special relativity replaces the independent Newtonian
                concepts of absolute space and absolute time with
                spacetime geometry.
            </p>

            <div class="math-block">
                $$
                ds^2
                =
                -c^2dt^2+dx^2+dy^2+dz^2
                $$
            </div>
        </div>
    `
};

document.getElementById("physicsContent").innerHTML =
    content[topic] || "<p>Topic not found.</p>";

showPage("physicsViewer");

setTimeout(typesetMath, 100);
```

}

/* =====================================================
RESEARCH LABORATORY
===================================================== */

function openResearchTool(type) {

```
const editor = document.getElementById("researchEditor");

let title = "";

if (type === "derivation") {
    title = "NEW DERIVATION";
}

if (type === "conjecture") {
    title = "NEW CONJECTURE";
}

if (type === "note") {
    title = "NEW NOTE";
}

editor.innerHTML = `

    <div class="research-editor">

        <h2>${title}</h2>

        <input
            id="researchTitle"
            placeholder="Title..."
        >

        <textarea
            id="researchBody"
            placeholder="Develop your idea here...
```

You can write mathematics using LaTeX.

Example:

$$
\frac{d}{dt}
\left(
\frac{\partial L}{\partial \dot q_i}
\right)
-------

\frac{\partial L}{\partial q_i}
=0
$$
"></textarea>

```
        <button onclick="saveResearch('${type}')">
            SAVE
        </button>

        <div id="savedResearch"></div>

    </div>
`;
```

}

function saveResearch(type) {

```
const title =
    document.getElementById("researchTitle").value.trim();

const body =
    document.getElementById("researchBody").value.trim();

if (!title || !body) {
    alert("Please enter a title and content.");
    return;
}

const research = {
    id: Date.now(),
    type: type,
    title: title,
    body: body,
    date: new Date().toLocaleDateString()
};

const existing =
    JSON.parse(
        localStorage.getItem("advResearch")
    ) || [];

existing.push(research);

localStorage.setItem(
    "advResearch",
    JSON.stringify(existing)
);

displayResearch();

document.getElementById("researchTitle").value = "";
document.getElementById("researchBody").value = "";

alert("Research saved locally.");
```

}

function displayResearch() {

```
const container =
    document.getElementById("savedResearch");

if (!container) {
    return;
}

const research =
    JSON.parse(
        localStorage.getItem("advResearch")
    ) || [];

if (research.length === 0) {
    container.innerHTML =
        "<p style='color:#666;margin-top:20px;'>No research saved yet.</p>";
    return;
}

container.innerHTML = research
    .slice()
    .reverse()
    .map(item => `

        <div class="saved-item">

            <h3>${escapeHTML(item.title)}</h3>

            <small>
                ${escapeHTML(item.type)}
                •
                ${escapeHTML(item.date)}
            </small>

            <p>
                ${escapeHTML(item.body)}
            </p>

        </div>

    `)
    .join("");
```

}

/* =====================================================
SECURITY FOR LOCAL RESEARCH DISPLAY
===================================================== */

function escapeHTML(text) {

```
return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
```

}

/* =====================================================
INITIALIZATION
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

```
showPage("home");
```

});
