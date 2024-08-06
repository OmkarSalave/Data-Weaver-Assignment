import { App, ConfigProvider, theme } from "antd";
import { useRef } from "react";

// eslint-disable-next-line react/prop-types
export default function AntdConfig({ children }) {
  const modalContainerRef = useRef(null);

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#1677ff",
          colorTextSecondary: "#A7A9AC",
          colorError: "red",
        },
        algorithm: theme.defaultAlgorithm,
        components: {
          Table: {
            fontSize: 14,
            padding: 20,
            headerBg: "#ffffff",
            colorBgContainer: "#fcfcfc",
            borderColor: "#d9d9d9c2",
            borderRadius: 10,
            rowHoverBg: "#f5f5f5",
            colorText: "#000000",
          },
          Pagination: {
            controlHeight: 40,
            colorBgBase: "#ffffff",
          },
          Input: {
            controlHeight: 40,
            borderRadius: 10,
            activeBorderColor: "#FFECED",
          },
          InputNumber: {
            controlHeight: 40,
            borderRadius: 10,
          },
          Select: {
            controlHeight: 40,
            borderRadius: 10,
          },
          DatePicker: {
            controlHeight: 40,
            borderRadius: 10,
          },
          Button: {
            controlHeight: 40,
            controlHeightLG: 50,
            borderRadiusLG: 10,
            paddingBlockLG: "13px 37px",
            colorTextDisabled: "gray",
            colorBgContainerDisabled: "#00000029",
            borderColorDisabled: "none",
            borderRadius: 10,
          },
        },
      }}
      getPopupContainer={() => modalContainerRef.current}
    >
      <div ref={modalContainerRef}>
        <App>{children}</App>
      </div>
    </ConfigProvider>
  );
}
