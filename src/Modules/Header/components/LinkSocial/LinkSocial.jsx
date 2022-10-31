import styles from "./LinkSocial.module.scss";

function LinkSocial(props) {
  return (
    <>
      <a className={styles.social} href={props.href}>
        <img src={props.src} alt="" />
      </a>
    </>
  );
}

export default LinkSocial;
