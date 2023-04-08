import Image from 'next/image';
import Link from 'next/link';
import globeImage from '../../../public/globe.svg';
import githubIcon from '../../../public/github.svg';
import { useMediaQuery } from 'react-responsive';

const Header = (): JSX.Element => {
  const isMobile = useMediaQuery({ query: '(max-width: 640px)' });

  return (
    <header className="mb-4 flex w-full items-center justify-between p-6 text-lg md:px-24 md:py-12">
      <Link href="/">
        <a>
          <div className="flex items-center gap-3">
            <Image
              style={{ transform: 'rotate(-12deg)' }}
              width={50}
              height={50}
              src={globeImage}
            />
            <h1 className="text-3xl font-bold text-ultra-violet">THE BLOG</h1>
          </div>
        </a>
      </Link>

      <div className="flex items-center justify-center text-center">
        {isMobile ? (
          <a
            className="mx-5 font-medium text-light-gray transition duration-300 ease-in-out hover:text-ultra-violet"
            href="https://github.com/IgrPhillipe/nextjs-blog"
            target="_blank"
          >
            <Image width={30} height={30} src={githubIcon} />
          </a>
        ) : (
          <>
            <Link href="/">
              <a className="mx-5 font-medium text-light-gray transition duration-300 ease-in-out hover:text-ultra-violet">
                HOME
              </a>
            </Link>

            <a
              className="mx-5 font-medium text-light-gray transition duration-300 ease-in-out hover:text-ultra-violet"
              href="https://github.com/IgrPhillipe/nextjs-blog"
              target="_blank"
            >
              SOURCE CODE
            </a>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
