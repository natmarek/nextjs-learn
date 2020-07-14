import Head from 'next/head'
updateimport Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, I'm Natalia. I'm a Junior Software Developer.</p>
        <p>
          Before I started coding I have been working as a Behaviour therapist with children and young people with autism{' '}
          {/* <a href="https://nextjs.org/learn">our Next.js tutorial</a>.) */}
        </p>
        <ul>
          <li>JavaScript</li>
          <li>React</li>
          <li>Next.js</li>
          <li>Python</li>

        </ul>
      </section>
    </Layout>
  )
}