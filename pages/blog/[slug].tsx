import Content from "components/Content";
import Tags from "components/Tags";
import Title from "components/Title";
import { allPosts, Post } from "contentlayer/generated";
import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";

const getPost = (slug: string): Post | undefined => {
  const url = `/blog/${slug}`;
  return allPosts.find((p) => p.url === url);
};

interface Params extends ParsedUrlQuery {
  slug: string;
}

type Props = {
  post: NonNullable<ReturnType<typeof getPost>>;
};

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const paths = allPosts.map((p) => p.url);

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<Props, Params> = async ({ params }) => {
  const { slug } = params as Params;
  const post = getPost(slug);
  return post ? { props: { post } } : { notFound: true };
};

const PostLayout = ({ post }: Props) => {
  return (
    <article className="flex-col space-y-4 py-8 px-6">
      <Title text={post.title} />

      {post.tags.length > 0 && <Tags tags={post.tags} />}

      <Content html={post.body.html} />
    </article>
  );
};

export default PostLayout;
