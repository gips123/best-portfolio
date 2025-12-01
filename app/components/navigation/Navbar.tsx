import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-auto">
      <div className="relative backdrop-blur-xl bg-white/10 border border-white/20 rounded-full px-8 py-4 shadow-2xl overflow-hidden">
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/5 via-white/10 to-white/5 opacity-50 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-1/2 rounded-full bg-gradient-to-b from-white/20 to-transparent opacity-30"></div>
        
        <div className="relative flex items-center justify-center">
          <div className="hidden md:flex items-center gap-8">
            <Link href="/pages/home" className="text-white/90 hover:text-white transition-colors text-sm font-medium relative group">
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
            </Link>
            <Link href="/pages/about" className="text-white/90 hover:text-white transition-colors text-sm font-medium relative group">
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
            </Link>
            <Link href="/pages/skills" className="text-white/90 hover:text-white transition-colors text-sm font-medium relative group">
              Skills
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
            </Link>
            <Link href="/pages/projects" className="text-white/90 hover:text-white transition-colors text-sm font-medium relative group">
              Projects
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
            </Link>
            <Link href="/pages/contact" className="text-white/90 hover:text-white transition-colors text-sm font-medium relative group">
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
            </Link>
          </div>

          <button className="md:hidden text-white/90 hover:text-white transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}

