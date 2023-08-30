import styles from "./ContactForm.module.css";
import tick from "../../../../assets/images/tick.png";

function Modal({ modalOverlay }) {
  const close = () => {
    modalOverlay.current.classList.remove(styles.visible);
  };

  return (
    <div ref={modalOverlay} className={`${styles.overlay} ${styles.fadeIn}`}>
      <div className={`${styles.modal} ${styles.fadeIn}`}>
        <img alt="tick" src={tick} className={styles.tick} />
        <p>Thank you!</p>
        <p>We will get back to you soon.</p>
        <button onClick={close}>Close</button>
      </div>
    </div>
  );
}

export default Modal;
