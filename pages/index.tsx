import Content from "components/Content";
import Title from "components/Title";
import { home } from "contentlayer/generated";
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

      <article className="flex-col space-y-4 py-8 px-6">
        <Title text={title} />

        <h2 className="text-lg font-semibold">{description}</h2>

        <Content html={home.body.html} />
      </article>
    </>
  );
};

export default Home;
