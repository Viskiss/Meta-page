import Repeat from "./Repeat/Repeat";
import styles from "./Spacer.module.scss";

function Spacer() {
  return (
    <div className={styles.block}>
      <Repeat />
    </div>
  );
}

export default Spacer;
