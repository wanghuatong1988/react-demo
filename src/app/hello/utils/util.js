module.exports = {
	getParams(name) {
		let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"),
			r = window.location.search.slice(1).match(reg);
		if (r !== null && r.toString().length) {
		    return decodeURI(r[2]);
		}
		return null;
	}
};
