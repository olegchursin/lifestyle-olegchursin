import { Footer } from 'flowbite-react';
import { BsInstagram } from 'react-icons/bs';

const currentYear = new Date().getFullYear();

export default function FooterSection(): JSX.Element {
  return (
    <Footer>
      <div className="w-full container mx-auto my-24">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <span className="self-center whitespace-nowrap px-3 text-xl font-semibold dark:text-white">
            lifestyle.olegchursin.com
          </span>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright
            href="https://olegchursin.com"
            by="olegchursin"
            year={currentYear}
          />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon
              href="https://www.instagram.com/lifestyle.olegchursin/"
              icon={BsInstagram}
            />
          </div>
        </div>
      </div>
    </Footer>
  );
}
