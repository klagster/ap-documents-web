"use client";

import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isUtilitiesOpen, setIsUtilitiesOpen] = useState(false);  // Track whether the Utilities submenu is open

  const toggleUtilities = () => {
    setIsUtilitiesOpen(!isUtilitiesOpen);  // Toggle the submenu
  };

  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex justify-around">
        <li>
          <Link href="/login" className="text-white hover:text-gray-400">Login/Logout</Link>
        </li>
        <li>
          <Link href="/documents" className="text-white hover:text-gray-400">Documents</Link>
        </li>
        <li>
          <Link href="/invoices" className="text-white hover:text-gray-400">Invoices</Link>
        </li>
        <li>
          <Link href="/contact" className="text-white hover:text-gray-400">Contact</Link>
        </li>
        <li className="relative">
          <button 
            onClick={toggleUtilities} 
            className="text-white hover:text-gray-400 focus:outline-none">
            Utilities
          </button>
          {/* Submenu */}
          {isUtilitiesOpen && (
            <ul className="absolute mt-2 bg-gray-700 p-2 rounded shadow-lg flex flex-col w-48">
              <li>
                <Link href="/utilities/fquery" className="text-white hover:text-gray-400 block px-4 py-2">FQuery</Link>
              </li>
              <li>
                <Link href="/utilities/oquery" className="text-white hover:text-gray-400 block px-4 py-2">OQuery</Link>
              </li>
            </ul>
          )}
        </li>
      </ul>

      <style jsx>{`
        nav {
          background-color: #333;
          padding: 1rem;
        }

        ul {
          list-style: none;
          display: flex;
          justify-content: space-around;
        }

        li {
          margin: 0;
          position: relative;
        }

        a {
          color: white;
          text-decoration: none;
          font-weight: bold;
        }

        a:hover {
          text-decoration: underline;
        }

        .submenu {
          display: none;
        }

        .submenu.open {
          display: block;
        }

        button {
          background: none;
          border: none;
          cursor: pointer;
        }

        .submenu li {
          margin: 0;
        }

        ul.flex-col {
          flex-direction: column; /* Ensure the submenu is vertical */
        }

        /* Adjust the submenu width */
        .w-48 {
          width: 12rem;  /* Adjust width as needed (wider submenu) */
        }
      `}</style>
    </nav>
  );
};

export default Navbar;