import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const categories = [
    {
        title: 'Model & Agent Ops',
        items: ['OpenAI', 'Anthropic', 'Cohere', 'LlamaIndex', 'LangGraph', 'AutoGen', 'Vector DBs']
    },
    {
        title: 'Experience Layer',
        items: ['React', 'Next.js', 'Remix', 'Vite', 'Expo', 'Tailwind CSS', 'Three.js / OGL']
    },
    {
        title: 'Platforms & Data',
        items: ['AWS', 'Azure', 'GCP', 'Supabase', 'Postgres', 'dbt', 'Snowflake', 'Kafka']
    }
];
export default function TechStackSection() {
    return (_jsx("section", { className: "section", id: "tech", children: _jsxs("div", { className: "container section__layout", children: [_jsxs("div", { className: "section__intro", children: [_jsx("p", { className: "eyebrow", children: "Tooling" }), _jsx("h2", { children: "Best-in-class technologies, thoughtfully integrated." }), _jsx("p", { children: "We remain vendor-agnostic and pair the right models, infrastructure, and interfaces for your environment." })] }), _jsx("div", { className: "section__content", children: _jsx("div", { className: "stack-grid", children: categories.map(category => (_jsxs("article", { children: [_jsx("h3", { children: category.title }), _jsx("ul", { children: category.items.map(item => (_jsx("li", { children: item }, item))) })] }, category.title))) }) })] }) }));
}
