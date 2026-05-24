const projectsdata = [
  {
    title: "Shop AI",
    image: "./cart.svg",
    summary:
      "Hybrid agentic e-commerce platform with a natural language AI workspace for cart and order management.",
    highlights: [
      "Execution sandbox with secure tool-calling",
      "Stripe webhooks, JWT auth & moderation layer",
      "LLM-driven metadata extraction pipeline",
    ],
    tech: [
      "React.js",
      "Node.js",
      "MongoDB",
      "LLM Agents",
      "Stripe",
      "Cloudinary",
    ],
    link: "https://github.com/VvSdC/ShopAI",
  },
  {
    title: "AEGIS",
    image: "./responsible-ai.svg",
    summary:
      "AI Ethics & Governance gateway proxy with real-time guardrails and dual-tier safety screening.",
    highlights: [
      "Regex/YARA pass under 30ms + Gemini semantic layer",
      "91 prompt-injection topologies covered",
      "SAST response checks across OWASP LLM paths",
    ],
    tech: [
      "Python",
      "GCP Cloud Run",
      "YARA",
      "SAST",
      "Gemini",
      "Semgrep",
    ],
    link: "https://aegis-backend-6y5ofugcka-el.a.run.app",
  },
];

export default projectsdata;
