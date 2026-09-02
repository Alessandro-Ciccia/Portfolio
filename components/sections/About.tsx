export function About() {
  return (
    <section className="container section" id="about" aria-labelledby="about-title">
      <div className="section__head">
        <h2 className="section__title" id="about-title">
          About
        </h2>
      </div>

      <div className="about__text">
        <p>
          I am a Frontend Developer. Most of my work happens inside large
          codebases that are already running in production, where a change has to
          fit an existing architecture and keep working long after it ships.
        </p>
        <p>
          I care about the quality of the interface itself: components that stay
          readable as a product grows, frontend architecture that survives new
          requirements, and a developer experience good enough that the next
          person can move quickly without breaking things.
        </p>
        <p>
          I follow new technologies closely and adopt them when they solve a real
          problem in the product, not because they are new.
        </p>
      </div>
    </section>
  );
}
