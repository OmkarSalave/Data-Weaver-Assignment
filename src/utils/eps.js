export const BOOKS_API = Object.freeze({
  getBooks: (page, pageSize, search = undefined, sort = undefined) => {
    let url = `/books?page=${page}&pageSize=${pageSize}`;
    if (search) {
      url += `&title=${search}`;
    } else if (sort) {
      url += `&DIR=${sort}`;
    }
    return url;
  },
  addBook: `/books`,
  updateBook: (id) => `/books/${id}`,
});
