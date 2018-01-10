import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Header from '../../components/header';
import { GETNEWSLIST } from '../../type';
import './index.styl';

function mapStateToProps(state) {
	return {
		newList: state.pageParams.newList.value,
	};
}

function mapDispatchToProps(dispatch) {
	return {
		getNewsList: (value) => dispatch({type: GETNEWSLIST, value}),
	};
}

class News extends React.Component {

	constructor(props, context) {
		super(props, context);
		this.state = {
			newList: [],
		};
	}

	componentWillMount() {

		const infoList = {
			value: ['江歌案开庭', '鬼鬼承认有追求者', '婚礼礼堂看像灵堂', '千万劳斯莱斯被撞']
		};

		return new Promise((resolve) => {
			resolve(this.props.getNewsList(infoList));
		}).then(() => {
			this.setState({
				newList: this.props.newList,
			});
		});
	}

	componentDidMount() {
		
	}

	render() {

		let listDom = this.state.newList.map((value, index) => {
			return (<div key={index}><Link to={`/news/${index + 1}`}>{value}</Link></div>);
		});

		return (
			<div className="NewsMain">
				<Header goBack="/" title="公司列表"/>
				<div className="listShow">
					{listDom}
				</div>
			</div>
		);
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(News);
