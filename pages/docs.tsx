import DocsPage from "components/DocsPage";
import { allDocs, Doc } from "contentlayer/generated";

const Docs = () => {
  const docsMain: Doc = allDocs.find((d) => d.url === "/docs")!;

  return <DocsPage {...docsMain} />;
};

export default Docs;
