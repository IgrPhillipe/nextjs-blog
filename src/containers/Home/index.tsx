import { Post as PostType } from '@/domain';
import { PostsContainer, Title } from './styles';
import { MainPost, Post } from '@/components';

type PageProps = {
  main?: boolean;
  posts: PostType[];
};

const Home = ({ main, posts }: PageProps): JSX.Element => {
  const [mainPost, ...rest] = posts;

  return (
    <>
      <Title>The Blog</Title>

      {main && (
        <MainPost
          key={mainPost.attributes.slug}
          attributes={mainPost.attributes}
        />
      )}

      <PostsContainer>
        {main
          ? rest?.map(({ attributes }) => (
              <Post key={attributes.slug} attributes={mainPost.attributes} />
            ))
          : posts?.map(({ attributes }) => (
              <Post key={attributes.slug} attributes={mainPost.attributes} />
            ))}
      </PostsContainer>
    </>
  );
};

export default Home;
