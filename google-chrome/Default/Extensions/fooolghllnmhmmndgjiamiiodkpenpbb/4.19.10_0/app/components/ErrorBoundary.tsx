import { Component } from 'react';
import { logError } from '@extension/common/utils';
import ErrorScreen from './ErrorScreen/ErrorScreen';

interface IErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<unknown, IErrorBoundaryState> {
  constructor(props: unknown) {
    super(props);
    this.state = { hasError: false };
  }

  public componentDidCatch(error: Error) {
    this.setState({ hasError: true });
    logError('ErrorBoundary:', error);
  }

  public render() {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) {
      return <ErrorScreen />;
    }

    return children;
  }
}

export default ErrorBoundary;
