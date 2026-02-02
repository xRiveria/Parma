import { ValidSkills } from "./constants";

export interface ExperienceInterface {
  id: string;
  position: string;
  company: string;
  location: string;
  startDate: Date;
  endDate: Date | "Present";
  description: string[];
  achievements: string[];
  skills: ValidSkills[];
  companyUrl?: string;
  logo?: string;
}

export const experiences: ExperienceInterface[] = [
  {
    id: "digipen",
    position: "Software Engineer",
    company: "DigiPen",
    location: "Singapore",
    startDate: new Date("2025-05-05"),
    endDate: "Present",
    description: [
      "Engineered a full-stack DevOps platform using infrastructure tools including Jenkins and Kubernetes, allowing for automated code QA (testing, coverage, analysis, build gating) across multi-platform projects with secure, scalable build delivery pipelines.",
      "Reduced setup and service onboarding time by 90% through infrastructure-as-code solutions, provisioning AWS resources on-demand (agents, environments) alongside integrated services such as MongoDB, PostgreSQL, Artifactory and Grafana.",
      "Reinforced developer workflows with dynamic secrets management via HashiCorp Vault, ChatOps using Teams Adaptive Cards and Jira | GitLab production pipelines for issue-driven branching, pipeline triggers, and audit-ready traceability.",
    ],
    achievements: [
      "Shipped production features within the first month for a trader-facing P&L dashboard used by global stakeholders.",
      "Led migration from Kendo UI to UBS’s internal design system, reducing UI inconsistencies and improving render performance across core dashboards.",
      "Designed and automated a daily FX rate ingestion pipeline using Databricks (Python, Spark SQL) and Java services, eliminating manual rate updates.",
      "Won UBS AI Venture Challenge by building data transformation and anomaly detection pipelines on trading datasets.",
      "Led a 12-member team in an internal hackathon to build an AI-powered tool that generates GitLab tickets, test cases, and requirement summaries.",
    ],
    skills: ["Typescript", "React", "Databricks", "Java", "Python"],
    companyUrl: "https://www.digipen.edu.sg",
    logo: "/experience/digipen-logo.png",
  },
  {
    id: "sit",
    position: "Research Engineer",
    company: "SIT",
    location: "Singapore",
    startDate: new Date("2023-05-05"),
    endDate: new Date("2023-08-28"),
    description: [
      "Performed R&D for a VR-based cycling project involving autonomous vehicles.",
      "Created a VR cycling simulation in Unity with the XR Toolkit, linked with an external indoors bike trainer.",
      "Decrypted broadcasted bike activity into a C++ application through the ANT+ protocol and streamed it into Unity for real-time movement.",
    ],
    achievements: [
      "Improved LLM function-calling accuracy by ~40% through structured prompt design and response validation.",
      "Developed APIs and integrated Slack, Google Workspace, and HubSpot automations via FastAPI.",
      "Migrated ML inference from Replicate to AWS SageMaker, reducing cold-start latency by ~30%.",
      "Created a Next.js dashboard for user analytics and a demo video explaining the implementation.",
    ],
    skills: ["FastAPI", "Python", "AWS", "Next.js", "React", "Typescript"],
    companyUrl: "https://www.singaporetech.edu.sg",
    logo: "/experience/sit-logo.png",
  },
  {
    id: "saf",
    position: "Software Engineer (R&D)",
    company: "Singapore Armed Forces",
    location: "Singapore",
    startDate: new Date("2020-07-05"),
    endDate: new Date("2022-05-16"),
    description: [
      "Developed web applications to streamline training workflows/virtualize syllabi and deployed/maintained them with AWS (EC2, S2, Glacier, CloudWatch, Lambda, DynamoDB).",
      "Oversaw all testing and release efforts across a battalion of 800 users, slowly scaling to 2000 users across 3 months.",
      "Designed system architectures for projects, negotiated timeframes/MVP between stakeholders and maintained relevant design documents.",
    ],
    achievements: [
      "Improved LLM function-calling accuracy by ~40% through structured prompt design and response validation.",
      "Developed APIs and integrated Slack, Google Workspace, and HubSpot automations via FastAPI.",
      "Migrated ML inference from Replicate to AWS SageMaker, reducing cold-start latency by ~30%.",
      "Created a Next.js dashboard for user analytics and a demo video explaining the implementation.",
    ],
    skills: ["FastAPI", "Python", "AWS", "Next.js", "React", "Typescript"],
    companyUrl: "https://www.mindef.gov.sg",
    logo: "/experience/mindef-logo.png",
  },
  {
    id: "hypixel",
    position: "Game Designer",
    company: "Hypixel Inc",
    location: "Remote",
    startDate: new Date("2016-11-5"),
    endDate: new Date("2018-7-21"),
    description: [
      "Designed game levels and maps with unique mechanics on the Hypixel Minecraft Hub.",
      "Presented ways to extend longevity of existing content from technological and analytical standpoints.",
      "Collaborated across departments to fulfil the needs of new concepts.",
    ],
    achievements: [
      "Developed websites using React, Angular, and GraphQL; reduced API load time by 30%.",
      "Set up AWS servers and CI/CD pipelines, scaling traffic to 3,000+ users/day.",
      "Built a multi-page PDF reader for large files (>300MB) to boost user engagement.",
    ],
    skills: [
      "React",
      "Angular",
      "GraphQL",
      "AWS",
      "HTML 5",
      "CSS 3",
      "Javascript",
    ],
    companyUrl: "https://hypixel.net",
    logo: "/experience/hypixel-logo.png",
  },
  {
    id: "ite",
    position: "Game Developer",
    company: "Institute of Technical Education",
    location: "Singapore",
    startDate: new Date("2016-10-5"),
    endDate: new Date("2018-4-21"),
    description: [
      "Led a team of engineers to perform R&D on technology assisted medical procedures.",
      "Researched and developed a VR game with LeapMotion to assist in rehabilitation of patients with physical disabilities across Singapore.",
      "Conceptualized strategies to enhance user retention and engagement for campus-based applications.",
    ],
    achievements: [
      "Developed websites using React, Angular, and GraphQL; reduced API load time by 30%.",
      "Set up AWS servers and CI/CD pipelines, scaling traffic to 3,000+ users/day.",
      "Built a multi-page PDF reader for large files (>300MB) to boost user engagement.",
    ],
    skills: [
      "React",
      "Angular",
      "GraphQL",
      "AWS",
      "HTML 5",
      "CSS 3",
      "Javascript",
    ],
    companyUrl: "https://www.ite.edu.sg",
    logo: "/experience/ite-logo.png",
  },
];
