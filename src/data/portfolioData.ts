export interface Project {
  id: string;
  title: string;
  italicTitle?: string;
  subtitle: string;
  category: string;
  year: string;
  client: string;
  role: string;
  description: string;
  detailedText: string;
  image: string;
  aspect: string;
  colSpan: string;
  tags: string[];
  metrics?: string;
  liveUrl?: string;
}

export interface JournalEntry {
  id: string;
  title: string;
  italicWord?: string;
  excerpt: string;
  content: string[];
  readTime: string;
  date: string;
  category: string;
  image: string;
}

export interface ExplorationItem {
  id: string;
  title: string;
  caption: string;
  year: string;
  category: string;
  rotation: string;
  image: string;
}

export const PROJECTS: Project[] = [
  {
    id: "automotive-motion",
    title: "Automotive Motion",
    italicTitle: "Motion",
    subtitle: "High-speed telemetry & procedural cinematography",
    category: "Motion & System UI",
    year: "2026",
    client: "Nocturnal HyperSport",
    role: "Lead Interactive Director",
    description: "An immersive real-time digital cockpit and promotional experience blending cinematic light-trailing rendering with ultra-responsive telemetry visualization.",
    detailedText: "Engineered a low-latency WebGL telemetry instrumentation suite synchronized with high-definition track cameras. Users can examine aerodynamics, cornering G-forces, and thermal dissipation metrics in real-time with sub-16ms render passes.",
    image: "/src/assets/images/work_automotive_motion_1794063986087.jpg",
    aspect: "aspect-[16/10]",
    colSpan: "md:col-span-7",
    tags: ["WebGL", "Three.js", "HLS Stream", "GSAP", "Telemetry"],
    metrics: "Sub-16ms telemetry latency · 2.4M live event viewers",
    liveUrl: "https://example.com/nocturnal"
  },
  {
    id: "urban-architecture",
    title: "Urban Architecture",
    italicTitle: "Architecture",
    subtitle: "Brutalist forms & daylighting simulation",
    category: "Spatial Archive",
    year: "2025",
    client: "Chicago Metropolitan Studio",
    role: "Creative Technologist",
    description: "Interactive architectural monograph capturing modern brutalist structures, concrete textures, and shifting sun angles.",
    detailedText: "Created an interactive daylighting study engine allowing architectural students and preservationists to simulate seasonal sun paths across cantilevered facades, volumetric atrium light wells, and raw board-formed concrete surfaces.",
    image: "/src/assets/images/work_urban_architecture_1794063986088.jpg",
    aspect: "aspect-[4/3] md:aspect-auto md:min-h-[380px]",
    colSpan: "md:col-span-5",
    tags: ["Architectural 3D", "Photogrammetry", "Spatial UI"],
    metrics: "AIA Design Honor 2025 · 450+ archival structures",
    liveUrl: "https://example.com/architecture"
  },
  {
    id: "human-perspective",
    title: "Human Perspective",
    italicTitle: "Perspective",
    subtitle: "Monochrome portraiture & essay editorial",
    category: "Editorial Direction",
    year: "2025",
    client: "Kinetics Quarterly",
    role: "Art Director & Lead Developer",
    description: "A digital editorial essay platform featuring intimate chiaroscuro portraits of contemporary craftspeople and thinkers.",
    detailedText: "Explores the psychological texture of creative solitude through long-form interviews and high-fidelity 35mm film scans. Includes responsive audio soundscapes recorded directly inside each subject's studio environment.",
    image: "/src/assets/images/work_human_perspective_1794063987798.jpg",
    aspect: "aspect-[4/3] md:aspect-auto md:min-h-[380px]",
    colSpan: "md:col-span-5",
    tags: ["Editorial", "Audio Synthesis", "Typography", "Film Grain"],
    metrics: "Best Online Monograph · 98% reader retention",
    liveUrl: "https://example.com/perspective"
  },
  {
    id: "brand-identity",
    title: "Brand Identity",
    italicTitle: "Identity",
    subtitle: "Tactile packaging & Swiss typographic discipline",
    category: "Brand Systems",
    year: "2026",
    client: "Aethel Luxury Goods",
    role: "Principal Brand Designer",
    description: "Comprehensive visual identity and physical-to-digital unboxing experience for an artisan atelier.",
    detailedText: "Established a unified visual language spanning embossed dark cotton stationery, foiled micro-packaging, custom variable typographic cutouts, and an e-commerce platform that mirrors the physical weight and texture of fine paper.",
    image: "/src/assets/images/work_brand_identity_1794063988117.jpg",
    aspect: "aspect-[16/10]",
    colSpan: "md:col-span-7",
    tags: ["Brand Architecture", "Custom Type", "Physical Mockups", "Next-Gen UI"],
    metrics: "+180% luxury conversion · TDC Typography Award",
    liveUrl: "https://example.com/aethel"
  }
];

export const JOURNAL_ENTRIES: JournalEntry[] = [
  {
    id: "revit-mep-electrical",
    title: "Autodesk Certified Professional: Revit for Electrical Design",
    italicWord: "Revit",
    excerpt: "Comprehensive certification in BIM modeling, cable tray routing, panel boards, and clash-free MEP coordination.",
    content: [
      "Mastery in electrical design automation, parametric Revit family creation, and automated panel board load schedules.",
      "Hands-on implementation across multi-story commercial, residential, and healthcare developments in Egypt and Saudi Arabia.",
      "Full compliance with IFC protocols, BIM Execution Plans (BEP), and multidisciplinary worksharing workflows."
    ],
    readTime: "Autodesk Certified",
    date: "Credential ID: ACP-9942",
    category: "BIM & Revit",
    image: "/src/assets/images/work_automotive_motion_1794063986087.jpg"
  },
  {
    id: "navisworks-clash-detection",
    title: "BIM Coordination & Clash Detection (Navisworks Manage)",
    italicWord: "Coordination",
    excerpt: "Multi-disciplinary MEP clash matrix resolution, 4D construction phasing, and BCF issue reporting.",
    content: [
      "Specialized in federated model clash detection between electrical containment, HVAC ducts, plumbing, and structural frames.",
      "Resolving spatial interferences before on-site fabrication and installation to eliminate costly rework and project delays.",
      "Proven clash matrix coordination deployed on large-scale hospitality, institutional, and educational facilities."
    ],
    readTime: "Accredited Specialist",
    date: "Credential ID: NAV-7811",
    category: "BIM Coordination",
    image: "/src/assets/images/exploration_abstract_forms_1794063987094.jpg"
  },
  {
    id: "autocad-electrical-technical-office",
    title: "Electrical Shop Drawings & Technical Office Engineering",
    italicWord: "Technical",
    excerpt: "Power distribution, lighting lux calculations, single line diagrams (SLD), and technical submittals.",
    content: [
      "Preparation of precise, contractor-ready electrical shop drawings, cable routing layouts, and main/sub distribution boards.",
      "Lighting design verification using Dialux and AutoCAD electrical drafting standards.",
      "Bill of Quantities (BOQ) preparation, material take-offs, and consultant submittal approval management."
    ],
    readTime: "Technical Office",
    date: "Credential ID: ACD-6420",
    category: "Design & Shop Drawings",
    image: "/src/assets/images/work_urban_architecture_1794063986088.jpg"
  },
  {
    id: "nfpa-iec-compliance",
    title: "NFPA 70 (NEC) & IEC International Electrical Standards",
    italicWord: "Standards",
    excerpt: "Code-compliant electrical safety design, grounding & bonding, short-circuit, and voltage drop verification.",
    content: [
      "Deep expertise in applying National Electrical Code (NEC/NFPA 70) and IEC international standards.",
      "Designing reliable earthing/grounding networks, lightning protection, and short-circuit protection coordination.",
      "Ensuring all electrical technical drawings satisfy municipality, civil defense, and international building authorities."
    ],
    readTime: "Code Compliance",
    date: "Credential ID: SEC-3195",
    category: "Codes & Standards",
    image: "/src/assets/images/work_brand_identity_1794063988117.jpg"
  }
];

export const EXPLORATIONS: ExplorationItem[] = [
  {
    id: "exp-1",
    title: "Obsidian Helix",
    caption: "Procedural raymarched chrome topology with real-time anisotropic reflections.",
    year: "2026",
    category: "Shader Exploration",
    rotation: "-rotate-2",
    image: "/src/assets/images/exploration_abstract_forms_1794063987094.jpg"
  },
  {
    id: "exp-2",
    title: "Kinetic Velocity",
    caption: "High-speed light dispersion modeling inside aerodynamic carbon tunnels.",
    year: "2026",
    category: "Motion Lab",
    rotation: "rotate-3",
    image: "/src/assets/images/work_automotive_motion_1794063986087.jpg"
  },
  {
    id: "exp-3",
    title: "Monolithic Void",
    caption: "Angular architectural study exploring brutalist shadow geometry at dusk.",
    year: "2025",
    category: "Spatial Composition",
    rotation: "-rotate-1",
    image: "/src/assets/images/work_urban_architecture_1794063986088.jpg"
  },
  {
    id: "exp-4",
    title: "Chiaroscuro Introspection",
    caption: "High-grain monochrome portrait study captured with natural studio illumination.",
    year: "2025",
    category: "Editorial Portraiture",
    rotation: "rotate-2",
    image: "/src/assets/images/work_human_perspective_1794063987798.jpg"
  },
  {
    id: "exp-5",
    title: "Tactile Press",
    caption: "Physical blind debossing studies on 600gsm carbon black cotton board.",
    year: "2026",
    category: "Physical Artifacts",
    rotation: "-rotate-3",
    image: "/src/assets/images/work_brand_identity_1794063988117.jpg"
  },
  {
    id: "exp-6",
    title: "Quantum Prismatic Field",
    caption: "Dynamic chromatic aberration and fluid distortion in zero-gravity space.",
    year: "2026",
    category: "Generative Art",
    rotation: "rotate-1",
    image: "/src/assets/images/exploration_abstract_forms_1794063987094.jpg"
  }
];

export const STATS = [
  {
    number: "2+",
    label: "Years Experience",
    detail: "Hands-on experience in electrical systems design, shop drawings, and BIM coordination."
  },
  {
    number: "10+",
    label: "Projects Done",
    detail: "Delivered across commercial, residential, educational, hospitality, and institutional projects in Egypt and Saudi Arabia."
  },
  {
    number: "100%",
    label: "Code & Quality Compliance",
    detail: "Rigorous adherence to international and local electrical codes, clash-free Navisworks coordination, and shop drawing standards."
  }
];
