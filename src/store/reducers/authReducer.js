import SuperMartData from '../../businessLoginLayer/SuperMartData';
import { LOGIN } from '../actions/types';
const state = {
	currentSuperMart: new SuperMartData('', '', '', '', '', ''),
};

const AuthReducer = (mState = { ...state }, action) => {
	switch (action.type) {
		case LOGIN:
			mState.currentSuperMart._id = action.payload._id;
			mState.currentSuperMart.name = action.payload.name;
			mState.currentSuperMart.username = action.payload.username;
			mState.currentSuperMart.address = action.payload.address;
			mState.currentSuperMart.shopStatus = action.payload.shopStatus;
			mState.currentSuperMart.phoneNumber = action.payload.phoneNumber;
			console.log(JSON.stringify(mState.currentSuperMart));
			return clone(mState);
		default:
			return clone(mState);
	}
};

export default AuthReducer;

const clone = obj => {
	return JSON.parse(JSON.stringify(obj));
};
