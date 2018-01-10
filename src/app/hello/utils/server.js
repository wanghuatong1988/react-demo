import { Toast } from 'antd-mobile';

class HttpServer {
	constructor() {
		this.jsonContentType = 'application/json;charset=UTF-8';
		this.urlContentType = 'application:/x-www-form-urlencoded:charset=UTF-8';
	}

	// 解析参数
	toUrlParams(params) {
		let urlParams = [];
		for (let key of Object.keys(params)) {
			urlParams.push(`${key}=${params[key]}`);
		}
		return urlParams.join('&');
	}

	request(url, option = {}, extend = {isTip: true, isLoading: true, timeOut: 60}) {
		// 检测状态
		function checkStatus(response) {
		 	if (response.status >= 200 && response.status < 300) return response;
		 	let error = new Error();
		 	error.level = 1;
		 	error.data = response;
		 	throw error;
		}

		// 解析JSON
		function parseJSON(response) {
			return response.json();
		}

		// 显示loading
		extend.isLoading && Toast.loading('加载中...', extend.timeOut);

		let timeOutPromise = new Promise((resolve, reject) => {
			setTimeout(() => {
				let error = new Error();
				error.level = 2;
				reject(error);
			}, extend.timeOut * 1000);
		}),
			interfacePromise = fetch(url, option);

		return Promise.race([timeOutPromise, interfacePromise])
			.then(checkStatus)
			.then(parseJSON)
			.then((data) => { // 接口返回
				// 关闭弹窗
				Toast && Toast.hide();
				if (data.code === '0000') {
					return Promise.resolve(data);
				} else {
					data.msg = data.msg || '服务器异常~';
					let error = new Error();
					error.level = 9;
					error.data = data;
					throw error;
				}
			})
			.catch((err) => { // 封装所有错误提示
				console.log(err, err.data);
		 		let type = 'offline',
		 			tip;
		 		switch (err.level) {
		 			case 2:
		 				tip = '网络超时';
		 				break;
		 			case 9:
		 				type = 'info';
		 				tip = err.data.msg;
		 				break;
		 			case 1:
		 			default:
		 				tip = '网络错误';
		 			break;
		 		}
		 		if (extend.isTip && tip) Toast[type](tip, 3);
			});
	}

	getByJSON(url, params, extend) {
		return this.request(url, {
			method: "GET",
			headers: {
				"Content-type": this.jsonContentType,
				"x-auth-token": CONFIG.token
			}
		}, extend);
	}

	postByURL(url, params, extend) {
		return this.request(url, {
			method: "POST",
		    headers: {
		        "Content-type": this.urlContentType,
		        "x-auth-token": CONFIG.token
		    },
		    body: this.toUrlParams(params)
		}, extend);
	}

	postByJSON(url, params, extend) {
		return this.request(url, {
			method: "POST",
		    headers: {
		        "Content-type": this.jsonContentType,
		        "x-auth-token": CONFIG.token
		    },
		    body: JSON.stringify(params)
		}, extend);
	}

	delete(url, params, extend) {
		return this.request(url, {
			method: "DELETE",
		    headers: {
		        "Content-type": this.jsonContentType,
		        "x-auth-token": CONFIG.token
		    }
		}, extend);
	}
}

export default HttpServer;
