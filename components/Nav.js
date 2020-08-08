import Link from "next/link";
import styles from "./nav.module.css";

export default function NavBar() {
  return (
    <div className={styles.navContainer}>
      {/* <Link href="/">
        <a className={styles.navLink}>Home</a>
      </Link> */}
      <Link href="/posts/about">
        <a className={styles.navLink}> About</a>
      </Link>
      <Link href="/posts/projects">
        <a className={styles.navLink}>Projects</a>
      </Link>
      <Link href="/posts/contact">
        <a className={styles.navLink}>Contact me</a>
      </Link>
    </div>
  );
}
