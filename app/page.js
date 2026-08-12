export default function Home() {
  return (
    <main className="redx-page">
      <nav className="navbar">
        <a href="/" className="logo">
          <span className="logo-mark">R</span>
          REDX
        </a>

        <div className="nav-links">
          <a href="#features">Features</a>
          <a href="#ai">AI</a>
          <a href="#about">About</a>
        </div>

        <button className="nav-button">
          Get Started
        </button>
      </nav>

      <section className="hero">
        <div className="hero-content">

          <div className="badge">
            <span className="badge-dot" />
            REDX AI is now live
          </div>

          <h1>
            Build smarter.
            <br />
            <span>Move faster.</span>
          </h1>

          <p>
            REDX brings powerful AI tools into one intelligent
            platform designed to help you create, analyze and
            move forward faster.
          </p>

          <div className="hero-actions">
            <a href="#start" className="btn btn-primary">
              Start with REDX
            </a>

            <a href="#features" className="btn btn-secondary">
              Explore platform
            </a>
          </div>

        </div>
      </section>
    </main>
  );
}
