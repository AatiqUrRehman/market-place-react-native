import { BASE_URL } from '../../config/proxy';
import { Alert } from 'react-native';
import { LOGIN } from '../../store/actions/types';
import Axios from 'axios';

export const AuthLogin = user => dispatch => {
	const state = {
		type: LOGIN,
		payload: user,
	};
	dispatch(state);
};

// export const Add_Product = (name, martID) => dispatch => {
// 	console.log('martID');
// 	console.log(martID);
// 	Axios.post(BASE_URL + '/mart/products/add', {
// 		product: {
// 			name: name,
// 			martId: martID,
// 		},
// 	})
// 		.then(res => {
// 			console.log('i am in Add product Response');
// 			console.log(res.data.catagory);
// 			const state = {
// 				type: ADD_CATAGORY,
// 				payload: res.data.catagory,
// 			};
// 			dispatch(state);
// 		})
// 		.catch(err => {
// 			console.log('err in load all products ' + JSON.stringify(err.data));
// 		});
// };
