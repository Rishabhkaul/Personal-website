import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Rishabh Kaul
      </h1>
      <p className="mb-4">
        {`I'm a founder turned an angel investor in London with deep ties to Europe, India and the US.
        I spend most of my days as a Venture Partner at Hoxton Ventures, and in addition am also a scout 
        for Weekend Fund and Village Global. Additionally, I enjoy hosting meetups.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
