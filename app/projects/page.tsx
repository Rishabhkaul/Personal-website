const projects = [
  'Founder and operator initiatives across Europe, India, and the US.',
  'Angel investments and advisory support for early-stage startups.',
  'Community events and meetups focused on startups and technology.',
]

export default function ProjectsPage() {
  return (
    <main className="mb-4">
      <h1 className="mb-6 text-2xl font-semibold tracking-tighter">Projects</h1>
      <p className="mb-4">
        A selection of projects I&apos;ve built and supported over the years.
      </p>
      <ul className="list-disc pl-5 space-y-2">
        {projects.map((project) => (
          <li key={project}>{project}</li>
        ))}
      </ul>
    </main>
  )
}
