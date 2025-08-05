import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="px-6 py-12 md:px-20 bg-gradient-to-br from-white to-gray-100 text-gray-800 min-h-screen">
    
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold text-blue-700 mb-4 animate-pulse">Hi, I'm Sadiq Khan</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          A passionate Web Developer, Python Programmer & Agentic AI Explorer. I build responsive, smart, and modern web applications.
        </p>
        <Link
          to="/contact"
          className="inline-block mt-6 bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition"
        >
          Let's Work Together
        </Link>
      </section>

      {/* Skills Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-center mb-8">🛠 My Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="bg-white p-4 rounded-lg shadow hover:shadow-md transition">
            <p className="text-blue-600 font-bold">HTML</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow hover:shadow-md transition">
            <p className="text-blue-600 font-bold">CSS & Tailwind</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow hover:shadow-md transition">
            <p className="text-blue-600 font-bold">JavaScript</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow hover:shadow-md transition">
            <p className="text-blue-600 font-bold">React.js / Vite</p>
          </div> <div className="bg-white p-4 rounded-lg shadow hover:shadow-md transition">
            <p className="text-blue-600 font-bold">NextJs</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow hover:shadow-md transition">
            <p className="text-blue-600 font-bold">Python</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow hover:shadow-md transition">
            <p className="text-blue-600 font-bold">FastAPI</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow hover:shadow-md transition">
            <p className="text-blue-600 font-bold">Streamlit</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow hover:shadow-md transition">
            <p className="text-blue-600 font-bold">Agentic AI</p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-center mb-8">📁 Featured Projects</h2>
        <p className="text-2xl font-semibold text-center mb-4">Demo Projects</p>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-40 bg-cover bg-center" style={{ backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo5HFJumi1frEHAdqcfvK7SKrdmnP7M14zOA&s')" }} />
            <div className="p-4">
              <h3 className="font-bold text-lg text-blue-700">AI Car Security App</h3>
              <p className="text-sm text-gray-600">Built using Python OOP + Streamlit. Features voice control, facial auth, and logs.</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-40 bg-cover bg-center" style={{ backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0jp3u2FG-CLn8jETwT_jgnOBD-jyCrk45Ew&s')" }} />
            <div className="p-4">
              <h3 className="font-bold text-lg text-blue-700">Responsive Freight Booking UI</h3>
              <p className="text-sm text-gray-600">Modern logistics design using Tailwind CSS & React routing.</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-40 bg-cover bg-center" style={{ backgroundImage: "url('https://i.ytimg.com/vi/jzxAXYLW3OA/maxresdefault.jpg')" }} />
            <div className="p-4">
              <h3 className="font-bold text-lg text-blue-700">CSS Quiz Web App</h3>
              <p className="text-sm text-gray-600">Interactive 150+ question app built in Next.js + ShadCN UI.</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="text-center text-sm text-gray-500 mt-12">
        © 2025 Sadiq Khan — Crafted with 💻 + ☕ in React & Tailwind
      </footer>
    </div>
  );
};

export default Home;
