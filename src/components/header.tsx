import { DarkThemeToggle, Navbar } from 'flowbite-react';
import { FC } from 'react';

const Header: FC<Record<string, never>> = () => {
  return (
    <header className="sticky top-0 z-20 shadow-md">
      <Navbar>
        <Navbar.Brand href="/">
          <span className="self-center whitespace-nowrap px-3 py-4 text-xl font-semibold dark:text-white">
            lifestyle
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Navbar.Toggle />
          <DarkThemeToggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link href="https://www.instagram.com/lifestyle.olegchursin/">
            Instagram
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Header;
