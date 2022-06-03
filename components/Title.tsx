type Props = {
  text: string;
};

const Title = ({ text: title }: Props) => {
  return <h1 className="text-2xl font-bold">{title}</h1>;
};

export default Title;
