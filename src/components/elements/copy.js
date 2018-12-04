import React, { Component } from 'react'

class Copy extends Component {
    constructor(props) {
        super(props);
    }

    myCopy = () => {
        const { copyHtml } = this.props;

        alert(`copiado ${copyHtml}`);
    }

    render() {
        return (
            <a href="#" onClick={this.myCopy}>copy</a>
        );
    }
}

export default Copy;
