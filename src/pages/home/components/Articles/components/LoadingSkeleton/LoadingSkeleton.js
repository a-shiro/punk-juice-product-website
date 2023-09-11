// CSS
import styles from "./LoadingSkeleton.module.css";

function LoadingSkeleton() {
  return (
    <div className={styles.skeleton}>
      <div></div>
      <aside>
        <div></div>
        <div></div>
      </aside>
    </div>
  );
}

export default LoadingSkeleton;
