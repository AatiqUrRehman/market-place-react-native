import MyAisle from '../../businessLoginLayer/MyAisle';

import { ADD_AISLE, LOAD_ALL_AISLE } from '../actions/types';

const state = {
	MyAisleList: [],
};

const AisleReducer = (mState = { ...state }, action) => {
	switch (action.type) {
		case LOAD_ALL_AISLE:
			mState.MyAisleList = [];
			action.payload.forEach(aisle => {
				mState.MyAisleList.push(new MyAisle(aisle));
			});
			console.log('after calling aisles');
			console.log(JSON.stringify(mState.MyAisleList));
			return clone(mState);
		case ADD_AISLE:
			console.log('i am in Add aisle reducer');
			console.log(JSON.stringify(action.payload));
			mState.MyAisleList.push(new MyAisle(action.payload));
			console.log('JSON.stringify(mState.MyAisleList)');
			console.log(JSON.stringify(mState.MyAisleList));
			return clone(mState);
		default:
			return clone(mState);
	}
};

export default AisleReducer;

const clone = obj => {
	return JSON.parse(JSON.stringify(obj));
};
