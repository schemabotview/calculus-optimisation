# Calculus and Optimisation — From Change and Accumulation to Justified Decisions

## Audience and prerequisites

For learners beginning calculus who can manipulate algebraic expressions, solve equations, use powers and roots, and read Cartesian graphs. Refresh exponentials, logarithms, trigonometry, and radians in the opening chapter. No previous calculus, statistics, or programming is assumed.

For Chapters 7–12, learners should know vectors, dot products, matrices, linear maps, linear systems, norms, and symmetric quadratic forms from the companion [Linear Algebra course](LINEAR-ALGEBRA-COURSE-PLAN.md). Brief refreshers support local explanations; they do not replace that mathematical foundation. Introduce the elementary expectation/sampling ideas needed for finite-sum stochastic examples locally; the companion Probability and Statistics concept supplies greater depth. Optional code illustrations are supplied with their notation explained and need not be run.

Scope: Single-variable and multivariable differential/integral calculus, convergence/local approximation, and core continuous optimisation. Preserve the mathematical foundations; detailed optimiser catalogues, reverse-mode implementation, and advanced constrained-solver surveys are deferred or owned by Deep Learning.

Target capability: model change and accumulation; derive and interpret sensitivities; formulate optimisation problems; distinguish existence, local conditions, and global guarantees; and justify methods and solution evidence under explicit assumptions. Worked demonstrations support these capabilities without claiming assessed individual mastery.

Structure: **12 chapters, 88 sections**, distributed **7, 8, 7, 7, 7, 7, 8, 6, 8, 8, 8, 7**. Counts reflect coherent learning milestones, not equal duration.

## Learning spine

Functions, Limits, and Continuity → Derivatives and Differentiation → Single-Variable Analysis and Optimisation → Integration and Accumulation → Integration Methods and Numerical Accuracy → Convergence and Taylor Models → Multivariable Differentiation → Multiple Integration and Coordinate Changes → Curvature, Convexity, and Optimality → Numerical Optimisation and Reliability → Constrained Optimisation and Duality → Nonsmooth and Sampled Objectives.

Progression rationale: Functions/limits and derivative meaning/rules form coherent opening milestones. Curvature and convexity form one account of optimality. Numerical-method comparison includes reliability rather than repeating it in a final chapter. Integration and conditional optimality retain their own depth.

Recurring example: a small workshop models production rate, power consumption, accumulated energy, measurement-based cost, and decisions under material/capacity limits. Continuous quantities are idealisations; integer allocation, real safety decisions, and domain-specific feasibility require separate treatment. Motion, geometry, simple approximation, and finite-sum fitting examples provide transfer.

Teaching method: question and assumptions → representation/diagram → definition and supporting reasoning → worked calculation or execution trace → failure/counterexample → outcome → bridge. State domains, units, smoothness, convexity, constraint qualifications, and numerical assumptions at first use. Include short proof arguments, annotated expressions, contour plots, finite tables, and illustrative code/output when useful. No submitted exercises, assessments, learner monitoring, executable lessons, applications, or deployments are delivered.

Course ownership: Mathematical derivations belong to the relevant mathematics plan; probability/inference and experiment theory to Probability and Statistics; general predictive/discovery evaluation to Machine Learning; neural computations and training-state behaviour to Neural Networks and Deep Learning; operational contracts, delivery, monitoring, and retraining to ML Engineering and MLOps. A local refresher or domain-specific failure case is intentional overlap, not a second full treatment.

## Chapter 1 — Functions, Limits, and Continuity

Objective: Translate a changing system into functions with meaningful domains, units, and assumptions. Explain limiting behaviour and establish the assumptions used by calculus.

1. Functions, domains, units, and continuous modelling
2. Elementary functions, composition, and notation refreshers
3. One-sided/two-sided limits and algebraic limit laws
4. Limits at infinity, asymptotes, and indeterminate forms
5. Continuity, discontinuities, and domain boundaries
6. Intermediate/extreme value theorems and attainment
7. A simple epsilon–delta argument and limits of sampled evidence

Worked illustrations: Compare a continuous production approximation with integer counts; use hole/jump diagrams and an open-domain unattained infimum.

Outcome: Formulate a simple function-based model and explain its domain, units, and approximation assumptions. Explain limits and continuity, distinguish finite limits from divergence, and identify when existence theorems apply.

Bridge: Limits make instantaneous change definable; next derive and compute that change.

## Chapter 2 — Derivatives and Differentiation

Objective: Derive instantaneous rates from difference quotients and interpret differentiability. Differentiate structured expressions while preserving the dependencies and domains of the model.

1. Difference quotients and instantaneous rates
2. Differentiability, tangent lines, and continuity distinctions
3. Power, sum, product, and quotient rules
4. Chain rule and nested dependencies
5. Exponential/logarithmic and trigonometric derivatives
6. Implicit and parametric differentiation
7. Higher derivatives and related rates
8. Linearisation, differentials, and approximation limits

Worked illustrations: Derive a quadratic derivative, trace a composite cost calculation, and contrast a continuous corner with a differentiable curve.

Outcome: Explain and calculate a derivative from first principles, interpret its units, and judge the local limits of linear approximation. Differentiate common model expressions and explain how the chain rule follows their dependencies.

Bridge: Derivatives now support analysis of candidates and feasible optima.

## Chapter 3 — Single-Variable Analysis and Optimisation

Objective: Use derivatives to analyse a model and distinguish candidates from justified optimal solutions.

1. Rolle/mean value theorems and their hypotheses
2. Monotonicity, stationary/critical points, and derivative signs
3. Concavity, inflection, and first/second derivative tests
4. Local/global extrema, endpoints, and nonsmooth candidates
5. Constrained one-variable modelling and existence
6. L’Hôpital’s rule and applicability limits
7. Bisection/Newton root finding versus minimisation

Worked illustrations: Compare x³, x⁴, and −x⁴ at zero; solve a bounded production-cost problem by comparing all valid candidates and endpoints.

Outcome: Analyse a one-variable function and justify an optimum or explain why one is not attained.

Bridge: Integration answers the complementary question of accumulated change.

## Chapter 4 — Integration and Accumulation

Objective: Connect accumulation, signed area, and antiderivatives through explicit conditions.

1. Riemann sums, partitions, and integrability
2. Definite integrals, signed area, and units
3. Accumulation functions and the fundamental theorem
4. Antiderivatives, constants, and evaluation
5. Substitution and transformed limits
6. Net change versus total accumulated magnitude
7. Average values and energy/distance applications

Worked illustrations: Integrate changing power to energy; distinguish displacement from distance and state the continuity assumptions behind differentiation of accumulation.

Outcome: Explain a definite integral, apply the fundamental theorem under its assumptions, and interpret accumulated change with correct units.

Bridge: The fundamental theorem motivates selecting analytical or numerical integration methods.

## Chapter 5 — Integration Methods and Numerical Accuracy

Objective: Select an integration approach and assess whether the resulting quantity is defined and reliable.

1. Integration by parts
2. Partial fractions and rational integrals
3. Trigonometric substitutions and method selection
4. Improper integrals and convergence
5. Comparison reasoning and divergent contrasts
6. Trapezoidal/Simpson quadrature and conditional error bounds
7. Adaptive integration, tolerance, and sampling failures

Worked illustrations: Verify an antiderivative by differentiation; contrast a convergent improper integral with a misleading finite cutoff and a missed narrow spike.

Outcome: Choose and explain an integration method, diagnose improper-integral convergence, and interpret numerical accuracy claims conditionally.

Bridge: Approximation of entire functions requires convergence and controlled remainders.

## Chapter 6 — Convergence and Taylor Models

Objective: Explain convergence and use finite local expansions without assuming every infinite expansion represents its function.

1. Sequences, limits, and iterative convergence
2. Series/partial sums and necessary convergence conditions
3. Geometric, p-series, comparison, and ratio tests
4. Absolute/conditional convergence and alternating error bounds
5. Taylor polynomials and remainder hypotheses
6. Power series, convergence domains, and endpoints
7. Smoothness versus equality to a Taylor series

Worked illustrations: Contrast terms tending to zero with a divergent sum; bound a finite exponential approximation and explain a logarithmic expansion’s restricted domain.

Outcome: Distinguish sequence and series convergence, justify a finite Taylor approximation, and identify where an expansion is valid.

Bridge: Taylor models now extend from one input to simultaneous changes in several inputs.

## Chapter 7 — Multivariable Differentiation

Objective: Interpret multivariable models and separate coordinate-wise evidence from full differentiability. Track multivariable sensitivities through compositions and distinguish derivative calculation methods.

1. Vector inputs, surfaces, level sets, and continuity
2. Path-dependent limits and partial derivatives
3. Mixed partials and their interchange conditions
4. Total differentiability, tangent planes, and first-order error
5. Directional derivatives and gradients
6. Jacobians, shapes, and the multivariable chain rule
7. Linear/quadratic/least-squares gradient derivations
8. Numerical/symbolic/automatic differentiation: roles and finite-difference checks

Worked illustrations: Compare partials with total differentiability; derive a least-squares gradient with dimensions and trace a small composite sensitivity. Full reverse-mode graph execution belongs in Deep Learning.

Outcome: Interpret partial derivatives and tangent models, and explain why coordinate-wise derivatives do not alone establish differentiability. Explain gradient/Jacobian roles, propagate sensitivities through compositions, and select a plausible derivative-checking method.

Bridge: Jacobians also explain how coordinate changes affect accumulated quantities.

## Chapter 8 — Multiple Integration and Coordinate Changes

Objective: Explain accumulation across regions and the role of Jacobian determinants in changing coordinates.

1. Double integrals and rectangular sums
2. Iterated integrals and order-change conditions
3. Nonrectangular domains and region descriptions
4. Triple integrals, mass, and density
5. Coordinate changes, polar coordinates, and Jacobian factors
6. Improper integration and absolute-integrability caveats

Worked illustrations: Integrate over a triangular region in both orders and explain the polar factor r; supplied densities illustrate accumulation without teaching statistical inference.

Outcome: Set up bounded multiple integrals, explain coordinate-change factors, and recognise when integration-order changes need justification.

Bridge: Differential local models now support multivariable optimality reasoning.

## Chapter 9 — Curvature, Convexity, and Optimality

Objective: Classify candidate solutions using local models while distinguishing local conclusions from global guarantees. Recognise tractable structure and formulate optimisation problems without silently changing their meaning.

1. Objectives, feasible sets, boundedness, and attainment
2. Hessians and second-order Taylor models
3. Interior first-order necessary conditions
4. Second-order necessary/sufficient tests and degenerate cases
5. Convex sets/functions and derivative characterisations
6. Strict/strong convexity and existence/uniqueness limits
7. Convex formulation with affine equalities and convex inequalities
8. Quadratic/least-squares models and simple epigraph reformulation

Worked illustrations: Compare bowls, saddles, and x⁴/−x⁴ flat Hessians; show a convex objective with a nonconvex feasible set and a strictly convex objective with no attained minimum.

Outcome: Use local first/second-order conditions correctly, recognise inconclusive cases, and separate existence from candidate classification. Formulate a small optimisation problem, identify sufficient convexity conditions, and explain the scope of global optimality and uniqueness claims.

Bridge: Optimality conditions define what numerical solvers must seek and what their diagnostics mean.

## Chapter 10 — Numerical Optimisation and Reliability

Objective: Explain how iterative methods use derivatives and curvature, and compare their assumptions and costs. Assess an optimisation result using mathematical, numerical, and modelling evidence together.

1. Descent directions, steps, and stopping criteria
2. Gradient descent, smoothness, and step-size assumptions
3. Backtracking and sufficient decrease
4. Newton steps, damping, and linear solves
5. Conditioning, scaling, and quasi-Newton/trust-region orientation
6. Finite-difference verification and floating-point effects
7. Optimality residuals versus stagnation and iteration limits
8. Integrated objective/gradient/feasibility diagnostic trace

Worked illustrations: Trace stable/unstable quadratic steps and a damped Newton solve; compare small step size with actual optimality evidence and perturb a workshop cost model.

Outcome: Explain representative update rules and safeguards, interpret convergence claims under their hypotheses, and justify a method for a small stated problem. Justify a modelling/method choice, explain the evidence supporting a computed answer, and identify unresolved numerical or domain limitations.

Bridge: Constraints change both valid directions and the meaning of a solution certificate.

## Chapter 11 — Constrained Optimisation and Duality

Objective: Explain boundary optima, conditional optimality certificates, and representative constrained methods.

1. Feasibility, active boundaries, and tangent directions
2. Equality constraints and Lagrange multipliers
3. Inequality sign conventions and the Lagrangian
4. KKT stationarity, feasibility, and complementary slackness
5. Constraint qualifications and convex sufficiency
6. Dual lower bounds, weak/strong duality, and Slater conditions
7. Projection, penalties, and barriers as method families
8. Sensitivity, certificate checks, and constrained-method boundaries

Worked illustrations: Check a small allocation problem’s full KKT certificate using g≤0 and λ≥0; contrast failed qualifications and approximate penalty feasibility with exact constraints.

Outcome: Explain constrained optimality and dual bounds under stated assumptions, check a small certificate, and compare how constrained methods manage feasibility.

Bridge: Nonsmooth or sampled objectives need further adaptations of the update reasoning.

## Chapter 12 — Nonsmooth and Sampled Objectives

Objective: Extend the optimisation toolkit while distinguishing mathematical guarantees from practical heuristics.

1. Convex subgradients and subdifferentials
2. Subgradient steps and step-size caveats
3. Proximal maps and scalar soft thresholding
4. Finite-sum objectives and sampled gradients
5. Sampling assumptions, unbiasedness, and variance
6. Stochastic schedules and noisy stopping evidence
7. Integrated selection of smooth, constrained, or nonsmooth reasoning

Worked illustrations: Derive soft thresholding, trace two sampled updates, and contrast a full objective with its noisy estimate; detailed momentum/adaptive implementations belong in Deep Learning.

Outcome: Explain why nonsmooth and sampled objectives need different update reasoning, interpret an elementary proximal step, and identify assumptions behind stochastic claims.

Bridge: Continue with unfamiliar examples and reasoned implementation practice; use the companion courses for the named specialist and operational depth.

## Sources and scope

Sources checked on **2026-10-13**. The mathematical spine is release-independent; executable illustrations must record exact library versions and solver settings when developed.

Selected supplementary material includes Stanford's [subgradient notes](https://web.stanford.edu/class/ee364b/lectures/subgradients_notes.pdf), the introduction to Parikh and Boyd's [Proximal Algorithms](https://web.stanford.edu/~boyd/papers/pdf/prox_algs.pdf), Baydin et al.'s [automatic differentiation survey](https://jmlr.org/papers/volume18/17-468/17-468.pdf), and Bottou's [stochastic-gradient paper](https://leon.bottou.org/publications/pdf/compstat-2010.pdf). Inspection was selective; detailed method derivations and advanced convergence claims need further lesson-level source verification.

OpenStax's [Calculus Volume 1 preface and scope](https://openstax.org/books/calculus-volume-1/pages/preface), selected [limits](https://openstax.org/books/calculus-volume-1/pages/2-2-the-limit-of-a-function) and [fundamental-theorem](https://openstax.org/books/calculus-volume-1/pages/5-3-the-fundamental-theorem-of-calculus) sections, Volume 2's [Taylor series](https://openstax.org/books/calculus-volume-2/pages/6-3-taylor-and-maclaurin-series), and Volume 3's [partial derivatives](https://openstax.org/books/calculus-volume-3/pages/4-3-partial-derivatives), [tangent models](https://openstax.org/books/calculus-volume-3/pages/4-4-tangent-planes-and-linear-approximations), [chain rule](https://openstax.org/books/calculus-volume-3/pages/4-5-the-chain-rule), [multiple integration](https://openstax.org/books/calculus-volume-3/pages/5-1-double-integrals-over-rectangular-regions), and [multipliers](https://openstax.org/books/calculus-volume-3/pages/4-8-lagrange-multipliers) inform the calculus coverage. These live web volumes were inspected selectively, not read in full.

Boyd and Vandenberghe's [Convex Optimization (2004)](https://www.stanford.edu/~boyd/cvxbook/bv_cvxbook.pdf) supplies the advanced formulation/convexity sequence and selected duality and line-search guidance. Nocedal and Wright's [Numerical Optimization, second edition (2006), contents](https://users.iems.northwestern.edu/~nocedal/book/toc.html) provides an algorithm-family comparison; full chapter text was not inspected. The official [SciPy optimisation tutorial](https://docs.scipy.org/doc/scipy/tutorial/optimize.html) provides a practical method/diagnostic cross-check, not a pinned software environment. Detailed evidence, inspection limits, coverage mapping, and review status remain in [README.md](../README.md).

This is not an exhaustive standard three-semester calculus sequence or a complete optimisation specialist course. Deferred topics include vector-field line/surface integrals and Green/Stokes/divergence theorems; differential-equation solution methods; calculus of variations; measure-theoretic integration; rigorous real-analysis development beyond selected introductory arguments; complex analysis; integer/combinatorial and global-optimisation algorithms; conic/semidefinite solver implementation; advanced stochastic convergence proofs; and distributed optimisation. Parametric differentiation, quadrature, multivariable change of variables, proximal methods, and stochastic optimisation receive bounded foundational treatment.

Intentional overlap: Linear Algebra develops least squares through projections and matrix structure; this course derives its derivatives and iterative optimisation. Probability and Statistics develops distributions and inference; this course supplies integration and introductory sampling notation. ML and deep learning apply the calculus, computation graphs, and update rules to specific learning problems; model evaluation and architecture design remain there.

Scope refinement checked on **2026-10-14**: Detailed BFGS/L-BFGS update derivations, SQP/interior-point implementations, adaptive-optimiser catalogues, importance-sampling methods, and reverse-mode computation-graph execution are outside core scope. Keep finite Taylor/series reasoning, multiple integration, KKT/duality, elementary proximal and stochastic reasoning; the course remains broader than mathematics solely for ML. Earlier source inspections are retained as research evidence, including sources for topics now deferred; a retained citation does not imply core coverage.
