export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-6 space-y-4">
            <h2 className="text-xl font-bold">Annie Chien</h2>
            <p className="text-zinc-400 text-lg leading-relaxed">
              Operations Analyst & Marketing Specialist based in the United States.
              <br />
              Open to work and collaborations.
            </p>
          </div>
          <div className="md:col-span-3">
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
                <a href="/resume" className="text-zinc-400 hover:text-white transition-colors">
                  Resume
                </a>
              </li>
            </ul>
          </div>
          <div className="md:col-span-3">
            <h3 className="text-lg font-bold mb-4">Social</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.linkedin.com/in/anniechien/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/anniechiennn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-white transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://anniechien.substack.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-white transition-colors"
                >
                  Substack
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-20 pt-8 border-t border-white/10 text-center">
          <p className="text-zinc-400 text-sm">© {new Date().getFullYear()} Annie Chien. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

