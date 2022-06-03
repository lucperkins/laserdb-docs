import Link from "next/link";
import { title } from "site";

type NavbarLinkProps = {
  text: string;
  href: string;
};

const links: NavbarLinkProps[] = [
  {
    text: "Blog",
    href: "/blog",
  },
  {
    text: "Docs",
    href: "/docs",
  },
];

const NavbarLink = ({ text, href }: NavbarLinkProps) => {
  return (
    <li className="hover:text-blue-500">
      <Link href={href}>{text}</Link>
    </li>
  );
};

const NavbarLinks = ({ links }: { links: NavbarLinkProps[] }) => {
  return (
    <ul className="flex space-x-3">
      {links.map((link) => (
        <NavbarLink key={link.text} {...link} />
      ))}
    </ul>
  );
};

const Navbar = () => {
  return (
    <nav className="bg-gray-100 flex justify-between py-4 px-6">
      <div>
        <Link href="/">
          <a className="font-bold">{title}</a>
        </Link>
      </div>

      <div>
        <NavbarLinks links={links} />
      </div>
    </nav>
  );
};

export default Navbar;
