import React from 'react';

class ErrorBoundary extends React.Component {

    state = {
        hasError: false
    };

    componentDidCatch(error, errorInfo) {
        this.setState({ hasError: true })
    }

    render() {
        if (this.state.hasError) return 'Error happen!';

        return this.props.children;
    }
}

export default ErrorBoundary;
