import { Mail, Phone, MapPin, GraduationCap, Briefcase, Code, Palette, Music, Tv, Paintbrush } from 'lucide-react'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-6xl mx-auto px-6 py-20 md:py-32">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="animate-fade-in-up">
              <img 
                src="/images/profile.jpg" 
                alt="Anuthida Wanseng"
                className="w-64 h-64 rounded-full object-cover shadow-2xl border-8 border-white/20 hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="text-center md:text-left animate-fade-in-up animation-delay-200">
              <h1 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight">
                Anuthida Wanseng
              </h1>
              <p className="text-2xl md:text-3xl text-blue-100 mb-6 font-light">
                Web/UI/UX Designer
              </p>
              <p className="text-xl text-blue-50 mb-8">
                Computer Science Student
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a href="#contact" className="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  Get In Touch
                </a>
                <a href="#portfolio" className="px-8 py-3 bg-blue-500/30 backdrop-blur-sm border-2 border-white/50 text-white rounded-lg font-semibold hover:bg-blue-500/50 transition-all">
                  View Work
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 hover:shadow-2xl transition-shadow duration-300">
          <h2 className="text-4xl font-bold text-gray-800 mb-6 flex items-center gap-3">
            <Briefcase className="text-blue-600" />
            About Me
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            I'm a passionate Computer Science student at Thammasat University with a strong focus on Web and UI/UX Design. 
            I combine technical expertise with creative design skills to build beautiful, functional digital experiences. 
            With proficiency in both design tools and programming languages, I bridge the gap between design and development.
          </p>
        </div>
      </section>

      {/* Education Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 hover:shadow-2xl transition-shadow duration-300">
          <h2 className="text-4xl font-bold text-gray-800 mb-8 flex items-center gap-3">
            <GraduationCap className="text-blue-600" />
            Education
          </h2>
          <div className="border-l-4 border-blue-600 pl-6 py-4 hover:bg-blue-50 transition-colors rounded-r-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              Bachelor of Science in Computer Science
            </h3>
            <p className="text-lg text-blue-600 font-semibold mb-2">
              Thammasat University
            </p>
            <p className="text-gray-600 mb-2">Bangkok, Thailand</p>
            <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-lg font-semibold">
              GPA: 3.54
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 hover:shadow-2xl transition-shadow duration-300">
          <h2 className="text-4xl font-bold text-gray-800 mb-8 flex items-center gap-3">
            <Code className="text-blue-600" />
            Skills
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Design Skills */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-700 flex items-center gap-2 mb-4">
                <Palette className="text-blue-600" size={28} />
                Design Tools
              </h3>
              <div className="flex flex-wrap gap-3">
                {['Figma', 'Photoshop', 'Illustrator'].map((skill) => (
                  <div key={skill} className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg font-medium shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all">
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            {/* Web Development */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-700 flex items-center gap-2 mb-4">
                <Code className="text-blue-600" size={28} />
                Web Development
              </h3>
              <div className="flex flex-wrap gap-3">
                {['HTML/CSS', 'JavaScript'].map((skill) => (
                  <div key={skill} className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg font-medium shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all">
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            {/* Programming Languages */}
            <div className="space-y-4 md:col-span-2">
              <h3 className="text-2xl font-semibold text-gray-700 flex items-center gap-2 mb-4">
                <Code className="text-blue-600" size={28} />
                Programming Languages
              </h3>
              <div className="flex flex-wrap gap-3">
                {['Java', 'Python', 'C', 'SQL'].map((skill) => (
                  <div key={skill} className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-lg font-medium shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interests Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 hover:shadow-2xl transition-shadow duration-300">
          <h2 className="text-4xl font-bold text-gray-800 mb-8 flex items-center gap-3">
            <Palette className="text-blue-600" />
            Interests
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="flex items-center gap-4 p-6 bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl hover:shadow-lg transition-all transform hover:-translate-y-1">
              <Paintbrush className="text-pink-600" size={32} />
              <span className="text-lg font-semibold text-gray-700">Painting</span>
            </div>
            <div className="flex items-center gap-4 p-6 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl hover:shadow-lg transition-all transform hover:-translate-y-1">
              <Tv className="text-purple-600" size={32} />
              <span className="text-lg font-semibold text-gray-700">Watching Series</span>
            </div>
            <div className="flex items-center gap-4 p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl hover:shadow-lg transition-all transform hover:-translate-y-1">
              <Music className="text-blue-600" size={32} />
              <span className="text-lg font-semibold text-gray-700">Listening to Music</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-6xl mx-auto px-6 py-16 pb-20">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl shadow-xl p-8 md:p-12 text-white">
          <h2 className="text-4xl font-bold mb-8 text-center">Get In Touch</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <a href="mailto:anuthida.wan@dome.tu.ac.th" className="flex items-center gap-4 p-6 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all transform hover:-translate-y-1">
              <Mail size={32} className="text-blue-200" />
              <div>
                <p className="text-sm text-blue-100">Email</p>
                <p className="font-semibold">anuthida.wan@dome.tu.ac.th</p>
              </div>
            </a>
            <a href="tel:0632468951" className="flex items-center gap-4 p-6 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all transform hover:-translate-y-1">
              <Phone size={32} className="text-blue-200" />
              <div>
                <p className="text-sm text-blue-100">Phone</p>
                <p className="font-semibold">063-246-8951</p>
              </div>
            </a>
            <div className="flex items-center gap-4 p-6 bg-white/10 backdrop-blur-sm rounded-xl">
              <MapPin size={32} className="text-blue-200" />
              <div>
                <p className="text-sm text-blue-100">Location</p>
                <p className="font-semibold">Bangkok, Thailand</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p>&copy; 2024 Anuthida Wanseng. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
