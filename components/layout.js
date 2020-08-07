import Head from "next/head";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

const name = "Natalia Marek";
export const siteTitle = "Portfolio";

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />

        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <img
              src="/images/profile.jpg"
              className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
              alt={name}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a></a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}></a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>

      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
      <footer className="footer">
        <a className={styles.img} href="https://twitter.com/Molly__Millions">
          <img
            align="left"
            alt="Natalia's Twitter"
            width="22px"
            src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/twitter.svg"
          />
        </a>
        <a className={styles.img} href="http://www.linkedin.com/in/natalia-mar">
          <img
            align="left"
            alt="Natalia's Linkdein"
            width="22px"
            src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/linkedin.svg"
          />
        </a>
        <a className={styles.img} href="https://github.com/ripleycmd">
          <img
            align="left"
            alt="Natalia's Github"
            width="22px"
            src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/github.svg"
          />
        </a>{" "}
      </footer>
    </div>
  );
}
