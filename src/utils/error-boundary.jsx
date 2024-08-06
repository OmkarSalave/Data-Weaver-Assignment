import { Result } from "antd";
import { Component } from "react";

export default class ErrorBoundry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
      error,
    };
  }

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <Result status={"500"} title="Something went wrong try again later" />
      );
    }
    // eslint-disable-next-line react/prop-types
    return this.props.children;
  }
}
