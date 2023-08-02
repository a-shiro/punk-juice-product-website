import styles from "./ContactForm.module.css";

function ContactForm() {
  return (
    <section className={styles.sectionContainer}>
      <h2 className={styles.title}>Don't be shy, write to us</h2>

      <form className={styles.contactForm} method="post">
        <div className={styles.inputWrapper}>
          <div>
            <label>Name</label>

            <input
              className={styles.formField}
              type="text"
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
          <button type="submit">Send Message</button>
        </div>
      </form>
    </section>
  );
}

export default ContactForm;
