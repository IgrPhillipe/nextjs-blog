import { rest } from 'msw';
import categories from './categories';
import allPosts from './allPosts';

const CATEGORY_NAME_QUERY_PARAM = 'filters[category][name][$eq]';
const POST_BY_SLUG_QUERY_PARAM = 'filters[slug][$eq]';

const getQueryParamFromUrl = (url: string, query: string) => {
  const searchParams = new URLSearchParams(url.split('?')[1]);
  return searchParams.get(query);
};

export const handlers = [
  rest.get('http://localhost:1337/api/categories', (req, res, ctx) => {
    return res(ctx.json(categories));
  }),

  rest.get('http://localhost:1337/api/posts', async (req, res, ctx) => {
    const url = req.url.toString();

    if (url.includes(CATEGORY_NAME_QUERY_PARAM)) {
      const { data, meta } = allPosts;
      const categoryName = getQueryParamFromUrl(url, CATEGORY_NAME_QUERY_PARAM);

      const categoryPosts = data.filter(
        (post) => post.attributes.category.data.attributes.name === categoryName
      );

      return res(
        ctx.json({
          data: categoryPosts,
          meta: { ...meta, total: categoryPosts.length },
        })
      );
    }

    if (url.includes(POST_BY_SLUG_QUERY_PARAM)) {
      const { data, meta } = allPosts;
      const postSlug = getQueryParamFromUrl(url, POST_BY_SLUG_QUERY_PARAM);

      const post = data.find((post) => post.attributes.slug === postSlug);

      return res(
        ctx.json({
          data: [post],
          meta: { ...meta, total: post ? 1 : 0 },
        })
      );
    }

    return res(ctx.json(allPosts));
  }),
];
