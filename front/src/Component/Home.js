import React from 'react';
import { Users, Zap, Shield } from 'lucide-react';

function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-blue-600 tracking-tight">QuerryBot</span>
          </div>
          <div className="flex items-center space-x-6">
            <a href="#home" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Home</a>
            <a href="#features" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Features</a>
            <a href="#about" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">About</a>
            <a href="#contact" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section  */}
      <main className="pt-24 pb-16 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-extrabold mb-6 leading-tight">Transform Your Business with Smart Solutions</h1>
          <p className="text-xl max-w-2xl mx-auto mb-10 text-blue-100">
            Unlock unprecedented growth and efficiency with our cutting-edge platform designed to elevate your business.
          </p>
          <div className="flex justify-center space-x-4">
            <a href='/register'>
              <button className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold 
                hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl">
                Register
              </button>
            </a>
            <a href="/login">
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold 
                hover:bg-white hover:text-blue-700 transition-all">
                Login
              </button>
            </a>
          </div>
        </div>
      </main>

      {/* Features Section */}
      <section className="py-20 bg-white" id="features">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Key Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Designed with precision to address your most complex business challenges.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-xl transition-all group">
              <Users className="w-12 h-12 text-blue-600 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold mb-4 text-gray-800">User-Centric Design</h3>
              <p className="text-gray-600 mb-4">
                Trained on specific content to deliver accurate and relevant responses.
              </p>
              <a href="#" className="text-blue-600 font-medium hover:underline">
                Learn More →
              </a>
            </div>

            {/* Feature 2 */}
            <div className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-xl transition-all group">
              <Zap className="w-12 h-12 text-green-600 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold mb-4 text-gray-800">High Performance</h3>
              <p className="text-gray-600 mb-4">
                Capable of generating precise content using Retrieval-Augmented Generation (RAG).
              </p>
              <a href="#" className="text-green-600 font-medium hover:underline">
                Learn More →
              </a>
            </div>

            {/* Feature 3 */}
            <div className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-xl transition-all group">
              <Shield className="w-12 h-12 text-purple-600 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Advanced Security</h3>
              <p className="text-gray-600 mb-4">
                Robust protection mechanisms ensuring your data remains safe and confidential.
              </p>
              <a href="#" className="text-purple-600 font-medium hover:underline">
                Learn More →
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;