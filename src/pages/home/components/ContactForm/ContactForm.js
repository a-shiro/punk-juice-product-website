import { useRef } from "react";
import styles from "./ContactForm.module.css";
import Modal from "./Modal";

function ContactForm() {
  const modalOverlay = useRef();

  const sendMessage = (e) => {
    e.preventDefault();
    document.querySelector(`.${styles.overlay}`).classList.add(styles.visible);
  };

  return (
    <section
      id="contact"
      animation="fade-in"
      className={styles.sectionContainer}
    >
      <div>
        <h2 className={styles.title}>Don't be shy, write to us</h2>

        <form
          onSubmit={sendMessage}
          className={styles.contactForm}
          method="post"
        >
          <div className={styles.personalData}>
            <div>
              <label htmlFor="fullname">Name</label>
              <input
                id="fullname"
                type="text"
                pattern="^[a-zA-Z]{2,}( {1,2}[a-zA-Z]{2,}){0,}$"
                placeholder="Full name"
                required
              />
            </div>

            <div>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                pattern="[^ @]*@[^ @]*"
                placeholder="Email address"
                required
              />
            </div>
          </div>

          <div className={styles.descriptionContainer}>
            <label htmlFor="description">How can we help?</label>
            <textarea
              id="description"
              rows="10"
              placeholder="Ask us anything . . ."
              required
            ></textarea>
          </div>

          <button type="submit" className={styles.submit}>
            Send Message
          </button>
        </form>
      </div>

      <Modal modalOverlay={modalOverlay} />
    </section>
  );
}

export default ContactForm;
