import Content from "components/Content";
import { allPages, Page } from "contentlayer/generated";
import type { NextPage } from "next";
import Head from "next/head";
import { description, title } from "site";

const Home: NextPage = () => {
  const homePage: Page = allPages[0];

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="p-12 flex-col space-y-4">
        <h1 className="text-2xl font-bold">{title}</h1>

        <h2 className="text-lg font-semibold">{description}</h2>

        <Content html={homePage.body.html} />
      </div>
    </>
  );
};

export default Home;
