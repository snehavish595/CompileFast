// pages/about.jsx
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function About() {
  return (
    <>
      {/* <Navbar /> */}
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <h1 className="text-4xl font-bold text-blue-600">About Us</h1>
        <p className="text-lg text-gray-700 mt-4">
          CompileFast is a fast and reliable online compiler for various programming languages. Our mission is to make
          coding accessible and easy for everyone.
        </p>
      </div>
      {/* <Footer /> */}
    </>
  );
}
