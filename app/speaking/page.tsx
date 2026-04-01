const speakingEngagements = [
  {
    monthYear: 'Mar 2026',
    name: 'Entrepreneurial Finance Class',
    url: 'https://www.linkedin.com/feed/update/urn:li:activity:7441823403856240640/?originTrackingId=jO9zokaT7vxepJtKhrCoMg%3D%3D',
    location: 'London School of Economics · London',
    tag: 'Strategy',
  },
  {
    monthYear: 'Jan 2026',
    name: 'How This Sequoia-Backed Founder Turned Venture Partner Invests',
    url: 'https://youtu.be/UWfCnRodttg?si=zugS-fo895qD34QN',
    location: 'BAE HQ Podcast · London',
    tag: 'Investing',
  },
  {
    monthYear: 'Nov 2025',
    name: 'State of Asian Funding Report UK Launch Panel',
    url: 'https://www.linkedin.com/posts/rishabhkaul_packed-out-room-for-bae-hqs-state-of-activity-7381695911552512000-wl1B/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAAE38M4Buy_Jz3DtnUXiPmsl_rTI8owBvPw',
    location: 'BAE HQ / HSBC Innovation Banking · London',
    tag: 'Investing',
  },
  {
    monthYear: 'Oct 2025',
    name: 'The Founder’s Timing Dilemma — What Every Startup Gets Wrong',
    url: 'https://www.youtube.com/watch?v=tWq7vaF0-to',
    location: 'Perception Paradox Podcast · London',
    tag: 'Investing',
  },
  {
    monthYear: 'Jul 2025',
    name: 'Beyond the AI Hype: How Smart Money Identifies Real Ambition',
    url: 'https://youtu.be/rdFmgqi4jUs?t=2629',
    location: '500 Eurasia Demo Day · Tblisi',
    tag: 'Investing',
  },
  {
    monthYear: 'Jul 2025',
    name: 'VC Panel Q&A with Founder Circle',
    url: 'https://www.linkedin.com/posts/rishabhkaul_packed-out-room-for-bae-hqs-state-of-activity-7381695911552512000-wl1B/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAAE38M4Buy_Jz3DtnUXiPmsl_rTI8owBvPw',
    location: 'Wave Talent · London',
    tag: 'Investing',
  },
  {
    monthYear: 'Nov 2024',
    name: 'Buiding the India-Europe Tech Corridor',
    url: 'https://www.youtube.com/watch?v=i-wQCmPzD3U',
    location: 'Nothing Ventured Podcast · London',
    tag: 'Ecosystem',
  },
  {
    monthYear: 'Aug 2023',
    name: 'How to acquire users for your devtool',
    url: 'https://www.youtube.com/watch?v=LsN_EAKMlTs&t=0s',
    location: 'Developer Led Podcast · London',
    tag: 'Marketing',
  },
  {
    monthYear: 'Feb 2019',
    name: 'How does hiring work for new-age skills?',
    url: 'https://yourstory.com/2019/02/hiring-skills-rishabh-belong',
    location: 'Yourstory Future of Work Conference · Bangalore',
    tag: 'Hiring',
  },
  {
    monthYear: 'Oct 2019',
    name: 'Artificial Intelligence: A force multiplier for the Indian economy',
    url: 'https://www.youtube.com/watch?v=LrgYpui0zxw',
    location: 'AIMA National Convention · Delhi',
    tag: 'AI',
  },
  {
    monthYear: 'Mar 2018',
    name: 'Hiring in a candidate driven market',
    url: 'https://yourstory.com/2018/03/right-people-come-together-right-time-right-reason-amazing-things-happen-rishabh-kaul-co-founder-belong',
    location: 'Yourstory Future of Work Conference · Bangalore',
    tag: 'Hiring',
  },
  {
    monthYear: 'Nov 2017',
    name: 'Disruptive HR - Managing Talent in Times of Great Change',
    url: 'https://www.youtube.com/watch?v=9viNjgXIkMg',
    location: 'AIMA National Convention · Delhi',
    tag: 'HRTech',
  },
  {
    monthYear: 'Sep 2016',
    name: 'Hiring for startups',
    url: 'https://www.youtube.com/watch?v=hCM2ulw2KDM',
    location: 'Citruspay Upstart · Bangalore',
    tag: 'Hiring',
  },
  {
    monthYear: 'Aug 2016',
    name: 'Vision & values as a competitive advantage',
    url: 'https://medium.com/@rishabhkaul/values-and-vision-as-a-competitive-advantage-fddd21495cc6',
    location: 'Conquest Startup Conclave · Delhi',
    tag: 'Strategy',
  },
]

export default function SpeakingPage() {
  return (
    <main className="mb-4">
      <h1 className="mb-6 text-2xl font-semibold tracking-tighter">Speaking</h1>
      <ul className="space-y-3">
        {speakingEngagements.map((engagement) => (
          <li key={`${engagement.monthYear}-${engagement.name}`} className="leading-relaxed">
            <span className="text-neutral-600 dark:text-neutral-400">[{engagement.monthYear}]</span>{' '}
            <a
              href={engagement.url}
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              {engagement.name}
            </a>{' '}
            <span className="text-neutral-700 dark:text-neutral-300">{engagement.location}</span>{' '}
            <span className="inline-flex items-center rounded-md bg-neutral-100 px-2 py-0.5 text-xs font-medium text-neutral-700 ring-1 ring-inset ring-neutral-300 dark:bg-neutral-800 dark:text-neutral-200 dark:ring-neutral-700">
              {engagement.tag}
            </span>
          </li>
        ))}
      </ul>
    </main>
  )
}
