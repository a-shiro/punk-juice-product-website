import styles from "./ShowcaseSkeleton.module.css";

function ShowcaseSkeleton() {
  return (
    <div className={styles.skeleton}>
      <div className={styles.itemsWrapper}>
        <div></div>
        <div></div>
      </div>
      <div className={styles.itemsWrapper}>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default ShowcaseSkeleton;
