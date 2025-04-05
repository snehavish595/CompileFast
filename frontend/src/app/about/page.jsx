// pages/about.tsx (About Page)
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function About() {
  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <section className="relative bg-teal-500 text-white py-24 px-6 sm:px-12 text-center mt-12">
        <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight mb-6">About Us</h1>
        <p className="text-lg sm:text-2xl max-w-3xl mx-auto mt-6">
          CompileFast is a fast and reliable online compiler for various programming languages. Our mission is to make coding accessible and easy for everyone.
        </p>
      </section>

      {/* Team Section */}
      <div className="bg-gray-50">
      <section className="py-20 text-center w-9/10 mx-auto">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">Meet Our Team</h2>
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {[
            { name: "John Doe", role: "CEO" },
            { name: "Jane Smith", role: "CTO" },
            { name: "Alice Johnson", role: "Lead Developer" },
          ].map((member, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out">
              <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </section>
      </div>

      {/* Mission Section */}
      <section className="py-20 bg-white text-center">
        <h3 className="text-3xl font-semibold text-gray-800 mb-6">Our Mission</h3>
        <p className="text-lg sm:text-xl text-gray-600 mx-auto max-w-3xl">
          To provide developers with a fast, reliable, and secure online compiler to help them enhance their productivity, learn efficiently, and solve complex problems effortlessly. We strive to make coding accessible to all.
        </p>
      </section>

      {/* Footer Section */}
      <Footer />
    </>
  );
}
