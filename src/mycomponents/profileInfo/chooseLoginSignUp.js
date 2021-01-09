import React, { Component } from 'react';
import { StyleSheet, View, ImageBackground, TouchableOpacity, Image, Text } from 'react-native';

export default class ChooseLoginOrSignup extends Component {
	move = () => {
		this.props.navigation.navigate('LoginScreen');
	};

	render() {
		return (
			<View style={styles.container}>
				<ImageBackground resizeMode="stretch" source={require('../image/city.jpg')} style={{ flex: 1 }}>
					<View>
						<Image
							resizeMode="stretch"
							source={require('../image/logo.png')}
							style={{
								height: 55,
								width: 55,
								alignSelf: 'center',
							}}
						/>
					</View>
					<View style={{ height: 130 }}></View>
					<View
						style={{
							height: 40,
							width: '100%',
							alignItems: 'center',
							justifyContent: 'center',
						}}
					>
						<TouchableOpacity
							onPress={() => this.move()}
							style={{
								height: 35,
								width: '35%',
								justifyContent: 'center',
								alignItems: 'center',
								alignSelf: 'center',
								borderRadius: 25,
								backgroundColor: '#6A696E',
							}}
						>
							<View>
								<Text
									style={{
										alignSelf: 'center',
										color: 'white',
										fontSize: 17,
									}}
								>
									Inicia sesion
								</Text>
							</View>
						</TouchableOpacity>
					</View>
					<View
						style={{
							height: 40,
							width: '100%',
							justifyContent: 'center',
							alignItems: 'center',
							marginTop: 10,
						}}
					>
						<TouchableOpacity
							onPress={() => this.props.navigation.navigate('signupScreen')}
							style={{
								height: 35,
								width: '35%',
								justifyContent: 'center',
								alignItems: 'center',
								alignSelf: 'center',
								borderRadius: 25,
								backgroundColor: '#6A696E',
							}}
						>
							<View>
								<Text
									style={{
										alignSelf: 'center',
										color: 'white',
										fontSize: 17,
									}}
								>
									Crear cuenta
								</Text>
							</View>
						</TouchableOpacity>
					</View>
				</ImageBackground>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#F5FCFF',
	},
});
