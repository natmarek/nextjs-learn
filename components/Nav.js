import Link from "next/link";
import styles from "./nav.module.css";

export default function NavBar() {
  return (
    <div className={styles.navContainer}>
      <Link href="/" passHref>
        <a className={styles.navLink}>Home</a>
      </Link>
      <Link href="/posts/about" passHref>
        <a className={styles.navLink}> About</a>
      </Link>
      <Link href="/posts/projects" passHref>
        <a className={styles.navLink}>Projects</a>
      </Link>
    </div>
  );
}
