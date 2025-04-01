import Navbar from './components/Navbar';
import Footer from './components/Footer';
export default function Home() {
  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-teal-500 to-blue-600 h-[32rem] flex items-center justify-center text-center text-white px-4 py-8">
        <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: 'url("/path/to/your-image.jpg")' }}></div>
        <div className="relative z-10 space-y-4">
          <h1 className="text-5xl font-extrabold leading-tight tracking-tight sm:text-6xl">
            Welcome to <span className="text-yellow-400">CompileFast</span> 🚀
          </h1>
          <p className="text-xl sm:text-2xl font-medium">
            Your fast and reliable compiler for all your coding needs.
          </p>
          <button className="mt-6 px-8 py-4 bg-yellow-400 text-gray-900 font-semibold text-lg rounded-lg shadow-md hover:bg-yellow-500 transition duration-300">
            Get Started
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-100 w-full">
        <div className="container mx-auto text-center w-9/10">
          <h2 className="text-4xl font-bold text-gray-800">Features</h2>
          <p className="text-xl text-gray-600 mt-4 mb-12">
            Explore the features that make CompileFast stand out.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Feature 1 */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:scale-105 transition duration-300">
              <h3 className="text-2xl font-semibold text-teal-600">Fast Compilation</h3>
              <p className="text-gray-700 mt-4">
                Get instant feedback with our fast and reliable compilation engine.
              </p>
            </div>
            {/* Feature 2 */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:scale-105 transition duration-300">
              <h3 className="text-2xl font-semibold text-teal-600">Multi-Language Support</h3>
              <p className="text-gray-700 mt-4">
                Compile code in multiple languages with ease, including JavaScript, Python, C++, and more.
              </p>
            </div>
            {/* Feature 3 */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:scale-105 transition duration-300">
              <h3 className="text-2xl font-semibold text-teal-600">Secure Environment</h3>
              <p className="text-gray-700 mt-4">
                Run your code in a secure and isolated environment, ensuring safety and privacy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-teal-100">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800">What Our Users Say</h2>
          <p className="text-xl text-gray-600 mt-4 mb-12">
            Hear from our satisfied users who love using CompileFast.
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="max-w-md bg-white p-6 rounded-lg shadow-lg">
              <p className="text-gray-700 italic">
                "CompileFast has made coding so much easier for me! I love the speed and reliability!"
              </p>
              <h3 className="mt-4 text-teal-600 font-semibold">John Doe</h3>
              <p className="text-gray-500">Software Engineer</p>
            </div>
            <div className="max-w-md bg-white p-6 rounded-lg shadow-lg">
              <p className="text-gray-700 italic">
                "The multi-language support is fantastic. I can work on all my projects without worrying about compilation errors."
              </p>
              <h3 className="mt-4 text-teal-600 font-semibold">Jane Smith</h3>
              <p className="text-gray-500">Web Developer</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <Footer />
    </>
  );
}
