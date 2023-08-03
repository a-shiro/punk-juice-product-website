import styles from "./Article.module.css";
import articleImage from "../../../../assets/images/mockup_posters.jpg";

function Article() {
  return (
    <section className={styles.sectionContainer}>
      <div className={styles.container}>
        <h2 className={styles.title}>What happened to new viral video?</h2>

        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
            accumsan.
          </p>

          <p>
            Nullam id lorem commodo, pharetra sapien ut, accumsan ligula. Sed
            sit amet sem pulvinar, imperdiet eros quis, vestibulum felis.
            Pellentesque posuere scelerisque sodales.
          </p>
        </div>

        <div className={styles.imageContainer}>
          <p>
            Morbi scelerisque urna in orci elementum, nec mollis ligula luctus.
            Proin ullamcorper pulvinar commodo. Quisque tortor nunc, ultricies
            efficitur ex sit amet, tempus rutrum libero. In nec faucibus tellus.
            Quisque tortor nunc, ultricies efficitur ex sit amet, tempus rutrum
            libero. In nec faucibus tellus. Quisque tortor nunc, ultricies
          </p>

          <img src={articleImage} alt="article-image" />
        </div>

        <div>
          <p>
            Donec justo orci, pretium ultricies ante eget, bibendum semper enim.
            Nunc efficitur purus suscipit leo placerat, a ultricies purus
            gravida. Sed sollicitudin ornare porta. Mauris convallis sit amet
            purus sed rutrum.
          </p>

          <p>
            This Bootstrap 5 layout is provided by TemplateMo website and it is
            free to use for any of your website. You are allowed to edit it in
            any way you like. However, please do not redistribute this template
            ZIP file for a template download purpose on any other website such
            as Free CSS collection websites.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Article;
