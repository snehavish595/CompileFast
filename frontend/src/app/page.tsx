import Header from "./components/Navbar";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <h1 className="text-4xl font-bold text-blue-600">Welcome to My Next.js App! 🚀</h1>
      </main>
      <Footer/>
    </>
  );
}
