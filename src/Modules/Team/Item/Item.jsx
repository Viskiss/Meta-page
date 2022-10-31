import styles from "./Item.module.scss";

function Item(props) {
  return (
    <div className={styles.block}>
      <img src={props.src} alt="" />
      <p>{props.name}</p>
    </div>
  );
}

export default Item;
