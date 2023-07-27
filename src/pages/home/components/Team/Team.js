import styles from "./Team.module.css";

function Team() {
  return (
    <section className={styles.teamContainer}>
      <div>
        <div className={styles.teamText}>
          <div>
            <h2>Join the movement...</h2>
          </div>

          <div>
            <p>
              Inspired by the unapologetic spirit of punk rock, this audacious
              drink is a fusion of unconventional ingredients that come together
              to create a sensory rebellion. From the first sip to the last
              drop, <strong>Punk Juice</strong> will challenge your taste
              perceptions and leave you craving for more.
            </p>
          </div>

          <div>
            <p>
              From the rebellious fusion of fruits to the daring hint of spice,{" "}
              <strong>Punk Juice</strong> dares you to be bold and
              unapologetically yourself. Raise your glass and join the movement
              – because in a world of conformity, <strong>Punk Juice</strong>{" "}
              stands tall as the rebel with a cause, redefining refreshment one
              sip at a time.
            </p>
          </div>
        </div>
      </div>

      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-3 col-12 p-0">
            <img
              src="images/elena-rabkina-eVVzwsNhNf4-unsplash.jpg"
              class="img-fluid about-image"
              alt=""
            />
          </div>

          <div class="col-lg-3 col-12 bg-dark">
            <div class="d-flex flex-column flex-wrap justify-content-center h-100 py-5 px-4 pt-lg-4 pb-lg-0">
              <h3 class="text-white mb-3" data-aos="fade-up">
                We’re - idealists and strategic thinkers.
              </h3>

              <p class="text-secondary-white-color" data-aos="fade-up">
                Over six years in the video business
              </p>

              <div class="mt-3 custom-links">
                <a
                  href="#news"
                  class="text-white custom-link"
                  data-aos="zoom-in"
                  data-aos-delay="100"
                >
                  Read News & Events
                </a>

                <a
                  href="#contact"
                  class="text-white custom-link"
                  data-aos="zoom-in"
                  data-aos-delay="300"
                >
                  Work with Us
                </a>
              </div>
            </div>
          </div>

          <div class="col-lg-6 col-12 p-0">
            <section
              id="myCarousel"
              class="carousel slide carousel-fade"
              data-bs-ride="carousel"
            >
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img
                    src="images/people/studio-shot-beautiful-happy-retired-caucasian-female-with-pixie-hairdo-crossing-arms-her-chest-having-confident-look-smiling-broadly.jpg"
                    class="img-fluid team-image"
                    alt=""
                  />

                  <div class="team-thumb bg-warning">
                    <h3 class="text-white mb-0">Susane R.</h3>

                    <p class="text-secondary-white-color mb-0">
                      Founding Partner
                    </p>
                  </div>
                </div>

                <div class="carousel-item">
                  <img
                    src="images/people/project-leder-with-disabilities-looking-front-sitting-immobilized-wheelchair-business-office-room.jpg"
                    class="img-fluid team-image"
                    alt=""
                  />

                  <div class="team-thumb bg-primary">
                    <h3 class="text-white mb-0">Morgan S.</h3>

                    <p class="text-secondary-white-color mb-0">
                      CEO & Investor
                    </p>
                  </div>
                </div>

                <div class="carousel-item">
                  <img
                    src="images/people/asia-business-woman-feeling-happy-smiling-looking-camera-while-relax-home-office.jpg"
                    class="img-fluid team-image"
                    alt=""
                  />

                  <div class="team-thumb bg-success">
                    <h3 class="text-white mb-0">Naomi W.</h3>

                    <p class="text-secondary-white-color mb-0">Art Director</p>
                  </div>
                </div>

                <div class="carousel-item">
                  <img
                    src="images/people/happy-african-american-professional-manager-smiling-looking-camera-headshot-portrait.jpg"
                    class="img-fluid team-image"
                    alt=""
                  />

                  <div class="team-thumb bg-info">
                    <h3 class="text-white mb-0">Robinson H.</h3>

                    <p class="text-secondary-white-color mb-0">
                      Sales & Marketing
                    </p>
                  </div>
                </div>

                <div class="carousel-item">
                  <img
                    src="images/people/working-business-lady.jpg"
                    class="img-fluid team-image"
                    alt=""
                  />

                  <div class="team-thumb bg-danger">
                    <h3 class="text-white mb-0">Jane M.</h3>

                    <p class="text-secondary-white-color mb-0">
                      Project Management
                    </p>
                  </div>
                </div>
              </div>

              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#myCarousel"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>

                <span class="visually-hidden">Previous</span>
              </button>

              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#myCarousel"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>

                <span class="visually-hidden">Next</span>
              </button>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;
