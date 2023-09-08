// CSS
import parentStyles from "../../Contact.module.css";
import styles from "./Modal.module.css";
// Static files
import tick from "../../../../../../assets/icons/tick.png";

function Modal({ modalRef }) {
  const close = () => {
    modalRef.current.classList.remove(parentStyles.modalActive);
  };

  return (
    <div ref={modalRef} className={parentStyles.modalOverlay}>
      <div className={styles.modal}>
        <img src={tick} className={styles.tick} alt="tick" />

        <h1>Thank you!</h1>
        <p>We will get back to you soon.</p>

        <button onClick={close}>Close</button>
      </div>
    </div>
  );
}

export default Modal;
