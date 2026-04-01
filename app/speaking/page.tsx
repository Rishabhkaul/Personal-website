const speakingEngagements = [
  {
    monthYear: 'Jan 2026',
    title: 'How This Sequoia-Backed Founder Turned Venture Partner Invests',
    url: 'https://youtu.be/UWfCnRodttg?si=zugS-fo895qD34QN',
    locationEvent: 'BAE HQ Podcast London',
  },
]

export default function SpeakingPage() {
  return (
    <main className="mb-4">
      <h1 className="mb-6 text-2xl font-semibold tracking-tighter">Speaking</h1>
      <ul className="list-disc pl-5 space-y-2">
        {speakingEngagements.map((engagement) => (
          <li key={`${engagement.monthYear}-${engagement.title}`}>
            [{engagement.monthYear}],{' '}
            <a
              href={engagement.url}
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              {engagement.title}
            </a>
            , {engagement.locationEvent}
          </li>
        ))}
      </ul>
    </main>
  )
}
