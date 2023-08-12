import styles from "./SkeletonOverlay.module.css";

function SkeletonOverlay() {
  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <div className={styles.loadingCircle}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default SkeletonOverlay;
