import { Avatar, Flex, Layout, theme } from "antd";
import { Outlet } from "react-router-dom";

const { Header, Content, Footer } = Layout;
export default function LayoutComp() {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
            position: "sticky",
            top: "0",
            zIndex: "1001",
            boxShadow: `rgba(0, 0, 0, 0.16) 0px 1px 4px`,
          }}
        >
          <Flex justify="flex-end" align="center" gap={10}>
            <h4 style={{ marginBottom: 0, textTransform: "capitalize" }}>
              omkar
            </h4>
            <Avatar
              style={{
                backgroundColor: "blue",
                verticalAlign: "middle",
                float: "right",
                display: "flex",
                justifySelf: "center",
                alignSelf: "center",
                margin: 10,
                width: 40,
                cursor: "pointer",
              }}
              size="large"
              gap={10}
            >
              O
            </Avatar>
          </Flex>
        </Header>
        <Content
          style={{
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Outlet />
        </Content>
        <Footer style={{ textAlign: "center" }}>Omkar Salave</Footer>
      </Layout>
    </Layout>
  );
}
