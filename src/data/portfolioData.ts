import revitMepImg from "../assets/images/revit_mep_bim_1794580153393.jpg";
import navisworksImg from "../assets/images/navisworks_clash_coordination_1794580153476.jpg";
import autocadImg from "../assets/images/autocad_electrical_drafting_1794580155289.jpg";
import etapPowerImg from "../assets/images/etap_power_analysis_1794580154436.jpg";
import dialuxImg from "../assets/images/dialux_lighting_simulation_1794580153755.jpg";
import powerBiImg from "../assets/images/powerbi_engineering_dashboard_1794580154787.jpg";

export type ProjectCategory =
  | "All Projects"
  | "Institutional"
  | "Hospitality"
  | "Residential"
  | "Educational";

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  tools: string[];
  icon: "design" | "bim" | "lighting" | "calculations";
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  location: string;
  category: Exclude<ProjectCategory, "All Projects">;
  scopeOverlay: string;
  year: string;
  client: string;
  role: string;
  description: string;
  detailedText: string;
  image: string;
  alt: string;
  tags: string[];
  colSpan: string;
  metrics?: string;
  featured?: boolean;
  liveUrl?: string;
}

export type ProjectItem = Project;

export interface JournalEntry {
  id: string;
  title: string;
  issuer: string;
  badge?: string;
  category: string;
  readTime: string;
  date: string;
  excerpt: string;
  image: string;
  content: string[];
  url: string;
}

export interface ExplorationItem {
  id: string;
  title: string;
  category: string;
  year: string;
  image: string;
  rotation: string;
  caption: string;
}

export interface StatItem {
  number: string;
  label: string;
  detail: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  badge?: string;
  url: string;
}

export interface ToolSkillItem {
  name: string;
  description: string;
}

export interface ToolGroup {
  id: string;
  category: string;
  items: ToolSkillItem[];
}

export const PROFILE = {
  brandName: "Eng. Bishoy Meshreqy",
  fullName: "Eng. Bishoy M. Meshreqy",
  subtitle:
    "Electrical Technical Office & Design Engineer · BIM Specialist · Available for Freelance",
  locationBadge: "Egypt & Remote",
  experienceBadge: "2+ Years Experience",
  logoSrc: "/images/bm-logo.png",
  email: "BishoyMagdy.30@hotmail.com",
  phone: "+201212299454",
  linkedinUrl: "https://www.linkedin.com/in/bishoy-meshreqy",
  linkedinDisplay: "linkedin.com/in/bishoy-meshreqy",
  copyright:
    "© 2026 Bishoy Magdy Meshreqy · Electrical Technical Office & Design Engineer & BIM Specialist",
};

export const SERVICES: ServiceItem[] = [
  {
    id: "electrical-design",
    title: "Electrical Design",
    description:
      "Full electrical design packages including SLDs, panel schedules, lighting, power, and cable routing.",
    tools: ["AutoCAD", "Revit"],
    icon: "design",
  },
  {
    id: "bim-modeling",
    title: "BIM Modeling",
    description:
      "Revit MEP electrical modeling at LOD 300/350/400, clash detection, and coordination drawings.",
    tools: ["Revit", "Navisworks"],
    icon: "bim",
  },
  {
    id: "lighting-design",
    title: "Lighting Design",
    description:
      "DIALux Evo lighting simulations, lux calculations, and luminaire layout for interior & exterior spaces.",
    tools: ["DIALux Evo"],
    icon: "lighting",
  },
  {
    id: "electrical-calculations",
    title: "Electrical Calculations",
    description:
      "Load flow, short circuit, cable sizing, and CB selectivity studies for LV panel protection coordination.",
    tools: ["ETAP", "Ecodial", "E-Design"],
    icon: "calculations",
  },
];

export const PROJECT_CATEGORIES: ProjectCategory[] = [
  "All Projects",
  "Institutional",
  "Hospitality",
  "Residential",
  "Educational",
];

export const PROJECTS: Project[] = [
  {
    id: "kfupm",
    title: "King Fahd University of Petroleum and Minerals Renovation",
    subtitle: "Electrical BIM & coordination · Dhahran, Saudi Arabia",
    location: "Dhahran, Saudi Arabia",
    category: "Institutional",
    scopeOverlay: "Electrical BIM & coordination",
    year: "KSA · Institutional",
    client: "KFUPM Campus",
    role: "Electrical BIM & Coordination Engineer",
    description:
      "Electrical BIM modeling and coordination drawings for a large-scale institutional campus renovation.",
    detailedText:
      "Delivered comprehensive Revit MEP electrical BIM modeling and multi-discipline coordination drawings for the King Fahd University of Petroleum and Minerals campus renovation in Dhahran. Scope covered power distribution, lighting, containment routing, panel schedules, and Navisworks clash resolution across existing and upgraded academic zones.",
    image: "/images/kfupm.jpg",
    alt: "King Fahd University of Petroleum and Minerals project",
    tags: ["Revit MEP", "Navisworks", "Electrical BIM", "Coordination"],
    colSpan: "md:col-span-7",
    metrics: "LOD 350 BIM · Clash-Free Coordination",
    featured: true,
    liveUrl: "https://www.linkedin.com/in/bishoy-meshreqy",
  },
  {
    id: "kfaa",
    title: "King Faisal Air Academy",
    subtitle: "Electrical shop drawings · Riyadh, Saudi Arabia",
    location: "Riyadh, Saudi Arabia",
    category: "Institutional",
    scopeOverlay: "Electrical shop drawings",
    year: "KSA · Institutional",
    client: "King Faisal Air Academy",
    role: "Electrical Technical Office Engineer",
    description:
      "Detailed electrical shop drawings, containment routing, and multi-discipline technical coordination.",
    detailedText:
      "Produced detailed electrical shop drawings and coordinated containment layouts for King Faisal Air Academy in Riyadh. Focused on precision cable tray and trunking routing, LV distribution assemblies, and cross-discipline technical coordination aligned with strict institutional standards.",
    image: "/images/kfaa.jpg",
    alt: "King Faisal Air Academy project",
    tags: ["AutoCAD", "Shop Drawings", "Containment", "Coordination"],
    colSpan: "md:col-span-5",
    metrics: "Shop Drawings & Technical Coordination",
    liveUrl: "https://www.linkedin.com/in/bishoy-meshreqy",
  },
  {
    id: "al-masa",
    title: "Al Masa Hotel",
    subtitle: "Electrical design & BIM · Cairo New Capital, Egypt",
    location: "Cairo New Capital, Egypt",
    category: "Hospitality",
    scopeOverlay: "Electrical design & BIM",
    year: "Egypt · Hospitality",
    client: "Al Masa Hospitality",
    role: "Electrical Design & BIM Engineer",
    description:
      "Comprehensive electrical design and Revit BIM coordination across luxury hospitality suites and public zones.",
    detailedText:
      "Executed full electrical design and Revit BIM MEP coordination across guest suites, ballrooms, back-of-house facilities, and public hospitality zones at Al Masa Hotel in the New Administrative Capital. Covered lighting, small power, normal/emergency circuits, and coordinated ceiling services.",
    image: "/images/al-masa.jpg",
    alt: "Al Masa Hotel project",
    tags: ["Revit", "Electrical Design", "Hospitality MEP", "AutoCAD"],
    colSpan: "md:col-span-6",
    metrics: "Full Hospitality Design & BIM",
    liveUrl: "https://www.linkedin.com/in/bishoy-meshreqy",
  },
  {
    id: "four-seasons",
    title: "Four Seasons Hotel",
    subtitle: "Electrical design & BIM · Cairo New Capital, Egypt",
    location: "Cairo New Capital, Egypt",
    category: "Hospitality",
    scopeOverlay: "Electrical design & BIM",
    year: "Egypt · Hospitality",
    client: "Four Seasons New Capital",
    role: "Electrical Design & BIM Specialist",
    description:
      "High-standard hospitality electrical design, lighting layouts, and clash-free BIM MEP modeling.",
    detailedText:
      "Developed high-specification hospitality electrical design packages, architectural lighting layouts, and clash-free Revit MEP models for Four Seasons Hotel in Cairo New Capital. Coordinated closely with architectural, interior lighting, and mechanical systems to uphold international luxury hospitality standards.",
    image: "/images/four-seasons.jpg",
    alt: "Four Seasons project",
    tags: ["Revit MEP", "Lighting Layout", "Navisworks", "BIM"],
    colSpan: "md:col-span-6",
    metrics: "Clash-Free Luxury Hospitality BIM",
    liveUrl: "https://www.linkedin.com/in/bishoy-meshreqy",
  },
  {
    id: "suite-lagoons",
    title: "Suite Lagoons Compound",
    subtitle: "Electrical BIM modeling · Cairo New Capital, Egypt",
    location: "Cairo New Capital, Egypt",
    category: "Residential",
    scopeOverlay: "Electrical BIM modeling",
    year: "Egypt · Residential",
    client: "Suite Lagoons Development",
    role: "Electrical BIM Engineer",
    description:
      "Electrical BIM modeling, power distribution layouts, and low-voltage coordination for residential clusters.",
    detailedText:
      "Delivered Revit electrical BIM models, LV power distribution layouts, and low-voltage containment coordination for residential clusters at Suite Lagoons Compound in Cairo New Capital. Ensured standardized family schedules, accurate BOQ takeoffs, and buildable field documentation.",
    image: "/images/suite-lagoons.jpg",
    alt: "Suite Lagoons Compound project",
    tags: ["Revit", "Power Distribution", "LV Coordination", "BOQ"],
    colSpan: "md:col-span-4",
    metrics: "Multi-Cluster Residential BIM",
    liveUrl: "https://www.linkedin.com/in/bishoy-meshreqy",
  },
  {
    id: "nurai",
    title: "NURAI Compound",
    subtitle: "Electrical BIM modeling · New Cairo, Egypt",
    location: "New Cairo, Egypt",
    category: "Residential",
    scopeOverlay: "Electrical BIM modeling",
    year: "Egypt · Residential",
    client: "NURAI Residences",
    role: "Electrical BIM Engineer",
    description:
      "Revit MEP electrical modeling, panel schedules, and coordinated feeder routing for modern residential villas.",
    detailedText:
      "Completed Revit MEP electrical modeling, balanced load schedules, and coordinated feeder routing for modern residential villas at NURAI Compound in New Cairo. Streamlined villa-to-infrastructure riser coordination and clash resolution prior to site execution.",
    image: "/images/nurai.jpg",
    alt: "NURAI Compound project",
    tags: ["Revit MEP", "Panel Schedules", "Feeder Routing", "BIM"],
    colSpan: "md:col-span-4",
    metrics: "Villa Cluster BIM & Schedules",
    liveUrl: "https://www.linkedin.com/in/bishoy-meshreqy",
  },
  {
    id: "cac",
    title: "Cairo American College Renovation",
    subtitle: "Electrical shop drawings · Maadi, Egypt",
    location: "Maadi, Egypt",
    category: "Educational",
    scopeOverlay: "Electrical shop drawings",
    year: "Egypt · Educational",
    client: "Cairo American College",
    role: "Electrical Technical Office Engineer",
    description:
      "Renovation electrical shop drawings, lighting layout updates, and as-built technical documentation.",
    detailedText:
      "Prepared comprehensive renovation electrical shop drawings, updated classroom and campus lighting layouts, and verified as-built technical documentation for Cairo American College in Maadi. Focused on safe phased renovation tie-ins and clear contractor-ready deliverables.",
    image: "/images/cac.jpg",
    alt: "Cairo American College project",
    tags: ["AutoCAD", "Shop Drawings", "Lighting Updates", "As-Built"],
    colSpan: "md:col-span-4",
    metrics: "Phased Campus Renovation Docs",
    liveUrl: "https://www.linkedin.com/in/bishoy-meshreqy",
  },
];

export const JOURNAL_ENTRIES: JournalEntry[] = [
  {
    id: "bim-diploma",
    title: "BIM Diploma – Revit Track",
    issuer: "Eduneers",
    badge: "Top 10",
    category: "Eduneers",
    readTime: "Top 10",
    date: "Oct 2025",
    excerpt:
      "Intensive Revit MEP electrical modeling, custom family creation, LOD 300/350/400 workflows, and federated clash coordination.",
    image: "/images/kfupm.jpg",
    url: "https://drive.google.com/file/d/1bBsFGe4ouVIbqwhwckdinsn6q839DLvD/view?usp=sharing",
    content: [
      "Completed the BIM Diploma (Revit Track) with Top 10 recognition at Eduneers, mastering end-to-end electrical BIM authoring and interdisciplinary coordination.",
      "Core competencies include Revit MEP electrical systems modeling, parametric lighting and equipment family creation, automated panel schedules, and Navisworks clash detection workflows.",
    ],
  },
  {
    id: "knx-bas",
    title: "KNX Building Automation System",
    issuer: "Schneider Electric",
    category: "Schneider Electric",
    readTime: "Verified",
    date: "Feb 2023",
    excerpt:
      "Certified training in KNX smart building automation topologies, lighting control scenes, HVAC integration, and ETS commissioning.",
    image: "/images/four-seasons.jpg",
    url: "https://drive.google.com/file/d/12SWP1Ve3X6biYK0fFQIU449M9I-jGvw2/view?usp=sharing",
    content: [
      "Completed Schneider Electric's KNX Building Automation System program covering bus topology design, dimming actuators, DALI gateways, and energy-saving control strategies.",
      "Applied KNX integration principles to hospitality and commercial electrical design packages requiring intelligent lighting and occupancy automation.",
    ],
  },
  {
    id: "pep",
    title: "Professional Engineer Program",
    issuer: "EduVate",
    badge: "90%",
    category: "EduVate",
    readTime: "90%",
    date: "Oct 2022",
    excerpt:
      "Comprehensive electrical power distribution, short-circuit analysis, cable sizing, earthing, and international code compliance.",
    image: "/images/al-masa.jpg",
    url: "https://drive.google.com/file/d/1T7rm8YOl-FlLFageuXJr1hbv_VLNOWnK/view?usp=sharing",
    content: [
      "Achieved a 90% distinction in EduVate's Professional Engineer Program focused on practical MEP electrical building design and technical office engineering.",
      "Covered load estimation, transformer and generator sizing, voltage drop calculations, breaker selectivity, and shop drawing execution standards.",
    ],
  },
  {
    id: "automation-diploma",
    title: "Automation Diploma",
    issuer: "HA Consulting Group",
    category: "HA Consulting Group",
    readTime: "Verified",
    date: "Aug 2021",
    excerpt:
      "Industrial automation, classic control panels, PLC programming fundamentals, and motor control center protection logic.",
    image: "/images/kfaa.jpg",
    url: "https://drive.google.com/file/d/1J7r9DImAbIe30f-RDULyrRb7IHKM6xLA/view?usp=sharing",
    content: [
      "Completed the Automation Diploma at HA Consulting Group covering classic control circuits, motor starters, PLC ladder logic, and VFD integration.",
      "Built strong foundational expertise bridging power distribution panels with automated building and industrial control systems.",
    ],
  },
];

export const EXPLORATIONS: ExplorationItem[] = [
  {
    id: "exp-1",
    title: "Autodesk Revit MEP",
    category: "BIM & Coordination",
    year: "LOD 300/350/400",
    image: revitMepImg,
    rotation: "-rotate-3",
    caption: "Electrical modeling, parametric family creation, panel schedules, and LOD 300/350/400 BIM delivery.",
  },
  {
    id: "exp-2",
    title: "Autodesk Navisworks",
    category: "BIM & Coordination",
    year: "Clash Detection",
    image: navisworksImg,
    rotation: "rotate-2",
    caption: "Multi-discipline clash detection, coordination reviews, and federated MEP model validation.",
  },
  {
    id: "exp-3",
    title: "Autodesk AutoCAD",
    category: "BIM & Coordination",
    year: "Shop Drawings",
    image: autocadImg,
    rotation: "-rotate-2",
    caption: "Detailed electrical shop drawings, single-line diagrams (SLDs), and as-built documentation.",
  },
  {
    id: "exp-4",
    title: "ETAP, Ecodial & E-Design",
    category: "Electrical Analysis",
    year: "Power Studies",
    image: etapPowerImg,
    rotation: "rotate-3",
    caption: "Load flow, short circuit, cable sizing, CB selectivity, and LV panel protection coordination.",
  },
  {
    id: "exp-5",
    title: "DIALux Evo",
    category: "Electrical Analysis",
    year: "Lighting Design",
    image: dialuxImg,
    rotation: "-rotate-1",
    caption: "Interior and exterior lighting simulations, lux calculations, and precision luminaire layouts.",
  },
  {
    id: "exp-6",
    title: "Power BI & Excel",
    category: "Office & Reporting",
    year: "BOQ & Dashboards",
    image: powerBiImg,
    rotation: "rotate-2",
    caption: "Engineering dashboards, BOQ preparation, material submittals, and calculation schedules.",
  },
];

export const STATS: StatItem[] = [
  {
    number: "2+",
    label: "Years of Engineering Experience",
    detail:
      "Delivering electrical design, technical office shop drawings, and BIM coordination across Egypt and Saudi Arabia.",
  },
  {
    number: "10+",
    label: "Projects & Milestones Delivered",
    detail:
      "Institutional campuses, luxury hotels, residential compounds, and educational renovations.",
  },
  {
    number: "LOD 350",
    label: "BIM Precision & Code Compliance",
    detail:
      "Clash-free Revit MEP models, Navisworks federation, and ETAP/Ecodial verified power studies.",
  },
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    id: "bim-diploma",
    title: "BIM Diploma – Revit Track",
    issuer: "Eduneers",
    date: "Oct 2025",
    badge: "Top 10",
    url: "https://drive.google.com/file/d/1bBsFGe4ouVIbqwhwckdinsn6q839DLvD/view?usp=sharing",
  },
  {
    id: "knx-bas",
    title: "KNX Building Automation System",
    issuer: "Schneider Electric",
    date: "Feb 2023",
    url: "https://drive.google.com/file/d/12SWP1Ve3X6biYK0fFQIU449M9I-jGvw2/view?usp=sharing",
  },
  {
    id: "pep",
    title: "Professional Engineer Program",
    issuer: "EduVate",
    date: "Oct 2022",
    badge: "90%",
    url: "https://drive.google.com/file/d/1T7rm8YOl-FlLFageuXJr1hbv_VLNOWnK/view?usp=sharing",
  },
  {
    id: "automation-diploma",
    title: "Automation Diploma",
    issuer: "HA Consulting Group",
    date: "Aug 2021",
    url: "https://drive.google.com/file/d/1J7r9DImAbIe30f-RDULyrRb7IHKM6xLA/view?usp=sharing",
  },
];

export const TOOL_GROUPS: ToolGroup[] = [
  {
    id: "bim-coordination",
    category: "BIM & Coordination",
    items: [
      {
        name: "Revit",
        description: "Electrical modeling, family creation, LOD 300/350/400",
      },
      {
        name: "Navisworks",
        description: "Clash detection, coordination review, model federation",
      },
      {
        name: "AutoCAD",
        description: "Shop drawings, SLDs, as-built documentation",
      },
    ],
  },
  {
    id: "electrical-analysis",
    category: "Electrical Analysis",
    items: [
      {
        name: "ETAP & Ecodial",
        description: "Load flow, short circuit, cable sizing",
      },
      {
        name: "E-Design",
        description: "CB selectivity, LV panel protection coordination",
      },
      {
        name: "DIALux Evo",
        description: "Lighting calculations, luminaire layout",
      },
    ],
  },
  {
    id: "office-reporting",
    category: "Office & Reporting",
    items: [
      {
        name: "Power BI",
        description: "Engineering dashboards, project progress reporting",
      },
      {
        name: "Excel",
        description: "BOQ preparation, material submittals, calculation schedules",
      },
      {
        name: "Word & PowerPoint",
        description: "Technical reports, presentations, tender documentation",
      },
    ],
  },
];
