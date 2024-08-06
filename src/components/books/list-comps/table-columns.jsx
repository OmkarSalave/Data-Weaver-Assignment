import { Button } from "antd";
import { useNavigate } from "react-router-dom";
export default function Columns() {
  const navigate = useNavigate();
  return [
    {
      title: "Sl. No",
      dataIndex: "id",
      key: "id",
      render: (id, _, ind) => {
        const slno = ind + 1;
        return <span key={id}>{slno}</span>;
      },
    },
    {
      title: "Title",
      dataIndex: "id",
      key: "id",
      render: (id, data) => {
        return <span key={id}>{data?.title ? data?.title : "N/A"}</span>;
      },
    },
    {
      title: "Author",
      dataIndex: "id",
      key: "id",
      render: (id, data) => {
        return <span key={id}>{data?.author ? data?.author : "N/A"}</span>;
      },
    },
    {
      title: "Country",
      dataIndex: "id",
      key: "id",
      render: (id, data) => {
        return <span key={id}>{data?.country ? data?.country : "N/A"}</span>;
      },
    },
    {
      title: "Language",
      dataIndex: "id",
      key: "id",
      render: (id, data) => {
        return <span key={id}>{data?.language ? data?.language : "N/A"} </span>;
      },
    },
    {
      title: "Year",
      dataIndex: "id",
      key: "id",
      render: (id, data) => {
        return <span key={id}>{data?.year ? data?.year : "N/A"} </span>;
      },
    },
    {
      title: "Pages",
      dataIndex: "id",
      key: "id",
      render: (id, data) => {
        return <span key={id}>{data?.pages ? data?.pages : "N/A"} </span>;
      },
    },
    {
      title: "Link",
      dataIndex: "id",
      key: "id",
      render: (id, data) => {
        return <span key={id}>{data?.link ? data?.link : "N/A"} </span>;
      },
    },
    {
      title: "Action",
      dataIndex: "id",
      key: "id",
      render: (id, data) => {
        return (
          <Button
            key={id}
            onClick={() =>
              navigate(`/books/update/${id}`, { state: { singleBook: data } })
            }
            type="link"
          >
            Edit
          </Button>
        );
      },
    },
  ];
}
