import { Component } from 'react';

class ErrorBoundary extends Component {
    constructor() {
        super();
        this.state = { hasError: false };
    }

    componentDidCatch(error) {
        this.setState({ hasError: true });
    }

    //'any component with this method would be an ErrorBoundary component

    render() {
        if (this.state.hasError === true) {
            return <p>soemthing when wrong</p>;
        }
        return this.props.children;
    }
}

export default ErrorBoundary;
