import '../app/globals.css';  // Import Tailwind and global CSS
import Navbar from '../components/navbar.js';  // Import your Navbar component

export const metadata = {
  title: 'My Next.js App',
  description: 'This is a simple Next.js app with a menu.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Include meta tags or favicons */}
      </head>
      <body className="bg-white text-black">
        <Navbar />  {/* Persistent Navbar included */}
        <main>
          {children}  {/* Render the rest of the page content */}
        </main>
      </body>
    </html>
  );
}