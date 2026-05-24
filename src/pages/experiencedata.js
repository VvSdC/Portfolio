const experiencedata = {
  work: [
    {
      company: "Infosys",
      role: "Specialist Programmer (L2) — Responsible AI Engineer",
      subtitle: "AI Safety, Alignment & Guardrails",
      period: "Jul 2024 – Present",
      location: "Hyderabad, India",
      sections: [
        {
          title: "AI Guardrails, PII Privacy & Application Security",
          highlights: [
            "Architected and deployed a standardized Model Context Protocol (MCP) Server as a boundary proxy to identify, log, and mitigate PII leakage, toxicity, jailbreaks, and adversarial prompt injection.",
            "Built low-latency proxy intervention layers using mixed rule-based and instruction-based models for prompt injection, jailbreak payloads, and toxic patterns.",
            "Designed runtime filter hooks and privacy guardrails in developer AI workspaces (Claude Code, GitHub Copilot) to intercept and mask PII before external API exposure.",
            "Developed code-safety validation in developer assistant proxies to inspect LLM output and block destructive or irreversible execution commands.",
            "Mitigated supply chain vulnerabilities by enforcing authorization for third-party tools and verifying library provenance against secure Artifactory registry.",
            "Implemented command-level explainability checks requiring justifications, risk profiles, and reversibility indicators before script execution.",
          ],
        },
        {
          title: "Model Alignment, SFT & Safety Benchmarking",
          highlights: [
            "Curated alignment datasets and ran adversarial red teaming on Slurm GPU clusters to close bias and toxicity gaps.",
            "Executed Supervised Fine-Tuning (SFT) on SLMs with Unsloth across distributed environments, achieving a 34% increase in baseline safety benchmarks while preserving helpfulness.",
          ],
        },
        {
          title: "Data Engineering, Inference Optimization & Agentic Workflows",
          highlights: [
            "Accelerated pipelines with optimized vLLM configurations for high-throughput synthetic data generation and multi-turn alignment filtering.",
            "Engineered a Threat Simulator Suite for continuous adversarial testing against agentic applications to isolate logic bypass vulnerabilities.",
            "Architected an enterprise automated risk classification and parameter extraction engine for corporate SOWs using stateful multi-agent LangGraph workflows.",
          ],
        },
      ],
    },
  ],
  education: [
    {
      institution:
        "Indian Institute of Information Technology, Design and Manufacturing (IIITDM Jabalpur)",
      degree: "Bachelor of Technology (B.Tech.) in Computer Science and Engineering",
      period: "2020 – 2024",
      details: "Cumulative Performance Index (CPI): 7.9 / 10.0",
    },
  ],
  certifications: [
    {
      name: "Claude Certified Architect (Early Adopter)",
      issuer: "Anthropic",
    },
    {
      name: "Microsoft Certified: Azure AI Engineer Associate",
      issuer: "Microsoft",
    },
    {
      name: "Applied Generative AI Professional",
      issuer: "Infosys Certified",
    },
  ],
};

export default experiencedata;
