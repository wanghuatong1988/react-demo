import React from 'react';
import wrapWithUsername from './wrapWithUsername';

class Welcome extends React.Component {
	render() {
		let {dClick, sClick} = this.props;
		return (
			<div>
				Welcome {this.props.username}
				<button onClick={dClick.bind(this,1)}>张三丰</button>
				<input type="button" value="isShow" onClick={sClick.bind(this)}></input>
			</div>
		);
	}
}

export default wrapWithUsername(Welcome);