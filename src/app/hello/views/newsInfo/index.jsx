import React from 'react';
import Header from '../../components/header';
import './index.styl';

class newsInfo extends React.Component {

	constructor(props, context) {
		super(props, context);
		this.state = {
			dataList: [],
		};
	}

	componentWillMount() {

		const infoList = [
			{
				title: '新华社报',
				content: '中国主要重点新闻网站,依托新华社遍布全球的采编网络,记者遍布世界100多个国家和地区,地方频道分布全国31个省市自治区,每天24小时同时使用6种语言滚动发稿,权威、准确..',
			},
			{
				title: '风晓月事件',
				content: '寒蝉凄切,对长亭晚,骤雨初歇. 都门帐饮无绪,方留恋处,兰舟催发. 执手相看泪眼,竟无语凝噎. 念去去、千里烟波,暮霭沈沈楚天阔。 多情自古伤...',
			},
			{
				title: '理论部分',
				content: '生产理论部分学习内容 1.生产要素之间的替代关系 2.等产量线的含义和等成本线的含义 3.成本最低的生产方法 4.生产要素价格与成本最低的生产方法之间的..',
			},
			{
				title: '王者荣耀',
				content: '王者荣耀》是腾讯天美工作室历时3年推出的东方英雄即时对战手游大作,抗塔强杀、团灭超神,领略爽热血竞技的酣畅淋漓!1v1、3v3、5v5、闯关等丰富游戏模式,随时战.',
			}
		];

		this.setState({
			dataList: infoList
		});
	}

	componentDidMount() {
		console.log(this.props);
	}

	render() {
		return (
			<div className="infoMain">
				<Header goBack="/" title="新闻详情页"/>
				if (this.props.params) {
					<div>
						<h1>{this.state.dataList[this.props.params.id].title}</h1>
						<div>{this.state.dataList[this.props.params.id].content}</div>
					</div>
				}
			</div>
		);
	}
}

export default newsInfo;
