export const BASE_URL = '';
import { Platform } from 'react-native';

export const createFormData = (photo, photoKey, body) => {
	let data = new FormData();
	console.log('PHOTO');

	data.append(photoKey, {
		type: photo.mime,
		size: photo.size,
		name: photo.uri.replace(/^.*[\\\/]/, ''),
		filename: photo.uri.replace(/^.*[\\\/]/, ''),
		width: photo.width,
		height: photo.height,
		uri: Platform.OS === 'android' ? photo.uri : photo.uri.replace('file://', ''),
	});
	data.append(photoKey, photo);
	Object.keys(body).forEach(key => {
		data.append(key, body[key]);
	});

	return data;
};
