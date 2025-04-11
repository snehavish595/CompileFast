"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    setIsAuthenticated(!!token);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    window.location.href = "/login";
  };

  return (
    <nav className="bg-[#3f434e] dark:bg-[#0F172A] shadow-lg p-4 fixed w-full top-0 left-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white tracking-wide">
          Compile<span className="text-teal-400">Fast</span>
        </h1>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8">
          <NavLink href="/" text="Home" />
          <NavLink href="/features" text="Features" />
          <NavLink href="/about" text="About" />
          <NavLink href="/compiler" text="Practice" />
          <NavLink href="/contact" text="Contact" />
        </div>

        {/* Actions */}
        <div className="flex items-center space-x-4">
          {isAuthenticated ? (
            <>
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 text-sm"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <ActionButton href="/login" text="Login" />
              <ActionButton href="/register" text="Register" />
            </>
          )}
          <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
        </div>
      </div>
    </nav>
  );
}

const NavLink = ({ href, text }) => (
  <Link
    href={href}
    className="text-white text-lg font-medium transition-colors duration-300 hover:text-teal-400"
  >
    {text}
  </Link>
);

const ActionButton = ({ href, text }) => (
  <Link
    href={href}
    className="px-4 py-2 bg-teal-500 text-white text-sm font-semibold rounded-lg transition duration-300 hover:bg-teal-400"
  >
    {text}
  </Link>
);

const DarkModeToggle = ({ darkMode, setDarkMode }) => (
  <button
    aria-label="Toggle Dark Mode"
    className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full transition hover:bg-gray-300 dark:hover:bg-gray-600"
    onClick={() => setDarkMode(!darkMode)}
  >
    {darkMode ? (
      <Sun size={20} className="text-yellow-400" />
    ) : (
      <Moon size={20} className="text-gray-800 dark:text-white" />
    )}
  </button>
);
