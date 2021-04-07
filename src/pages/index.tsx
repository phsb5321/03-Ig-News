import { GetServerSideProps, GetStaticProps } from "next"

import Head from "next/head";
import React from "react";
import { SubscribeButton } from "../components/SubscribeButton";
import { stripe } from "../services/stripe";
import styles from "./home.module.scss";

interface HomeProps{
  product:{
    priceId: String;
    amount: number;
  }
}

export default function Home({product}:HomeProps) {
  console.log(product)
  return (
    <React.Fragment>
      <Head>
        <title>Home | IG.News</title>
      </Head>

      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span> 👏 Hey, Welcome </span>
          <h1>News About <br />
          the <span>React</span> World.</h1>
          <p>
            Get acess to all the publicationos <br />
            <span>for {product.amount} month</span>
          </p>
          <SubscribeButton />
        </section>

        <img src="/images/avatar.svg" alt="Girl Coding" />
      </main>
    </React.Fragment>
  )
}

export const getServerSideProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve(
    "price_1Icj9JDHHWpWwHPLSPpM4VaS",
  )

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat("en-US",{
      style:"currency",
      currency:"USD",
    }).format(price.unit_amount / 100),

  }
  return {
    props: {
      product
    },
    revalidate: 60 * 60 * 24 * 15 // 15 Dias
  }
}