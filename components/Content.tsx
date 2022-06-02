type Props = {
  html: string;
};

const Content = ({ html }: Props) => {
  return <div className="prose" dangerouslySetInnerHTML={{ __html: html }} />;
};

export default Content;
