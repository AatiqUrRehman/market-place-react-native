import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { Button, Item, Label, Input } from 'native-base';
import { GREEN_COLOR } from '../../theme/colors';
import ImagePicker from 'react-native-image-picker';
import { Add_Company } from '../../store/actions/companyAction';
import { connect } from 'react-redux';

const options = {
	title: 'Image',
	takePhotoButtonTitle: 'Take photo with your camera',
	chooseFromLibraryButtonTitle: 'Choose photo from library',
};

class AddCompany extends Component {
	constructor(props) {
		super(props);
		this.state = {
			avatarSource: null,
			companyName: '',
		};
	}

	myfun = () => {
		ImagePicker.showImagePicker(options, response => {
			console.log('Response = ', response);

			if (response.didCancel) {
				console.log('User cancelled image picker');
			} else if (response.error) {
				console.log('Image Picker Error: ', response.error);
			} else {
				let source = { uri: response.uri };

				this.setState({
					avatarSource: source,
					pic: response.data,
				});
			}
		});
	};

	render() {
		return (
			<View style={styles.container}>
				<View style={{ backgroundColor: '#F0F0F0', width: '80%' }}>
					<View
						style={{
							height: 80,
							justifyContent: 'center',
							alignItems: 'center',
						}}
					>
						<Item floatingLabel last style={{ width: '90%' }}>
							<Label>Nombre de la Empresa</Label>
							<Input onChangeText={t => this.setState({ companyName: t })} />
						</Item>
					</View>
					<View
						style={{
							height: 80,
							justifyContent: 'center',
							alignItems: 'center',
						}}
					>
						<TouchableOpacity
							style={{
								backgroundColor: GREEN_COLOR,
								height: 35,
								width: '90%',
								borderRadius: 5,
								marginTop: 30,
								alignItems: 'center',
								justifyContent: 'center',
								alignSelf: 'center',
							}}
							onPress={() =>
								this.props.Add_Company(this.state.companyName, this.props.CurrentSuperMart._id)
							}
						>
							<View>
								<Text
									style={{
										alignSelf: 'center',
										fontWeight: 'bold',
										color: 'white',
										fontSize: 20,
									}}
								>
									Agregar
								</Text>
							</View>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#F5FCFF',
		justifyContent: 'center',
		alignItems: 'center',
	},
	imageStyle: {
		width: 90,
		height: 90,
		borderRadius: 50,
		alignSelf: 'center',
	},
});

const mapStateToProps = state => ({
	CurrentSuperMart: state.AuthReducer.currentSuperMart,
});

export default connect(
	mapStateToProps,
	{ Add_Company }
)(AddCompany);
