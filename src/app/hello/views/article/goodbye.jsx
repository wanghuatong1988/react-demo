import React from 'react';
import wrapWithUsername from './wrapWithUsername';
// <button onClick={this.props.isClick.bind(this,2)}>李逍遥</button>
class Goodbye extends React.Component {
	render() {
		return (
			<div>
				goodbye {this.props.username}
			</div>
		);
	}
}

export default wrapWithUsername(Goodbye);
