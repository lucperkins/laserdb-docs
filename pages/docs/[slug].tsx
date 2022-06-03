import DocsPage from "components/DocsPage";
import { allDocs, Doc } from "contentlayer/generated";
import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";

const nonMainDocs: Doc[] = allDocs.filter((d) => d.url != "/docs");

const paths: string[] = nonMainDocs.map((d) => d.url);

const getDoc = (slug: string): Doc | undefined => {
  const url = `/docs/${slug}`;
  return allDocs.find((d) => d.url === url);
};

interface Params extends ParsedUrlQuery {
  slug: string;
}

type Props = {
  doc: NonNullable<ReturnType<typeof getDoc>>;
};

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<Props, Params> = async ({
  params,
}) => {
  const { slug } = params as Params;
  const doc = getDoc(slug);
  return doc ? { props: { doc } } : { notFound: true };
};

const DocLayout = ({ doc }: { doc: Doc }) => {
  return <DocsPage {...doc} />;
};

export default DocLayout;
