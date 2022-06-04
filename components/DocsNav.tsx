import { allDocs, Doc } from "contentlayer/generated";
import { byWeight } from "lib/content";
import Link from "next/link";

const DocsNav = () => {
  const sortedDocs: Doc[] = allDocs.sort(byWeight);

  return (
    <nav className="h-screen bg-gray-200 py-4 px-6">
      <ul>
        {sortedDocs.map((d) => (
          <li key={d._id} className="hover:text-blue-500">
            <Link href={d.url}>
              <a>{d.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default DocsNav;
