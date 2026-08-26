export const profile = {
  name: "Rakesh Mishra",
  title: "Associate Tech Lead — Space Design & Cabinetry Platforms",
  location: "Kolkata, West Bengal, India",
  email: "mishra.rakesh2615@gmail.com",
  phone: "+91 88513 84440",
  linkedin: "https://linkedin.com/in/rakesh-mishra-996667102",
  tagline:
    "I build the software behind the room you design — from inspiration to manufacturing. 9+ years leading full-stack teams that turn 3D catalogs, pricing rules, and configuration logic into shippable kitchen & bath experiences.",
};

export const experiences = [
  {
    company: "Cyncly India",
    role: "Associate Tech Lead",
    period: "Jul 2023 — Present",
    points: [
      "Lead a team of 4 engineers on SFx, a web-based space-design product for KBFr retail — enabling designers to compose rooms from a rich library of 3D catalogs.",
      "Own integration architecture for CIC (Content in Cloud), the catalog-driven design & live budget estimation platform service.",
      "Cut API calls ~33% in key geometry-fetching flows by identifying integration gaps and refactoring design, in collaboration with the platform team.",
      "Drove solution architecture & stakeholder alignment for cross-platform pricing rule integration between CIC and Flex (CRM), enabling dynamic regional pricing with strong maintainability.",
      "Define integration scope and estimation for the quarterly roadmap; run R&D to propose future-ready architecture.",
      "Designed & shipped, end-to-end and independently, a room-scanning feature: capture a room via iPad/iPhone LiDAR, import via QR code, and start designing instantly — built on Azure Functions, Azure SignalR, .NET Core, TypeScript.",
      "Evaluated third-party tooling for org-wide adoption (GitHub Copilot metrics, LaunchDarkly feature flags).",
    ],
    stack: ["C# .NET Core", "TypeScript/JavaScript", "React", "MongoDB", "Azure Web/Function Apps", "Azure SignalR"],
  },
  {
    company: "UnitedHealth Group",
    role: "Senior Software Engineer",
    period: "Aug 2021 — Jul 2023",
    points: [
      "Designed and built new business features as an independently owned Azure service.",
      "Reduced execution cost by detecting and merging duplicate calls into a single Camunda workflow call.",
      "Drove Infrastructure-as-Code adoption with Terraform across the team and helped other teams replicate it.",
      "Mentored 2 junior developers, keeping their deliverables on scrum timeline.",
    ],
    stack: ["React (Piral micro-UI)", "TypeScript", "C#", "Azure Functions", "Cosmos DB", "Terraform", "Jenkins"],
  },
  {
    company: "Policybazaar.com",
    role: "Senior Technical Associate",
    period: "Mar 2021 — Aug 2021",
    points: [
      "Improved system performance by introducing caching for backend data-fetch APIs.",
      "Coordinated with third-party insurance providers to integrate their APIs into the platform.",
    ],
    stack: ["React.js", "C# .NET Core", "ADO.NET", "SQL Server"],
  },
  {
    company: "Bentley Systems",
    role: "Software Engineer I → Associate Software Engineer",
    period: "Jul 2017 — Jan 2021",
    points: [
      "Designed and built an end-to-end hierarchical report-approval automation flow with digital signatures.",
      "Led the React migration from AngularJS, mentoring teammates through the transition.",
      "Contributed to digital-twin concepts for infrastructure as part of the org's 2.0 initiative.",
      "Rotated across 4 teams/products (desktop & web) building broad product and stack fluency.",
    ],
    stack: ["AngularJS", "React", "TypeScript", "C#", "ASP.NET Core", "LINQ", "SQL Server"],
  },
];

export const skillGroups = [
  {
    title: "Space Design & Cabinetry Domain",
    skills: [
      "Catalog-driven 3D design tools",
      "Room scanning & spatial capture (LiDAR/QR import)",
      "Cabinetry configuration logic",
      "Live budget estimation & pricing rules",
      "Cross-platform CRM/pricing integration",
      "glTF/GLB 3D modeling, geometry & metadata placement",
    ],
  },
  {
    title: "Frontend",
    skills: ["React.js", "TypeScript", "JavaScript", "Micro-frontends (Piral)"],
  },
  {
    title: "Backend & Data",
    skills: [".NET Core", "C#", "ADO.NET / LINQ", "SQL Server", "MySQL", "MongoDB", "Cosmos DB"],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      "Azure (Web Apps, Functions, Service Bus, SignalR, App Insights, Blob)",
      "AWS (EC2, Lambda, S3)",
      "Terraform (IaC)",
      "Azure Pipelines / GitHub CI-CD",
    ],
  },
  {
    title: "Leadership",
    skills: ["Leading teams of 3–4 engineers", "Solution architecture", "Stakeholder alignment", "Mentoring", "Roadmap estimation"],
  },
];

export const projects = [
  {
    title: "SFx — Retail Space Design Platform",
    summary:
      "Web product used by kitchen & bath designers to compose rooms from rich 3D catalogs, with live pricing and budget feedback as designs evolve.",
    highlights: [
      "Led a 4-engineer team owning integration architecture end-to-end.",
      "Reduced geometry-fetch API calls by ~33% through refactored data flows.",
      "Architected cross-platform pricing rules between CIC and Flex CRM for dynamic regional pricing.",
    ],
    tags: ["React", "TypeScript", ".NET Core", "MongoDB", "Azure"],
  },
  {
    title: "Room Scan → Design Import",
    summary:
      "End-to-end feature letting users scan a physical room on an iPad/iPhone Pro and import it via QR code to start designing immediately in-app.",
    highlights: [
      "Designed and delivered independently, from architecture to production.",
      "Real-time device-to-web handoff using Azure SignalR.",
      "Serverless processing pipeline on Azure Functions.",
    ],
    tags: ["Azure Functions", "Azure SignalR", ".NET Core", "TypeScript"],
  },
  {
    title: "CIC × Flex Pricing Integration",
    summary:
      "Cross-service architecture connecting the Content-in-Cloud catalog platform with the Flex CRM to compute dynamic, regionally-aware cabinetry pricing.",
    highlights: [
      "Drove stakeholder alignment across two platform teams.",
      "Optimized for long-term maintainability over quick coupling.",
    ],
    tags: ["Solution Architecture", "Pricing Rules Engine", "CRM Integration"],
  },
];

export const education = [
  { school: "West Bengal University of Technology, Kolkata", degree: "B.Tech, Computer Science & Engineering", period: "2013 — 2017" },
];

export const certifications = [
  "Microsoft Certified: Azure Fundamentals — Microsoft",
  "Learning Azure DevOps — LinkedIn",
  "TypeScript: Object-Oriented Programming — LinkedIn",
];
