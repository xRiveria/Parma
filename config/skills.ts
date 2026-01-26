import { Icons } from "@/components/common/icons";

export interface skillsInterface {
  name: string;
  description: string;
  rating: number;
  icon: any;
}

export const skillsUnsorted: skillsInterface[] = [
  {
    name: "C++",
    description:
      "High-performance systems programming for games, engines, and low-level applications.",
    rating: 5,
    icon: Icons.cpp,
  },
  {
    name: "C#",
    description:
      "Object-oriented development for backend services, tooling, and Unity applications.",
    rating: 5,
    icon: Icons.csharp,
  },
  {
    name: "AWS",
    description:
      "Cloud infrastructure for scalable compute, storage, networking, and deployment.",
    rating: 5,
    icon: Icons.amazonaws,
  },
  {
    name: "Unity",
    description:
      "Game development platform for building real-time 2D and 3D interactive experiences.",
    rating: 5,
    icon: Icons.unity,
  },
  {
    name: "Unreal Engine",
    description:
      "AAA-grade real-time engine for high-fidelity games and simulations.",
    rating: 5,
    icon: Icons.unrealengine,
  },
  {
    name: "JavaScript",
    description:
      "Dynamic scripting language for building interactive web applications and tooling.",
    rating: 4,
    icon: Icons.javascript,
  },
  {
    name: "MongoDB",
    description:
      "Flexible NoSQL document database for modern, scalable applications.",
    rating: 4,
    icon: Icons.mongodb,
  },
  {
    name: "MySQL",
    description:
      "Relational database for structured data and transactional workloads.",
    rating: 4,
    icon: Icons.mysql,
  },
  {
    name: "PostgreSQL",
    description:
      "Advanced open-source relational database with strong consistency and extensibility.",
    rating: 4,
    icon: Icons.postgreSQL,
  },

  // DevOps / Platform

  {
    name: "Vault",
    description:
      "Secure secrets management and encryption for infrastructure and applications.",
    rating: 4,
    icon: Icons.vault,
  },
  {
    name: "Portainer",
    description:
      "Container management UI for Docker and Kubernetes environments.",
    rating: 4,
    icon: Icons.portainer,
  },
  {
    name: "Jenkins",
    description:
      "CI/CD automation server for building, testing, and deploying pipelines.",
    rating: 4,
    icon: Icons.jenkins,
  },
  {
    name: "GitLab",
    description:
      "Source control with integrated CI/CD, issue tracking, and DevOps workflows.",
    rating: 4,
    icon: Icons.gitlab,
  },
  {
    name: "SonarQube",
    description:
      "Static code analysis for maintaining code quality and security.",
    rating: 4,
    icon: Icons.sonarqube,
  },
  {
    name: "Sonatype",
    description:
      "Dependency lifecycle management and vulnerability detection.",
    rating: 4,
    icon: Icons.sonatype,
  },

  // Observability / Monitoring

  {
    name: "Grafana",
    description:
      "Visualization and monitoring dashboards for metrics, logs, and traces.",
    rating: 5,
    icon: Icons.grafana,
  },
  {
    name: "Sentry",
    description:
      "Application error tracking and performance monitoring.",
    rating: 4,
    icon: Icons.sentry,
  },

  // Collaboration / Productivity

  {
    name: "Jira",
    description:
      "Agile project management and issue tracking.",
    rating: 4,
    icon: Icons.jira,
  },
  {
    name: "Confluence",
    description:
      "Team documentation and knowledge-sharing platform.",
    rating: 4,
    icon: Icons.confluence,
  },
  {
    name: "Homepage",
    description:
      "Self-hosted dashboard for managing and accessing internal services.",
    rating: 3,
    icon: Icons.homepage,
  },
];

export const skills = skillsUnsorted
  .slice()
  .sort((a, b) => b.rating - a.rating);

export const featuredSkills = skills.slice(0, 6);
