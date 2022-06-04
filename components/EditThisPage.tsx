import Link from "next/link";

type Props = {
  url: string;
};

const EditThisPage = ({ url }: Props) => {
  const editUrl = `https://github.com/lucperkins/laserdb-docs/edit/main/content/${url}`;

  return (
    <button className="rounded border border-gray-300 py-0.5 px-2 tracking-tight hover:bg-gray-100">
      <Link href={editUrl}>
        <a className="text-sm font-light">Edit this page</a>
      </Link>
    </button>
  );
};

export default EditThisPage;
