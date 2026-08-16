window.MATH_COURSES = [

    {
        id: "calculus",

        field: "MATHEMATICS",

        title: "Calculus",

        description:
            "A deep course in limits, differentiation, integration, sequences and infinite series.",

        lessons: [

            {
                title: "The Architecture of Calculus",

                content: `

                    <h2>The Architecture of Calculus</h2>

                    <p>
                        Calculus is not simply a collection of formulas.
                        It is the mathematical language used to describe
                        <strong>change</strong>, <strong>accumulation</strong>,
                        and the relationship between them.
                    </p>

                    <h3>1. Two fundamental questions</h3>

                    <p>
                        Suppose a particle has position
                        $x(t)$.
                    </p>

                    <p>
                        One question is:
                    </p>

                    <div class="math-block">
                        $$\\text{How fast is the position changing?}$$
                    </div>

                    <p>
                        This leads to the derivative.
                    </p>

                    <p>
                        The second question is:
                    </p>

                    <div class="math-block">
                        $$\\text{How much has accumulated?}$$
                    </div>

                    <p>
                        This leads to the integral.
                    </p>

                    <h3>2. The fundamental connection</h3>

                    <p>
                        Differentiation and integration are, in a deep sense,
                        inverse operations.
                    </p>

                    <div class="math-block">
                        $$\\frac{d}{dx}
                        \\left(
                        \\int_a^x f(t)\\,dt
                        \\right)
                        =f(x)$$
                    </div>

                    <p>
                        This relationship is formalized by the
                        <strong>Fundamental Theorem of Calculus</strong>.
                    </p>

                    <p>
                        The entire subject can therefore be viewed as a study
                        of local change and global accumulation.
                    </p>

                `
            },


            {
                title: "Limits and the Birth of the Derivative",

                content: `

                    <h2>Limits and the Birth of the Derivative</h2>

                    <p>
                        The derivative does not begin with the formula
                        $f'(x)=nx^{n-1}$.
                        That formula is a consequence of a deeper definition.
                    </p>

                    <h3>1. Average rate of change</h3>

                    <p>
                        Consider a function $f(x)$ and two points
                        $x$ and $x+h$.
                    </p>

                    <div class="math-block">
                        $$\\frac{f(x+h)-f(x)}{h}$$
                    </div>

                    <p>
                        This is the slope of the secant line connecting
                        the two points.
                    </p>

                    <h3>2. Making the interval infinitesimally small</h3>

                    <p>
                        To obtain the instantaneous rate of change,
                        we make $h$ approach zero.
                    </p>

                    <div class="math-block">
                        $$f'(x)
                        =
                        \\lim_{h\\to0}
                        \\frac{f(x+h)-f(x)}{h}$$
                    </div>

                    <p>
                        Notice that we do <strong>not</strong> simply substitute
                        $h=0$.
                        Doing so would produce division by zero.
                    </p>

                    <p>
                        Instead, the limit asks what value the quotient
                        approaches as $h$ becomes arbitrarily small.
                    </p>

                    <h3>3. Example: $f(x)=x^2$</h3>

                    <div class="math-block">
                        $$
                        f'(x)
                        =
                        \\lim_{h\\to0}
                        \\frac{(x+h)^2-x^2}{h}
                        $$
                    </div>

                    <p>
                        Expand the numerator:
                    </p>

                    <div class="math-block">
                        $$
                        (x+h)^2-x^2
                        =
                        x^2+2xh+h^2-x^2
                        =
                        2xh+h^2
                        $$
                    </div>

                    <p>
                        Therefore:
                    </p>

                    <div class="math-block">
                        $$
                        \\frac{2xh+h^2}{h}
                        =
                        2x+h
                        $$
                    </div>

                    <p>
                        Now take the limit:
                    </p>

                    <div class="math-block">
                        $$
                        f'(x)
                        =
                        \\lim_{h\\to0}(2x+h)
                        =
                        2x
                        $$
                    </div>

                    <p>
                        Thus:
                    </p>

                    <div class="math-block">
                        $$\\boxed{\\frac{d}{dx}x^2=2x}$$
                    </div>

                `
            },


            {
                title: "Differentiation Rules from First Principles",

                content: `

                    <h2>Differentiation Rules from First Principles</h2>

                    <p>
                        Once the derivative is defined through a limit,
                        the familiar differentiation rules can be derived.
                    </p>

                    <h3>1. Constant functions</h3>

                    <p>
                        Let $f(x)=C$.
                    </p>

                    <div class="math-block">
                        $$
                        f'(x)
                        =
                        \\lim_{h\\to0}
                        \\frac{C-C}{h}
                        =0
                        $$
                    </div>

                    <p>
                        Therefore:
                    </p>

                    <div class="math-block">
                        $$\\boxed{\\frac{d}{dx}C=0}$$
                    </div>

                    <h3>2. Power functions</h3>

                    <p>
                        Let
                        $f(x)=x^n$,
                        where $n$ is a positive integer.
                    </p>

                    <div class="math-block">
                        $$
                        f'(x)
                        =
                        \\lim_{h\\to0}
                        \\frac{(x+h)^n-x^n}{h}
                        $$
                    </div>

                    <p>
                        By the binomial theorem:
                    </p>

                    <div class="math-block">
                        $$
                        (x+h)^n
                        =
                        x^n
                        +nx^{n-1}h
                        +\\binom n2x^{n-2}h^2
                        +\\cdots
                        +h^n
                        $$
                    </div>

                    <p>
                        Subtract $x^n$ and divide by $h$:
                    </p>

                    <div class="math-block">
                        $$
                        \\frac{(x+h)^n-x^n}{h}
                        =
                        nx^{n-1}
                        +\\binom n2x^{n-2}h
                        +\\cdots
                        +h^{n-1}
                        $$
                    </div>

                    <p>
                        As $h\\to0$, every term containing $h$ disappears.
                    </p>

                    <div class="math-block">
                        $$
                        \\boxed{
                        \\frac{d}{dx}x^n
                        =
                        nx^{n-1}
                        }
                        $$
                    </div>

                    <p>
                        This is where the famous power rule actually comes from.
                    </p>

                `
            },


            {
                title: "Product and Chain Rules",

                content: `

                    <h2>Product and Chain Rules</h2>

                    <h3>1. Product rule</h3>

                    <p>
                        Suppose
                        $F(x)=f(x)g(x)$.
                    </p>

                    <p>
                        The derivative is not generally
                        $f'(x)g'(x)$.
                    </p>

                    <p>
                        Instead:
                    </p>

                    <div class="math-block">
                        $$\\boxed{
                        (fg)'=f'g+fg'
                        }$$
                    </div>

                    <p>
                        The reason becomes visible from the difference quotient.
                    </p>

                    <div class="math-block">
                        $$
                        \\frac{
                        f(x+h)g(x+h)-f(x)g(x)
                        }{h}
                        $$
                    </div>

                    <p>
                        Add and subtract
                        $f(x)g(x+h)$:
                    </p>

                    <div class="math-block">
                        $$
                        =
                        f(x+h)
                        \\frac{g(x+h)-g(x)}{h}
                        +
                        g(x)
                        \\frac{f(x+h)-f(x)}{h}
                        $$
                    </div>

                    <p>
                        Taking the limit gives:
                    </p>

                    <div class="math-block">
                        $$
                        (fg)'
                        =
                        fg'+gf'
                        $$
                    </div>

                    <h3>2. Chain rule</h3>

                    <p>
                        Suppose:
                    </p>

                    <div class="math-block">
                        $$F(x)=f(g(x))$$
                    </div>

                    <p>
                        The derivative is:
                    </p>

                    <div class="math-block">
                        $$\\boxed{
                        F'(x)
                        =
                        f'(g(x))g'(x)
                        }$$
                    </div>

                    <p>
                        The chain rule describes how changes propagate through
                        nested functions.
                    </p>

                    <p>
                        For example:
                    </p>

                    <div class="math-block">
                        $$
                        F(x)=\\sin(x^2)
                        $$
                    </div>

                    <p>
                        The outside function is $\sin(u)$ and the inside
                        function is $u=x^2$.
                    </p>

                    <div class="math-block">
                        $$
                        F'(x)
                        =
                        \\cos(x^2)(2x)
                        $$
                    </div>

                `
            },


            {
                title: "Taylor Series and Local Structure",

                content: `

                    <h2>Taylor Series</h2>

                    <p>
                        A sufficiently smooth function can sometimes be represented
                        locally by an infinite polynomial.
                    </p>

                    <h3>1. Taylor polynomial</h3>

                    <p>
                        Around the point $a$:
                    </p>

                    <div class="math-block">
                        $$
                        P_n(x)
                        =
                        \\sum_{k=0}^{n}
                        \\frac{f^{(k)}(a)}{k!}
                        (x-a)^k
                        $$
                    </div>

                    <p>
                        Written explicitly:
                    </p>

                    <div class="math-block">
                        $$
                        f(a)
                        +
                        f'(a)(x-a)
                        +
                        \\frac{f''(a)}{2!}(x-a)^2
                        +
                        \\cdots
                        $$
                    </div>

                    <h3>2. Maclaurin series</h3>

                    <p>
                        When $a=0$:
                    </p>

                    <div class="math-block">
                        $$
                        f(x)
                        =
                        \\sum_{k=0}^{\\infty}
                        \\frac{f^{(k)}(0)}{k!}x^k
                        $$
                    </div>

                    <h3>3. Example: exponential function</h3>

                    <p>
                        Since every derivative of $e^x$ is $e^x$:
                    </p>

                    <div class="math-block">
                        $$
                        f^{(k)}(0)=1
                        $$
                    </div>

                    <p>
                        Therefore:
                    </p>

                    <div class="math-block">
                        $$
                        \\boxed{
                        e^x
                        =
                        1+x+
                        \\frac{x^2}{2!}
                        +
                        \\frac{x^3}{3!}
                        +\\cdots
                        }
                        $$
                    </div>

                    <p>
                        This is not merely an approximation when the series
                        converges to $e^x$; it represents the function exactly.
                    </p>

                `
            },


            {
                title: "The Riemann Integral",

                content: `

                    <h2>The Riemann Integral</h2>

                    <p>
                        Integration can be constructed from the idea of
                        adding infinitely many small contributions.
                    </p>

                    <h3>1. Partitioning an interval</h3>

                    <p>
                        Divide $[a,b]$ into subintervals:
                    </p>

                    <div class="math-block">
                        $$
                        a=x_0<x_1<\\cdots<x_n=b
                        $$
                    </div>

                    <p>
                        Choose a point $x_i^*$ inside each interval.
                        The corresponding Riemann sum is:
                    </p>

                    <div class="math-block">
                        $$
                        \\sum_{i=1}^{n}
                        f(x_i^*)\\Delta x_i
                        $$
                    </div>

                    <h3>2. The integral</h3>

                    <p>
                        If the sums approach a unique value as the partition
                        becomes arbitrarily fine, we define:
                    </p>

                    <div class="math-block">
                        $$
                        \\boxed{
                        \\int_a^b f(x)\\,dx
                        =
                        \\lim_{\\|P\\|\\to0}
                        \\sum_{i=1}^{n}
                        f(x_i^*)\\Delta x_i
                        }
                        $$
                    </div>

                    <p>
                        Here $\|P\|$ denotes the width of the largest
                        subinterval.
                    </p>

                    <h3>3. Geometric interpretation</h3>

                    <p>
                        For a positive function, the integral represents
                        the area between the graph and the $x$-axis.
                    </p>

                    <p>
                        When the function becomes negative, the integral
                        becomes a <strong>signed area</strong>.
                    </p>

                `
            },


            {
                title: "Fundamental Theorem of Calculus",

                content: `

                    <h2>Fundamental Theorem of Calculus</h2>

                    <p>
                        The Fundamental Theorem of Calculus establishes the
                        deep connection between differentiation and integration.
                    </p>

                    <h3>Part I</h3>

                    <p>
                        Define:
                    </p>

                    <div class="math-block">
                        $$
                        F(x)
                        =
                        \\int_a^x f(t)\\,dt
                        $$
                    </div>

                    <p>
                        If $f$ is continuous, then:
                    </p>

                    <div class="math-block">
                        $$
                        \\boxed{
                        F'(x)=f(x)
                        }
                        $$
                    </div>

                    <p>
                        Thus differentiation recovers the original function
                        from its accumulated area.
                    </p>

                    <h3>Part II</h3>

                    <p>
                        If $F'(x)=f(x)$, then:
                    </p>

                    <div class="math-block">
                        $$
                        \\boxed{
                        \\int_a^b f(x)\\,dx
                        =
                        F(b)-F(a)
                        }
                        $$
                    </div>

                    <p>
                        This converts an infinite limiting process into
                        evaluation of an antiderivative.
                    </p>

                `
            },


            {
                title: "Improper Integrals and Infinite Intervals",

                content: `

                    <h2>Improper Integrals</h2>

                    <p>
                        Not every integral is taken over a finite interval.
                        We can also integrate over an unbounded domain.
                    </p>

                    <h3>1. Integral to infinity</h3>

                    <div class="math-block">
                        $$
                        \\int_a^\\infty f(x)\\,dx
                        =
                        \\lim_{R\\to\\infty}
                        \\int_a^R f(x)\\,dx
                        $$
                    </div>

                    <p>
                        The integral converges if this limit exists and is finite.
                    </p>

                    <h3>2. Example</h3>

                    <div class="math-block">
                        $$
                        \\int_1^\\infty
                        \\frac{1}{x^p}\\,dx
                        $$
                    </div>

                    <p>
                        For $p\\neq1$:
                    </p>

                    <div class="math-block">
                        $$
                        \\int_1^R x^{-p}\\,dx
                        =
                        \\frac{R^{1-p}-1}{1-p}
                        $$
                    </div>

                    <p>
                        As $R\\to\\infty$:
                    </p>

                    <div class="math-block">
                        $$
                        \\boxed{
                        \\int_1^\\infty
                        \\frac{dx}{x^p}
                        \\text{ converges iff }p>1
                        }
                        $$
                    </div>

                    <p>
                        This simple result becomes one of the fundamental
                        convergence tests for infinite series and integrals.
                    </p>

                `
            },


            {
                title: "Infinite Series and Convergence",

                content: `

                    <h2>Infinite Series</h2>

                    <p>
                        An infinite series is formally defined through
                        the limit of its partial sums.
                    </p>

                    <div class="math-block">
                        $$
                        \\sum_{n=1}^{\\infty}a_n
                        =
                        \\lim_{N\\to\\infty}
                        \\sum_{n=1}^{N}a_n
                        $$
                    </div>

                    <h3>1. Necessary condition</h3>

                    <p>
                        If the series converges, then necessarily:
                    </p>

                    <div class="math-block">
                        $$
                        \\boxed{
                        \\lim_{n\\to\\infty}a_n=0
                        }
                        $$
                    </div>

                    <p>
                        But this condition is not sufficient.
                    </p>

                    <h3>2. Harmonic series</h3>

                    <div class="math-block">
                        $$
                        \\sum_{n=1}^{\\infty}\\frac1n
                        $$
                    </div>

                    <p>
                        Here:
                    </p>

                    <div class="math-block">
                        $$
                        \\lim_{n\\to\\infty}\\frac1n=0
                        $$
                    </div>

                    <p>
                        Nevertheless the harmonic series diverges.
                    </p>

                    <h3>3. The $p$-series</h3>

                    <div class="math-block">
                        $$
                        \\sum_{n=1}^{\\infty}
                        \\frac1{n^p}
                        $$
                    </div>

                    <p>
                        The fundamental criterion is:
                    </p>

                    <div class="math-block">
                        $$
                        \\boxed{
                        \\sum_{n=1}^{\\infty}
                        \\frac1{n^p}
                        \\text{ converges iff }p>1
                        }
                        $$
                    </div>

                `
            },


            {
                title: "Advanced Integration: Integration by Parts",

                content: `

                    <h2>Integration by Parts</h2>

                    <p>
                        Integration by parts is derived directly from the
                        product rule.
                    </p>

                    <h3>1. Start with the product rule</h3>

                    <div class="math-block">
                        $$
                        (uv)'=u'v+uv'
                        $$
                    </div>

                    <p>
                        Integrate both sides:
                    </p>

                    <div class="math-block">
                        $$
                        uv
                        =
                        \\int v\\,du
                        +
                        \\int u\\,dv
                        $$
                    </div>

                    <p>
                        Rearranging:
                    </p>

                    <div class="math-block">
                        $$
                        \\boxed{
                        \\int u\\,dv
                        =
                        uv-\\int v\\,du
                        }
                        $$
                    </div>

                    <h3>2. Example</h3>

                    <div class="math-block">
                        $$
                        \\int xe^x\\,dx
                        $$
                    </div>

                    <p>
                        Choose:
                    </p>

                    <div class="math-block">
                        $$
                        u=x,
                        \\qquad
                        dv=e^x dx
                        $$
                    </div>

                    <p>
                        Therefore:
                    </p>

                    <div class="math-block">
                        $$
                        du=dx,
                        \\qquad
                        v=e^x
                        $$
                    </div>

                    <p>
                        Applying integration by parts:
                    </p>

                    <div class="math-block">
                        $$
                        \\int xe^x dx
                        =
                        xe^x-\\int e^x dx
                        $$
                    </div>

                    <div class="math-block">
                        $$
                        \\boxed{
                        \\int xe^x dx
                        =
                        e^x(x-1)+C
                        }
                        $$
                    </div>

                `
            }

        ]

    }

];
