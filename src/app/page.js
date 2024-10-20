// Remove the Navbar import and rendering here
// The Navbar is already being included in the RootLayout

export default function Home() {
  return (
    <div>
      {/* Custom content for the home page */}
      <main className="flex flex-col items-center justify-center min-h-screen p-8">
        <h1 className="text-4xl font-bold mb-6">Welcome to the Home Page</h1>
        <p className="text-lg">This is your custom home page. You can add more content here.</p>
      </main>
    </div>
  );
}