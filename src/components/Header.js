import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white sticky top-0 z-50 p-4">
      <nav className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Ajay Kumar</h1>
        <ul className="flex space-x-6">
          <li>
            <Link href="/" className="hover:text-blue-400">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-blue-400">
              About
            </Link>
          </li>
          <li>
            <Link href="#projects" className="hover:text-blue-400">
              Projects
            </Link>
          </li>
          <li>
            <Link href="#skills" className="hover:text-blue-400">
              Skills
            </Link>
          </li>
          <li>
            <Link href="#contact" className="hover:text-blue-400">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
