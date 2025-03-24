import React, { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router";

const Header = () => {
  const {isAdmin, profileImg} = useSelector((state)=> state.auth)
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Close profile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="bg-white shadow-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* Mobile menu button */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-800 hover:bg-gray-200 focus:ring-2 focus:ring-gray-400"
              aria-controls="mobile-menu"
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <svg className="size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              )}
            </button>
          </div>

          {/* Logo */}
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
              <img className="h-8 w-auto" src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company" />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {isAdmin ? (
                  <>
                    <NavLink to='/resturents' >Resturents</NavLink>
                    <NavLink to='/resturents' >Resturents</NavLink>
                  </>
                ) : (
                  <>
                    <a href="#" className="rounded-md bg-gray-200 px-3 py-2 text-sm font-medium text-gray-800">Dashboard</a>
                    <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-800 hover:bg-gray-100">Team</a>
                    <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-800 hover:bg-gray-100">Projects</a>
                    <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-800 hover:bg-gray-100">Calendar</a>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Profile Menu */}
          <div className="relative ml-3" ref={menuRef}>
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className="relative flex rounded-full bg-gray-200 text-sm focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
            >
              <span className="sr-only">Open user menu</span>
              <img className="size-8 rounded-full" src={profileImg} alt="" />
              
            </button>

            {/* Dropdown Menu */}
            {menuOpen && (
              <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5">
                <a href="#" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">Your Profile</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">Settings</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">Sign out</a>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pt-2 pb-3">
            <a href="#" className="block rounded-md bg-gray-200 px-3 py-2 text-base font-medium text-gray-800">Dashboard</a>
            <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-800 hover:bg-gray-100">Team</a>
            <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-800 hover:bg-gray-100">Projects</a>
            <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-800 hover:bg-gray-100">Calendar</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;