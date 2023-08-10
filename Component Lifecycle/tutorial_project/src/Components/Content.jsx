import React from 'react'

class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {message: 'World!'};
    }

    componentDidMount() {
        console.log('Component did mount');
    }

    componentDidUpdate() {
        console.log('Component did update');
    }

    componentWillUnmount() {
        console.log('Component will unmount');
    }

    render() {
        return (
            <>
                <h1>Hello {this.state.message}</h1>
            </>
        )
    }
}



export default Content
