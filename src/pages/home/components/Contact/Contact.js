// Hooks
import { useRef } from "react";
// Components
import Form from "./components/Form/Form";
import Modal from "./components/Modal/Modal";
// CSS
import styles from "./Contact.module.css";

function Contact() {
  const modalRef = useRef();

  return (
    <section id="contact" className={styles.section}>
      <h2 className={styles.title}>Don't be shy, write to us</h2>
      <Form modalRef={modalRef} />
      <Modal modalRef={modalRef} />
    </section>
  );
}

export default Contact;
