// Hooks
import { useState } from "react";
// CSS
import parentStyles from "../../Contact.module.css";
import styles from "./Form.module.css";

function Form({ modalRef }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleClear = () => {
    setFormData({ name: "", email: "", message: "" });
  };

  const submit = (e) => {
    e.preventDefault();
    modalRef.current.classList.add(parentStyles.modalActive);
    handleClear();
  };

  return (
    <form onSubmit={submit} className={styles.form} method="post">
      <div>
        <label htmlFor="name">Name</label>
        <input
          onChange={handleChange}
          value={formData.name}
          id="name"
          type="text"
          pattern="^[a-zA-Z]{2,}( {1,2}[a-zA-Z]{2,}){0,}$"
          placeholder="John Doe"
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          onChange={handleChange}
          value={formData.email}
          id="email"
          type="email"
          pattern="[^ @]*@[^ @]*"
          placeholder="johndoe@mail.com"
          required
        />
      </div>
      <div>
        <label htmlFor="message">How can we help?</label>
        <textarea
          onChange={handleChange}
          value={formData.message}
          id="message"
          rows="10"
          placeholder="Ask us anything . . ."
          required
        ></textarea>
      </div>
      <button type="submit" className={styles.submit}>
        Send Message
      </button>
    </form>
  );
}

export default Form;
