import { Doc } from "contentlayer/generated";
import Content from "./Content";
import DocsNav from "./DocsNav";
import EditThisPage from "./EditThisPage";
import LastEdited from "./LastEdited";
import Title from "./Title";

const DocsPage = ({ title, body, _raw, lastEdited }: Doc) => {
  return (
    <div className="flex">
      <DocsNav />

      <article className="flex-col space-y-6 py-8 px-6">
        <Title text={title} />

        <Content html={body.html} />

        <LastEdited lastEdited={lastEdited} />

        <EditThisPage url={_raw.sourceFilePath} />
      </article>
    </div>
  );
};

export default DocsPage;
