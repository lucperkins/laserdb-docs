import Link from "next/link";

const Tag = ({ tag }: { tag: string }) => {
  const url = `/blog/tags/${tag}`;
  return (
    <li className="text-xs bg-gray-100 py-0.5 px-1.5 rounded hover:bg-gray-200">
      <Link href={url}>{tag}</Link>
    </li>
  );
};

const Tags = ({ tags }: { tags: string[] }) => {
  return (
    <>
      <ul className="inline-flex space-x-1.5">
        {tags.map((t) => (
          <Tag key={t} tag={t} />
        ))}
      </ul>
    </>
  );
};

export default Tags;
