import Tags from "components/Tags";
import { allPosts, Post } from "contentlayer/generated";
import { allTags, pagesWithTag } from "lib/content";
import { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
import { ParsedUrlQuery } from "querystring";
import { without } from "typescript-array-utils";

interface Params extends ParsedUrlQuery {
  tag: string;
}

type Props = {
  tag: string;
};

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const tags: string[] = allTags(allPosts);
  const paths: string[] = tags.map((t) => `/blog/tags/${t}`);

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<Props, Params> = async ({ params }) => {
  const { tag } = params as Params;
  return tag ? { props: { tag } } : { notFound: true };
};

const TagLayout = ({ tag }: Props) => {
  const tags: string[] = allTags(allPosts);
  const posts: Post[] = pagesWithTag(allPosts, tag);
  const otherTags: string[] = without(tags, tags.indexOf(tag));

  return (
    <div className="flex-col space-y-4 py-8 px-6">
      <h1 className="text-2xl">
        Posts with the tag <span className="font-bold">{tag}</span>
      </h1>

      <ul className="flex space-x-2">
        {posts.map((p) => (
          <li key={p._id}>
            <Link href={p.url}>
              <a className="rounded border border-gray-300 py-1.5 px-3 hover:bg-gray-100">{p.title}</a>
            </Link>
          </li>
        ))}
      </ul>

      <div className="flex-col space-y-2">
        <p>Other tags</p>
        <Tags tags={otherTags} />
      </div>
    </div>
  );
};

export default TagLayout;
