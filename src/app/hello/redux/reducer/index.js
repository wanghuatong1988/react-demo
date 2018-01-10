import { combineReducers } from "redux";
import { GETNEWSLIST } from '../../type';

function pageParams(state = {newList: []}, action) {
	return {
		newList: Object.assign(state.newList, action.type === GETNEWSLIST ? action.value : []),
	};
}

export default combineReducers({
	//headInfo,
	pageParams
});
