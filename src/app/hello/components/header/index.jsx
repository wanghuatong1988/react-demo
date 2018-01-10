import React from 'react';
import { browserHistory } from 'react-router';
import PropTypes from 'prop-types';
import './index.styl';

// 组件头部
class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    static defaultProps = {
        iconShow: true,
        title: '主页'
    }

    back() {
        browserHistory.push(this.props.goBack);
    }

    render() {
        let iconDom = null;
        const {iconShow, title} = this.props;
        if (iconShow) {
            iconDom = (<span className="back" onClick={()=> {this.back();}}></span>);    
        }
        return (
            <div className="header">
                {iconDom}
                {title}
            </div>
        );
    }
}

Header.propTypes = {
    goBack: PropTypes.string,
    iconShow: PropTypes.bool,
    title: PropTypes.string
};

export default Header;