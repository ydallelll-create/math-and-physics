const calculusCourse = {

    title: "CALCULUS",

    description: `
        A structured course exploring limits, differentiation,
        integration, infinite series and deeper foundations of calculus.
    `,

    chapters: [

        {
            title: "1. Foundations and Limits",

            content: `

                <h2>Foundations and Limits</h2>

                <p>
                    Calculus begins with the idea of understanding what
                    happens when a quantity approaches another quantity.
                    The fundamental object is the <strong>limit</strong>.
                </p>

                <h3>The intuitive idea</h3>

                <p>
                    We write:
                </p>

                <div class="math">
                    $$\\lim_{x \\to a} f(x)=L$$
                </div>

                <p>
                    This means that when <em>x</em> becomes arbitrarily
                    close to <em>a</em>, the values of <em>f(x)</em>
                    become arbitrarily close to <em>L</em>.
                </p>

                <h3>The formal definition</h3>

                <p>
                    The rigorous definition is:
                </p>

                <div class="math">
                    $$\\forall \\varepsilon>0,\\;
                    \\exists \\delta>0
                    \\text{ such that }
                    0<|x-a|<\\delta
                    \\Rightarrow
                    |f(x)-L|<\\varepsilon$$
                </div>

                <p>
                    This is the famous epsilon-delta definition.
                    It gives a precise mathematical meaning to the word
                    "approaches".
                </p>

            `
        },


        {
            title: "2. Continuity",

            content: `

                <h2>Continuity</h2>

                <p>
                    A function is continuous at a point when there is no
                    jump, hole or sudden break at that point.
                </p>

                <p>
                    More rigorously, a function <em>f</em> is continuous
                    at <em>a</em> if:
                </p>

                <div class="math">
                    $$\\lim_{x\\to a}f(x)=f(a)$$
                </div>

                <h3>The three conditions</h3>

                <ol>

                    <li>$f(a)$ exists.</li>

                    <li>
                        $\\lim_{x\\to a}f(x)$ exists.
                    </li>

                    <li>
                        $$\\lim_{x\\to a}f(x)=f(a)$$
                    </li>

                </ol>

                <p>
                    Continuity is one of the fundamental assumptions behind
                    many important theorems of calculus.
                </p>

            `
        },


        {
            title: "3. The Derivative from First Principles",

            content: `

                <h2>The Derivative from First Principles</h2>

                <p>
                    The derivative measures instantaneous change.
                </p>

                <p>
                    Start with the average rate of change:
                </p>

                <div class="math">
                    $$\\frac{f(x+h)-f(x)}{h}$$
                </div>

                <p>
                    This represents the slope of a secant line.
                </p>

                <p>
                    To obtain the instantaneous slope, we let
                    $h$ approach zero:
                </p>

                <div class="math">
                    $$\\boxed{
                    f'(x)=
                    \\lim_{h\\to0}
                    \\frac{f(x+h)-f(x)}{h}
                    }$$
                </div>

                <h3>Example: $f(x)=x^2$</h3>

                <div class="math">
                    $$
                    f'(x)
                    =
                    \\lim_{h\\to0}
                    \\frac{(x+h)^2-x^2}{h}
                    $$
                </div>

                <p>
                    Expanding:
                </p>

                <div class="math">
                    $$
                    (x+h)^2-x^2
                    =
                    2xh+h^2
                    $$
                </div>

                <p>
                    Therefore:
                </p>

                <div class="math">
                    $$
                    \\frac{2xh+h^2}{h}
                    =
                    2x+h
                    $$
                </div>

                <p>
                    Taking the limit:
                </p>

                <div class="math">
                    $$\\boxed{
                    \\frac{d}{dx}x^2=2x
                    }$$
                </div>

            `
        },


        {
            title: "4. The Power Rule",

            content: `

                <h2>The Power Rule</h2>

                <p>
                    The familiar formula
                </p>

                <div class="math">
                    $$\\frac{d}{dx}x^n=nx^{n-1}$$
                </div>

                <p>
                    is not simply a rule to memorize.
                    It can be derived from the definition of the derivative.
                </p>

                <div class="math">
                    $$
                    \\frac{d}{dx}x^n
                    =
                    \\lim_{h\\to0}
                    \\frac{(x+h)^n-x^n}{h}
                    $$
                </div>

                <p>
                    Using the binomial theorem:
                </p>

                <div class="math">
                    $$
                    (x+h)^n
                    =
                    x^n
                    +
                    nx^{n-1}h
                    +
                    \\binom n2x^{n-2}h^2
                    +
                    \\cdots
                    +
                    h^n
                    $$
                </div>

                <p>
                    After subtracting $x^n$ and dividing by $h$,
                    every term except the first contains a factor of $h$.
                </p>

                <p>
                    Therefore, as $h\\to0$:
                </p>

                <div class="math">
                    $$\\boxed{
                    \\frac{d}{dx}x^n
                    =
                    nx^{n-1}
                    }$$
                </div>

            `
        },


        {
            title: "5. Product and Chain Rules",

            content: `

                <h2>Product and Chain Rules</h2>

                <h3>Product Rule</h3>

                <p>
                    If:
                </p>

                <div class="math">
                    $$F(x)=f(x)g(x)$$
                </div>

                <p>
                    then:
                </p>

                <div class="math">
                    $$\\boxed{
                    (fg)'=f'g+fg'
                    }$$
                </div>

                <h3>Chain Rule</h3>

                <p>
                    Suppose:
                </p>

                <div class="math">
                    $$F(x)=f(g(x))$$
                </div>

                <p>
                    Then:
                </p>

                <div class="math">
                    $$\\boxed{
                    \\frac{d}{dx}f(g(x))
                    =
                    f'(g(x))g'(x)
                    }$$
                </div>

                <p>
                    The chain rule describes how a change propagates
                    through nested functions.
                </p>

                <p>
                    Example:
                </p>

                <div class="math">
                    $$f(x)=\\sin(x^2)$$
                </div>

                <p>
                    Therefore:
                </p>

                <div class="math">
                    $$f'(x)=2x\\cos(x^2)$$
                </div>

            `
        },


        {
            title: "6. The Riemann Integral",

            content: `

                <h2>The Riemann Integral</h2>

                <p>
                    Integration studies accumulation.
                    The Riemann integral is constructed by adding
                    infinitely many small contributions.
                </p>

                <p>
                    Divide an interval $[a,b]$ into small pieces.
                </p>

                <div class="math">
                    $$
                    a=x_0<x_1<\\cdots<x_n=b
                    $$
                </div>

                <p>
                    The corresponding Riemann sum is:
                </p>

                <div class="math">
                    $$
                    \\sum_{i=1}^{n}
                    f(x_i^*)\\Delta x_i
                    $$
                </div>

                <p>
                    The integral is defined as the limit:
                </p>

                <div class="math">
                    $$\\boxed{
                    \\int_a^b f(x)\\,dx
                    =
                    \\lim_{\\|P\\|\\to0}
                    \\sum_{i=1}^{n}
                    f(x_i^*)\\Delta x_i
                    }$$
                </div>

            `
        },


        {
            title: "7. Fundamental Theorem of Calculus",

            content: `

                <h2>Fundamental Theorem of Calculus</h2>

                <p>
                    One of the deepest discoveries in elementary calculus
                    is that differentiation and integration are connected.
                </p>

                <p>
                    Define:
                </p>

                <div class="math">
                    $$F(x)=\\int_a^x f(t)\\,dt$$
                </div>

                <p>
                    Then, under appropriate conditions:
                </p>

                <div class="math">
                    $$\\boxed{F'(x)=f(x)}$$
                </div>

                <p>
                    Conversely, if $F'(x)=f(x)$:
                </p>

                <div class="math">
                    $$\\boxed{
                    \\int_a^b f(x)\\,dx
                    =
                    F(b)-F(a)
                    }$$
                </div>

            `
        },


        {
            title: "8. Improper Integrals",

            content: `

                <h2>Improper Integrals</h2>

                <p>
                    An integral over an infinite interval is defined
                    through a limit.
                </p>

                <div class="math">
                    $$\\boxed{
                    \\int_a^\\infty f(x)\\,dx
                    =
                    \\lim_{R\\to\\infty}
                    \\int_a^R f(x)\\,dx
                    }$$
                </div>

                <h3>The p-integral</h3>

                <div class="math">
                    $$\\int_1^\\infty \\frac{1}{x^p}\\,dx$$
                </div>

                <p>
                    The fundamental result is:
                </p>

                <div class="math">
                    $$\\boxed{
                    \\int_1^\\infty
                    \\frac{dx}{x^p}
                    \\text{ converges if and only if }
                    p>1
                    }$$
                </div>

            `
        },


        {
            title: "9. Infinite Series",

            content: `

                <h2>Infinite Series</h2>

                <p>
                    An infinite series is defined using partial sums.
                </p>

                <div class="math">
                    $$\\boxed{
                    \\sum_{n=1}^{\\infty}a_n
                    =
                    \\lim_{N\\to\\infty}
                    \\sum_{n=1}^{N}a_n
                    }$$
                </div>

                <h3>A necessary condition</h3>

                <p>
                    If a series converges, then:
                </p>

                <div class="math">
                    $$\\boxed{
                    \\lim_{n\\to\\infty}a_n=0
                    }$$
                </div>

                <p>
                    But the converse is false.
                </p>

                <p>
                    The harmonic series:
                </p>

                <div class="math">
                    $$\\sum_{n=1}^{\\infty}\\frac1n$$
                </div>

                <p>
                    diverges even though:
                </p>

                <div class="math">
                    $$\\lim_{n\\to\\infty}\\frac1n=0$$
                </div>

            `
        },


        {
            title: "10. Taylor Series",

            content: `

                <h2>Taylor Series</h2>

                <p>
                    Taylor theory allows us to approximate, and sometimes
                    exactly represent, a function using polynomials.
                </p>

                <p>
                    Around the point $a$:
                </p>

                <div class="math">
                    $$\\boxed{
                    f(x)
                    =
                    \\sum_{n=0}^{\\infty}
                    \\frac{f^{(n)}(a)}{n!}
                    (x-a)^n
                    }$$
                </div>

                <h3>Maclaurin series for $e^x$</h3>

                <div class="math">
                    $$\\boxed{
                    e^x
                    =
                    1+x+
                    \\frac{x^2}{2!}
                    +
                    \\frac{x^3}{3!}
                    +
                    \\cdots
                    }$$
                </div>

                <h3>Maclaurin series for sine</h3>

                <div class="math">
                    $$\\boxed{
                    \\sin x
                    =
                    x-
                    \\frac{x^3}{3!}
                    +
                    \\frac{x^5}{5!}
                    -
                    \\cdots
                    }$$
                </div>

            `
        }

    ]

};
