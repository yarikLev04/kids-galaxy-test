export interface PagedResponse<T> {
  items: T[];
  page: number;
  total_pages: number;
}
