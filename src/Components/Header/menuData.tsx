export interface Menu {
  id: number;
  title: string;
  path?: string;
  sectionId?: string;
  newTab: boolean;
  submenu?: Menu[];
}

const menuData: Menu[] = [
  {
    id: 1,
    title: "About",
    path: "/about",
    newTab: false,
  },
  
  {
    id: 2,
    title: "Industrial Engineering",
    newTab: false,
    submenu: [
      // s
      {
        id: 23,
        title: "Industrial Designing",
        path: "/services/industrial-designing ",
        newTab: false,
      },
      
      {
        id: 23,
        title: "Prototyping",
        path: "/services/prototyping",
        newTab: false,
      },
      {
        id: 23,
        title: "Manufacturing Expertise",
        path: "/services/link",
        newTab: false,
      },
    ],
  },
  {
    id: 2,
    title: "IT Services",
    newTab: false,
    submenu: [
      // s
      {
        id: 23,
        title: "AI/ML",
        path: "/ai",
        newTab: false,
      },
      {
        id: 23,
        title: "cyber security",
        path: "/services/cybersecurity",
        newTab: false,
      },
    ],
  },
  {
    id: 3,
    title: "Business Development",
    path: "/services/business-development",
    newTab: false,
  },
  {
    id: 3,
    title: "Training",
    path: "/services/training",
    newTab: false,
  },
 
  
  {
    id: 3,
    title: "Contact",
    path: "/contact",
    newTab: false,
  },
];

export default menuData;