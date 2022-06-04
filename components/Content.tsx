type Props = {
  html: string;
};

const Content = ({ html }: Props) => {
  return <div className="dark:prose-dark prose" dangerouslySetInnerHTML={{ __html: html }} />;
};

export default Content;
