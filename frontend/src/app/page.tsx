import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-teal-500 h-[34rem] flex items-center justify-center text-center text-white px-4 py-8">
        <div className="absolute inset-0 bg-cover bg-center opacity-40 blur-md" style={{ backgroundImage: 'url("/path/to/your-image.jpg")' }}></div>
        <div className="relative z-10 space-y-4">
          <h1 className="text-4xl mb-10 font-extrabold sm:text-6xl">
            Welcome to <span className="text-yellow-300">CompileFast</span> 🚀
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
      <section className="py-20 bg-gray-50 w-full">
        <div className="container mx-auto text-center w-9/10">
          <h2 className="text-4xl font-bold text-gray-800">Features</h2>
          <p className="text-lg text-gray-600 mt-4 mb-12">Explore what makes CompileFast unique.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {["Instant Compilation", "Multi-Language Support", "Secure Execution"].map((title, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:scale-105 hover:shadow-xl transition duration-300">
                <h3 className={`text-2xl font-semibold ${["text-blue-600", "text-green-600", "text-purple-600"][index]}`}>{title}</h3>
                <p className="text-gray-700 mt-4">{[
                  "Get results in real time with our high-speed compiler.",
                  "Compile JavaScript, Python, C++, and more effortlessly.",
                  "Run your code in an isolated environment for safety.",
                ][index]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-r from-purple-500 to-indigo-500">
        <div className="container mx-auto text-center text-white">
          <h2 className="text-4xl font-bold">What Our Users Say</h2>
          <p className="text-lg mt-4 mb-12">Trusted by developers worldwide.</p>
          <div className="flex flex-wrap justify-center gap-8">
            {["John Doe", "Jane Smith"].map((name, index) => (
              <div key={index} className="max-w-md bg-white p-6 rounded-lg shadow-lg">
                <p className="text-gray-700 italic">{[
                  "CompileFast has transformed my workflow! It's fast and reliable.",
                  "I love the seamless multi-language support. Highly recommended!",
                ][index]}</p>
                <h3 className="mt-4 text-blue-600 font-semibold">{name}</h3>
                <p className="text-gray-500">{["Software Engineer", "Web Developer"][index]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Links Section */}
      <section className="py-20 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold text-gray-800">Get Involved</h2>
        <p className="text-lg text-gray-600 mt-4 mb-8">Explore more about CompileFast</p>
        <div className="flex justify-center gap-6">
          {["Documentation", "Contact Us", "About Us"].map((text, index) => (
            <a key={index} href={["/docs", "/contact", "/about"][index]} className={`px-6 py-3 ${["bg-blue-600", "bg-green-600", "bg-purple-600"][index]} text-white rounded-lg shadow-lg hover:${["bg-blue-700", "bg-green-700", "bg-purple-700"][index]} transition`}>
              {text}
            </a>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
