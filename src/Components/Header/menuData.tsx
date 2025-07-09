import { Menu } from "@/app/types/menu";

const menuData: Menu[] = [
  // {
  //   id: 1,
  //   title: "Home",
  //   path: "/",
  //   sectionId:"home",
  //   newTab: false
  // },

  

  {
    id: 6,
    title: " About",
    path: "/industries" ,
    sectionId:"feature",
    newTab: false,
  },
  {
    id: 2,
    title: "Education & Training",
    newTab: false,
    
    submenu: [
      
      
      {
        id: 22,
        title: "Training courses ",
        path: "/dataanalytics",
        newTab: false,
        
      },

      {
        id: 22,
        title: "Courses Delivery option",
        path: "/database",
        newTab: false,
        
      },
      {
        id: 22,
        title: "Msc Dcyber sercurity",
        path: "/database",
        newTab: false,
        
      },


    ],
  },

 

  // {
  //   id: 6,
  //   title: "Security Awarness",
  //   path: "/solution" ,
  //   sectionId:"feature",
  //   newTab: false,
  // },
  {
    id: 6,
    title: "Domain Name",
    path: "/industries" ,
    sectionId:"feature",
    newTab: false,
  },

 
  {
    id: 2,
    title: "Services",
    newTab: false,
    
    submenu: [
      
      {
        id: 22,
        title: "It Services ",
        path: "/itservice",
        newTab: false,
        
      },
      {
        id: 22,
        title: "Cyber Security Services ",
        path: "/dataanalytics",
        newTab: false,
        
      },
      {
        id: 22,
        title: "ERP ",
        path: "/dataanalytics",
        newTab: false,
        
      },

      
     


    ],
  },

  {
    id: 6,
    title: "Contact",
    path: "/contact" ,
    sectionId:"contact",
    newTab: false,
  },
  
  
  

  

];
export default menuData;
