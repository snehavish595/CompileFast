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
    <nav className="bg-[#3f434e] dark:bg-[#0F172A] shadow-lg p-4 fixed w-full top-0 left-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <BrandLogo />

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8">
          <NavLink href="/" text="Home" />
          <NavLink href="/about" text="About" />
          <NavLink href="/features" text="Features" />
          <NavLink href="/pricing" text="Pricing" />
        </div>

        {/* Actions (Login, Register, Dark Mode) */}
        <div className="flex items-center space-x-6">
          <ActionButton href="/login" text="Login" />
          <ActionButton href="/register" text="Register" />
          <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
        </div>
      </div>
    </nav>
  );
}

// Brand Logo Component
const BrandLogo = () => (
  <h1 className="text-2xl font-bold text-white tracking-wide">
    Compile<span className="text-teal-400">Fast</span>
  </h1>
);

// Navigation Link Component
const NavLink = ({ href, text }) => (
  <Link
    href={href}
    className="text-white text-lg font-medium transition-colors duration-300 hover:text-teal-400"
  >
    {text}
  </Link>
);

// Action Button Component
const ActionButton = ({ href, text }) => (
  <Link
    href={href}
    className="px-6 py-2 bg-teal-500 text-white text-sm font-semibold rounded-lg transition duration-300 hover:bg-teal-400"
  >
    {text}
  </Link>
);

// Dark Mode Toggle Component
const DarkModeToggle = ({ darkMode, setDarkMode }) => (
  <button
    aria-label="Toggle Dark Mode"
    className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full transition duration-300 hover:bg-gray-300 dark:hover:bg-gray-600"
    onClick={() => setDarkMode(!darkMode)}
  >
    {darkMode ? (
      <Sun size={20} className="text-yellow-400" />
    ) : (
      <Moon size={20} className="text-gray-800 dark:text-white" />
    )}
  </button>
);
