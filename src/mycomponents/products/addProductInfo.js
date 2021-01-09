import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { GREEN_COLOR } from '../../theme/colors';
import { Container, Text, Footer } from 'native-base';
import InputField from './inputField';
import InputFieldPicker from './inPutPickerField';
import ImageCropPicker from 'react-native-image-crop-picker';
import { addProductAction } from '../../store/actions/catagoryAction';
import { connect } from 'react-redux';
import MyProducts from '../../businessLoginLayer/MyProducts';

import Footerr from '../footer/footerButton';

const options = {
	title: 'Image',
	takePhotoButtonTitle: 'Take photo with your camera',
	chooseFromLibraryButtonTitle: 'Choose photo from library',
};

class AddProduct extends Component {
	constructor(props) {
		super(props);
		this.state = {
			avatarSource: null,
			avatarSource0: null,
			selected2: undefined,
			catagoryId: 'asdf',
			aisleId: 'sdfsdf',
			uomId: 'sdf',
			sizeId: 'sdfsdf',
			companyId: 'sdfsdf',
			name: 'sdfsd',
			uomId: 'sdfsdf',
			quantity: 0,
			price: 0,
			description: '',
			unitQuantity: 0, ///
			totalAvailableQuantity: 0,
			status: 'sdfsdfsdf',
			myProduct: new MyProducts(),
		};
	}

	handelAddProduct = () => {
		this.state.myProduct.setParams(
			this.state.name,
			this.state.price,
			this.state.sizeId,
			this.state.uomId,
			this.state.totalAvailableQuantity,
			this.state.unitQuantity,
			this.state.status,
			this.state.aisleId,
			this.state.catagoryId,
			this.state.companyId,
			this.state.description
		);
		this.props.addProductAction(this.state.avatarSource, this.state.myProduct);
	};
	myfun = () => {
		ImageCropPicker.openPicker({
			width: 400,
			height: 200,
			cropping: true,
		}).then(image => {
			console.log(image);
			let imgSource = {
				uri: image.path,
				type: image.mime,
				name: image.path.replace(/^.*[\\\/]/, ''),
			};

			this.setState({ avatarSource: imgSource });
			this.setState({ avatarSource: imgSource0 });
		});
		// ImagePicker.showImagePicker(options, response => {
		// 	console.log('Response = ', response);

		// 	if (response.didCancel) {
		// 		console.log('User cancelled image picker');
		// 	} else if (response.error) {
		// 		console.log('Image Picker Error: ', response.error);
		// 	} else {
		// 		let source = { uri: response.uri };

		// 		this.setState({
		// 			avatarSource: source,
		// 			pic: response.data,
		// 		});
		// 	}
		// });
	};

	render() {
		return (
			<Container>
				<ScrollView>
					<View
						style={{
							height: 130,
							justifyContent: 'center',
							alignItems: 'center',
						}}
					>
						<Image
							source={this.state.avatarSource ? this.state.avatarSource : { uri: '' }}
							style={styles.imageStyle}
						/>
					</View>
					<View
						style={{
							height: 50,
							justifyContent: 'center',
							alignItems: 'center',
						}}
						a
					>
						<View
							style={{
								height: 40,
								backgroundColor: GREEN_COLOR,
								width: 120,
								borderRadius: 5,
								alignSelf: 'center',
								justifyContent: 'center',
								alignItems: 'center',
							}}
						>
							<TouchableOpacity onPress={this.myfun}>
								<Text
									style={{
										color: '#fff',
										alignSelf: 'center',
										fontWeight: 'bold',
									}}
								>
									Agregar Foto
								</Text>
							</TouchableOpacity>
						</View>
					</View>

					<View>
						<InputField
							onChangeValue={text => {
								this.setState({ name: text });
							}}
							text={'Nombre'}
						/>
						<InputField
							onChangeValue={text => {
								this.setState({ quantity: text });
							}}
							text={'Cantidad'}
						/>
						<InputField
							text={'Cantidad unitaria'}
							onChangeValue={text => {
								this.setState({ unitQuantity: text });
							}}
						/>
						<InputField
							text={'cantidad total disponible'}
							onChangeValue={text => {
								this.setState({ totalAvailableQuantity: text });
							}}
						/>
						<InputField
							text={'Precio'}
							onChangeValue={text => {
								this.setState({ price: text });
							}}
						/>
						<InputField
							text={'Descripción'}
							onChangeValue={text => {
								this.setState({ description: text });
							}}
						/>
						<InputFieldPicker
							onValueChange={obj => {
								this.setState({ sizeId: obj });
							}}
							text={'elige talla'}
							List={this.props.MySizes}
						/>
						<InputFieldPicker
							onValueChange={obj => {
								this.setState({ uomId: obj });
							}}
							text={'elegir unidad de medida'}
							List={this.props.Myuom}
						/>
						<InputFieldPicker
							onValueChange={obj => {
								this.setState({ catagoryId: obj });
							}}
							text={'elegir la categoría'}
							List={this.props.MySuperMartCatagories}
						/>
						<InputFieldPicker
							onValueChange={obj => {
								this.setState({ companyId: obj });
							}}
							text={'elegir empresa'}
							List={this.props.MyCompanies}
						/>
						<InputFieldPicker
							onValueChange={obj => {
								this.setState({ aisleId: obj });
							}}
							text={'elegir pasillo'}
							List={this.props.MyAisleList}
						/>
						<InputFieldPicker
							onValueChange={obj => {
								this.setState({ status: obj });
							}}
							text={'estado activo'}
							List={[{ _id: 1, name: 'active' }, { _id: 0, name: 'deactive' }]}
						/>
						{/* <InputField text={'choose aisel'} /> */}
					</View>

					{/* <View
						style={{
							height: 60,
							justifyContent: 'center',
							alignItems: 'center',
						}}
					>
						<Button success style={styles.buttonViewStyle}>
							<Text style={{ alignSelf: 'center' }}>Add Company</Text>
						</Button>
					</View> */}
				</ScrollView>

				<Footerr
					text={'AGREGAR'}
					onAddProduct={() => this.handelAddProduct()}
					addProduct={true}
					navigation={this.props.navigation}
				/>
			</Container>
		);
	}
}

const styles = StyleSheet.create({
	imageStyle: {
		width: '80%',
		height: 120,
		borderRadius: 10,
		backgroundColor: GREEN_COLOR,
	},
	buttonViewStyle: {
		alignSelf: 'center',
		justifyContent: 'center',
		alignItems: 'center',
		width: '60%',
		backgroundColor: GREEN_COLOR,
	},
});

const mapStateToProps = state => ({
	MySuperMartCatagories: state.CatagoryReducer.superMartCatagories,
	MyAisleList: state.AisleReducer.MyAisleList,
	MyCompanies: state.CompanyReducer.MyCompanies,
	Myuom: state.LoadMeasurePointReducer.loadUOM,
	MySizes: state.LoadMeasurePointReducer.loadSize,
});

export default connect(
	mapStateToProps,
	{ addProductAction }
)(AddProduct);
