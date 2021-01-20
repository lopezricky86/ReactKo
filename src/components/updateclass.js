import React, { Component } from 'react';

class Updateclass extends Component {
    state = {
        count: 4
    }

    render() {
        return (
            <React.Fragment>
                <span className={this.getBadgeClasses()}>{this.state.count}</span>
            </React.Fragment>
        );
    }

    getBadgeClasses = () => {
        const {count} = this.state;
        let classes = "badge badge-"
        classes += count === 0 ? "warning" : "primary"
        return classes;
    }
}

export default Updateclass;