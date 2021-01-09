import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { GREEN_COLOR } from '../../theme/colors';
import { Container, Header, Left, Body, Button, Icon, Title, Text } from 'native-base';
import InputField from './inputField';
import ImagePicker from 'react-native-image-picker';

const options = {
	title: 'Image',
	takePhotoButtonTitle: 'Take photo with your camera',
	chooseFromLibraryButtonTitle: 'Choose photo from library',
};

class SupermartProfileInfo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			avatarSource: null,
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
							source={{ uri: 'https://facebook.github.io/react/logo-og.png' }}
							style={styles.imageStyle}
						/>
					</View>
					<View
						style={{
							height: 50,
							justifyContent: 'center',
							alignItems: 'center',
						}}
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
									Subir Foto
								</Text>
							</TouchableOpacity>
						</View>
					</View>

					<View style={{ height: 320 }}>
						<InputField text={'Nombre de Supermercado'} />
						<InputField text={'Direccion'} />
						<InputField text={'Localizacion de Super'} />
						<InputField text={'Telefono'} />
					</View>
				</ScrollView>
			</Container>
		);
	}
}

const styles = StyleSheet.create({
	imageStyle: {
		width: '80%',
		height: 120,
		borderRadius: 10,
	},
	buttonViewStyle: {
		alignSelf: 'center',
		justifyContent: 'center',
		alignItems: 'center',
		width: '60%',
		backgroundColor: GREEN_COLOR,
	},
});

export default SupermartProfileInfo;
