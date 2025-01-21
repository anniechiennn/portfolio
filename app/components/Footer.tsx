export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-4">
            <h2 className="text-xl font-bold">Your Name</h2>
            <p className="text-zinc-400">
              Operations Analyst & Product Manager based in Your City. Available for freelance work and collaborations.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-zinc-400 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/projects" className="text-zinc-400 hover:text-white transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="/blog" className="text-zinc-400 hover:text-white transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="/resume" className="text-zinc-400 hover:text-white transition-colors">
                  Resume
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Social</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-zinc-400 hover:text-white transition-colors">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="text-zinc-400 hover:text-white transition-colors">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="text-zinc-400 hover:text-white transition-colors">
                  GitHub
                </a>
              </li>
              <li>
                <a href="#" className="text-zinc-400 hover:text-white transition-colors">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-zinc-400">your@email.com</li>
              <li className="text-zinc-400">+1 234 567 890</li>
              <li className="text-zinc-400">Your City, Country</li>
            </ul>
          </div>
        </div>
        <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-400 text-sm">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-zinc-400 hover:text-white transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-zinc-400 hover:text-white transition-colors text-sm">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

