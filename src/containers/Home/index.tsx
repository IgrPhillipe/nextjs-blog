import { Post as PostType } from '@/domain';
import { MainPost, Post, Tabs } from '@/components';

type PageProps = {
  main?: boolean;
  posts: PostType[];
  category?: string;
};

const Home = ({ main, posts, category }: PageProps): JSX.Element => {
  const [mainPost, ...rest] = posts;

  const tabs = [
    { name: 'Profile', href: '/category/Profile' },
    { name: 'Dashboard', href: '/category/Dashboard' },
    { name: 'Settings', href: '/category/Settings' },
    { name: 'Contacts', href: '/category/Contacts' },
    { name: 'Disabled', href: '/category/Disabled' },
  ];

  return (
    <>
      <Tabs tabs={tabs} category={category} />

      {main && (
        <MainPost
          key={mainPost.attributes.slug}
          attributes={mainPost.attributes}
        />
      )}

      <section className="my-12 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {main
          ? rest?.map(({ attributes }) => (
              <Post key={attributes.slug} attributes={attributes} />
            ))
          : posts?.map(({ attributes }) => (
              <Post key={attributes.slug} attributes={attributes} />
            ))}
      </section>
    </>
  );
};

export default Home;
