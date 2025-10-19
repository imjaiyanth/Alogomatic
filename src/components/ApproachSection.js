import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const steps = [
    {
        title: 'Diagnose',
        description: 'We co-create clarity on the business challenge, align stakeholders, and benchmark success metrics before any line of code is written.'
    },
    {
        title: 'Design',
        description: 'Rapid experimentation with interactive prototypes, system architecture, and prompt engineering to validate the experience early.'
    },
    {
        title: 'Deploy',
        description: 'Ship production-ready solutions with observability, human-in-the-loop safeguards, and training to drive adoption.'
    },
    {
        title: 'Scale',
        description: 'Continuously optimize models, expand integrations, and instrument feedback loops that compound the value of automation.'
    }
];
export default function ApproachSection() {
    return (_jsx("section", { className: "section", id: "approach", children: _jsxs("div", { className: "container section__layout", children: [_jsxs("div", { className: "section__intro", children: [_jsx("p", { className: "eyebrow", children: "How we build" }), _jsx("h2", { children: "A playbook built for speed, rigor, and lasting impact." })] }), _jsx("div", { className: "section__content", children: _jsx("ol", { className: "timeline", "aria-label": "Delivery process", children: steps.map((step, index) => (_jsxs("li", { children: [_jsx("div", { className: "timeline__index", children: String(index + 1).padStart(2, '0') }), _jsxs("div", { children: [_jsx("h3", { children: step.title }), _jsx("p", { children: step.description })] })] }, step.title))) }) })] }) }));
}
