export interface contributionsInterface {
  repo: string;
  contibutionDescription: string;
  repoOwner: string;
  link: string;
}

export const contributionsUnsorted: contributionsInterface[] = [
  {
    repo: "Spartan Engine",
    contibutionDescription:
      "Open-source Next.js portfolio template. Trusted and forked by developers worldwide (130+ GitHub stars).",
    repoOwner: "PanosK92",
    link: "https://github.com/PanosK92/SpartanEngine",
  },
  {
    repo: "Hazel Engine",
    contibutionDescription:
      "Modern Next.js SaaS template. Production-ready starter for devs and AI startups (30+ GitHub stars).",
    repoOwner: "TheCherno",
    link: "https://github.com/TheCherno/Hazel",
  },
  {
    repo: "Wicked Engine",
    contibutionDescription:
      "Modern Next.js SaaS template. Production-ready starter for devs and AI startups (30+ GitHub stars).",
    repoOwner: "turanszkij",
    link: "https://github.com/turanszkij/WickedEngine",
  },
];

export const featuredContributions: contributionsInterface[] =
  contributionsUnsorted.slice(0, 3);
