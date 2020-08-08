import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/layout";
import styles from "../../styles/projects.module.css";

export default function FirstPost() {
  return (
    <Layout projects>
      <Head>
        <title>Projects</title>
      </Head>
      <main className={styles.mainContainer}>
        {/* <h1>Projects</h1>
        <h2>
          <Link href="/">
            <a></a>
          </Link>
        </h2> */}
        <section className={styles.section}>
          <img className={styles.img} src="/sitting-8.png" alt="my image" />
          <h4> This is a title</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </section>
        <section className={styles.section}>
          <img className={styles.img} src="/standing-11.png" alt="my image" />
          <h4> This is a title</h4>
          <p>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
          </p>
        </section>
        <section className={styles.img} className={styles.section}>
          <img className={styles.img} src="/standing-18.png" alt="my image" />
          <h4> This is a title</h4>
          <p>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </section>
        <section className={styles.section}>
          <img className={styles.img} src="/standing-21.png" alt="my image" />
          <h4> This is a title</h4>
          <p>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </section>
      </main>
    </Layout>
  );
}
