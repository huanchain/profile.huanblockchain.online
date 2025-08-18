import { useTranslation } from 'react-i18next';
import { User, Wrench, FolderOpen, Mail } from 'lucide-react';

export default function Header() {
  const { t, i18n } = useTranslation();
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="backdrop-blur-md bg-slate-900/50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            {/* <Logo size={28} /> */}
            <img src="/logo.png" alt="HuanChain" className="w-8 h-8" />
            <span className="text-white font-semibold">{t('brand')}</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-gray-300">
            <a href="#about" className="hover:text-white transition-colors flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>{t('nav.about')}</span>
            </a>
            <a href="#skills" className="hover:text-white transition-colors flex items-center gap-2">
              <Wrench className="w-4 h-4" />
              <span>{t('nav.skills')}</span>
            </a>
            <a href="#projects" className="hover:text-white transition-colors flex items-center gap-2">
              <FolderOpen className="w-4 h-4" />
              <span>{t('nav.projects')}</span>
            </a>
            <a href="#contact" className="hover:text-white transition-colors flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>{t('nav.contact')}</span>
            </a>
          </nav>
          <div className="flex items-center gap-2">
            <button onClick={() => i18n.changeLanguage('en')} className="px-3 py-1 rounded-md bg-white/10 text-white hover:bg-white/20 border border-white/20">EN</button>
            <button onClick={() => i18n.changeLanguage('vi')} className="px-3 py-1 rounded-md bg-white/10 text-white hover:bg-white/20 border border-white/20">VI</button>
          </div>
        </div>
      </div>
    </header>
  );
}


