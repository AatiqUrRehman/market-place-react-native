import MyCompany from '../../businessLoginLayer/MyCompany';

import { LOAD_ALL_COMPANIES, ADD_COMPANIE } from '../actions/types';

const state = {
	MyCompanies: [],
};

const CompanyReducer = (mState = { ...state }, action) => {
	switch (action.type) {
		case LOAD_ALL_COMPANIES:
			mState.MyCompanies = [];
			console.log('------------1----------------');
			console.log(JSON.stringify(action.payload));
			action.payload.forEach(c => {
				mState.MyCompanies.push(new MyCompany(c));
			});

			console.log('------------ok----------------');
			console.log(JSON.stringify(mState.MyCompanies));
			return clone(mState);
		case ADD_COMPANIE:
			console.log('i am in company reducer');
			console.log(JSON.stringify(action.payload));
			mState.MyCompanies.push(new MyCompany(action.payload));
			return clone(mState);
		default:
			return clone(mState);
	}
};

export default CompanyReducer;

const clone = obj => {
	return JSON.parse(JSON.stringify(obj));
};
