type Props = {
  html: string;
};

const Content = ({ html }: Props) => {
  return (
    <div
      className="prose dark:prose-dark"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

export default Content;
