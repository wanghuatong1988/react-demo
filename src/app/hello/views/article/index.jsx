import React from 'react';
import Goodbye from './goodbye';
import Welcome from './welcome';
import ColorPoint from './decorator';

console.log(ColorPoint.toString());
class ArticleInfo extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="articelInfoMain">
				高阶函数：<br/>
				-----------------------------------

				<Goodbye></Goodbye>
				<Welcome></Welcome>
			</div>
		);
	}
}


export default ArticleInfo;