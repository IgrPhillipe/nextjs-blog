export interface StrapiPagination {
  total: number;
  page: number;
  pageCount: number;
  pageSize: number;
};

export interface StrapiInstance<T> {
  id: number;
  attributes: T;
}

export interface StrapiDataInstance<T> {
  data: StrapiInstance<T>;
}

export interface StrapiResponse<T> {
  data: T;
  meta: {
    pagination: StrapiPagination;
  };
};