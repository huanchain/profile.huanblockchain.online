import React from 'react';
import { Github, Code, Zap, Users, Award, ExternalLink, Mail, MapPin, Calendar } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="relative inline-block mb-8">
              <div className="w-32 h-32 mx-auto bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl">
                <Code className="w-16 h-16 text-white" />
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white shadow-lg"></div>
            </div>
            
            <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                HuanChain
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Senior Software Developer & Blockchain Engineer
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
              <div className="flex items-center gap-2 text-gray-300">
                <Calendar className="w-5 h-5" />
                <span>10+ years in Software Development</span>
              </div>
              <div className="hidden sm:block w-2 h-2 bg-purple-500 rounded-full"></div>
              <div className="flex items-center gap-2 text-gray-300">
                <Zap className="w-5 h-5" />
                <span>4+ years in Blockchain</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="https://github.com/huanchain" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <Github className="w-5 h-5 text-white group-hover:rotate-12 transition-transform" />
                <span className="text-white font-medium">View GitHub</span>
                <ExternalLink className="w-4 h-4 text-white/70" />
              </a>
              
              <button className="flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-4 rounded-full text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <Mail className="w-5 h-5" />
                <span>Get In Touch</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                With over a decade of experience in software development, I've evolved from building traditional applications to pioneering blockchain solutions. My journey spans across various technologies and industries, always driven by innovation and excellence.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                For the past 4 years, I've been deeply immersed in the blockchain ecosystem, developing smart contracts, DeFi protocols, and decentralized applications that push the boundaries of what's possible in the Web3 space.
              </p>
              
              <div className="flex flex-wrap gap-3">
                {['Full-Stack Development', 'Blockchain Architecture', 'Smart Contracts', 'DeFi', 'Web3', 'System Design'].map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-full text-blue-300 text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-colors">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <Code className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">Software Development</h3>
                    <p className="text-blue-300">10+ Years Experience</p>
                  </div>
                </div>
                <p className="text-gray-300">
                  Extensive experience in full-stack development, system architecture, and leading development teams across various industries.
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-colors">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">Blockchain Engineering</h3>
                    <p className="text-purple-300">4+ Years Specialized</p>
                  </div>
                </div>
                <p className="text-gray-300">
                  Specialized in blockchain development, smart contracts, DeFi protocols, and building next-generation decentralized applications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Technical Expertise</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 hover:scale-105">
              <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                <Code className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Frontend Development</h3>
              <div className="space-y-2">
                {['React/Next.js', 'TypeScript', 'Tailwind CSS', 'Vue.js'].map((tech) => (
                  <span key={tech} className="inline-block bg-blue-500/20 text-blue-300 px-3 py-1 rounded-lg text-sm mr-2 mb-2">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 hover:scale-105">
              <div className="w-14 h-14 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-6">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Backend Development</h3>
              <div className="space-y-2">
                {['Node.js', 'Python', 'Go', 'PostgreSQL', 'MongoDB'].map((tech) => (
                  <span key={tech} className="inline-block bg-green-500/20 text-green-300 px-3 py-1 rounded-lg text-sm mr-2 mb-2">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 hover:scale-105">
              <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                <Award className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Blockchain & Web3</h3>
              <div className="space-y-2">
                {['Solidity', 'Ethereum', 'Smart Contracts', 'DeFi', 'Web3.js'].map((tech) => (
                  <span key={tech} className="inline-block bg-purple-500/20 text-purple-300 px-3 py-1 rounded-lg text-sm mr-2 mb-2">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-24 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "DeFi Protocol",
                description: "Automated market maker with advanced yield farming capabilities",
                tags: ["Solidity", "React", "Web3"]
              },
              {
                title: "NFT Marketplace",
                description: "Full-featured marketplace with minting and trading capabilities",
                tags: ["Next.js", "Ethereum", "IPFS"]
              },
              {
                title: "Enterprise DApp",
                description: "Large-scale decentralized application for supply chain management",
                tags: ["Vue.js", "Go", "Blockchain"]
              }
            ].map((project, index) => (
              <div key={index} className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                  <ExternalLink className="w-5 h-5 text-white/60 group-hover:text-white transition-colors" />
                </div>
                <p className="text-gray-300 mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-full text-blue-300 text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Let's Build Something Amazing</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Ready to collaborate on your next project? Whether it's traditional software or cutting-edge blockchain solutions, I'm here to help bring your ideas to life.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href="https://github.com/huanchain" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <Github className="w-5 h-5 text-white group-hover:rotate-12 transition-transform" />
              <span className="text-white font-medium">GitHub Profile</span>
              <ExternalLink className="w-4 h-4 text-white/70" />
            </a>
            
            <button className="flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-4 rounded-full text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <Mail className="w-5 h-5" />
              <span>Contact Me</span>
            </button>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Code className="w-6 h-6 text-purple-400" />
              <span className="text-white font-semibold">HuanChain</span>
            </div>
            
            <p className="text-gray-400 text-center md:text-right">
              © 2025 HuanChain. Building the future with blockchain technology.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;