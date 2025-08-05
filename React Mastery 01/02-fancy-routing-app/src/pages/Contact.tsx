const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-20 md:px-20 text-gray-800">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-5xl font-bold text-purple-700 mb-6">Get in Touch</h1>
        <p className="text-lg text-gray-600 mb-12">
          Have a project idea, collaboration request, or just want to say hello? Drop me a message below!
        </p>

        <form className="space-y-6 text-left">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Your Full Name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
            <textarea
              id="message"
              rows={5}
              placeholder="Tell me how I can help you..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
              required
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-purple-700 text-white px-8 py-3 rounded-full hover:bg-purple-800 transition"
            >
              Send Message
            </button>
          </div>
        </form>

        {/* Optional Contact Info */}
        <div className="mt-16 text-gray-600 text-sm">
          <p>Email: <a href="mailto:sadiq@example.com" className="text-purple-700 hover:underline">sadiq@example.com</a></p>
          <p>Location: Karachi, Pakistan</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
