export interface Menu {
  id: number;
  title: string;
  path?: string;
  newTab: boolean;
  submenu?: Menu[];
}

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About",
    path: "/about",
    newTab: false,
  },
  {
    id: 3,
    title: "What We Offer",
    newTab: false,
    submenu: [
      {
        id: 31,
        title: "IT Services",
        newTab: false,
        submenu: [
          { id: 311, title: "Software Services", path: "/services/software-services", newTab: false },
          { id: 312, title: "AI & ML", path: "/services/ai-ml", newTab: false },
          { id: 313, title: "Cyber Security", path: "/services/cyber-security", newTab: false },
        ],
      },
      {
        id: 32,
        title: "Industrial Engineering",
        newTab: false,
        submenu: [
          { id: 321, title: "Industrial Designing", path: "/services/industrial-designing", newTab: false },
          { id: 322, title: "Prototyping", path: "/services/prototyping", newTab: false },
          { id: 323, title: "Manufacturing Expertise", path: "/services/manufacturing-expertise", newTab: false },
        ],
      },
      {
        id: 33,
        title: "Training",
        newTab: false,
        submenu: [
          { id: 331, title: "Technical Training", path: "/services/technical-training", newTab: false },
          { id: 332, title: "Soft Skills Training", path: "/services/soft-skills-training", newTab: false },
          { id: 333, title: "Corporate Training", path: "/services/corporate-training", newTab: false },
        ],
      },
    ],
  },
  {
    id: 4,
    title: "Business Development",
    path: "/services/business-development",
    newTab: false,
  },
  {
    id: 5,
    title: "Smart Homes",
    path: "/services/smart-homes",
    newTab: false,
  },
  {
    id: 6,
    title: "Contact",
    path: "/contact",
    newTab: false,
  },
];

export default menuData;