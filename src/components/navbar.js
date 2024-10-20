"use client";

import Link from 'next/link';

const Navbar = () => {
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
          <Link href="/settings" className="text-white hover:text-gray-400">Settings</Link>
        </li>
        <li>
          <Link href="/contact" className="text-white hover:text-gray-400">Contact</Link>
        </li>
      </ul>

      <style jsx>{`
        nav {
          background-color: #333;  /* Dark background */
          padding: 1rem;
        }

        ul {
          list-style: none;
          display: flex;
          justify-content: space-around;
        }

        li {
          margin: 0;
        }

        a {
          color: white;  /* White text for the menu items */
          text-decoration: none;
          font-weight: bold;
        }

        a:hover {
          text-decoration: underline;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;