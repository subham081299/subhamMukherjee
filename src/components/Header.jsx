import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { AlignLeft, X } from "lucide-react";

const Header = () => {
  const [isClicked, setIsClicked] = useState(true);
  const [isScrolling, setIsScrolling] = useState(false);

  // Handle scrolling effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(window.scrollY > 100); // Smoothly toggle based on scroll position
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <header
      className={`fixed top-0 z-[500] w-full transition-all duration-500 ${
        isScrolling
          ? "bg-gradient-to-b from-gray-800 to-neutral-900 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center py-4 px-4">
        {/* Logo */}
        <a href="/" className="font-bold text-white md:text-lg">
          Subham{" "}
          <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Mukherjee
          </span>
        </a>

        {/* Navbar */}
        <Navbar isClicked={isClicked} handleClick={handleClick} />

        {/* Menu Toggle Button */}
        <button
          onClick={handleClick}
          className="text-white cursor-pointer z-10 flex items-center md:hidden px-4"
        >
          {isClicked ? <X size={28} /> : <AlignLeft size={28} />}
        </button>
      </div>
    </header>
  );
};

export default Header;
