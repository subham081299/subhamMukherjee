import React, { useState, useEffect } from "react";

const Navbar = ({ isClicked, handleClick }) => {
  const [activeLink, setActiveLink] = useState("#home");
  const [hoverPosition, setHoverPosition] = useState({ x: 0, width: 0 });

  const navigation = [
    { name: "Home", url: "#home" },

    { name: "Projects", url: "#projects" },
    { name: "About", url: "#about" },
    { name: "Skills", url: "#skills" },
    { name: "Contact", url: "#contact" },
  ];

  // Track active section while scrolling
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // Add offset for accuracy
      const sections = document.querySelectorAll("section[id]");
  
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
  
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveLink(`#${section.getAttribute("id")}`);
        }
      });
    };
  
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  

  // Set hover marker to active link on load
  useEffect(() => {
    const activeElement = document.querySelector(`a[href='${activeLink}']`);
    if (activeElement) {
      const { offsetLeft, offsetWidth } = activeElement;
      setHoverPosition({ x: offsetLeft, width: offsetWidth });
    }
  }, [activeLink]);

  // Move hover marker
  const handleMouseEnter = (event) => {
    const { offsetLeft, offsetWidth } = event.target;
    setHoverPosition({ x: offsetLeft + 5, width: offsetWidth - 10 });
  };

  // Revert marker to active link after hover ends
  const handleMouseLeave = () => {
    const activeElement = document.querySelector(`a[href='${activeLink}']`);
    if (activeElement) {
      const { offsetLeft, offsetWidth } = activeElement;
      setHoverPosition({ x: offsetLeft, width: offsetWidth });
    }
  };

  return (
    <>
      {/* Navbar for Mobile Devices */}
      <nav
        className={`fixed top-0 left-0 w-full h-screen flex items-center justify-start transition-all duration-500 ${
          isClicked ? "lg:hidden" : "hidden"
        }`}
      >
        <ul className="h-full w-[60%] bg-gray-900 pl-4 pt-24">
          {navigation.map((item) => (
            <li
              key={item.name}
              className="mb-4 text-lg font-medium capitalize list-none"
            >
              <a
                href={item.url}
                className={`font-semibold ${
                  activeLink === item.url ? "text-blue-600" : "text-white"
                } hover:text-blue-600 transition-colors duration-300 ease-in`}
                onClick={() => {
                  setActiveLink(item.url);
                  handleClick();
                }}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Navbar for Desktop Devices with Hover Marker */}
      <nav className="relative hidden lg:flex space-x-6">
        {/* Hover Marker */}
        <div
          className="absolute bottom-0 h-1 bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-300 ease-in"
          style={{
            left: `${hoverPosition.x}px`,
            width: `${hoverPosition.width}px`,
          }}
        ></div>

        {navigation.map((item) => (
          <a
            key={item.name}
            href={item.url}
            className={`${
              activeLink === item.url
                ? "text-blue-600 font-extrabold"
                : "text-white"
            } hover:text-blue-600 transition-colors duration-300 ease-in px-2 font-extrabold`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={() => {
              setActiveLink(item.url);
              handleClick();
            }}
          >
            {item.name}
          </a>
        ))}
      </nav>
    </>
  );
};

export default Navbar;
