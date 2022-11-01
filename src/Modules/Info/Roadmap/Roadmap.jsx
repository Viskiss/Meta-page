import styles from "./Roadmap.module.scss";

function Roadmap(props) {
  return (
    <div className={styles.block}>
      <div>
        <div className={styles.header}>
          <button>{props.num}</button>
          <div>
            <p>{props.phase}</p>
            <h2>{props.date}</h2>
          </div>
        </div>

        <div className={styles.textinfo}>
          <div>
            <p>{props.info1}</p>
            <p>{props.info2}</p>
          </div>
          <div>
            <img src={props.src} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Roadmap;
