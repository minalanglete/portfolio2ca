import Head from "next/head";
import Image from "next/image";
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
          <h1 className={styles.title}>You have landed</h1>
          <Layout />
        </nav>
        <Image src="/headerimage.jpg" width="2000" height="1000" />
        <h2 className={styles.text}>Welcome to my Portfolio</h2>
        <p className="undetitleportfolio">
          This is three project I have done at school. It is my design and I am the frontend
          developer behind them. Hope you enjoy them.
        </p>
        <div className={styles.containermain}>
          <div className={styles.card}>
            <Image
              src="/semesterproject2.jpg"
              width="1000"
              height="1000"
              className={styles.image}
            />
            <h2>
              Semester
              <br /> Project 2
            </h2>
            <p>
              The pages is named Flaming Sneakers, it is a ecommerce website that has customer and
              admin sections. The content is fetch from a Strapi API.
            </p>
            <p className="githublink">
              Link to the repo:
              <a href="https://github.com/minalanglete/semesterproject2.git" className="link">
                {" "}
                GitHub
              </a>
            </p>
          </div>

          <div className={styles.card}>
            <Image src="/jsframeworksca.jpg" width="1000" height="1000" className={styles.image} />
            <h2>JavaScript Frameworks CA</h2>
            <p>
              This page is a webpage that are build in Next.js. It fetch a API that are online and
              display the content on the page.
            </p>
            <p className="githublink">
              Link to the repo:
              <a
                href="https://github.com/Noroff-FEU-Assignments/js-frameworks-course-assignment-minalanglete.git"
                className="link"
              >
                {" "}
                GitHub
              </a>
            </p>
          </div>

          <div className={styles.card}>
            <Image src="/projectexam2.jpg" width="1000" height="1000" className={styles.image} />
            <h2>
              Project
              <br /> Exam 2
            </h2>
            <p>
              My project exsam is a booking hotel webpage. It is build in Next.js. The content is
              fetch from a WordPress REST API that I have made.
            </p>
            <p className="githublink">
              Link to the repo:
              <a
                href="https://github.com/Noroff-FEU-Assignments/project-exam-2-minalanglete.git"
                className="link"
              >
                {" "}
                GitHub
              </a>
            </p>
            <p className="githublink">
              Live site online:{" "}
              <a href="https://exam2-mina-langlete.netlify.app/" className="link">
                {" "}
                My exam
              </a>
            </p>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>© Mina Langlete</p>
      </footer>
    </div>
  );
}
