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
      "A modern open-source C++ engine focused on real-time rendering, ECS, and practical production-style architecture.",
    repoOwner: "PanosK92",
    link: "https://github.com/PanosK92/SpartanEngine",
  },
  {
    repo: "Hazel Engine",
    contibutionDescription:
      "An educational C++ engine by The Cherno designed to teach how a game engine is built from the ground up.",
    repoOwner: "TheCherno",
    link: "https://github.com/TheCherno/Hazel",
  },
  {
    repo: "Wicked Engine",
    contibutionDescription:
      "A high-performance open-source engine showcasing advanced real-time graphics techniques like raytracing and modern GPU pipelines.",
    repoOwner: "turanszkij",
    link: "https://github.com/turanszkij/WickedEngine",
  },
];

export const featuredContributions: contributionsInterface[] =
  contributionsUnsorted.slice(0, 3);
