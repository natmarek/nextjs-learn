import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/layout";

export default function Contact() {
  return (
    <Layout projects>
      <Head>
        <title>Projects</title>
      </Head>
      <main className="main-projects">
        <h1>About</h1>
        <h2>
          <Link href="/">
            <a>x</a>
          </Link>
        </h2>
        <p className="post"></p>
      </main>
    </Layout>
  );
}
