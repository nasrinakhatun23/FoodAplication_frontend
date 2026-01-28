import "./Home.css";

function Home() {
  return (
    <div className="home-wrapper">
      <div className="hero">
        <video
          className="hero-video"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/Homepage video4.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay"></div>

        <div className="hero-content">
          <h1>Delicious Food</h1>
          <button>Explore Menu</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
