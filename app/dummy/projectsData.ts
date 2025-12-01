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
  number: string;
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
    number: "04",
    title: "Gasstrip - Holiday Ticket Booking Website",
    description: "A comprehensive holiday ticket booking platform with integrated payment gateway, featuring seamless ticket reservation, payment processing, and travel management system.",
    techStack: ["Next.js", "Strapi", "PostgreSQL", "Payment Gateway", "TypeScript"],
    imageTitle: "Pesona Yang Memikat Untuk Perjalanan Anda",
    imageDescription: "Temukan keindahan tersembunyi dari destinasi-destinasi menakjubkan dalam koleksi pilihan kami! Jangan sampai terlewatkan untuk menjelajahi keajaiban yang memikat bersama kami dan ciptakan momen tak terlupakan",
    imageUrl: "/assets/gips2.png",
    buttonText: "Paket Wisata",
    detailUrl: "#",
    category: "fullstack",
  },
  {
    id: 2,
    number: "05",
    title: "E-commerce Platform",
    description: "A full-stack e-commerce application with user authentication, product listings, shopping cart, and checkout functionality.",
    techStack: ["Next.js", "React", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
    imageTitle: "Shop Smart, Live Better",
    imageDescription: "Discover amazing products and deals in our curated collection. Experience seamless shopping with secure payment and fast delivery.",
    imageUrl: "/assets/gips2.png",
    buttonText: "Shop Now",
    detailUrl: "#",
    category: "fullstack",
  },
  {
    id: 3,
    number: "06",
    title: "Task Management App",
    description: "A responsive task management application with drag-and-drop functionality, filtering, and local storage persistence.",
    techStack: ["React", "TypeScript", "Styled Components"],
    imageTitle: "Organize Your Life",
    imageDescription: "Stay productive and organized with our intuitive task management system. Create, track, and complete your tasks effortlessly.",
    imageUrl: "/assets/gips2.png",
    buttonText: "Get Started",
    detailUrl: "#",
    category: "frontend",
  },
  {
    id: 4,
    number: "07",
    title: "REST API Server",
    description: "A robust RESTful API server built with Node.js and Express, featuring authentication, data validation, and database integration.",
    techStack: ["Node.js", "Express", "MongoDB", "JWT"],
    imageTitle: "Powerful Backend Solutions",
    imageDescription: "Build scalable and secure backend services with our comprehensive API solution.",
    imageUrl: "/assets/gips2.png",
    buttonText: "View API",
    detailUrl: "#",
    category: "backend",
  },
  {
    id: 5,
    number: "08",
    title: "Mobile Banking App",
    description: "A modern mobile banking application with secure transactions, account management, and real-time notifications.",
    techStack: ["React Native", "TypeScript", "Firebase"],
    imageTitle: "Banking Made Simple",
    imageDescription: "Manage your finances on the go with our intuitive mobile banking experience.",
    imageUrl: "/assets/gips2.png",
    buttonText: "Download App",
    detailUrl: "#",
    category: "mobile",
  },
  {
    id: 6,
    number: "09",
    title: "E-commerce UI Design",
    description: "A comprehensive UI/UX design system for e-commerce platform with modern aesthetics and user-friendly interface.",
    techStack: ["Figma", "Adobe XD", "Prototyping"],
    imageTitle: "Beautiful Design System",
    imageDescription: "Experience seamless shopping with our thoughtfully designed user interface.",
    imageUrl: "/assets/gips2.png",
    buttonText: "View Design",
    detailUrl: "#",
    category: "uiux",
  },
  {
    id: 7,
    number: "10",
    title: "Brand Identity Design",
    description: "Complete brand identity design including logo, color palette, typography, and marketing materials.",
    techStack: ["Adobe Illustrator", "Photoshop", "InDesign"],
    imageTitle: "Creative Brand Solutions",
    imageDescription: "Build a strong brand presence with our comprehensive design services.",
    imageUrl: "/assets/gips2.png",
    buttonText: "View Portfolio",
    detailUrl: "#",
    category: "desain-grafis",
  },
];

