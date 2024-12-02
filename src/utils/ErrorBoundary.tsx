import React, { Component, ReactNode } from 'react';

class ErrorBoundary extends Component<{children: ReactNode}, {hasError: boolean}> {
  constructor(props: {children: ReactNode}) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.log('Erro capturado:', error);
    console.log('Informações:', info);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Algo deu errado! Tente novamente mais tarde.</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
