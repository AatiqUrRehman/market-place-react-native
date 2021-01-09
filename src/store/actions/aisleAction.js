import Axios from 'axios';
import { Alert } from 'react-native';
import { LOAD_ALL_AISLE, ADD_AISLE } from '../../store/actions/types';
import { BASE_URL } from '../../config/proxy';

export const Load_All_Aisle = martID => dispatch => {
	console.log('martID in load all aisle action');
	console.log(martID);
	Axios.post(BASE_URL + '/mart/cms/aisle-get-where', {
		martId: martID,
	})
		.then(res => {
			console.log('i am in respone of Load Aisle action');
			console.log(JSON.stringify(res.data));
			const state = {
				type: LOAD_ALL_AISLE,
				payload: res.data.aisles,
			};
			dispatch(state);
		})
		.catch(err => {
			console.log('err' + JSON.stringify(err.data));
		});
};

export const Add_Aisle = (name, martID) => dispatch => {
	console.log('martID');
	console.log(martID);
	console.log('name');
	console.log(name);
	Axios.post(BASE_URL + '/mart/cms/aisle-add', {
		aisle: {
			name: name,
			martId: martID,
		},
	})
		.then(res => {
			console.log('i am in Add Aisle Response');
			console.log(res.data.aisle);
			const state = {
				type: ADD_AISLE,
				payload: res.data.aisle,
			};
			dispatch(state);
		})
		.catch(err => {
			console.log('err in load all products ' + JSON.stringify(err.data));
		});
};
