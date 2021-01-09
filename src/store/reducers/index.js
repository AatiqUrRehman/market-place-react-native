import { combineReducers } from 'redux';

import AuthReducer from './authReducer';
import CatagoryReducer from './catagoryReducer';
import CompanyReducer from './companyReducer';
import AisleReducer from './aisleReducer';
import LoadMeasurePointReducer from './loadMeasurePointReducer';

const rootReducer = combineReducers({
	AuthReducer,
	CatagoryReducer,
	CompanyReducer,
	AisleReducer,
	LoadMeasurePointReducer,
});
export default rootReducer;
