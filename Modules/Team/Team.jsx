import styles from "./Team.module.scss";
import { TEAM_ITEM } from "./constants";
import Item from "./Item/Item";

function Team() {
  return (
    <div className={styles.block}>
      {TEAM_ITEM.map((a) => (
        <Item key={a.name} src={a.src} name={a.name} />
      ))}
    </div>
  );
}

export default Team;
