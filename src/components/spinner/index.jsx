import { Spin } from "antd";

export default function Spinner() {
  return (
    <div className={`centerSpinner`}>
      <Spin size="large" />
    </div>
  );
}
