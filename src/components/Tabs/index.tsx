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
    <div className="text-md border-b-2 border-light-gray text-center font-medium text-cool-gray">
      <ul className="-mb-px flex flex-wrap">
        {tabs.map(({ href, name }) => (
          <li className="mr-2">
            <a
              href={href}
              className={classNames(
                'border-transparent border-b-1 inline-block rounded-t-lg p-4 hover:border-ultra-violet hover:text-ultra-violet',
                category === name
                  ? 'border-b-4 border-ultra-violet text-ultra-violet'
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
