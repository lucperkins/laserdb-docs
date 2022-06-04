import Tags from "components/Tags";
import Title from "components/Title";
import { allPosts } from "contentlayer/generated";
import { allTags } from "lib/content";

const AllTags = () => {
  const tags: string[] = allTags(allPosts);

  return (
    <div className="flex-col space-y-4 py-8 px-6">
      <Title text="All tags" />

      <Tags tags={tags} />
    </div>
  );
};

export default AllTags;
