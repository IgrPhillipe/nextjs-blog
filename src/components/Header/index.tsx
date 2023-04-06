import Image from 'next/image';
import Link from 'next/link';
import globeImage from '../../../public/globe.svg';

export default function Header(): JSX.Element {
  return (
    <header className="flex w-full items-center justify-between p-6 text-lg ">
      <div className="flex items-center gap-3">
        <Image
          style={{ transform: 'rotate(-12deg)' }}
          width={50}
          height={50}
          src={globeImage}
        />
        <h1 className="text-3xl font-bold text-ultra-violet">THE BLOG</h1>
      </div>

      <div className="flex items-center justify-center">
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
      </div>
    </header>
  );
}
