import React from 'react';

//高阶组件
export default (WrappedComponent) => {

	class ArticleInfo extends React.Component {
		constructor(props) {
			super(props);
			this.state = {
				username: '',
			};
		}

		componentWillMount() {
			let username = "科比、乔丹";
			this.setState({
				username: username,
			});
		}

		dellClick(num) {
			if (num === 1) {
				console.log('科比');
			}else {
				console.log('乔丹');
			}
		}

		showClick() {
			console.log('我是showClick');
		}

		render() {
			const props = {
				...this.props,
				dClick: this.dellClick,
				sClick: this.showClick,
			};
			return <WrappedComponent {...props} />;
		}
	}

	return ArticleInfo;
};
