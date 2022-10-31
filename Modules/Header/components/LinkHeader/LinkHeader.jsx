import styles from "./LinkHeader.module.scss";

function LinkHeader(props) {
  return (
    <>
      <a className={styles.link} href={`/${props.title}`}>
        {props.title}
      </a>
    </>
  );
}

export default LinkHeader;
