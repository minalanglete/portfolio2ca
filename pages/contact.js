import Head from "next/head";

import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mina Langlete Portfolio</title>
        <meta name="description" content="Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <nav className={styles.nav}>
          <h1 className={styles.title}>Contact me</h1>
          <Layout />
        </nav>

        <p className="undetitlecontact">
          My location is Trondheim, Norway. So if you do not live nearby and you want to get in
          contact with me send me an email. <br />
          <br />
          The mail is langlete.mina@gmail.com
        </p>
        <p className="undetitlecontact2">Look forward to hear from you!</p>
      </main>

      <footer className={styles.footer}>
        <p>© Mina Langlete</p>
      </footer>
    </div>
  );
}
