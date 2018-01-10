import React from 'react';
import { browserHistory, Link } from 'react-router';
import Header from '../../components/header';
import './index.styl';

// 组件头部
class Main extends React.Component {

	constructor(props, context) {
		super(props, context);
		this.state = {
			dataList: [],
		};
	}

	componentDidMount() {
		const initDataList = [
			{
				id: 1,
				name: '新华社报',
			},
			{
				id: 2,
				name: '风晓月事件',
			},
			{
				id: 3,
				name: '理论部分',
			},
			{
				id: 4,
				name: '王者荣耀',
			}
		];

		this.setState({
			dataList: initDataList,
		});
	}

	render() {
		
		let domlist = [];
		this.state.dataList.map((item)=>{
			domlist.push(
				<li className="liList" key={item.id} onClick={()=> { browserHistory.replace(`/info/${item.id}`);}}>{item.name}</li>
			);
		});

		return (
			<main>
				<Header iconShow={false} title="hello"/>
				<div className="listBox">
					<ul>
						{domlist}
					</ul>
				</div>
				<div className="navMid">
					<Link to="/news">公司列表</Link>
					<span></span>
					<Link to="/article">文章列表</Link>
				</div>
			</main>
		);
	}
}

export default Main;
