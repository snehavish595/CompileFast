// pages/index.tsx (Home Page)
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <section className="relative bg-teal-500 h-[40rem] flex items-center justify-center text-center text-white px-4 py-8">
        <div className="absolute inset-0 bg-cover bg-center opacity-40 blur-md" style={{ backgroundImage: 'url("/path/to/your-image.jpg")' }}></div>
        <div className="relative z-10 space-y-6">
          <h1 className="text-4xl sm:text-6xl font-extrabold mt-12 mb-12">
            Welcome to <span className="text-yellow-300">CompileFast</span> 
          </h1>
          <p className="text-lg sm:text-2xl font-light max-w-2xl mx-auto mb-12">
            The fastest and most reliable online compiler, designed to boost your coding productivity.
          </p>
          <a href="/getstarted" className="px-8 py-4 bg-yellow-300 text-gray-900 font-semibold text-lg rounded-lg shadow-lg hover:bg-yellow-400 transition duration-300">
            Get Started
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800">Features</h2>
          <p className="text-lg text-gray-600 mt-4 mb-12">Explore the key features of CompileFast.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 w-9/10 mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:scale-105">
              <h3 className="text-2xl font-semibold text-blue-600">Instant Compilation</h3>
              <p className="text-gray-700 mt-4">Compile your code in real-time with lightning speed.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:scale-105">
              <h3 className="text-2xl font-semibold text-green-600">Multi-Language Support</h3>
              <p className="text-gray-700 mt-4">Run your code in Python, JavaScript, C++, Java, and more.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:scale-105">
              <h3 className="text-2xl font-semibold text-purple-600">Cloud-Based</h3>
              <p className="text-gray-700 mt-4">Access your code anytime, anywhere, without any installations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-r from-purple-500 to-indigo-500 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold">What Our Users Say</h2>
          <p className="text-lg mt-4 mb-12">Join thousands of happy developers using CompileFast!</p>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="max-w-md bg-white p-6 rounded-lg shadow-lg">
              <p className="text-gray-700 italic">"CompileFast is the best compiler I’ve ever used. It's fast and easy to use!"</p>
              <h3 className="mt-4 text-blue-600 font-semibold">John Doe</h3>
              <p className="text-gray-500">Software Engineer</p>
            </div>
            <div className="max-w-md bg-white p-6 rounded-lg shadow-lg">
              <p className="text-gray-700 italic">"This tool has saved me so much time! The real-time code execution is amazing."</p>
              <h3 className="mt-4 text-blue-600 font-semibold">Jane Smith</h3>
              <p className="text-gray-500">Web Developer</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-20 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold text-gray-800">Start Coding Today</h2>
        <p className="text-lg text-gray-600 mt-4 mb-8">Join CompileFast and take your coding to the next level.</p>
        <a href="/getstarted" className="px-8 py-4 bg-blue-600 text-white font-semibold text-lg rounded-lg shadow-lg hover:bg-blue-700 transition duration-300">
          Get Started
        </a>
      </section>

      <Footer />
    </>
  );
}
