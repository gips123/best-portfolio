export const categories = [
  { id: "all", name: "All" },
  { id: "frontend", name: "Front End" },
  { id: "backend", name: "Backend" },
  { id: "fullstack", name: "Fullstack" },
  { id: "uiux", name: "UI/UX" },
  { id: "mobile", name: "Mobile" },
  { id: "desain-grafis", name: "Desain Grafis" },
];

export const projectsPageData = {
  title: "PROJECTS",
  subtitle: "Explore my portfolio of creative projects and innovative solutions. Each project represents my passion for building beautiful digital experiences.",
};

export interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  imageTitle: string;
  imageDescription: string;
  imageUrl: string;
  buttonText: string;
  detailUrl: string;
  category: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Disbursement Dashboard",
    description: "A comprehensive disbursement dashboard system for managing fund transfers, merchant operations, and financial transactions with role-based access control.",
    techStack: ["React.js", "TypeScript", "Tailwind CSS"],
    imageTitle: "Streamline Financial Operations",
    imageDescription: "Manage fund transfers, merchant operations, and financial transactions with comprehensive analytics and role-based access control.",
    imageUrl: "/disbursement/1.png",
    buttonText: "View Dashboard",
    detailUrl: "#",
    category: "frontend",
  },
  {
    id: 2,
    title: "Landing Page UONEPAY",
    description: "A modern landing page for UONEPAY payment gateway with responsive design, interactive features, and seamless user experience.",
    techStack: ["React", "Next.js", "Tailwind CSS", "TypeScript", "Framer Motion"],
    imageTitle: "Modern Payment Gateway Experience",
    imageDescription: "Showcase payment gateway services with modern, professional interface featuring smooth animations and comprehensive service information.",
    imageUrl: "/uonepay/cover.png",
    buttonText: "Visit Website",
    detailUrl: "https://uonepay.co",
    category: "frontend",
  },
  {
    id: 3,
    title: "Payment Gateway & Disbursement Dashboard",
    description: "A comprehensive payment gateway system with disbursement capabilities, supporting multiple payment channels, real-time transactions, and detailed financial reporting.",
    techStack: ["Next.js", "Node.js", "TypeScript"],
    imageTitle: "Secure Financial Transactions",
    imageDescription: "Handle secure financial transactions with multiple payment channel integrations, automated disbursement workflows, and comprehensive transaction monitoring.",
    imageUrl: "/payment/1.png",
    buttonText: "Explore System",
    detailUrl: "#",
    category: "frontend",
  },
  {
    id: 4,
    title: "Gasstrip - Holiday Ticket Booking Website",
    description: "A comprehensive holiday ticket booking platform with integrated payment gateway, featuring seamless ticket reservation, payment processing, and travel management system.",
    techStack: ["Next.js", "Strapi", "PostgreSQL", "Payment Gateway", "TypeScript"],
    imageTitle: "Pesona Yang Memikat Untuk Perjalanan Anda",
    imageDescription: "Temukan keindahan tersembunyi dari destinasi-destinasi menakjubkan dalam koleksi pilihan kami! Jangan sampai terlewatkan untuk menjelajahi keajaiban yang memikat bersama kami dan ciptakan momen tak terlupakan",
    imageUrl: "/travel/1.png",
    buttonText: "Paket Wisata",
    detailUrl: "#",
    category: "fullstack",
  },
  {
    id: 5,
    title: "ifortepay Internship Experience",
    description: "Software Development Intern at ifortepay, contributing to fintech solutions and payment gateway development with hands-on experience in modern web technologies.",
    techStack: ["React.js", "Node.js", "FinTech", "API Integration", "Next.js", "Strapi"],
    imageTitle: "Real-World FinTech Development",
    imageDescription: "Gained comprehensive experience in fintech development, working on payment gateway solutions and financial technology applications with real-world exposure.",
    imageUrl: "/ifortepay/cover.png",
    buttonText: "View Experience",
    detailUrl: "https://ifortepay.id",
    category: "fullstack",
  },
  {
    id: 6,
    title: "Globementor - Holiday Booking Website UI/UX",
    description: "A comprehensive travel and holiday booking website UI/UX design with intuitive room reservation system, destination discovery, and seamless booking experience for travelers.",
    techStack: ["Figma", "Canva"],
    imageTitle: "Seamless Travel Booking Experience",
    imageDescription: "Simplify holiday planning and accommodation booking with intuitive interface for discovering destinations, comparing room options, and managing bookings.",
    imageUrl: "/globemen/cover.png",
    buttonText: "View Design",
    detailUrl: "#",
    category: "uiux",
  },
  {
    id: 7,
    title: "Kost Finance - Student Financial Management App UI/UX",
    description: "A mobile application UI/UX design specifically for students living in boarding houses (kost) to manage their finances, track expenses, and plan budgets effectively.",
    techStack: ["Figma"],
    imageTitle: "Smart Financial Management for Students",
    imageDescription: "Help students manage their limited budgets effectively with intuitive expense tracking, budget planning tools, and financial insights designed for student life.",
    imageUrl: "/kostfinenace/cover.png",
    buttonText: "View Design",
    detailUrl: "#",
    category: "uiux",
  },
  {
    id: 8,
    title: "Design Portfolio 1",
    description: "Creative design work showcasing modern visual aesthetics and innovative layout concepts.",
    techStack: ["Adobe Illustrator", "Photoshop", "Canva"],
    imageTitle: "Modern Visual Aesthetics",
    imageDescription: "Showcasing innovative layout concepts and creative design work with modern visual aesthetics.",
    imageUrl: "/design/1.jpg",
    buttonText: "View Portfolio",
    detailUrl: "#",
    category: "desain-grafis",
  },
  {
    id: 9,
    title: "Design Portfolio 2",
    description: "Professional design project with clean typography and sophisticated color palette.",
    techStack: ["Adobe Illustrator", "Photoshop"],
    imageTitle: "Professional Design Excellence",
    imageDescription: "Professional design project featuring clean typography and sophisticated color palette for modern branding.",
    imageUrl: "/design/2.jpg",
    buttonText: "View Design",
    detailUrl: "#",
    category: "desain-grafis",
  },
  {
    id: 10,
    title: "Design Portfolio 3",
    description: "Bold and dynamic design featuring striking visual elements and contemporary style.",
    techStack: ["Adobe Illustrator", "Photoshop", "Canva"],
    imageTitle: "Bold & Dynamic Design",
    imageDescription: "Striking visual elements and contemporary style in a bold and dynamic design approach.",
    imageUrl: "/design/6.jpg",
    buttonText: "Explore Design",
    detailUrl: "#",
    category: "desain-grafis",
  },
  {
    id: 11,
    title: "Design Portfolio 4",
    description: "Elegant design solution with refined aesthetics and attention to detail.",
    techStack: ["Adobe Illustrator", "Photoshop"],
    imageTitle: "Elegant Design Solution",
    imageDescription: "Refined aesthetics and attention to detail in an elegant design solution.",
    imageUrl: "/design/4.PNG",
    buttonText: "View Portfolio",
    detailUrl: "#",
    category: "desain-grafis",
  },
  {
    id: 12,
    title: "Design Portfolio 5",
    description: "Comprehensive design project showcasing versatility and creative problem-solving.",
    techStack: ["Adobe Illustrator", "Photoshop", "Canva"],
    imageTitle: "Versatile Creative Solutions",
    imageDescription: "Showcasing versatility and creative problem-solving in comprehensive design projects.",
    imageUrl: "/design/7.PNG",
    buttonText: "View Design",
    detailUrl: "#",
    category: "desain-grafis",
  },
  {
    id: 13,
    title: "Design Portfolio 6",
    description: "Modern design approach with innovative concepts and user-centered thinking.",
    techStack: ["Adobe Illustrator", "Photoshop"],
    imageTitle: "Innovative User-Centered Design",
    imageDescription: "Modern design approach featuring innovative concepts and user-centered thinking.",
    imageUrl: "/design/3.PNG",
    buttonText: "Explore Design",
    detailUrl: "#",
    category: "desain-grafis",
  },
  {
    id: 14,
    title: "Design Portfolio 7",
    description: "Artistic design work with creative flair and expressive visual communication.",
    techStack: ["Adobe Illustrator", "Photoshop", "Canva"],
    imageTitle: "Artistic Creative Expression",
    imageDescription: "Creative flair and expressive visual communication in artistic design work.",
    imageUrl: "/design/5.PNG",
    buttonText: "View Portfolio",
    detailUrl: "#",
    category: "desain-grafis",
  },
  {
    id: 15,
    title: "Design Portfolio 8",
    description: "Professional design solution with strategic thinking and brand consistency.",
    techStack: ["Adobe Illustrator", "Photoshop"],
    imageTitle: "Strategic Brand Design",
    imageDescription: "Strategic thinking and brand consistency in professional design solutions.",
    imageUrl: "/design/8.PNG",
    buttonText: "View Design",
    detailUrl: "#",
    category: "desain-grafis",
  },
  {
    id: 16,
    title: "Design Portfolio 9",
    description: "Innovative design project pushing creative boundaries and exploring new possibilities.",
    techStack: ["Adobe Illustrator", "Photoshop", "Canva"],
    imageTitle: "Pushing Creative Boundaries",
    imageDescription: "Exploring new possibilities and pushing creative boundaries in innovative design projects.",
    imageUrl: "/design/9.PNG",
    buttonText: "Explore Design",
    detailUrl: "#",
    category: "desain-grafis",
  },
  {
    id: 17,
    title: "Design Portfolio 10",
    description: "Final design showcase representing the culmination of creative vision and technical skill.",
    techStack: ["Adobe Illustrator", "Photoshop"],
    imageTitle: "Creative Vision & Technical Skill",
    imageDescription: "The culmination of creative vision and technical skill in final design showcase.",
    imageUrl: "/design/10.PNG",
    buttonText: "View Portfolio",
    detailUrl: "#",
    category: "desain-grafis",
  },
  {
    id: 18,
    title: "Bendaku - Mobile Application",
    description: "A comprehensive mobile application designed for modern users with intuitive interface, seamless navigation, and engaging user experience.",
    techStack: ["React Native", "TypeScript", "Mobile Development"],
    imageTitle: "Modern Mobile Experience",
    imageDescription: "Experience seamless mobile interactions with intuitive design, smooth navigation, and comprehensive features designed for modern mobile users.",
    imageUrl: "/bendaku/cover.png",
    buttonText: "View App",
    detailUrl: "#",
    category: "mobile",
  },
  {
    id: 19,
    title: "Bendaku Backend - Strapi CMS",
    description: "A robust backend system built with Strapi CMS for managing content, APIs, and data for the Bendaku mobile application with comprehensive admin panel and API endpoints.",
    techStack: ["Strapi", "Node.js", "REST API", "CMS"],
    imageTitle: "Powerful Backend Infrastructure",
    imageDescription: "Comprehensive backend solution with Strapi CMS providing flexible content management, secure API endpoints, and efficient data handling for mobile applications.",
    imageUrl: "/bendaku_backend/1.png",
    buttonText: "View Backend",
    detailUrl: "#",
    category: "backend",
  },
  {
    id: 20,
    title: "Design Portfolio 11",
    description: "Creative event poster design with modern aesthetic and engaging visual elements.",
    techStack: ["Adobe Illustrator", "Photoshop", "Canva"],
    imageTitle: "Creative Event Design",
    imageDescription: "Modern event poster showcasing creative design work with engaging visual elements and professional aesthetics.",
    imageUrl: "/design/11.jpg",
    buttonText: "View Design",
    detailUrl: "#",
    category: "desain-grafis",
  },
  {
    id: 21,
    title: "Design Portfolio 12",
    description: "Retro-themed event poster with vibrant colors and vintage digital camera aesthetic.",
    techStack: ["Adobe Illustrator", "Photoshop"],
    imageTitle: "Retro Event Aesthetic",
    imageDescription: "Vibrant retro-themed event poster featuring vintage digital camera aesthetic with chromatic aberration effects and bold typography.",
    imageUrl: "/design/12.png",
    buttonText: "View Design",
    detailUrl: "#",
    category: "desain-grafis",
  },
  {
    id: 22,
    title: "Design Portfolio 13",
    description: "Event reschedule announcement with calendar design and professional layout.",
    techStack: ["Adobe Illustrator", "Photoshop", "Canva"],
    imageTitle: "Event Reschedule Design",
    imageDescription: "Professional event reschedule announcement featuring calendar design with clear date highlighting and engaging visual presentation.",
    imageUrl: "/design/13.png",
    buttonText: "View Design",
    detailUrl: "#",
    category: "desain-grafis",
  },
];

// Helper function to get project by id
export function getProjectById(id: number): Project | undefined {
  return projects.find(project => project.id === id);
}

// Helper function to generate project images based on folder structure
export function getProjectImages(projectId: number): string[] {
  const project = getProjectById(projectId);
  if (!project) return [];

  // Map project IDs to their image folders
  const imageFolders: Record<number, string> = {
    1: 'disbursement',
    2: 'uonepay',
    3: 'payment',
    4: 'travel',
    5: 'ifortepay',
    6: 'globemen',
    7: 'kostfinenace',
  };

  const folder = imageFolders[projectId];
  if (!folder) return [project.imageUrl];

  // Return array of images (you can expand this based on actual images)
  return [project.imageUrl];
}

