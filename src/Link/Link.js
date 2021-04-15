import * as React from 'react';

class Link extends React.Component {
    componentDidMount() {
        this.props.log('Link component created');
    }
    render() {
        return (
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn React
            </a>
        );
    }
}

export default Link;
