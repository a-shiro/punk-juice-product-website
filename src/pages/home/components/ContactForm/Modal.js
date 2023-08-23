import styles from "./ContactForm.module.css";
import tick from "../../../../assets/images/tick.png";

function Modal() {
  const close = () => {
    document
      .querySelector(`.${styles.overlay}`)
      .classList.remove(styles.visible);
  };

  return (
    <div className={styles.overlay}>
      <div className={`${styles.container} ${styles.fadeIn}`}>
        <img src={tick} className={styles.tick} />
        <p>Thank you!</p>
        <p>We will get back to you soon.</p>
        <button onClick={close}>Close</button>
      </div>
    </div>
  );
}

export default Modal;
