import React from "react"
import "../styles/Journal.css"

const JournalPage: React.FC = () => {
  return (
    <main className="journal-page">
      <h1 className="journal-title">Journal</h1>
      <p className="journal-subtitle">
        Welcome to my photography journal — a space where I share reflections on creativity,
        travel, and the stories behind each image.
      </p>

      <div className="journal-articles">
        <article>
          <img src="/images/camera.jpg" alt="Vintage camera on map" />
          <h2>Exploring the Stories Behind Old Cameras</h2>
          <p>
            A look at how photography connects us to memories, moments, and emotions through timeless tools.
          </p>
        </article>

        <article>
          <img src="/images/concert.jpg" alt="Performer on stage" />
          <h2>Capturing Energy in Live Performances</h2>
          <p>
            The magic of freezing powerful live moments — and why lighting makes or breaks a photo.
          </p>
        </article>

        {/* Later map multiple posts here */}
      </div>
    </main>
  )
}

export default JournalPage
