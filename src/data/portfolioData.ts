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
    id: "commercial-highrise-substation",
    title: "High-Rise Commercial Tower",
    italicTitle: "Commercial",
    subtitle: "MV/LV Distribution & Dual 1500kVA Substation",
    category: "Substation & Distribution",
    year: "2025",
    client: "Metropolitan Towers Co.",
    role: "Electrical Technical Office Engineer",
    description: "Complete electrical shop drawings, medium voltage / low voltage distribution, 2x1500kVA transformer substation sizing, and busway riser coordination.",
    detailedText: "Developed full contractor-grade shop drawings including transformer room layouts, MV switchgear, main distribution boards (MDBs), and automated generator synchronizing panels. Performed short-circuit analysis and cable sizing adhering to IEC 60364 and Egyptian distribution code standards.",
    image: "/src/assets/images/work_urban_architecture_1794063986088.jpg",
    aspect: "aspect-[16/10]",
    colSpan: "md:col-span-7",
    tags: ["AutoCAD", "Revit MEP", "Single Line Diagram", "Substation", "IEC 60364"],
    metrics: "1500kVA Dual Substation · 32-Storey Riser",
    liveUrl: "https://www.linkedin.com/in/bishoy-meshreqy"
  },
  {
    id: "healthcare-isolated-power",
    title: "Specialized Healthcare & Medical Center",
    italicTitle: "Healthcare",
    subtitle: "Isolated Power Systems (IPS) & Critical Life Safety",
    category: "Healthcare & Critical Power",
    year: "2025",
    client: "Al-Safwa Medical Group",
    role: "Lead Electrical BIM Modeler",
    description: "Design and clash-free BIM coordination for operating theater isolated power systems (IPS), medical UPS networks, and emergency backup.",
    detailedText: "Engineered isolated power systems for surgical suites according to NFPA 99. Coordinated electrical containment and medical gas infrastructure in Revit MEP to eliminate spatial clashes prior to on-site installation.",
    image: "/src/assets/images/work_automotive_motion_1794063986087.jpg",
    aspect: "aspect-[4/3] md:aspect-auto md:min-h-[380px]",
    colSpan: "md:col-span-5",
    tags: ["Revit BIM", "Navisworks", "NFPA 99", "UPS Systems", "Hospital IPS"],
    metrics: "Zero On-Site Clashes · 10 Operating Theatres",
    liveUrl: "https://www.linkedin.com/in/bishoy-meshreqy"
  },
  {
    id: "luxury-residential-compound",
    title: "Luxury Gated Residential Compound",
    italicTitle: "Residential",
    subtitle: "MV/LV Infrastructure & Street Lighting Networks",
    category: "Infrastructure & Low Current",
    year: "2024",
    client: "Palm Horizon Developments",
    role: "Electrical Technical Office Engineer",
    description: "External MV/LV underground cabling infrastructure, street lighting lux simulations in Dialux, package substations, and fiber networks.",
    detailedText: "Calculated voltage drops for extensive cable networks spanning 450 residential villas. Designed intelligent energy-efficient LED roadway lighting and coordinated duct banks with civil stormwater networks.",
    image: "/src/assets/images/work_brand_identity_1794063988117.jpg",
    aspect: "aspect-[4/3] md:aspect-auto md:min-h-[380px]",
    colSpan: "md:col-span-5",
    tags: ["Dialux Evo", "AutoCAD", "Underground Cabling", "Lighting Lux", "Low Current"],
    metrics: "450 Luxury Villas · 12km Cabling Network",
    liveUrl: "https://www.linkedin.com/in/bishoy-meshreqy"
  },
  {
    id: "commercial-mall-bim-clash",
    title: "Multi-Disciplinary Commercial Mall",
    italicTitle: "Commercial",
    subtitle: "BIM Clash Detection & Multi-Trade Coordination",
    category: "BIM Coordination & MEP",
    year: "2025",
    client: "Capital Gate Malls",
    role: "BIM Coordination Engineer",
    description: "Federated 3D model coordination resolving complex clashes between electrical cable trays, HVAC ductwork, fire sprinkler mains, and structural beams.",
    detailedText: "Conducted weekly clash reviews in Navisworks Manage, generating BCF issues and engineering RFI submittals. Optimized cable tray runs to save 18% in copper busway and cable tray length.",
    image: "/src/assets/images/work_human_perspective_1794063987798.jpg",
    aspect: "aspect-[16/10]",
    colSpan: "md:col-span-7",
    tags: ["Navisworks Manage", "Revit MEP", "BCF Manager", "LOD 400", "MEP Coordination"],
    metrics: "18% Material Cost Savings · 340+ Resolved Clashes",
    liveUrl: "https://www.linkedin.com/in/bishoy-meshreqy"
  },
  {
    id: "banking-headquarters-lighting",
    title: "Corporate Banking Headquarters",
    italicTitle: "Corporate",
    subtitle: "DALI-2 Smart Lighting Control & Trading Power",
    category: "Lighting & Power Distribution",
    year: "2024",
    client: "National Investment Bank",
    role: "Electrical Design Engineer",
    description: "DALI-2 automated lighting control systems, underfloor busbar raceways for trading floors, and redundant dual-cord power feeds.",
    detailedText: "Designed energy-efficient daylight-harvesting DALI lighting control systems with occupancy sensing. Created comprehensive panel schedules, cable schedules, and bill of quantities (BOQ).",
    image: "/src/assets/images/exploration_abstract_forms_1794063987094.jpg",
    aspect: "aspect-[16/10]",
    colSpan: "md:col-span-6",
    tags: ["DALI-2", "Lighting Control", "Panel Schedules", "BOQ", "AutoCAD"],
    metrics: "35% Energy Reduction · Tier III Reliability",
    liveUrl: "https://www.linkedin.com/in/bishoy-meshreqy"
  },
  {
    id: "industrial-logistics-mcc",
    title: "Industrial Logistics Park & Cold Storage",
    italicTitle: "Industrial",
    subtitle: "Motor Control Centers (MCC) & Power Factor Correction",
    category: "Industrial & Motor Control",
    year: "2024",
    client: "Apex Global Logistics",
    role: "Electrical Technical Office Engineer",
    description: "MCC panel design, variable frequency drive (VFD) integration, heavy industrial power factor correction, and earthing networks.",
    detailedText: "Engineered power supplies for high-tonnage refrigeration compressors, automated conveyor lines, and heavy dock levelers. Designed capacitor bank power factor correction to achieve 0.98 power factor.",
    image: "/src/assets/images/work_urban_architecture_1794063986088.jpg",
    aspect: "aspect-[16/10]",
    colSpan: "md:col-span-6",
    tags: ["Motor Control", "VFD", "Power Factor Correction", "Industrial SLD", "Earthing"],
    metrics: "0.98 Power Factor · 2.5MW Peak Load",
    liveUrl: "https://www.linkedin.com/in/bishoy-meshreqy"
  },
  {
    id: "university-campus-low-current",
    title: "Educational Campus & University Complex",
    italicTitle: "Institutional",
    subtitle: "Addressable Fire Alarm, Public Address & Security",
    category: "Low Current & Life Safety",
    year: "2024",
    client: "Metropolitan Academic Foundation",
    role: "Electrical Technical Office Engineer",
    description: "Addressable fire alarm system, voice evacuation / public address, IP CCTV surveillance, and access control across 5 campus faculties.",
    detailedText: "Prepared complete shop drawings for EN 54 and NFPA 72 compliant voice evacuation and fire detection. Integrated cause-and-effect matrix with HVAC smoke dampers and elevator recall systems.",
    image: "/src/assets/images/work_automotive_motion_1794063986087.jpg",
    aspect: "aspect-[16/10]",
    colSpan: "md:col-span-6",
    tags: ["NFPA 72", "Fire Alarm", "Public Address", "IP CCTV", "Access Control"],
    metrics: "5 Campus Faculties · 100% NFPA 72 Compliance",
    liveUrl: "https://www.linkedin.com/in/bishoy-meshreqy"
  },
  {
    id: "luxury-resort-lighting-grms",
    title: "Five-Star Hotel & Luxury Resort",
    italicTitle: "Hospitality",
    subtitle: "Architectural DMX Lighting & Guestroom Management",
    category: "Architectural Lighting & Hospitality",
    year: "2025",
    client: "Azure Bay Resorts",
    role: "Electrical & Lighting Engineer",
    description: "DMX dynamic facade illumination, landscape pathway lighting, guestroom energy management systems (GRMS), and emergency inverter systems.",
    detailedText: "Designed intricate exterior architectural lighting scenes with DMX programming and Dialux photometric verification. Modeled coordinated underground conduits and weatherproof pull boxes.",
    image: "/src/assets/images/work_brand_identity_1794063988117.jpg",
    aspect: "aspect-[16/10]",
    colSpan: "md:col-span-6",
    tags: ["DMX Lighting", "Dialux Photometrics", "GRMS", "Hospitality MEP", "Revit"],
    metrics: "DMX Architectural Illumination · 280 Key Resort",
    liveUrl: "https://www.linkedin.com/in/bishoy-meshreqy"
  },
  {
    id: "governmental-lightning-earthing",
    title: "Administrative Governmental Complex",
    italicTitle: "Infrastructure",
    subtitle: "Faraday Cage Lightning Protection & Earth Mesh",
    category: "Earthing & Lightning Protection",
    year: "2023",
    client: "Civic Engineering Authority",
    role: "Electrical Technical Office Engineer",
    description: "Faraday cage lightning protection system compliant with IEC 62305 and deep earth ground mesh with step and touch potential calculations.",
    detailedText: "Modeled structural lightning protection down conductors and earth termination network. Performed ground resistivity testing calculations to achieve less than 1-ohm earth resistance.",
    image: "/src/assets/images/work_human_perspective_1794063987798.jpg",
    aspect: "aspect-[16/10]",
    colSpan: "md:col-span-6",
    tags: ["IEC 62305", "Lightning Protection", "Earthing Mesh", "Grounding Calculations", "AutoCAD"],
    metrics: "<1 Ohm Earth Resistance · Rolling Sphere Method",
    liveUrl: "https://www.linkedin.com/in/bishoy-meshreqy"
  },
  {
    id: "mission-critical-datacenter",
    title: "Mission-Critical Tier III Data Center",
    italicTitle: "Mission Critical",
    subtitle: "2N UPS Architecture & 3x2000kVA Diesel Generators",
    category: "Mission Critical & Data Centers",
    year: "2025",
    client: "CloudCore Infrastructure",
    role: "BIM & Electrical Technical Office Engineer",
    description: "2N redundant modular UPS systems, 3x2000kVA emergency diesel generator plant with ATS, and overhead cable containment grids.",
    detailedText: "Engineered mission-critical power distribution with zero single point of failure (SPOF). Coordinated overhead server rack busway and fiber tray systems with CFD airflow models in Revit BIM.",
    image: "/src/assets/images/exploration_abstract_forms_1794063987094.jpg",
    aspect: "aspect-[16/10]",
    colSpan: "md:col-span-6",
    tags: ["Data Center", "2N Redundancy", "Modular UPS", "Diesel Generators", "BIM LOD 400"],
    metrics: "99.999% Availability · 4.8MW Critical Capacity",
    liveUrl: "https://www.linkedin.com/in/bishoy-meshreqy"
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
