import React, {ReactNode} from 'react';
import {Text, View} from 'react-native';

interface ErrorBoundaryProps {
  children?: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return {hasError: true};
  }

  /* Uncomment if you have RNRestart installed
  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.log("get function ... ", error, "....", errorInfo);
    RNRestart.Restart();
  }
  */

  render(): ReactNode {
    if (this.state.hasError) {
      return (
        <View>
          <Text>An error occurred.</Text>
        </View>
      );
    }

    return this.props.children || null;
  }
}

export default ErrorBoundary;
