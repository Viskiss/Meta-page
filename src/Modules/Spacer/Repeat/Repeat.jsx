import styles from "../Spacer.module.scss";

function Repeat() {
  return (
    <div className={styles.block}>
      <div className="overlay"></div>

      <div className={styles.text}>
        <div className={styles.wrapper}>
          <div id="A" className={styles.letter}>
            A
          </div>
          <div className={styles.shadow}>A</div>
        </div>
        <div className={styles.wrapper}>
          <div id="R" className={styles.letter}>
            R
          </div>
          <div className={styles.shadow}>R</div>
        </div>
        <div className={styles.wrapper}>
          <div id="T" className={styles.letter}>
            T
          </div>
          <div className={styles.shadow}>T</div>
        </div>
        <div className={styles.wrapper}>
          <div id="I" className={styles.letter}>
            I
          </div>
          <div className={styles.shadow}>I</div>
        </div>
        <div className={styles.wrapper}>
          <div id="S" className={styles.letter}>
            S
          </div>
          <div className={styles.shadow}>S</div>
        </div>
        <div className={styles.wrapper}>
          <div id="T" className={styles.letter}>
            T
          </div>
          <div className={styles.shadow}>T</div>
        </div>
      </div>
    </div>
  );
}

export default Repeat;
