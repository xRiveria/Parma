export type ValidSkills =
  // Web / Frontend
  | "Next.js"
  | "React"
  | "GraphQL"
  | "Angular"
  | "Vue.js"
  | "Redux"
  | "Material UI"
  | "Tailwind CSS"
  | "Bootstrap"
  | "Sass"
  | "Three.js"
  | "WebGL"
  | "Framer Motion"
  | "Figma"
  | "Webpack"
  | "Jest"
  | "Cypress"
  | "Storybook"

  // Backend
  | "Nest.js"
  | "express.js"
  | "Node.js"
  | "Socket.io"
  | "FastAPI"
  | "Flask"
  | "Django"
  | "Spring Boot"
  | "Laravel"
  | "PHP"

  // Mobile
  | "React Native"
  | "Flutter"
  | "Dart"

  // Databases / Data
  | "MongoDB"
  | "MySQL"
  | "PostgreSQL"
  | "Redis"
  | "SQL"
  | "NoSQL"
  | "Databricks"

  // Cloud / DevOps
  | "AWS"
  | "Azure"
  | "Google Cloud"
  | "Docker"
  | "Kubernetes"
  | "Git"
  | "CI/CD"
  | "Jenkins"
  | "Vercel"
  | "Netlify"
  | "Firebase"
  | "Supabase"
  | "Prisma"

  // Languages
  | "Typescript"
  | "Javascript"
  | "Python"
  | "Java"
  | "C++"
  | "C#"
  | "HTML 5"
  | "CSS 3"

  // Graphics / Engine / Realtime
  | "Vulkan"
  | "ImGui"
  | "OpenGL"
  | "Premake"
  | "Unity"
  | "Unreal Engine"
  | "Multithreading"
  | "Raytracing"
  | "Bounding Volume Hierarchy"
  | "ECS"
  | "PBR Rendering"
  | "Mono"
  | "DirectX"

  // Game / Platform / XR
  | "PhotonBolt"
  | "HoloLens"
  | "Mixed Reality"
  | "Blueprints"
  | "Android Studio"
  | "Xcode"
  | "iOS"
  | "Android"
  | "Tooling/Editor"
  | "2D Rendering"
  | "Gameplay Systems"
  | "Gameplay Prototyping"
  | "Serialization"
  | "Level Design"
  | "Tooling/Level Builder"

  // Auth
  | "Google Auth";

    

export type ValidCategory =
  | "Custom Game Engine"
  | "Graphics"
  | "Game Development"
  | "Unity"
  | "C++"
  | "Multithreading"
  | "Spatial Data Structures"
  | "Unreal Engine"
  | "Mixed Reality"
  | "Board Game"
  | "Card Game"
  | "Modding"
  | "Server Management"
    "Game Development";

export type ValidExpType = "Personal" | "Professional";

export type ValidPages =
  | "home"
  | "skills"
  | "projects"
  | "experience"
  | "contact"
  | "contributions"
  | "resume";
