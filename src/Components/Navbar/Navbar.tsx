"use client";

import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/Components/ui/resizable-navbar";
import { useState } from "react";

const NavbarDemo = () => {
  const navItems = [
    {
      name: "Home",
      link: "#features",
    },
    {
      name: "About",
      link: "#About",
    },
    {
      name: "Services",
      link: "#Service",
      subMenu: [
        {
          name: "Development Services",
          link: "#development",
          subMenu: [
            { name: "Web Development", link: "#web-dev" },
            { name: "Mobile App Development", link: "#mobile-dev" },
            { name: "Cloud Solutions", link: "#cloud" },
            { name: "API Integration", link: "#api" },
          ],
        },
        {
          name: "Consulting Services",
          link: "#consulting",
        },
      ],
    },
    {
      name: "Project",
      link: "#Project",
    },
    {
      name: "Contact",
      link: "#contact",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const DummyContent = () => {
    return (
      <div className="container mx-auto p-8 pt-12">
        {/* Placeholder content */}
      </div>
    );
  };

  return (
    <div className="relative w-full">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} onItemClick={() => setIsMobileMenuOpen(false)} />
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <div key={`mobile-link-${idx}`}>
                <a
                  href={item.link}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="relative text-neutral-600 block py-2"
                >
                  <span className="block">{item.name}</span>
                </a>
                {item.subMenu && (
                  <div className="ml-4 flex flex-col gap-2">
                    {item.subMenu.map((subItem, subIdx) => (
                      <div key={`mobile-sub-link-${subIdx}`}>
                        <a
                          href={subItem.link}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="relative text-neutral-500 block py-1 text-sm"
                        >
                          <span className="block">{subItem.name}</span>
                        </a>
                        {subItem.subMenu && (
                          <div className="ml-4 flex flex-col gap-1">
                            {subItem.subMenu.map((nestedItem, nestedIdx) => (
                              <a
                                key={`mobile-nested-link-${nestedIdx}`}
                                href={nestedItem.link}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="relative text-neutral-400 block py-1 text-xs"
                              >
                                <span className="block">{nestedItem.name}</span>
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
      <DummyContent />
    </div>
  );
};

export default NavbarDemo;