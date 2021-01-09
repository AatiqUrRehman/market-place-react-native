import MySuperMartCatagories from '../../businessLoginLayer/MySuperMartCatagories';
import ShowProducts from '../../businessLoginLayer/MyProducts';
import TempInput from '../../businessLoginLayer/TempInput';

import { LOAD_ALL_CATAGORIES, LOAD_ALL_PRODUCTS, ADD_CATAGORY, ADD_PRODUCT } from '../actions/types';

const state = {
	superMartCatagories: [],
	currentCatagory: {
		productList: [],
	},
};

const CatagoryReducer = (mState = { ...state }, action) => {
	switch (action.type) {
		case LOAD_ALL_CATAGORIES:
			mState.superMartCatagories = [];
			action.payload.forEach(c => {
				mState.superMartCatagories.push(new MySuperMartCatagories(c._id, c.name, c.martId, []));
			});
			// console.log(JSON.stringify(mState.superMartCatagories));

			return clone(mState);

		case LOAD_ALL_PRODUCTS:
			mState.currentCatagory = { productList: [] };
			let index = mState.superMartCatagories.findIndex(c => c._id === action.payload._id);
			console.log(index);
			if (index >= 0) {
				console.log('INDEX');
				console.log(index);
				mState.superMartCatagories[index].productList = [];
				action.payload.products.forEach(p => {
					mState.superMartCatagories[index].productList.push(new ShowProducts().setValue(p));
				});
			}
			mState.currentCatagory = mState.superMartCatagories[index];
			return clone(mState);
		case ADD_CATAGORY:
			console.log('i am in reducer');
			console.log(JSON.stringify(action.payload.name));
			mState.superMartCatagories.push(
				new MySuperMartCatagories(action.payload._id, action.payload.name, action.payload.martId, [])
			);

			console.log('Added');
			console.log('Added');
			console.log('Added');
			console.log(JSON.stringify(action.payload.name));
			return clone(mState);
		case ADD_PRODUCT:
			console.log('ADD PRODUCT RESPOSE');
			console.log(action.payload);
			return clone(mState);
		default:
			return clone(mState);
	}
};

export default CatagoryReducer;

const clone = obj => {
	return JSON.parse(JSON.stringify(obj));
};
