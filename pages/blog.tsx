import Tags from "components/Tags";
import Title from "components/Title";
import { allPosts, Post } from "contentlayer/generated";
import { allTags, formatAsDay } from "lib/content";
import Link from "next/link";

const PostCard = ({ title, date, url, tags }: Post) => {
  const formattedDate = formatAsDay(date);
  return (
    <Link href={url}>
      <a>
        <div className="flex-col space-y-3 rounded border py-3 px-5 hover:border-blue-500">
          <p className="text-lg font-semibold">{title}</p>
          <div>
            <time className="text-sm font-light">{formattedDate}</time>
          </div>
          {tags.length > 0 && <Tags tags={tags} />}
        </div>
      </a>
    </Link>
  );
};

const Blog = () => {
  const tags: string[] = allTags(allPosts);

  return (
    <article className="flex-col space-y-4 py-8 px-6">
      <Title text="Posts" />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {allPosts.map((p) => (
          <PostCard key={p._id} {...p} />
        ))}
      </div>

      <div className="flex items-center space-x-3">
        <p>All tags</p>

        <Tags tags={tags} />
      </div>
    </article>
  );
};

export default Blog;
