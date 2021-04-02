import Head from "next/head";
import React from "react";
import styles from "./home.module.scss";
export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>Home | IG.News</title>
      </Head>

      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span> 👏 Hey, Welcome </span>
          <h1>News About the <span>React</span> World.</h1>
          <p>
            Get acess to all the publicationos <br />
            <span>for $9.90 month</span>
          </p>
        </section>

        <img src="/images/avatar.svg" alt="Girl Coding" />
      </main>
    </React.Fragment>
  )
}
