import clsx from "clsx";
import { allDocs, Doc } from "contentlayer/generated";
import { byWeight } from "lib/content";
import Link from "next/link";
import { useRouter } from "next/router";

const DocsNav = () => {
  const router = useRouter();
  const sortedDocs: Doc[] = allDocs.sort(byWeight);

  const isThisPage = (url: string): boolean => {
    return url === router.asPath;
  };

  return (
    <nav className="h-screen bg-gray-200 py-4 px-6">
      <ul>
        {sortedDocs.map((d) => (
          <li key={d._id} className={clsx("hover:text-blue-600", isThisPage(d.url) && "text-violet-600")}>
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
