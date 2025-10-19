import React from "react"
import "../styles/Journal.css"

type Post = {
  slug: string
  title: string
  excerpt: string
  image: string
  alt: string
  tag?: string
  date?: string
}

const POSTS: Post[] = [
  {
    slug: "stories-behind-old-cameras",
    title: "Exploring the Stories Behind Old Cameras",
    excerpt:
      "How vintage tools shape the way we feel about moments — and why the limits of old gear can spark fresh creativity.",
    image: "/images/camera.jpg",
    alt: "Vintage camera on a map",
    tag: "Film",
    date: "12 Aug 2025",
  },
  {
    slug: "live-performance-energy",
    title: "Capturing Energy in Live Performances",
    excerpt:
      "Freezing powerful, fast-moving scenes. Notes on timing, angles, and why the lighting plan matters more than the lens.",
    image: "/images/concert.jpg",
    alt: "Performer on stage",
    tag: "Concerts",
    date: "28 Jul 2025",
  },
  // Add more posts here later
]

const JournalPage: React.FC = () => {
  return (
    <main className="journal" id="journal">
      <header className="journal__header container">
        <h1 className="journal__title">Journal</h1>
        <p className="journal__subtitle">
          Welcome to my photography journal — reflections on creativity, travel,
          and the stories behind each image.
        </p>
      </header>

      <section className="journal__grid container">
        {POSTS.map((post) => (
          <article key={post.slug} className="journal-card">
            <a
              className="journal-card__imageLink"
              href={`/journal/${post.slug}`}
            >
              <img
                className="journal-card__image"
                src={post.image}
                alt={post.alt}
                loading="lazy"
              />
            </a>

            <div className="journal-card__body">
              <div className="journal-card__meta">
                {post.tag && <span className="badge">{post.tag}</span>}
                {post.date && (
                  <time className="date" dateTime="2025-08-12">
                    {post.date}
                  </time>
                )}
              </div>

              <h2 className="journal-card__title">
                <a href={`/journal/${post.slug}`}>{post.title}</a>
              </h2>

              <p className="journal-card__excerpt">{post.excerpt}</p>

              <a
                className="journal-card__cta"
                href={`/journal/${post.slug}`}
                aria-label={`Read: ${post.title}`}
              >
                Read more →
              </a>
            </div>
          </article>
        ))}
      </section>
    </main>
  )
}

export default JournalPage
