import Title from "components/Title";
import { allPosts, Post } from "contentlayer/generated";
import Link from "next/link";

const PostCard = ({ title, url }: Post) => {
  return (
    <Link href={url}>
      <a>
        <div className="border rounded py-4 px-6 hover:border-blue-500">
          <p>{title}</p>
        </div>
      </a>
    </Link>
  );
};

const Blog = () => {
  return (
    <>
      <Title text="Posts" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {allPosts.map((p) => (
          <PostCard key={p._id} {...p} />
        ))}
      </div>
    </>
  );
};

export default Blog;
