"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <nav className="bg-[#98D2C0] dark:bg-gray-900 shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <BrandLogo />

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <NavLink href="/" text="Home" />
          <NavLink href="/about" text="About" />
        </div>

        {/* Actions (Login, Register, Dark Mode) */}
        <div className="flex items-center space-x-4">
          <ActionButton href="/" text="Login" />
          <ActionButton href="/register" text="Register" />
          <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
        </div>
      </div>
    </nav>
  );
}

// Brand Logo Component
const BrandLogo = () => (
  <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white tracking-wide">
    Compile<span className="text-[#2C7865] dark:text-teal-400">Fast</span>
  </h1>
);

// Navigation Link Component
const NavLink = ({ href, text }) => (
  <Link
    href={href}
    className="text-gray-700 dark:text-gray-300 text-lg font-medium transition-colors duration-300 hover:text-[#2C7865] dark:hover:text-teal-400"
  >
    {text}
  </Link>
);

// Action Button Component
const ActionButton = ({ href, text }) => (
  <Link
    href={href}
    className="px-4 py-2 rounded-lg bg-[#2C7865] dark:bg-teal-500 text-white text-sm font-semibold transition duration-300 hover:bg-[#205f4e] dark:hover:bg-teal-600"
  >
    {text}
  </Link>
);

// Dark Mode Toggle Component
const DarkModeToggle = ({ darkMode, setDarkMode }) => (
  <button
    aria-label="Toggle Dark Mode"
    className="p-2 bg-gray-300 dark:bg-gray-800 rounded-full transition duration-300 hover:bg-gray-400 dark:hover:bg-gray-700"
    onClick={() => setDarkMode(!darkMode)}
  >
    {darkMode ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-gray-700 dark:text-white" />}
  </button>
);
