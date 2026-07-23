import { BlogPosts } from 'app/components/posts'
import { baseUrl } from 'app/sitemap'

const description =
  'Rishabh Kaul is a London-based early-stage investor at Hoxton Ventures, investing in AI infrastructure, developer tools and enterprise software.'

const profileJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  url: baseUrl,
  mainEntity: {
    '@type': 'Person',
    '@id': `${baseUrl}/#person`,
    name: 'Rishabh Kaul',
    url: baseUrl,
    jobTitle: 'Early-Stage Investor',
    description,
    worksFor: {
      '@type': 'Organization',
      name: 'Hoxton Ventures',
    },
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'BITS Pilani',
    },
    knowsAbout: [
      'AI infrastructure',
      'developer tools',
      'enterprise software',
      'venture capital',
      'product-led growth',
    ],
    sameAs: [
      'https://www.linkedin.com/in/REPLACE_WITH_RISHABH_KAUL',
      'https://x.com/REPLACE_WITH_RISHABH_KAUL',
      'https://github.com/REPLACE_WITH_RISHABH_KAUL',
      'https://angel.co/u/REPLACE_WITH_RISHABH_KAUL',
      'https://www.hoxtonventures.com/team/REPLACE_WITH_RISHABH_KAUL',
    ],
  },
}

export default function Page() {
  return (
    <section>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(profileJsonLd).replace(/</g, '\\u003c'),
        }}
      />
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Rishabh Kaul
      </h1>
      <p className="mb-4">
        {`Rishabh Kaul is a London-based early-stage investor at Hoxton Ventures, where he invests in pre-seed and seed-stage technology companies. He focuses on AI infrastructure, developer tools and enterprise software, drawing on his experience as previously a founder and operator at companies including Appsmith and Belong. Rishabh is also a scout for Weekend Fund and Village Global, and enjoys hosting meetups for founders and builders.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
