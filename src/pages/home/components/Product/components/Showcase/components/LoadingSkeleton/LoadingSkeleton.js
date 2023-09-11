import styles from "./LoadingSkeleton.module.css";

function LoadingSkeleton() {
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

export default LoadingSkeleton;
