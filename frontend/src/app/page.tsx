import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <section className="text-center py-20">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hi, I&apos;m <span className="text-blue-500">Selina</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Full Stack Developer | Building Modern Web Applications
          </p>
          <div className="flex gap-4 justify-center">
            <Link 
              href="/projects"
              className="bg-blue-500 hover:bg-blue-600 px-8 py-3 rounded-lg font-semibold transition"
            >
              View Projects
            </Link>
            <Link 
              href="/contact"
              className="border border-blue-500 hover:bg-blue-500/10 px-8 py-3 rounded-lg font-semibold transition"
            >
              Contact Me
            </Link>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="py-12">
          <h2 className="text-3xl font-bold text-center mb-8">Tech Stack</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'FastAPI', 'Python', 'PostgreSQL', 'Vercel'].map((tech) => (
              <div key={tech} className="bg-gray-800 p-6 rounded-lg text-center hover:bg-gray-700 transition">
                <p className="font-semibold">{tech}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
