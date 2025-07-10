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
    title: "Industrial Enginering",
    newTab: false,
    submenu: [
      // s
      {
        id: 23,
        title: "Feasibility Study",
        path: "/ai",
        newTab: false,
      },
      {
        id: 23,
        title: "Technical Consultancy",
        path: "/itservice",
        newTab: false,
      },
      {
        id: 23,
        title: "Product Designing",
        path: "/itservice",
        newTab: false,
      },
      {
        id: 23,
        title: "Prototyping",
        path: "/itservice",
        newTab: false,
      },
      {
        id: 23,
        title: "Link to Manufacturing",
        path: "/itservice",
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
        title: "IT service",
        path: "/itservice",
        newTab: false,
      },
    ],
  },
 
  
  {
    id: 3,
    title: "Contact",
    path: "/contact",
    newTab: false,
  },
];

export default menuData;