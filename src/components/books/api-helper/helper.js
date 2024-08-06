import { apiRequest } from "../../../utils/axios";
import { BOOKS_API } from "../../../utils/eps";
export const GET_BOOKS = (page, pageSize, search, sort) => {
  return apiRequest({
    url: BOOKS_API.getBooks(page, pageSize, search, sort),
    method: "get",
  });
};

export const POST_BOOKS = (data) => {
  return apiRequest({
    url: BOOKS_API.addBook,
    method: "post",
    data: data,
  });
};

export const PUT_BOOKS = (id, data) => {
  return apiRequest({
    url: BOOKS_API.updateBook(id),
    method: "put",
    data: data,
  });
};
