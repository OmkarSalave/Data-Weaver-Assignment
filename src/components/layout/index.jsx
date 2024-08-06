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
          <Flex
            justify="space-between"
            align="center"
            gap={10}
            className="nav-container"
          >
            <h2 className="logoname">Book Store</h2>
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
                  width: 40,
                }}
                size="large"
                gap={10}
              >
                O
              </Avatar>
            </Flex>
          </Flex>
        </Header>
        <Content
          style={{
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
            minHeight: "calc(100vh - 64px - 74px)",
          }}
        >
          <Outlet />
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Developed by Omkar Salave
        </Footer>
      </Layout>
    </Layout>
  );
}
