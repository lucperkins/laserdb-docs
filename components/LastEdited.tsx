import { formatAsDay } from "lib/content";

type Props = {
  lastEdited: string;
};

const LastEdited = ({ lastEdited }: Props) => {
  const formatted = formatAsDay(lastEdited);

  return (
    <p className="text-sm">
      Last edited on <span className="font-semibold">{formatted}</span>
    </p>
  );
};

export default LastEdited;
