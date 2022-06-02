import type { NextPage } from "next";
import Head from "next/head";
import { description, title } from "site";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <h1>{title}</h1>
      </div>
    </>
  );
};

export default Home;
