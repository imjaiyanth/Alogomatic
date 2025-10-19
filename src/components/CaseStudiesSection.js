import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import FlowingMenu from './FlowingMenu';
const selectedWork = [
    {
        label: 'Operations Copilot',
        summary: 'Automated 68% of weekly incident triage with a multi-agent assistant embedded directly into Slack.',
        meta: ['3 global hubs', '12 min response'],
        image: 'linear-gradient(135deg, #c6ff74 0%, #76ffb3 100%)',
        href: '#contact'
    },
    {
        label: 'Revenue Intelligence',
        summary: 'Merged product telemetry, CRM, and billing to ship a generative insights layer that surfaces upsell plays.',
        meta: ['$24M pipeline', '+5 hrs focus time'],
        image: 'linear-gradient(140deg, #9df1ff 0%, #caa7ff 100%)',
        href: '#contact'
    },
    {
        label: 'AI Concierge',
        summary: 'Conversational concierge coordinating vendors, guest preferences, and on-site teams across premium resorts.',
        meta: ['NPS +34', '2m10s average'],
        image: 'linear-gradient(130deg, #ffecd2 0%, #fcb69f 100%)',
        href: '#contact'
    },
    {
        label: 'Configurator Platform',
        summary: 'Unified B2B quoting across 5 markets with a realtime webapp that personalizes SKU assemblies with AI copilots.',
        meta: ['84% faster quotes', '5 markets live'],
        image: 'linear-gradient(135deg, #f8d0ff 0%, #90f7ec 100%)',
        href: '#contact'
    }
];
export default function CaseStudiesSection() {
    return (_jsx("section", { className: "section section--accent", id: "work", children: _jsxs("div", { className: "container section__layout", children: [_jsxs("div", { className: "section__intro", children: [_jsx("p", { className: "eyebrow", children: "Selected work" }), _jsx("h2", { children: "Proof that intelligent systems move the needle." }), _jsx("p", { children: "Every engagement pairs strategy with production\u2013\u2013from autonomous workflows to premium product surfaces." })] }), _jsx("div", { className: "section__content section__content--flow", children: _jsx(FlowingMenu, { items: selectedWork, ariaLabel: "Selected work case studies" }) })] }) }));
}
