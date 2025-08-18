import { Github, Code, Zap, Award, ExternalLink, Mail, Calendar } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Header from './components/Header';

function App() {
  const { t, i18n } = useTranslation();
  const setLanguage = (lng: 'en' | 'vi') => i18n.changeLanguage(lng);
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" id="home">
      <Header />
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="relative inline-block mb-8">
              <div className="w-32 h-32 mx-auto bg-white rounded-full flex items-center justify-center shadow-2xl">
                <img src="/logo.png" alt="HuanChain logo" className="w-16 h-16" />
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white shadow-lg"></div>
            </div>

            <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {t('brand')}
              </span>
            </h1>

            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              {t('hero.subtitle')}
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
              <div className="flex items-center gap-2 text-gray-300">
                <Calendar className="w-5 h-5" />
                <span>{t('hero.expSoftware')}</span>
              </div>
              <div className="hidden sm:block w-2 h-2 bg-purple-500 rounded-full"></div>
              <div className="flex items-center gap-2 text-gray-300">
                <Zap className="w-5 h-5" />
                <span>{t('hero.expBlockchain')}</span>
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
                <span className="text-white font-medium">{t('hero.viewGithub')}</span>
                <ExternalLink className="w-4 h-4 text-white/70" />
              </a>
              
              <button className="flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-4 rounded-full text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <Mail className="w-5 h-5" />
                <span>{t('hero.getInTouch')}</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-white/5 backdrop-blur-sm" id="about">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">{t('about.title')}</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">{t('about.p1')}</p>
              
              <p className="text-lg text-gray-300 leading-relaxed">{t('about.p2')}</p>
              
              <div className="flex flex-wrap gap-3">
                {(t('about.skills', { returnObjects: true }) as string[]).map((skill) => (
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
                    <h3 className="text-xl font-semibold text-white">{t('about.software.title')}</h3>
                    <p className="text-blue-300">{t('about.software.caption')}</p>
                  </div>
                </div>
                <p className="text-gray-300">{t('about.software.desc')}</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-colors">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{t('about.blockchain.title')}</h3>
                    <p className="text-purple-300">{t('about.blockchain.caption')}</p>
                  </div>
                </div>
                <p className="text-gray-300">{t('about.blockchain.desc')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24" id="skills">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">{t('skills.title')}</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 hover:scale-105">
              <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                <Code className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">{t('skills.frontend')}</h3>
              <div className="space-y-2">
                {(t('skills.frontendList', { returnObjects: true }) as string[]).map((tech) => (
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
              <h3 className="text-xl font-semibold text-white mb-4">{t('skills.backend')}</h3>
              <div className="space-y-2">
                {(t('skills.backendList', { returnObjects: true }) as string[]).map((tech) => (
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
              <h3 className="text-xl font-semibold text-white mb-4">{t('skills.blockchain')}</h3>
              <div className="space-y-2">
                {(t('skills.blockchainList', { returnObjects: true }) as string[]).map((tech) => (
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
      <section className="py-24 bg-white/5 backdrop-blur-sm" id="projects">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">{t('projects.title')}</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(t('projects.list', { returnObjects: true }) as Array<{ title: string; description: string; tags: string[]; demo: string }>).map((project, index) => (
              <div key={index} className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                  <ExternalLink className="w-5 h-5 text-white/60 group-hover:text-white transition-colors" />
                </div>
                <p className="text-gray-300 mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-full text-blue-300 text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
                {project.demo !== "#" && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-sm font-medium rounded-lg transition-all duration-300 hover:scale-105"
                  >
                    <span>{t('projects.liveDemo')}</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24" id="contact">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">{t('contact.title')}</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">{t('contact.subtitle')}</p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href="https://github.com/huanchain" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <Github className="w-5 h-5 text-white group-hover:rotate-12 transition-transform" />
              <span className="text-white font-medium">{t('contact.githubProfile')}</span>
              <ExternalLink className="w-4 h-4 text-white/70" />
            </a>
            
            <button className="flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-4 rounded-full text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <Mail className="w-5 h-5" />
              <span>{t('contact.contactMe')}</span>
            </button>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <img src="/logo.png" alt="HuanChain logo" className="w-6 h-6" />
              <span className="text-white font-semibold">{t('brand')}</span>
            </div>
            
            <p className="text-gray-400 text-center md:text-right">{t('footer.copyright')}</p>
          </div>
        </div>
      </footer>
      {/* Language Switcher */}
      <div className="fixed bottom-4 right-4 flex gap-2">
        <button onClick={() => setLanguage('en')} className="px-3 py-2 rounded-md bg-white/10 text-white hover:bg-white/20 border border-white/20">
          {t('language.switchToEnglish')}
        </button>
        <button onClick={() => setLanguage('vi')} className="px-3 py-2 rounded-md bg-white/10 text-white hover:bg-white/20 border border-white/20">
          {t('language.switchToVietnamese')}
        </button>
      </div>
    </div>
  );
}

export default App;