import { Input } from "antd";
import { setPagination, setSearch } from "../../../redux/reducers";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
const { Search } = Input;
export default function SearchComponent() {
  const dispatch = useDispatch();
  const search = useSelector((state) => state.books.search);
  const pagination = useSelector((state) => state.books.pagination);
  const [searchText, setSearchText] = useState("");
  const onSearch = (value) => {
    dispatch(setSearch(value));
    dispatch(setPagination({ ...pagination, current: 1 }));
  };

  useEffect(() => {
    if (search?.length > 0) {
      setSearchText(search);
    } else {
      setSearchText("");
    }
  }, [search]);
  return (
    <Search
      placeholder="Search book"
      allowClear
      enterButton="Search"
      value={searchText ? searchText : null}
      onChange={(e) => setSearchText(e.target.value)}
      style={{ width: 290 }}
      onSearch={onSearch}
    />
  );
}
