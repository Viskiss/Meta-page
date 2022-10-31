import styles from "./Meta.module.scss";

const Text = ({ value }) => (
  <div className={styles.text}>
    {value.split("").map((char, i) => (
      <div
        key={i}
        className={styles.letter}
        style={{ "--delay": `${i * 0.2}s` }}
      >
        <span className={styles.source}>{char}</span>
        <span className={styles.shadow}>{char}</span>
        <span className={styles.overlay}>{char}</span>
      </div>
    ))}
  </div>
);

export default Text;
