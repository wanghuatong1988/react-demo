import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import '../assets/stylus/animation';

// 组件-根组件(入口)
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '根组件',
        };
    }

    render() {
        return (
            <ReactCSSTransitionGroup
                component="div"
                className="router-container"
                transitionName="slide"
                transitionEnterTimeout={300}
                transitionLeaveTimeout={300}>
                <div key={this.props.location.pathname} className="mt-90 main-container">
                    {this.props.children}
                </div>
            </ReactCSSTransitionGroup>
        );
    }
}

export default App;