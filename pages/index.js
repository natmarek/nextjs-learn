import Head from "next/head";
import { name, siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import styles from "../components/layout.module.css";
import Footer from "../components/Footer";

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
        <h1 className={utilStyles.heading2Xl}>{name}</h1>

        <title>{siteTitle}</title>
        <p> </p>
      </header>

      <section className={utilStyles.headingMd}>
        <p>Hello, I'm Natalia. I'm a Associate Consultant and AWS Community Builder.</p>
        <p>Currently work on project using:</p>
        <ul>
          <li>Everything AWS</li>
          <li>React</li>
          <li>Next.js</li>
          <li>Python</li>
        </ul>
        <p>
           {" "}
          <Link href="/posts/projects">
            <a>Here</a>
          </Link>
          you will find my blog.
        </p>
      </section>
      <Footer />
    </div>
  );
}
