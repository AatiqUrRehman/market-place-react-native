import Axios from 'axios';
import { Alert } from 'react-native';
import { LOAD_ALL_COMPANIES, ADD_COMPANIE } from '../../store/actions/types';
import { BASE_URL } from '../../config/proxy';

export const Load_All_Companies = martID => dispatch => {
	console.log('martID');
	console.log(martID);
	Axios.post(BASE_URL + '/mart/cms/company-get-where', {
		martId: martID,
	})
		.then(res => {
			console.log('i am in respone of companies');
			console.log(JSON.stringify(res.data));
			const state = {
				type: LOAD_ALL_COMPANIES,
				payload: res.data.companies,
			};
			dispatch(state);
		})
		.catch(err => {
			console.log('err' + JSON.stringify(err.data));
		});
};

export const Add_Company = (name, martID) => dispatch => {
	console.log('martID');
	console.log(martID);
	console.log('name');
	console.log(name);
	Axios.post(BASE_URL + '/mart/cms/company-add', {
		company: {
			name: name,
			martId: martID,
		},
	})
		.then(res => {
			console.log('i am in Add Company Response');
			console.log(res.data.company);
			const state = {
				type: ADD_COMPANIE,
				payload: res.data.company,
			};
			dispatch(state);
		})
		.catch(err => {
			console.log('err in load all products ' + JSON.stringify(err.data));
		});
};
