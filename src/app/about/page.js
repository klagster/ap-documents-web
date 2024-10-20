"use client";

import Navbar from "../../components/navbar.js";  // Ensure the correct path to the Navbar component

export default function Home() {
  return (
    <div>
      <Navbar />  {/* Render your Navbar */}

      {/* Custom content for the home page */}
      <main className="flex flex-col items-center justify-center min-h-screen p-8">
        <h1 className="text-4xl font-bold mb-6">Welcome to the Home Page</h1>
        <p className="text-lg">This is your custom home page. You can add more content here.</p>
      </main>
    </div>
  );
}