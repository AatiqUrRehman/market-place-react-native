import Axios from 'axios';
import { Alert } from 'react-native';
import { LOAD_ALL_CATAGORIES, LOAD_ALL_PRODUCTS, ADD_CATAGORY, ADD_PRODUCT } from '../../store/actions/types';
import { BASE_URL, createFormData } from '../../config/proxy';
import { Platform } from 'react-native';

export const Load_All_Catagories = catagoryID => dispatch => {
	Axios.post(BASE_URL + '/mart/cms/catagory-get-where', {
		martId: catagoryID,
	})
		.then(res => {
			// console.log(res.data.success);
			const state = {
				type: LOAD_ALL_CATAGORIES,
				payload: res.data.catagories,
			};
			dispatch(state);
		})
		.catch(err => {
			console.log('err' + JSON.stringify(err.data));
		});
};

export const Load_All_Products = catagoryID => dispatch => {
	console.log('LOAD_PRODUCT_ID');
	console.log(catagoryID);
	Axios.post(BASE_URL + '/mart/products/get-where-catagory', {
		product: {
			catagoryId: catagoryID,
		},
	})
		.then(res => {
			console.log('i am in LOAD_ALL_PRODUCT_ACTION');
			console.log(JSON.stringify(res.data));
			const state = {
				type: LOAD_ALL_PRODUCTS,
				payload: { products: res.data.products, _id: catagoryID },
			};
			dispatch(state);
		})
		.catch(err => {
			console.log('err in load all products ' + JSON.stringify(err.data));
		});
};

export const Add_Catagory = (name, martID) => dispatch => {
	console.log('martID');
	console.log(martID);
	Axios.post(BASE_URL + '/mart/cms/catagory-add', {
		catagory: {
			name: name,
			martId: martID,
		},
	})
		.then(res => {
			console.log('i am in Add Catagroy Response');
			console.log(res.data.catagory);
			const state = {
				type: ADD_CATAGORY,
				payload: res.data.catagory,
			};
			dispatch(state);
		})
		.catch(err => {
			console.log('err in load all products ' + JSON.stringify(err.data));
		});
};

export const Add_Product = (name, martID) => dispatch => {
	console.log('martID');
	console.log(martID);
	Axios.post(BASE_URL + '/mart/products/add', {
		product: {
			name: name,
			martId: martID,
		},
	})
		.then(res => {
			console.log('i am in Add product Response');
			console.log(res.data.catagory);
			const state = {
				type: ADD_CATAGORY,
				payload: res.data.catagory,
			};
			dispatch(state);
		})
		.catch(err => {
			console.log('err in load all products ' + JSON.stringify(err.data));
		});
};

export const addProductAction = (photo, p) => dispatch => {
	console.log('PICTURES : DaTA');

	// console.log(createFormData(picture, 'productImage', { product: product }));
	// const config = { headers: { 'Content-Type': 'multipart/form-data' } };
	const data = new FormData();
	data.append('productImage', {
		type: photo.mime,
		size: photo.size,
		name: photo.uri.replace(/^.*[\\\/]/, ''),
		filename: photo.uri.replace(/^.*[\\\/]/, ''),
		width: photo.width,
		height: photo.height,
		uri: Platform.OS === 'android' ? photo.uri : photo.uri.replace('file://', ''),
	});
	data.append('name', 'SALU');
	// body: createFormData(picture, 'productImage', {
	// 	name: p.name,
	// 	price: p.price,
	// 	sizeId: p.sizeId,
	// 	uomId: p.uomId,
	// 	availableQuantity: p.availableQuantity,
	// 	status: p.state,
	// 	aisleId: p.aisleId,
	// 	catagoryId: p.catagoryId,
	// 	companyId: p.companyId,
	// 	description: p.description,
	// }),
	// fetch(BASE_URL + '/mart/products/add', {
	// 	method: 'POST',
	// 	body: data,
	// })
	let mData = new FormData();
	mData.append('productImage', photo);
	fetch(BASE_URL + '/mart/products/add', {
		method: 'POST',
		body: data,
	})
		.then(res => {
			console.log('RESPONSE: API');
			console.log(res);
			dispatch({
				type: ADD_PRODUCT,
				payload: res.data,
			});
		})
		.catch(err => {
			console.log('ERROR IN APPLICATION');
			console.log(err);
		});
	// dispatch({ type });
	// Axios.post(BASE_URL + '/mart/products/add', createFormData(picture, 'productImage', { product: product }), config)
	// 	.then(res => {
	// 		const state = {
	// 			type: ADD_PRODUCT,
	// 			payload: res.data,
	// 		};
	// 		dispatch(state);
	// 	})
	// 	.catch(err => {
	// 		console.log(err);
	// 		console.log('Error in Application ');
	// 	});
};
