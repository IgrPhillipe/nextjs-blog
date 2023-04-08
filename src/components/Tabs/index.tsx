import classNames from 'classnames';

interface Tab {
  name: string;
  href: string;
}

interface TabsProps {
  tabs: Tab[];
  category?: string;
}

const Tabs = ({ tabs, category }: TabsProps): JSX.Element => {
  return (
    <div className="text-md scroll scrollbar-hide mb-12 flex overflow-x-scroll border-b-2 border-light-gray text-center font-normal text-cool-gray">
      <ul className="box-border flex w-full">
        {tabs.map(({ href, name }) => (
          <li key={name} className="mr-2">
            <a
              href={href}
              className={classNames(
                'border-transparent border-b-1 inline-block rounded-t-lg p-4 transition-all duration-300 hover:border-ultra-violet hover:text-ultra-violet',
                category === name
                  ? 'border-b-4 border-ultra-violet font-medium text-ultra-violet'
                  : 'border-b-1 border-transparent text-cool-gray'
              )}
            >
              {name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tabs;
