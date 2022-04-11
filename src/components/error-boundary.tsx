import React from "react";

// 错误边界  react-error-boundary
type FallbackRender = (props: { error: Error | null }) => React.ReactElement;
// export class ErrorBoundary extends React.Component<{children:ReactNode,fallbackRender:FallbackRender},any>{ }
export class ErrorBoundary extends React.Component<
  React.PropsWithChildren<{ fallbackRender: FallbackRender }>,
  { error: Error | null }
> {
  state = { error: null };

  // 当子组件抛出异常，这里会接收到并调用
  static getDerivedStateFromError(error: Error) {
    return { error };
  }

  render() {
    const { error } = this.state;
    const { fallbackRender, children } = this.props;
    if (error) {
      return fallbackRender({ error });
    }
    return children;
  }
}
