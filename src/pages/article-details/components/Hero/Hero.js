import "./Hero.module.css";

function Hero() {
  return (
    <section class="hero" id="hero">
      <div class="heroText">
        <h1
          class="news-detail-title text-white mt-lg-5 mb-lg-4"
          data-aos="zoom-in"
          data-aos-delay="300"
        >
          What happened to new viral video?
        </h1>

        <div class="d-flex justify-content-center align-items-center">
          <a href="#" class="text-secondary-white-color social-share-link">
            <i class="bi-chat-square-fill me-1"></i>
            128
          </a>

          <a href="#" class="social-share-link bi-bookmark-fill ms-3 me-4"></a>

          <span>21 hours ago</span>
        </div>
      </div>

      <div class="videoWrapper">
        <img
          src="images/punk/bottles_3.png"
          class="img-fluid news-detail-image"
          alt=""
        />
      </div>

      <div class="overlay"></div>
    </section>
  );
}

export default Hero;
