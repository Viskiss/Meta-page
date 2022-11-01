// import Sphere from "./Sphere/Sphere";
import styles from "./Info.module.scss";
import Roadmap from "./Roadmap/Roadmap";
import ROADMAP_INFO from ".";
import Sphere from "./Sphere/Sphere";

function DecorateSp() {
  return (
    <div className={styles.block}>
      <div className={styles.sp}>
        <Sphere />
      </div>
      <div className={styles.sp1}>
        <Sphere />
      </div>
      <div className={styles.sp2}>
        <Sphere />
      </div>
      <div className={styles.sp3}>
        <Sphere />
      </div>
      <div>
        {ROADMAP_INFO.map((info) => (
          <Roadmap
            key={info.num}
            src={info.src}
            date={info.date}
            phase={info.phase}
            num={info.num}
            info1={info.info1}
            info2={info.info2}
          />
        ))}
      </div>
    </div>
  );
}

export default DecorateSp;
