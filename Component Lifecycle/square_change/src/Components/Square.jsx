import React from "react";


class Square extends React.Component {

constructor(props) {
    super(props);
    this.state = {
        backgroundColor: "",
        visible: true,
        setColor: this.props.setColor,
        setVisible: this.props.setVisible
    };
}

componentDidMount(){
    this.setState({backgroundColor: this.props.color})
    this.setState({visible: this.props.visible})
    console.log("componentDidMount");
}

componentDidUpdate(prevProps, prevState) {
    if (prevProps.color !== this.props.color) {
        this.setState({backgroundColor: this.props.color})
    }
    if (prevProps.visible !== this.props.visible) {
        this.setState({visible: this.props.visible})
    }
    console.log("componentDidUpdate");
}

componentWillUnmount() {
    console.log("componentWillUnmount");
}

render() {
    return (
        <div className="Square"></div>
    )
}

}



export default Square;