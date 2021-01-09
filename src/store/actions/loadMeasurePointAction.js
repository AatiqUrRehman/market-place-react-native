import Axios from 'axios';
import { Alert } from 'react-native';
import { LOAD_SIZES, LOAD_UOM } from '../../store/actions/types';
import { BASE_URL } from '../../config/proxy';

export const Load_All_Sizes = PType => dispatch => {
	Axios.post(BASE_URL + '/admin/product-size/get-all-where', {
		size: {
			pType: PType,
		},
	})
		.then(res => {
			const state = {
				type: LOAD_SIZES,
				payload: res.data.size,
			};
			dispatch(state);
		})
		.catch(err => {
			console.log('err in load all sizes action ' + JSON.stringify(err.data));
		});
};

export const Load_Unit_Of_Measure = () => dispatch => {
	Axios.get(BASE_URL + '/admin/uom/get-all')
		.then(res => {
			console.log('i am in Add unit of measure action Response');
			console.log(res.data.uom);
			const state = {
				type: LOAD_UOM,
				payload: res.data.uom,
			};
			dispatch(state);
		})
		.catch(err => {
			console.log('err in load unit of measure ' + JSON.stringify(err.data));
		});
};
