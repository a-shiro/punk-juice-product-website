import styles from "./Hamburger.module.css";

function Hamburger({ toggleDropdown }) {
  return (
    <div className={styles.hamburger}>
      <input
        type="checkbox"
        id="checkbox"
        className={`${styles.checkbox}  ${styles.hidden}`}
      />
      <label htmlFor="checkbox">
        <div onClick={toggleDropdown} className={`${styles.barContainer}`}>
          <span className={`${styles.bar} ${styles.bar1}`}></span>
          <span className={`${styles.bar} ${styles.bar2}`}></span>
          <span className={`${styles.bar} ${styles.bar3}`}></span>
          <span className={`${styles.bar} ${styles.bar4}`}></span>
        </div>
      </label>
    </div>
  );
}

export default Hamburger;
