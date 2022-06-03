import Tags from "components/Tags";
import Title from "components/Title";
import { allTags } from "lib/content";
import Link from "next/link";

const AllTags = () => {
  return (
    <div className="py-8 px-6 flex-col space-y-4">
      <Title text="All tags" />

      <Tags tags={allTags} />
    </div>
  );
};

export default AllTags;
