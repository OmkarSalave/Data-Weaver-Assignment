import { Button, Col, Flex, message, Row, Select, Table } from "antd";
import SearchComponent from "./list-comps/search";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import { GET_BOOKS } from "./api-helper/helper";
import { useDispatch, useSelector } from "react-redux";
import {
  setBooksData,
  setLoading,
  setPagination,
  setSort,
} from "../../redux/reducers";
import Columns from "./list-comps/table-columns";
import ErrorBoundry from "../../utils/error-boundary";
export default function BooksList() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const booksData = useSelector((state) => state.books.booksData);
  const loading = useSelector((state) => state.books.loading);
  const pagination = useSelector((state) => state.books.pagination);
  const search = useSelector((state) => state.books.search);
  const sort = useSelector((state) => state.books.sort);

  const fetchBooks = async (page, pageSize, searchA, sortA) => {
    dispatch(setLoading(true));
    try {
      const res = await GET_BOOKS(page, pageSize, searchA, sortA);
      dispatch(
        setPagination({
          ...pagination,
          total: res?.pagination?.totalElements ?? 0,
        })
      );
      dispatch(setBooksData(res?.data ?? []));
    } catch (error) {
      message.error(error.message);
    } finally {
      dispatch(setLoading(false));
    }
  };

  const handleTableChange = (mypagination) => {
    dispatch(
      setPagination({
        ...pagination,
        current: mypagination.current,
        pageSize: mypagination.pageSize,
      })
    );
  };
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (!isFirstRender.current) {
      fetchBooks(pagination.current, pagination.pageSize, search, sort);
    } else {
      isFirstRender.current = false;
    }
  }, [pagination.current, pagination.pageSize, search, sort]);

  return (
    <ErrorBoundry>
      <div className="container">
        <Row gutter={[8, 8]}>
          <Col span={24}>
            <h1 className="title">Books List</h1>
          </Col>
          <Col span={24}>
            <Flex gap={10} wrap="wrap" justify="flex-end" align="center">
              <SearchComponent />
              <Select
                style={{ width: "100%", maxWidth: 140 }}
                dropdownStyle={{ minWidth: 250 }}
                placement="bottomLeft"
                placeholder="Sort"
                allowClear={false}
                value={sort}
                onChange={(e) => {
                  dispatch(setSort(e));
                  dispatch(setPagination({ ...pagination, current: 1 }));
                }}
                options={[
                  { label: "Ascending", value: "ASC" },
                  { label: "Descending", value: "DESC" },
                ].map((item) => {
                  return {
                    label: item?.label,
                    value: item.value,
                  };
                })}
              />
              <Button type="primary" onClick={() => navigate("/books/add")}>
                Add to Books List
              </Button>
            </Flex>
          </Col>
          <Col span={24}>
            <Table
              loading={loading}
              columns={Columns()}
              bordered
              pagination={pagination}
              onChange={handleTableChange}
              scroll={{ x: 1000 }}
              rowKey={(record) => record.id ?? ""}
              dataSource={booksData ?? []}
            />
          </Col>
        </Row>
      </div>
    </ErrorBoundry>
  );
}
