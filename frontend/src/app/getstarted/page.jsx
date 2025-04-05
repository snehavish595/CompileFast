import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FAQSection from "../components/FAQSection";

export default function GetStarted() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[36rem] flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800 text-white text-center px-6 py-10">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: 'url("/images/get-started-bg.jpg")' }}
        ></div>
        <div className="relative z-10 space-y-6">
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight">
            Get Started with{" "}
            <span className="text-yellow-400">CompileFast</span>
          </h1>
          <p className="text-lg sm:text-xl font-light max-w-3xl mx-auto mb-12">
            Code, compile, and execute instantly with our powerful online
            editor.
          </p>
          <a
            href="/compiler"
            className="px-8 py-4  bg-yellow-500 text-gray-900 font-semibold text-lg rounded-lg shadow-md hover:bg-yellow-600 transition duration-300"
          >
            Start Coding Now
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900">
            Why Choose CompileFast?
          </h2>
          <p className="text-lg text-gray-600 mt-4">
            Fast, reliable, and beginner-friendly online compiler.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12">
            {[
              {
                title: "Instant Execution",
                desc: "Compile and execute code in real-time with lightning-fast speed.",
              },
              {
                title: "Multi-Language Support",
                desc: "Run programs in Python, Java, C++, JavaScript, and more.",
              },
              {
                title: "Cloud-Based Platform",
                desc: "Access your code anywhere without the need for installations.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300"
              >
                <h3 className="text-2xl font-semibold text-blue-600">
                  {feature.title}
                </h3>
                <p className="text-gray-700 mt-2">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="w-full py-24 bg-gray-900 text-white text-center">
        <div className="w-9/10 mx-auto">
          <h2 className="text-4xl font-bold">How It Works</h2>
          <p className="text-lg text-gray-300 mt-4">
            Follow these simple steps to start coding.
          </p>
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mt-12">
            {[
              {
                title: "Choose Your Language",
                desc: "Select from multiple programming languages.",
              },
              {
                title: "Write Your Code",
                desc: "Use our advanced code editor for seamless coding.",
              },
              {
                title: "Run & Debug",
                desc: "Execute and test your code instantly.",
              },
            ].map((step, index) => (
              <div
                key={index}
                className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700"
              >
                <h3 className="text-xl font-semibold text-yellow-400">
                  Step {index + 1}
                </h3>
                <p className="mt-2 text-gray-300">{step.title}</p>
                <p className="mt-1 text-gray-400">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Supported Languages Section */}
      <section className="py-24 bg-gray-100 text-gray-900">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-semibold opacity-0 translate-y-6 transition-all duration-1000 ease-out animate-fadeIn">
            Supported Languages
          </h2>
          <p className="text-lg text-gray-600 mt-4 opacity-0 translate-y-6 transition-all duration-1000 delay-200 ease-out animate-fadeIn">
            Our compiler supports multiple languages, ensuring a seamless coding
            experience.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 mt-12">
            {[
              { name: "Python", icon: "/icons/python.svg" },
              { name: "JavaScript", icon: "/icons/javascript.svg" },
              { name: "C++", icon: "/icons/cpp.svg" },
              { name: "Java", icon: "/icons/java.svg" },
              { name: "C#", icon: "/icons/csharp.svg" },
              { name: "Ruby", icon: "/icons/ruby.svg" },
              { name: "Dart", icon: "/icons/dart.svg" },
              { name: "Go", icon: "/icons/go.svg" },
              { name: "Kotlin", icon: "/icons/kotlin.svg" },
              { name: "PHP", icon: "/icons/php.png" },
              { name: "Rust", icon: "/icons/rust.svg" },
              { name: "TypeScript", icon: "/icons/typescript.svg" },
            ].map((lang, index) => (
              <div
                key={index}
                className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md border border-gray-200 
                     transform scale-100 hover:scale-105 hover:shadow-xl transition-all duration-300 ease-in-out animate-slideUp cursor-pointer"
              >
                <img
                  src={lang.icon}
                  alt={lang.name}
                  className="h-12 w-12 transition-transform duration-300 hover:scale-110"
                />
                <h3 className="text-lg font-medium mt-4">{lang.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-24 bg-blue-600 text-white text-center">
        <h2 className="text-3xl font-bold">Start Coding Instantly</h2>
        <p className="text-lg text-gray-100 mt-4">
          Click below to launch the compiler and write your first program.
        </p>
        <a
          href="/compiler"
          className="mt-6 inline-block px-8 py-4 bg-yellow-400 text-gray-900 font-semibold rounded-lg shadow-lg hover:bg-yellow-500 transition duration-300"
        >
          Open Compiler
        </a>
      </section>

      {/* FAQ Section */}
     <FAQSection/>

      <Footer />
    </>
  );
}
