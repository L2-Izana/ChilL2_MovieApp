import ChilL2Logo from "../media/favicon.ico";
import DarkLightButton from "../media/darklightbutton.png";
import React, { useEffect, useState } from "react";

function NavBar() {
  return (
    <nav className="fixed top-0 left-0 w-full mb-6 bg-transparent hover:bg-navbar-bg-light border-gray-200 dark:bg-navbar-bg-dark">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
        <a
          href="https://github.com/L2-Izana"
          className="flex items-center space-x-3 rtl:space-x-reverse"
          target="blank"
        >
          <img src={ChilL2Logo} className="h-8" alt="Flowbite Logo" />
          <span className="self-center text-2xl text-navbar-brand-light font-semibold whitespace-nowrap dark:text-navbar-brand-dark">
            ChilL2
          </span>
        </a>

        <NavBarUserProfile />
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-user"
        >
          <NavBarUser />
        </div>
      </div>
    </nav>
  );
}

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    () =>
      // Check local storage for theme preference
      localStorage.getItem("theme") === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
  );

  // Toggle the theme between dark and light
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Effect to apply theme to document
  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="flex items-center justify-center p-2 w-12 h-12 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
    >
      <span className="sr-only">Toggle theme</span>
      {isDarkMode ? (
        <svg
          className="w-6 h-6 text-yellow-400 dark:text-yellow-300"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 3v1m0 14v1m-6.293-6.293l.707.707M19.707 19.707l.707-.707M4.293 19.707l.707-.707M16.95 7.05l.707.707M12 12l1 1M12 12l-1 1"
          />
        </svg>
      ) : (
        <img src={DarkLightButton} alt="Dark Light Button" />
      )}
    </button>
  );
};

const NavBarUser = () => {
  const navBarUserElements = ["Home", "About", "Pricing", "Contact", "Profile"];

  return (
    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-navbar-bg-light md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:bg-navbar-bg-dark">
      {navBarUserElements.map((e) => (
        <li>
          <a
            href="#"
            className="block py-2 px-3 rounded text-navbar-text-light  hover:text-blue-500 dark:text-navbar-text-dark dark:hover:bg-gray-700 dark:hover:text-white"
          >
            {e}
          </a>
        </li>
      ))}
    </ul>
  );
};

const NavBarUserProfile = () => {
  const dropDownMenus = ["Dashboard", "Settings", "Earnings", "Sign out"];
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
      <ThemeToggle />
      <button
        type="button"
        className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
        id="user-menu-button"
        aria-expanded={isDropdownOpen}
        onClick={toggleDropdown}
      >
        <span className="sr-only">Open user menu</span>
        <img
          className="w-8 h-8 rounded-full"
          src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
          alt="Profile of Bonnie Green"
        />
      </button>

      {/* Dropdown menu */}
      {isDropdownOpen && (
        <div
          className="absolute top-16 right-16 mt-2 w-48 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
          id="user-dropdown"
        >
          <div className="px-4 py-3">
            <span className="block text-sm text-gray-900 dark:text-white">
              Luat Do
            </span>
            <span className="block text-sm text-gray-500 truncate dark:text-gray-400">
              dodinhluat6@gmail.com
            </span>
          </div>
          <ul className="py-2" aria-labelledby="user-menu-button">
            {dropDownMenus.map((e) => (
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  {e}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavBar;
