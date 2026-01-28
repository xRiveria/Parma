import { ValidCategory, ValidExpType, ValidSkills } from "./constants";

interface PagesInfoInterface {
  imgArr?: string[];
  youtubeIds?: string[];
}

interface DescriptionDetailsInterface {
  paragraphs: string[];
  bullets: string[];
}

export interface ProjectInterface {
  id: string;
  type: ValidExpType;
  companyName: string;
  category: ValidCategory[];
  shortDescription: string;
  websiteLink?: string;
  githubLink?: string;
  techStack: ValidSkills[];
  startDate: Date;
  endDate: Date;
  companyLogoImg: any;
  descriptionDetails: DescriptionDetailsInterface;
  pagesInfoArr: PagesInfoInterface[];
}

export const Projects: ProjectInterface[] = [
  {
    id: "portfolio-template",
    companyName: "Nexus",
    type: "Professional",
    category: ["Custom Game Engine", "Game Development"],
    shortDescription:
      "Actively developed 3D game engine powering a third-person shooter (Left Behind); technical lead managing a 12-engineer team.",
    techStack: [
      "C++",
      "Vulkan",
      "Premake",
      "ImGui",
    ],
    startDate: new Date("2024-01-01"),
    endDate: new Date("2026-01-01"),
    companyLogoImg: "/projects/Nexus.png",
    descriptionDetails: {
      paragraphs: [
        "Nexus is a 3D game engine developed to power a third-person adventure game named Spirit Ward.",
        "As the technical lead, I'm managing a team of 12 engineers whilst working simultaneously on core architecture, resource management, Vulkan-based rendering, and CI/CD with GitHub Actions.",
      ],
      bullets: [
        "Technical lead managing a 12-engineer team.",
        "Built core engine architecture and critical runtime/editor systems including multithreading, scripting and ECS.",
        "Developed rendering and resource pipelines while supporting a live game production.",
      ],
    },
    pagesInfoArr: [
      {
        youtubeIds: ["j0O26mtvuSg", "EUskm9pVnb8"]
      }
    ],
  },
    {
    id: "cyclone",
    companyName: "Cyclone",
    type: "Personal",
    category: ["C++", "Multithreading"],
    githubLink: "https://github.com/xRiveria/Cyclone",
    shortDescription:
      "C++ multithreading library for Windows real-time apps with job-based scheduling, loop parallelization, priority control, and cross-thread dependency contexts.",
    techStack: ["C++", "Multithreading", "Premake"],
    startDate: new Date("2024-04-01"),
    endDate: new Date("2024-10-01"),
    companyLogoImg: "/projects/Cyclone.png",
    descriptionDetails: {
      paragraphs: [
        "Cyclone is a C++ multithreading library built for usage in real-time applications on Windows. It provides a simple API for launching threads based on hardware availability whilst supporting loop-based parallelizations and priority scheduling.",
        'Tasks given to Cyclone are known as "Jobs". These are automatically picked up by available threads and processed without any need for manual intervention, although this behavior can be influenced by priority settings accordingly.',
        "Users may also manage cross-thread dependencies with the usage of Contexts, a high-level construct which threads can be assigned to and waited upon.",
        "The syncing of results back to the main thread can be done through self-augmentation using event systems as required.",
        "To build the library, navigate to the Scripts folder and run CycloneBuildWindows.bat. This leverages Premake and automatically generates a C++17 solution in the project's root directory.",
      ],
      bullets: [
        "Built a C++ multithreading library for Windows real-time applications.",
        'Implemented a job system ("Jobs") with automatic worker pickup and priority scheduling.',
        "Supported loop-based parallelization and hardware-aware worker utilization.",
        "Added Contexts for cross-thread dependency management and waiting.",
        "Packaged a Premake-based build flow via CycloneBuildWindows.bat to generate a C++17 solution.",
      ],
    },
    pagesInfoArr: [],
  },
  {
    id: "ithildin",
    companyName: "Ithildin",
    type: "Personal",
    category: ["C++", "Graphics", "Spatial Data Structures"],
    githubLink: "https://github.com/xRiveria/Ithildin",
    shortDescription:
      "Vulkan RTX raytracing engine with real-time GUI controls, multithreading, BVH/AABB optimizations, and high-FPS performance.",
    techStack: ["C++", "Vulkan", "Raytracing", "Bounding Volume Hierarchy", "ImGui", "Multithreading"],
    startDate: new Date("2022-01-01"),
    endDate: new Date("2022-12-01"),
    companyLogoImg: "/projects/Ithildin.png",
    descriptionDetails: {
      paragraphs: [
        `Ithildin, or "Starlight" in Sindarian, is a raytracing engine implemented with Vulkan using NVIDIA's RTX raytracing extension.`,
        `Inspired by Peter Shirley's popular series of books, a custom GUI is added for real-time parameter changes.`,
        `With multithreading support, BVH tree and AABB ray intersection optimizations, the cover scene of the first book reaches ~140 FPS using 8 rays per pixel and up to 16 bounces, although I suspect performance can further be improved in various places.`,
      ],
      bullets: [
        "Implemented Vulkan raytracing using NVIDIA RTX extensions.",
        "Built a custom GUI for real-time parameter changes during rendering.",
        "Optimized performance using multithreading, BVH, and AABB intersection improvements.",
      ],
    },
    pagesInfoArr: [
      {
        imgArr: ["/projects/Ithildin/CornelBox.png", "/projects/Ithildin/Worlds.png", "/projects/Ithildin/Heatmap.png"]
      }
    ],
  },
  {
    id: "spatium",
    companyName: "Spatium",
    type: "Personal",
    category: ["C++","Spatial Data Structures"],
    shortDescription:
      "Collection of spatial partitioning techniques (BVH, K-D Tree, Quadtree, Octree) optimized for real-time use with strong performance on dense scenes and large point searches.",
    githubLink: "https://github.com/xRiveria/Spatium",
    techStack: ["C++", "Bounding Volume Hierarchy", "Multithreading", "Premake"],
    startDate: new Date("2021-07-01"),
    endDate: new Date("2022-07-01"),
    companyLogoImg: "/projects/Spatium.png",
    descriptionDetails: {
      paragraphs: [
        "A collection of spacial partitioning techniques made for personal use in real-time applications as well as coursework.",
        "The BVH implementations can comfortably handle up to 16000 meshes in an unevenly dense 3D scene, while the K-D Tree itself struggles at around 870000 triangles as tested with the Stanford Dragon model.",
        "I suspect that performance can be (much) further improved with additional optimizations targeted at mid-build operations which I've taken some liberty around for experimentations (such as naive rotations and sorts).",
        "The Quadtree and Octree implementations are exceptionally simple yet effective. A search test of 10 million points yields speed improvements 1/18th the cost of a regular search.",
        "Optimizations were used where possible (bit packing, locational codes, etc.) to save on memory usage where possible.",
        "Techniques - BVH: Top Down: K-Split Points Approach with Surface Area Heuristics. Bottom Up: Two Pass Merge Approach (Best Pair Filtering with Priority Queues, Candidate Merging). Incremental: Dynamic Insertion with Volume Heuristics & Self Balancing.",
        "Facinatingly, with a two-pass approach for bottom-up building, real-time performance sometimes surpasses that of the top-down approach. I believe this could be due to the number of split points I'm sampling along each axis (100), although data locality could be distinctive factor as well.",
        "Techniques - K-D Tree: Using Surface Area Heuristics, we sample a set number of uniform positions within the AABB along each axis and pick the one with the lowest cost as the split point. Heavy optimizations are used here to reduce the memory usage of individual tree nodes to improve traversal performance.",
        "To build the project, simply navigate to the Scripts folder and run SpatiumBuildWindows.bat. This will leverage Premake and automatically generate a C++17 solution in the project's root directory.",
      ],
      bullets: [
        "Implemented BVH variants: top-down K-split + SAH, bottom-up two-pass merge with PQ filtering, and incremental insertion with volume heuristics & self-balancing.",
        "Validated BVH handling ~16,000 meshes in an unevenly dense 3D scene; tested K-D Tree at ~870,000 triangles (Stanford Dragon).",
        "Built SAH-based K-D Tree splitting by sampling uniform AABB positions; optimized node memory footprint for faster traversal.",
        "Implemented Quadtree and Octree with memory optimizations (bit packing, locational codes) for large point queries.",
        "Achieved ~18x speed improvements in a 10M-point search benchmark versus regular search.",
        "Provided a Premake-based Windows build flow via SpatiumBuildWindows.bat to generate a C++17 solution.",
      ],
    },
    pagesInfoArr: [],
  },
  {
    id: "celestia",
    companyName: "Celestia",
    type: "Professional",
    category: ["Custom Game Engine", "Graphics", "Game Development"],
    shortDescription:
      "Custom 2D game engine built from scratch to ship a souls-like action platformer (Ingenium), focusing on performance, usability, and tooling.",
    techStack: ["C++", "C#", "OpenGL", "Mono", "ECS", "ImGui"],
    startDate: new Date("2023-01-01"),
    endDate: new Date("2024-12-01"),
    companyLogoImg: "/projects/Celestia.png",
    descriptionDetails: {
      paragraphs: [
        "Celestia is a game engine made for the creation of 2D games.",
        "Armed with a large suite of tools to facilitate flexible design decisions whilst emphasizing on performance and usability, it was used to ship a souls-like action platformer named Ingenium.",
        "Leveraging past experience, I led a team of six engineers to create Celestia from scratch over the course of six months, myself handling its architecture alongside critical engine systems including its renderer, profiler, editor and C# .NET scripting.",
        "This experience has been an incredible learning opportunity for myself, especially in terms of team management, cross-departmental workflows and the handling of evolving technical requirements.",
      ],
      bullets: [
        "Led a team of six engineers to build a 2D game engine from scratch in six months.",
        "Owned the engine architecture and implemented key systems (renderer, profiler, editor, C#/.NET scripting).",
        "Shipped a complete souls-like action platformer (Ingenium) on top of the engine.",
        "Gained deep experience in team leadership, workflows, and evolving technical requirements.",
      ],
    },
    pagesInfoArr: [
      {
        imgArr: ["/projects/Celestia/TitleScene.png", "/projects/Celestia/TileEditor.png", "/projects/Celestia/Profiler.png"],
        youtubeIds: ["nbFN5XPjlU8"]
      }
    ],
  },
  {
    id: "aurora",
    companyName: "Aurora",
    type: "Personal",
    category: ["Custom Game Engine", "Graphics", "Game Development"],
    shortDescription:
      "High-performance 3D game engine inspired by Decima, featuring PBR rendering, custom ECS, multithreading, physics, and C# scripting.",
    githubLink: "https://github.com/xRiveria/Aurora",
    techStack: ["C++", "C#", "DirectX", "Vulkan", "OpenGL", "PBR Rendering", "ECS", "Multithreading"],
    startDate: new Date("2021-01-01"),
    endDate: new Date("2021-12-01"),
    companyLogoImg: "/projects/Aurora.png",
    descriptionDetails: {
      paragraphs: [
        "Aurora, named after what I consider to be the most beautiful natural wonder in the world, is a game engine with an emphasis on architectural quality and high performance, featuring discipline-based editor contexts and a mature tools framework.",
        "Inspired by Guerrilla Game's Decima Engine in many aspects, Aurora is the result of my never-ending quest to understand how things work behind the scenes in games.",
        "It currently features full PBR-based rendering, a custom ECS, multithreading, physics, C# scripting amongst other fun features.",
      ],
      bullets: [
        "Built a high-performance 3D engine inspired by Decima with a strong focus on architecture quality.",
        "Implemented PBR rendering, a custom ECS, multithreading, physics, and C# scripting.",
        "Designed discipline-based editor contexts and a mature tools framework for scalable workflows.",
      ],
    },
    pagesInfoArr: [],
  },
  {
    id: "ingenium",
    companyName: "Ingenium",
    type: "Professional",
    category: ["Game Development", "Custom Game Engine"],
    shortDescription:
      "2D souls-like platformer built on a custom engine; technical lead owning architecture and core systems while managing a six-engineer team.",
    techStack: ["C++", "C#", "OpenGL", "Mono", "ECS", "ImGui"],
    startDate: new Date("2023-01-01"),
    endDate: new Date("2024-12-01"),
    companyLogoImg: "/projects/Ingenium.png",
    descriptionDetails: {
      paragraphs: [
        "Ingenium is a 2D souls-like platformer that follows Wally, a younger engineer who must defeat invaders from another realm wielding magical crystals brimming with ancient power.",
        "Apart from managing the engineering team as its technical lead, I took charge of the engine's architecture whilst implementing various core systems including its ECS, renderer, C# .NET scripting and editor tools (inspector/hierarchy, etc.).",
        "The ever-changing scope and technical requirements of the project was both a huge challenge and learning opportunity for myself in part due to architectural revisions deep into production needed to accommodate timeline needs.",
        "Leveraging prior experience, I was able to navigate the team through technical challenges and deliver a successful product after six months of cumulative work.",
      ],
      bullets: [
        "Technical lead managing the engineering team through a full production cycle.",
        "Owned engine architecture and implemented ECS, renderer, C#/.NET scripting, and editor tooling.",
        "Handled late-stage architectural revisions to meet shifting scope and timelines.",
        "Delivered the game successfully after six months of development and playtesting.",
      ],
    },
    pagesInfoArr: [
      {
        youtubeIds: ["BrXennxQS5A"],
      },
    ],
  },
  {
    id: "duck-quest",
    companyName: "Duck Quest",
    type: "Professional",
    category: ["Game Development", "Custom Game Engine"],
    shortDescription:
      "2D deck-building action platformer delivered in six weeks; technical lead guiding architecture, tooling, and production timelines.",
    techStack: ["C++", "OpenGL", "ECS", "ImGui"],
    startDate: new Date("2023-01-01"),
    endDate: new Date("2023-12-01"),
    companyLogoImg: "/projects/DuckQuest.png",
    descriptionDetails: {
      paragraphs: [
        "Duck Quest is a 2D deck-building action platformer featuring a modern day duck who is mysteriously summoned to a parallel universe by an ancient duck civilization.",
        "There, he must defeat the evil Quackthulu and save his kind from corruption.",
        "As the technical lead of the project, I had to provide guidance with regards to engine architecture, version control and production timelines whilst simultaneously handling coding responsibilities involving rendering, serialization, UI and editor tooling.",
        "One of the challenges here involved careful treading of the C++ STL/external libraries without overcomplicating the codebase for members new to the language.",
        "The game was delivered with huge success after six weeks of rigorous development and playtests.",
      ],
      bullets: [
        "Technical lead responsible for architecture decisions, version control, and delivery timelines.",
        "Implemented core systems including rendering, serialization, UI, and editor tooling.",
        "Balanced STL/external library usage to keep the codebase accessible for newer C++ developers.",
        "Delivered a polished game after six weeks of intensive iteration and playtesting.",
      ],
    },
    pagesInfoArr: [
      {
        youtubeIds: ["d_K7fHC0Jfo"]
      }
    ],
  },
  {
    id: "legend-of-the-golden-tortoise",
    companyName: "Legend of the Golden Tortoise",
    type: "Professional",
    category: ["Game Development", "Custom Game Engine"],
    shortDescription:
      "2D stealth dungeon crawler built in C; technical lead owning engine architecture, ECS, renderer, and level builder while mentoring a mostly non-programming team.",
    techStack: ["C++", "OpenGL", "ImGui"],
    startDate: new Date("2022-01-01"),
    endDate: new Date("2022-12-01"),
    companyLogoImg: "/projects/LegendOfTheGoldenTortoise.png",
    descriptionDetails: {
      paragraphs: [
        "Legend of the Golden Tortoise is a 2D stealth-based dungeon crawler featuring Izumi, a ninja who must traverse through an abandoned pagoda, overcome its dangers and claim the treasures within for his people.",
        "Apart from being constrained to using C, a huge part of the challenge came from onboarding difficulties as a majority of the team had no prior coding experience.",
        "As the team's technical lead, I had to provide significant guidance for tasks and version control whilst establishing proper coding conventions for the new team to build good habits ahead of their future programming careers.",
        "Technical responsibilities wise, I took charge of the engine's architecture, ECS, renderer, level builder and various gameplay mechanics.",
        "After various revisions and playtests, the game was successfully delivered after six weeks.",
      ],
      bullets: [
        "Led development under a strict C-only constraint.",
        "Owned engine architecture, ECS, renderer, level builder, and gameplay mechanics.",
        "Mentored and onboarded a largely inexperienced team with strong conventions and workflows.",
        "Delivered a complete game after six weeks of iteration and playtesting.",
      ],
    },
    pagesInfoArr: [
      {
        youtubeIds: ["0b-zHzqd8H4"]
      }
    ],
  },
  {
    id: "deck-clash",
    companyName: "Deck Clash",
    type: "Personal",
    category: ["Game Development", "Unity"],
    shortDescription:
      "Clash Royale-inspired Unity prototype expanding a royale framework with new units, towers, and a custom mana system for rapid gameplay experimentation.",
    techStack: ["C++", "ECS", "2D Rendering", "Tooling/Level Builder"],
    startDate: new Date("2021-01-01"),
    endDate: new Date("2021-12-01"),
    companyLogoImg: "/projects/DeckClash.png",
    descriptionDetails: {
      paragraphs: [
        "Built on top of Unity's royale framework, Deck Clash expands upon the original by adding more units, tower types and introduces rebalances across the board.",
        "A custom mana system is also introduced for both the player and enemy AI.",
        "Inspired by Clash Royale, I started working on Deck Clash to keep myself updated on Unity's ever evolving technology as I continued working on my personal game engine and endeavors in life.",
        "With an abundance of tools to continuously explore new concepts and features, I can consistently create unique units and try them out in the field on the go.",
        "Deck Clash now serves as a way for me to quickly prototype and foolproof ideas as I use them in future games.",
      ],
      bullets: [
        "Expanded a Unity royale framework with new units, tower types, and balance changes.",
        "Implemented a custom mana system for both player and AI.",
        "Used as a rapid prototyping sandbox for future gameplay and systems exploration.",
      ],
    },
    pagesInfoArr: [],
  },
  {
    id: "the-stone-guardian",
    companyName: "The Stone Guardian",
    type: "Personal",
    category: ["Game Development", "Unreal Engine"],
    shortDescription:
      "Soulsborne-inspired hack-and-slash action RPG built in Unreal Engine; solo project focused on combat, level building, and blueprint programming.",
    techStack: ["Unreal Engine", "Blueprints", "Level Design"],
    startDate: new Date("2020-01-01"),
    endDate: new Date("2020-12-01"),
    companyLogoImg: "/projects/TheStoneGuardian.gif",
    descriptionDetails: {
      paragraphs: [
        "The Stone Guardian is a hack and slash action RPG inspired by Dark Souls and Soulsborne.",
        "The game follows a lone adventurer on his journey to cull ancient stone guardians that had awoken in a forest known as the Undying Woods.",
        "As my first foray into Unreal Engine, I found things to be quite manageable due to prior experiences in game development.",
        "Challenges revolved around camera movements and animation events, although they were eventually solved by researching further online.",
      ],
      bullets: [
        "Built a Soulsborne-inspired action RPG prototype in Unreal Engine.",
        "Created the level and core gameplay using Blueprints and available asset ecosystems.",
        "Solved key gameplay challenges around camera movement and animation events through iteration and research.",
      ],
    },
    pagesInfoArr: [],
  },
  {
    id: "solus",
    companyName: "Solus: Remnants of Attera",
    type: "Professional",
    category: ["Game Development", "Unity"],
    shortDescription:
      "Action adventure hack-and-slash RPG; creative director leading a 9-person team, owning gameplay systems and marketing until project paused in 2020.",
    techStack: ["Unity", "C#", "Gameplay Systems"],
    startDate: new Date("2019-01-01"),
    endDate: new Date("2020-12-01"),
    companyLogoImg: "/projects/Solus.png",
    descriptionDetails: {
      paragraphs: [
        "Solus: Remnants of Attera is an action adventure, hack and slash RPG which follows Ark, a boy whose village comes under attack from otherworldly invaders known only as the Legion.",
        "Serving as the game's Creative Director, I led a 9 member team in crafting the game in its entirety.",
        "Initial issues revolved around incoherent game pillars, hardware failures and design blockades, although they were subsequently remedied by the game's second prototype.",
        "In addition, I programmed all core gameplay systems ranging from complex item classes to UI integrations.",
        "Finally, I led all marketing and promotional efforts across all social media platforms.",
        "As of 2020, the project has been put on indefinite hold due to team commitments.",
      ],
      bullets: [
        "Creative Director leading a 9-person team across design, development, and production.",
        "Implemented core gameplay systems including itemization and UI integrations.",
        "Drove marketing and promotional efforts across social platforms.",
        "Resolved early design/pillar issues through a second prototype before pausing the project in 2020.",
      ],
    },
    pagesInfoArr: [
      {
        youtubeIds: ["HGySy3gEe2c"]
      }
    ],
  },
  {
    id: "aeternum",
    companyName: "Aeternum: Destiny's Call",
    type: "Professional",
    category: ["Game Development", "Unity"],
    shortDescription:
      "Action MMORPG built in Unity; led a 3-person team, implemented the full game and a successful PhotonBolt multiplayer prototype under tight constraints.",
    techStack: ["Unity", "C#", "PhotonBolt"],
    startDate: new Date("2018-01-01"),
    endDate: new Date("2019-12-01"),
    companyLogoImg: "/projects/Aeternum.png",
    descriptionDetails: {
      paragraphs: [
        "Aeternum: Destiny's Call is an action MMORPG which draws heavy inspiration from classics such as the Diablo and Torchlight series.",
        "The project was my first \"AAA\" take on game development. I led a team of three talented developers in crafting out the entire game across multiple disciplines, filling out roles when needed.",
        "Initial challenges revolved around a lack of time and monetary budget, which led to project scaling and outsourcing efforts.",
        "In addition to programming the entire game, it was also my first attempt on multiplayer using PhotonBolt within Unity, which was ultimately highly successful and brought new dynamics to the gameplay.",
      ],
      bullets: [
        "Led a 3-person team to build an action MMORPG prototype in Unity.",
        "Programmed core gameplay systems across multiple disciplines under time/budget constraints.",
        "Prototyped multiplayer using PhotonBolt, successfully introducing networked gameplay dynamics.",
      ],
    },
    pagesInfoArr: [
      {
        youtubeIds: ["F0gQ6X_e_XM"]
      }
    ],
  },
  {
    id: "my-monster-story",
    companyName: "My Monster Story",
    type: "Professional",
    category: ["Game Development", "Unity", "Mixed Reality"],
    shortDescription:
      "Mixed reality pet simulation for Microsoft HoloLens; sole programmer integrating spatial mapping, gestures, and voice controls for real-world interaction.",
    techStack: ["Unity", "C#", "HoloLens", "Mixed Reality"],
    startDate: new Date("2019-01-01"),
    endDate: new Date("2019-12-01"),
    companyLogoImg: "/projects/MyMonsterStory.png",
    descriptionDetails: {
      paragraphs: [
        "My Monster Story is a mixed reality pet simulation game which revolves around fantasy pets, items and furniture interacting with the player's environment in real time with voice commands, touch gestures and spatial mapping.",
        "Built for the Microsoft HoloLens, this project was my first time developing for a completely brand new platform, consisting of APIs and technology I had never been exposed to.",
        "Serving as the game's sole programmer, I spent 2 weeks getting up to speed with integration within Unity and the wearable itself, before building out the game in the remaining 2 months.",
        "The final product is now actively used as a tech demonstration in schools.",
      ],
      bullets: [
        "Sole programmer for a Microsoft HoloLens mixed reality pet simulation.",
        "Integrated voice, gesture, and spatial mapping interactions into a Unity project.",
        "Delivered a demonstration-ready product now used in schools.",
      ],
    },
    pagesInfoArr: [
      {
        youtubeIds: ["nrYfRmuXkHU"]
      }
    ],
  },
  {
    id: "dumpster-dining",
    companyName: "Dumpster Dining",
    type: "Professional",
    category: ["Game Development", "Unity"],
    shortDescription:
      "Mobile cooking simulation adventure for iOS/Android; lead designer/programmer building touchscreen-driven minigames and Unity-to-native platform integrations.",
    techStack: ["Unity", "C#", "Android Studio"],
    startDate: new Date("2019-01-01"),
    endDate: new Date("2019-12-01"),
    companyLogoImg: "/projects/DumpsterDining.png",
    descriptionDetails: {
      paragraphs: [
        "Dumpster Dining is a mobile based cooking simulation adventure consisting of unique minigames, mind-throbbing puzzles and an engaging story which drives players to achieve that perfect three stars rating on the dishes they conjure.",
        "Built for iOS and Android devices, I served as the project's lead game designer and programmer.",
        "Initial design roadblocks revolved around being confined to a touchscreen, although deeper research allowed us to circumvent and come up with unique levels made possible only with mobile devices.",
        "The project also gave me insight on how to work with various APIs such as Android Studio and Xcode as I integrated them with the game within Unity.",
      ],
      bullets: [
        "Lead designer/programmer for a mobile cooking simulation adventure.",
        "Designed and implemented touchscreen-first minigames and puzzles.",
        "Integrated Unity workflows with Android Studio and Xcode toolchains.",
      ],
    },
    pagesInfoArr: [
      {
        youtubeIds: ["EazS6jGWpTA"]
      }
    ],
  },
  {
    id: "incubus",
    companyName: "Incubus: The Last Tape",
    type: "Personal",
    category: ["Game Development", "Unity"],
    shortDescription:
      "Solo psychological horror project; handled design, writing, asset creation, programming, VFX, and sound with full creative control.",
    techStack: ["Unity", "C#", "Gameplay Systems"],
    startDate: new Date("2018-01-01"),
    endDate: new Date("2018-12-01"),
    companyLogoImg: "/projects/Incubus.gif",
    descriptionDetails: {
      paragraphs: [
        "Incubus: The Last Tape follows an archaeologist by the name of Ryan Drake, whose treasure hunting adventures leads him to seek out Iram of the Pillars, a lost city mentioned in the Qur’an rumored to harbor massive amounts of gold and riches.",
        "However, as he documents the experience with his camera and seeks out the forgotten legend, a mysterious entity seeks to warp Ryan’s senses as a battle ensues between his deepest fears and his innermost desires.",
        "The project was a solo endeavour by myself as I handled all aspects of design, writing, asset creation, programming, VFX and sound design.",
        "As I continued to draw inspiration from classics such as Slenderman and Amnesia, it was an absolute joy to work on this game with full creative freedom and I learnt many things that would come to benefit me in future endeavours.",
      ],
      bullets: [
        "Solo developer: owned design, writing, assets, programming, VFX, and sound.",
        "Built a narrative-driven horror experience inspired by classic psychological horror games.",
        "Learned end-to-end production skills through full creative ownership.",
      ],
    },
    pagesInfoArr: [],
  },
  {
    id: "ancient-tidings",
    companyName: "Ancient Tidings",
    type: "Personal",
    category: ["Game Development", "Board Game"],
    shortDescription:
      "Physical board game centered on disasters and asymmetric civilizations; led narrative design and built a companion app for scoring/support tools.",
    techStack: ["Gameplay Systems"],
    startDate: new Date("2018-01-01"),
    endDate: new Date("2018-12-01"),
    companyLogoImg: "/projects/AncientTidings.png",
    descriptionDetails: {
      paragraphs: [
        "Ancient Tidings is a physical board game revolving around the recurring theme of disasters.",
        "Players take control of unique civilisations that are warped from their respective timelines onto an island filled with darkness and instability.",
        "Working together with a group of designers, we had one core pillar to work with: there would be no direct conflict across the board.",
        "This severely led to design blockades, although we eventually shifted focus to having disasters and player placed traps drive conflict across the civilisations.",
        "I also drafted out the game's story and designed a companion application to primarily aid in point tracking in addition to other functionalities.",
      ],
      bullets: [
        "Co-designed a disaster-themed board game with asymmetric civilizations and emergent conflict.",
        "Helped resolve early design blockades by shifting conflict to disaster/trap systems.",
        "Drafted the narrative and built a companion app for scoring and gameplay utilities.",
      ],
    },
    pagesInfoArr: [],
  },
  {
    id: "amalgam",
    companyName: "Amalgam",
    type: "Personal",
    category: ["Game Development", "Card Game"],
    shortDescription:
      "Physical card game about combining minions into stronger forms; lead designer balancing stats/abilities and combat pacing for playtests.",
    techStack: ["Gameplay Systems"],
    startDate: new Date("2018-01-01"),
    endDate: new Date("2018-12-01"),
    companyLogoImg: "/projects/Amalgam.png",
    descriptionDetails: {
      paragraphs: [
        "Amalgam is a physical card game revolving around the theme of amalgamations.",
        "In the aftermath of a nuclear fallout, society has crumbled and four mad scientists now wrestle for control over the world.",
        "As the project's lead designer, I drew combat inspiration from popular classics such as Duel Masters and Yugioh whilst carefully balancing out stats and abilities across the board.",
        "As combining minions to form stronger amalgamations was a recurring theme in the game, we had to ensure that there was a give and take when it came to resource management and board control.",
        "The final product was an absolute blast, and received widespread applaud in its initial public playtesting session.",
      ],
      bullets: [
        "Lead designer for a physical card game with minion-combination mechanics.",
        "Balanced stats/abilities and resource systems inspired by classic TCG combat design.",
        "Iterated through playtests to refine board control and pacing.",
      ],
    },
    pagesInfoArr: [],
  },
  {
    id: "tales-of-lunaria",
    companyName: "Tales of Lunaria",
    type: "Professional",
    category: ["Modding", "Server Management", "Game Development"],
    shortDescription:
      "High-end Minecraft RPG server with polished plugins and external infrastructure (wiki/analytics); peaked at 50 DAU in beta before shutdown in late 2018.",
    techStack: ["Java", "Gameplay Systems"],
    startDate: new Date("2018-01-01"),
    endDate: new Date("2018-12-01"),
    companyLogoImg: "/projects/TalesOfLunaria.png",
    descriptionDetails: {
      paragraphs: [
        "Tales of Lunaria was my second foray into gaming servers after graduating high school, which was the leading reason behind my previous server's closure.",
        "Combining all development expertise from Sylvan across the board, Lunaria boasted high-end hardware, polished plugins and a wide array of external infrastructure ranging from a full story wiki to professional analytic solutions.",
        "At its peak in beta, Lunaria saw peak populations of 50 daily active players across its two month tenure, although the server was never officially fully released due to other opportunities I had to take up to further my studies.",
        "The project ceased operations in late 2018, which also brought my professional career in server hosting and management to an end.",
      ],
      bullets: [
        "Operated a Minecraft RPG server with high-end infrastructure, wiki, and analytics.",
        "Reached ~50 daily active players during beta over a two-month run.",
        "Shut down in late 2018 due to shifting commitments and education priorities.",
      ],
    },
    pagesInfoArr: [],
  },
  {
    id: "a-space-odessey",
    companyName: "A Space Odessey",
    type: "Personal",
    category: ["Game Development", "Unity"],
    shortDescription:
      "Unity sci-fi project set on Mars; expanded scope into a full environment showcase with a second combat level inspired by Space Invaders.",
    techStack: ["Unity", "C#", "Gameplay Prototyping"],
    startDate: new Date("2017-01-01"),
    endDate: new Date("2017-12-01"),
    companyLogoImg: "/projects/ASpaceOdessey.gif",
    descriptionDetails: {
      paragraphs: [
        "A Space Odessey expanded way beyond its original scope and remains one of my fondest projects to date.",
        "After years of research and preparation, Humanity has finally taken up residence on the red planet - Mars. Hostile invaders from Andromeda threaten the colony.",
        "As one of my first few projects in Unity, I had a lot of fun learning about particle effects, timelines and rendering pipelines whilst assembling sci-fi assets into a full fledged base.",
        "Whilst this was more of a showcase of environmental design skills, I also built a second level where players fight off invading spacecrafts similar to the classic Space Invaders.",
      ],
      bullets: [
        "Built a Unity sci-fi project featuring a Mars colony environment showcase.",
        "Explored particles, timelines, and rendering pipelines early in my Unity journey.",
        "Created an additional combat level inspired by Space Invaders.",
      ],
    },
    pagesInfoArr: [],
  },
  {
    id: "sylvan",
    companyName: "Sylvan",
    type: "Professional",
    category: ["Modding", "Server Management", "Game Development"],
    shortDescription:
      "Long-running Minecraft RPG server with custom universe and monetization; led technical implementation, recruitment, and marketing, peaking at 150 daily players.",
    techStack: ["Java", "Gameplay Systems"],
    startDate: new Date("2015-01-01"),
    endDate: new Date("2016-12-01"),
    companyLogoImg: "/projects/Sylvan.png",
    descriptionDetails: {
      paragraphs: [
        "Sylvan was a gaming server which provided a unique RPG experience coupled with player abilities, factions and a whole fantasy universe built upon the foundations of Minecraft.",
        "It ran for over a year, which saw peak populations of 150 players daily and monetisation based upon cosmetic microtransactions.",
        "I led all forms of technical implementations, design, level building, assets outsourcing, recruitment and marketing efforts, which brought me my first insights into game development and external tools such as IntelliJ and cPanel.",
        "By the end of the server's lifespan, the team grew to 8 members across multiple disciplines.",
        "In October 2016, I passed on ownership to my co-founder to focus on schooling, with the server officially being closed in December that year.",
      ],
      bullets: [
        "Operated a Minecraft RPG server for 1+ year with cosmetics-based monetization.",
        "Led engineering, design, operations, recruitment, outsourcing, and marketing.",
        "Reached ~150 daily active players at peak and grew the team to 8 members.",
        "Transferred ownership in Oct 2016; server closed Dec 2016.",
      ],
    },
    pagesInfoArr: [],
  },
];

export const featuredProjects = Projects.slice(0, 3);
