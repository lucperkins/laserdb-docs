import { Doc } from "contentlayer/generated";
import Content from "./Content";
import DocsNav from "./DocsNav";
import Title from "./Title";

const DocsPage = ({ title, body }: Doc) => {
  return (
    <div className="flex">
      <DocsNav />

      <article className="py-8 px-6">
        <Title text={title} />

        <Content html={body.html} />
      </article>
    </div>
  );
};

export default DocsPage;
