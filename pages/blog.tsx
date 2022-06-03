import Tags from "components/Tags";
import Title from "components/Title";
import { allPosts, Post } from "contentlayer/generated";
import { allTags, formatDate } from "lib/content";
import Link from "next/link";

const PostCard = ({ title, date, url, tags }: Post) => {
  return (
    <Link href={url}>
      <a>
        <div className="flex-col space-y-3 border rounded py-3 px-5 hover:border-blue-500">
          <p className="text-lg font-semibold">{title}</p>
          <div>
            <time className="text-sm font-light">{formatDate(date)}</time>
          </div>
          {tags.length > 0 && <Tags tags={tags} />}
        </div>
      </a>
    </Link>
  );
};

const Blog = () => {
  return (
    <article className="py-8 px-6 flex-col space-y-4">
      <Title text="Posts" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {allPosts.map((p) => (
          <PostCard key={p._id} {...p} />
        ))}
      </div>

      <div className="flex items-center space-x-3">
        <p>All tags</p>

        <Tags tags={allTags} />
      </div>
    </article>
  );
};

export default Blog;
