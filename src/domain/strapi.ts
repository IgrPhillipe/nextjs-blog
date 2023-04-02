export interface StrapiResponse<T> {
  data: {
    id: number;
    attributes: T;
  }[];
  meta: {
    pagination: {
      total: number;
      page: number;
      pageCount: number;
      pageSize: number;
    };
  };
};