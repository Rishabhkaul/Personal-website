const projects = [
  {
    name: 'Github Scout',
    url: 'https://ghscout.streamlit.app/',
    description:
      'Page rank to surface emerging Github projects',
  },
  {
    name: 'Macro Risk Dashboard',
    url: 'https://macro-risk-dashboard.streamlit.app/',
    description:
      'Dashboard to track the risk of catastrophic failure in the global economy',
    githubUrl: 'https://github.com/Rishabhkaul/macro-risk-dashboard',
  },
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
          <li
            key={typeof project === 'string' ? project : project.name}
          >
            {typeof project === 'string' ? (
              project
            ) : (
              <>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  {project.name}
                </a>{' '}
                - {project.description} (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  github
                </a>
                )
              </>
            )}
          </li>
        ))}
      </ul>
    </main>
  )
}
