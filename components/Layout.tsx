type Props = {
  children: JSX.Element;
};

const Layout = ({ children }: Props) => {
  return <div className="p-12 flex-col space-y-4">{children}</div>;
};

export default Layout;
