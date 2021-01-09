import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { Button, Item, Label, Input } from 'native-base';
import { GREEN_COLOR, VIEW_BACKGROUND_COLOR, COMPONENT_BACKGROUND_COLOR } from '../../theme/colors';
import ImagePicker from 'react-native-image-picker';
import { connect } from 'react-redux';
import { Add_Aisle } from '../../store/actions/aisleAction';

const options = {
	title: 'Image',
	takePhotoButtonTitle: 'Take photo with your camera',
	chooseFromLibraryButtonTitle: 'Choose photo from library',
};

class Aisel extends Component {
	constructor(props) {
		super(props);
		this.state = {
			avatarSource: null,
			aisleName: '',
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
				<View style={{ backgroundColor: COMPONENT_BACKGROUND_COLOR, height: 200, width: '80%' }}>
					{/* <View
            style={{
              height: 100,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Image
              source={{ uri: "https://facebook.github.io/react/logo-og.png" }}
              style={styles.imageStyle}
            />
          </View> */}

					{/* <View
            style={{
              height: 50,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <View
              style={{
                height: 40,
                backgroundColor: GREEN_COLOR,
                width: 120,
                borderRadius: 5,
                alignSelf: "center",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <TouchableOpacity onPress={this.myfun}>
                <Text
                  style={{
                    color: "#fff",
                    alignSelf: "center",
                    fontWeight: "bold"
                  }}
                >
                  Upload Picture
                </Text>
              </TouchableOpacity>
            </View>
          </View> */}

					<View
						style={{
							height: 80,
							justifyContent: 'center',
							alignItems: 'center',
						}}
					>
						<Item floatingLabel last style={{ width: '90%' }}>
							<Label>Nombre de Pasillos</Label>
							<Input onChangeText={t => this.setState({ aisleName: t })} />
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
							onPress={() => this.props.Add_Aisle(this.state.aisleName, this.props.CurrentSuperMart._id)}
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
									AGREGAR
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
		backgroundColor: VIEW_BACKGROUND_COLOR,
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
	{ Add_Aisle }
)(Aisel);
