import {
  Button,
  Col,
  DatePicker,
  Flex,
  Form,
  Input,
  InputNumber,
  message,
  Row,
  Select,
} from "antd";
import dayjs from "dayjs";
import ErrorBoundry from "../../../utils/error-boundary";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import FormItem from "antd/es/form/FormItem";
import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFormLoader } from "../../../redux/reducers";
import { POST_BOOKS, PUT_BOOKS } from "../api-helper/helper";

export default function BookCreate() {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const { updateId } = useParams();
  const dispatch = useDispatch();
  const { state } = useLocation();
  const formLoader = useSelector((state) => state.books.formLoader);
  const onSubmit = async (values) => {
    if (updateId) {
      dispatch(setFormLoader(true));
      try {
        const res = await PUT_BOOKS(updateId, {
          ...values,
          year: dayjs(values.year).format("YYYY"),
        });
        console.log(res, "res");
        message.success("Book updated successfully");
        dispatch(setFormLoader(false));
        navigate("/books");
      } catch (error) {
        message.error(error.message);
      } finally {
        dispatch(setFormLoader(false));
      }
    } else {
      dispatch(setFormLoader(true));
      try {
        const res = await POST_BOOKS({
          ...values,
          year: dayjs(values.year).format("YYYY"),
        });
        console.log(res, "res");
        message.success("Book created successfully");
        dispatch(setFormLoader(false));
        navigate("/books");
      } catch (error) {
        message.error(error.message);
      } finally {
        dispatch(setFormLoader(false));
      }
    }
  };

  useEffect(() => {
    if (state?.singleBook) {
      form.setFieldsValue({
        ...state?.singleBook,
        year: state?.singleBook?.year
          ? dayjs(state?.singleBook?.year, "YYYY")
          : null,
      });
    }
  }, [updateId, state?.singleBook]);

  return (
    <ErrorBoundry>
      <div className="container">
        <Row gutter={[8, 8]}>
          <Col span={24}>
            <h1 className="title">
              {updateId ? "Update Book" : "Create Book"}
            </h1>
          </Col>
          <Col span={24}>
            <Form
              onFinish={onSubmit}
              layout="vertical"
              name="book-details"
              form={form}
              scrollToFirstError={true}
            >
              <Row gutter={[16, 4]}>
                <Col xs={24} sm={12} md={12} xl={8}>
                  <FormItem
                    name="title"
                    label="Title"
                    rules={[{ required: true, message: "Please enter title!" }]}
                  >
                    <Input placeholder="Enter title" />
                  </FormItem>
                </Col>
                <Col xs={24} sm={12} md={12} lg={12} xl={8}>
                  <FormItem
                    name="author"
                    label="Author"
                    rules={[{ required: true, message: "Please enter author" }]}
                  >
                    <Input placeholder="Enter author" />
                  </FormItem>
                </Col>
                <Col xs={24} sm={12} md={12} lg={12} xl={8}>
                  <FormItem
                    name="country"
                    label="Country"
                    rules={[
                      { required: true, message: "Please select country" },
                    ]}
                  >
                    <Select
                      allowClear
                      placeholder="Select country"
                      options={[
                        {
                          label: <Fragment>India</Fragment>,
                          title: `India`,
                          value: "India",
                        },
                        {
                          label: <Fragment>USA</Fragment>,
                          title: `USA`,
                          value: "USA",
                        },
                      ]}
                    />
                  </FormItem>
                </Col>
                <Col xs={24} sm={12} md={12} lg={12} xl={8}>
                  <FormItem
                    name="language"
                    label="Language"
                    rules={[
                      { required: true, message: "Please select language!" },
                    ]}
                  >
                    <Select
                      allowClear
                      placeholder="Select language"
                      options={[
                        {
                          label: <Fragment>English</Fragment>,
                          title: `English`,
                          value: "English",
                        },
                        {
                          label: <Fragment>Hindi</Fragment>,
                          title: `Hindi`,
                          value: "Hindi",
                        },
                      ]}
                    />
                  </FormItem>
                </Col>
                <Col xs={24} sm={12} md={12} lg={12} xl={8}>
                  <FormItem
                    name="link"
                    label="Link"
                    rules={[
                      {
                        required: true,
                        message: "Please enter link",
                      },
                      {
                        type: "url",
                        message: "Please enter valid url",
                      },
                    ]}
                  >
                    <Input placeholder="Enter link" />
                  </FormItem>
                </Col>
                <Col xs={24} sm={12} md={12} lg={12} xl={8}>
                  <FormItem
                    name="pages"
                    label="Pages"
                    rules={[{ required: true, message: "Please enter pages" }]}
                  >
                    <InputNumber
                      style={{ width: "100%" }}
                      placeholder="Enter pages"
                    />
                  </FormItem>
                </Col>
                <Col xs={24} sm={12} md={12} lg={12} xl={8}>
                  <FormItem
                    name="year"
                    label="Year"
                    rules={[{ required: true, message: "Please select year" }]}
                  >
                    <DatePicker
                      style={{ width: "100%" }}
                      placeholder="Select year"
                      format={"YYYY"}
                      picker="year"
                      disabledDate={(current) =>
                        current && current > dayjs().endOf("day")
                      }
                    />
                  </FormItem>
                </Col>
              </Row>
              <Flex gap={10} justify="flex-end" align="center">
                <Button
                  onClick={() => {
                    form.resetFields();
                    navigate(-1);
                  }}
                  size="large"
                  type="default"
                >
                  Cancel
                </Button>
                <Button
                  loading={formLoader}
                  disabled={formLoader}
                  size="large"
                  type="primary"
                  htmlType="submit"
                >
                  {updateId ? "Update" : "Submit"}
                </Button>
              </Flex>
            </Form>
          </Col>
        </Row>
      </div>
    </ErrorBoundry>
  );
}
