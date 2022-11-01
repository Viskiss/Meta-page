import styles from "../Wind.module.scss";

function Repeat() {
  return (
    <div className={styles.block}>
      <div className="overlay"></div>

      <div className={styles.text}>
        <div className={styles.wrapper}>
          <div id="R" className={styles.letter}>
            R
          </div>
          <div className={styles.shadow}>R</div>
        </div>
        <div className={styles.wrapper}>
          <div id="O" className={styles.letter}>
            O
          </div>
          <div className={styles.shadow}>O</div>
        </div>
        <div className={styles.wrapper}>
          <div id="A" className={styles.letter}>
            A
          </div>
          <div className={styles.shadow}>A</div>
        </div>
        <div className={styles.wrapper}>
          <div id="D" className={styles.letter}>
            D
          </div>
          <div className={styles.shadow}>D</div>
        </div>
        <div className={styles.wrapper}>
          <div id="M" className={styles.letter}>
            M
          </div>
          <div className={styles.shadow}>M</div>
        </div>
        <div className={styles.wrapper}>
          <div id="A" className={styles.letter}>
            A
          </div>
          <div className={styles.shadow}>A</div>
        </div>
        <div className={styles.wrapper}>
          <div id="P" className={styles.letter}>
            P
          </div>
          <div className={styles.shadow}>P</div>
        </div>
      </div>
    </div>
  );
}

export default Repeat;
