import { LOAD_UOM, LOAD_SIZES } from '../actions/types';
import MyUom from '../../businessLoginLayer/MyUom';
import MySize from '../../businessLoginLayer/MySize';

const state = {
	loadUOM: [],
	loadSize: [],
};

const LoadMeasurePointReducer = (mState = { ...state }, action) => {
	switch (action.type) {
		case LOAD_SIZES:
			mState.loadSize = [];
			action.payload.forEach(s => {
				mState.loadSize.push(new MySize().setValues(s));
			});
			console.log('PREPARED size LIST');
			console.log(mState.loadSize);
			return clone(mState);

		case LOAD_UOM:
			mState.loadUOM = [];
			console.log('what is thes');
			console.log(JSON.stringify(action.payload));
			action.payload.forEach(s => {
				mState.loadUOM.push(new MyUom(s));
			});
			console.log('PREPARED uom LIST');
			console.log(mState.loadUOM);
			return clone(mState);
		default:
			return clone(mState);
	}
};

export default LoadMeasurePointReducer;

const clone = obj => {
	return JSON.parse(JSON.stringify(obj));
};
