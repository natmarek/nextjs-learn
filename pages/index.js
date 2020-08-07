import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import styles from "../components/layout.module.css";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Portfolio </title>
      </Head>
      <header className={styles.header}>
        <img
          src="/images/profile.jpg"
          className={`${utilStyles.headerHomeImage} ${utilStyles.borderCircle}`}
          alt=""
        />
        <h1 className={utilStyles.heading2Xl}>Natalia Marek</h1>

        <title>{siteTitle}</title>
        <p> </p>
      </header>

      <section className={utilStyles.headingMd}>
        <p>Hello, I'm Natalia. I'm a Junior Software Developer.</p>
        <p>
          I am passionate about technology, innovation, accessibility and social
          justice.
        </p>
        <ul>
          <li>JavaScript</li>
          <li>React</li>
          <li>Next.js</li>
          <li>Python</li>
        </ul>
        <p>
          View my projects over{" "}
          <Link href="/posts/first-post">
            <a>here</a>
          </Link>
        </p>
      </section>
    </div>
  );
}
