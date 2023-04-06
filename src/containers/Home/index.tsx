import { Post as PostType } from '@/domain';
import { MainPost, Post } from '@/components';

type PageProps = {
  main?: boolean;
  posts: PostType[];
};

const Home = ({ main, posts }: PageProps): JSX.Element => {
  const [mainPost, ...rest] = posts;

  return (
    <>
      <h1>The Blog</h1>

      {main && (
        <MainPost
          key={mainPost.attributes.slug}
          attributes={mainPost.attributes}
        />
      )}

      <section>
        {main
          ? rest?.map(({ attributes }) => (
              <Post key={attributes.slug} attributes={mainPost.attributes} />
            ))
          : posts?.map(({ attributes }) => (
              <Post key={attributes.slug} attributes={mainPost.attributes} />
            ))}
      </section>
    </>
  );
};

export default Home;
