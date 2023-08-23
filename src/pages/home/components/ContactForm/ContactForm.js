import styles from "./ContactForm.module.css";
import Modal from "./Modal";

function ContactForm() {
  const sendMessage = (e) => {
    e.preventDefault();

    document.querySelector(`.${styles.overlay}`).classList.add(styles.visible);
  };

  return (
    <section id="contact" aos="fade-in" className={styles.sectionContainer}>
      <div>
        <h2 className={styles.title}>Don't be shy, write to us</h2>

        <form
          onSubmit={sendMessage}
          className={styles.contactForm}
          method="post"
        >
          <div className={styles.inputWrapper}>
            <div>
              <label>Name</label>

              <input
                className={styles.formField}
                type="text"
                pattern="^[a-zA-Z]{2,}( {1,2}[a-zA-Z]{2,}){0,}$"
                placeholder="Full name"
                required
              />
            </div>

            <div>
              <label>Email</label>

              <input
                className={styles.formField}
                type="email"
                pattern="[^ @]*@[^ @]*"
                placeholder="Email address"
                required
              />
            </div>
          </div>

          <div className={styles.textWrapper}>
            <label>How can we help?</label>

            <textarea
              rows="10"
              placeholder="Ask us anything . . ."
              required
            ></textarea>
          </div>

          <div className={styles.buttonContainer}>
            <span className={styles.hoverText}></span>
            <button type="submit">Send Message</button>
          </div>
        </form>
      </div>

      <Modal />
    </section>
  );
}

export default ContactForm;
