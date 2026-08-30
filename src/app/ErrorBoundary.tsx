import React from 'react';

type Props = { children: React.ReactNode };
type State = { hasError: boolean };

export class ErrorBoundary extends React.Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: unknown, info: React.ErrorInfo) {
    console.error("خطای کلی برنامه:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return <div role="alert" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', color: 'white', background: '#000' }}>خطایی رخ داد. لطفاً صفحه را رفرش کنید.</div>;
    }
    return this.props.children;
  }
}