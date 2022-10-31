import styles from "./Header.module.scss";
import { LINK_TITLE, SOCIAL_LINK } from "./header.constans";
import LinkHeader from "./components/LinkHeader/LinkHeader";
import LinkSocial from "./components/LinkSocial/LinkSocial";

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <img className={styles.logo} src="/image/header/IMAGE.png" alt="" />
        <div className={styles.link}>
          {LINK_TITLE.map((title) => (
            <LinkHeader key={title.title} title={title.title} />
          ))}
        </div>
        <div className={styles.social}>
          {SOCIAL_LINK.map((sl) => (
            <LinkSocial key={sl.src} src={sl.src} href={sl.href} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Header;
