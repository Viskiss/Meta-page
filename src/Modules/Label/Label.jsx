import styles from "./Label.module.scss";
import Text from "./Meta/Meta";

function Label() {
  return (
    <div className={styles.block}>
      <div className={styles.info}>
        <Text value="META" />
        <Text value="RECORD" />
        <Text value="LABEL" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique.
        </p>
        <div>
          <button>Learn More</button>
        </div>
      </div>
      <div className={styles.image}>
        <img src="/image/label/label.png" alt="" />
      </div>
    </div>
  );
}

export default Label;
