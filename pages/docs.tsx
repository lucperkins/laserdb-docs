import Title from "components/Title";
import { allDocs } from "contentlayer/generated";
import Link from "next/link";

const Blog = () => {
  return (
    <>
      <Title text="Documentation" />

      <ul>
        {allDocs.map((d) => (
          <li key={d._id}>
            <Link href={d.url}>{d.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Blog;
