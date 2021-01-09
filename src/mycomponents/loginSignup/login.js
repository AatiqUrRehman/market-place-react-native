import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, ImageBackground, Image } from 'react-native';
import { Item, Input, Text, Button, Label, Left, Body, Right } from 'native-base';
import { ORANGE_COLOR } from '../../theme/colors';
import { AuthLogin } from '../../store/actions/authAction';
import { connect } from 'react-redux';
import Axios from 'axios';
import { BASE_URL } from '../../config/proxy';

class login extends React.Component {
	state = {
		username: '',
		password: '',
	};
	componentDidMount() {
		this.loginUser('nuisuper', '12345');
	}

	loginUser = (username, password) => {
		Axios.post(BASE_URL + '/mart/auth/login', {
			superMart: {
				username: username,
				password: password,
			},
		})
			.then(res => {
				console.log('response is here ');
				console.log(JSON.stringify(res.data));
				// console.log(JSON.stringify(res.data));
				this.props.AuthLogin(res.data.superMart);
				this.props.navigation.navigate('OrderScreen');
			})
			.catch(err => {
				console.log('ERROR IN user side');
				console.log(JSON.stringify(err.data));
			});
	};

	render() {
		return (
			<ImageBackground
				style={styles.container}
				resizeMode="stretch"
				source={require('../image/Fotografias7.jpg')}
			>
				{/* <View > */}
				<ScrollView>
					<View style={styles.otherInputboxViewStyle}>
						<Left>
							<Image
								resizeMode="stretch"
								source={require('../image/logo.png')}
								style={{
									height: 60,
									width: 60,
									marginLeft: 15,
								}}
							/>
						</Left>
						<Body />
						<Right>
							<Button transparent onPress={() => this.props.navigation.navigate('signupScreen')}>
								<Text style={{ color: 'black' }}>REGISTRATE</Text>
							</Button>
						</Right>
					</View>
					<View style={styles.otherInputboxViewStyle}>
						<Left style={{ marginLeft: 7 }}>
							<Text style={{ fontSize: 30, marginLeft: 10 }}>INICIAR SESION</Text>
						</Left>
					</View>
					<View style={styles.view1}>
						<View style={styles.otherInputboxViewStyle}>
							<Item floatingLabel style={styles.textboxStyle}>
								<Label>nombre de usuario</Label>
								<Input onChangeText={t => this.setState({ username: t })} />
							</Item>
						</View>

						<View style={styles.otherInputboxViewStyle}>
							<Item floatingLabel style={styles.textboxStyle}>
								<Label>Contraseña</Label>
								<Input onChangeText={t => this.setState({ password: t })} />
							</Item>
						</View>

						<View style={styles.otherInputboxViewStyle}>
							<Left style={{ marginLeft: 12 }}>
								<Button
									style={styles.signupButtonStyle}
									onPress={() => {
										console.log('Calling API');
										this.loginUser(this.state.usernamem, this.state.password);
									}}
									rounded
								>
									<Text style={{ alignSelf: 'center', fontSize: 13 }}>INICIAR SESION</Text>
								</Button>
							</Left>
							<Body />
							<Right />
						</View>
						<View style={styles.otherInputboxViewStyle}>
							<Left>
								<Text style={{ alignSelf: 'center' }}>O Iniciar Sesion con</Text>
							</Left>
						</View>
						<View style={{ flex: 1 }}>
							<Button style={styles.FacebookButtonStyle} rounded>
								<Text style={{ alignSelf: 'center', fontSize: 20 }}>Facebook</Text>
							</Button>
						</View>
						<View style={{ flex: 1 }}>
							<Button style={styles.GoogleButtonStyle} rounded>
								<Text style={{ alignSelf: 'center', fontSize: 20 }}>Google</Text>
							</Button>
						</View>
					</View>
				</ScrollView>
				{/* </View> */}
			</ImageBackground>
		);
	}
}

const styles = StyleSheet.create({
	backgroundImage: {
		flex: 1,
		// remove width and height to override fixed static size
		width: null,
		height: null,
	},
	container: {
		flex: 1,
		// backgroundColor: 'white',
		// backgroundImage: uri''
	},
	view1: {
		// backgroundColor: 'white',
	},
	firstInputboxViewStyle: {
		marginTop: 50,
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
	},
	NameboxStyle: {
		width: '90%',
		alignSelf: 'center',
		// backgroundColor: 'white',
		borderColor: '#DC1D47',
	},
	textboxStyle: {
		marginLeft: 15,
		marginRight: 15,
		width: '94%',
		alignSelf: 'center',
		// backgroundColor: 'white',
		borderColor: '#DC1D47',
	},
	otherInputboxViewStyle: {
		marginTop: 15,
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
		borderColor: '#DC1D47',
		flexDirection: 'row',
	},
	buttonViewStyle: {
		marginTop: 30,
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
	},
	signupButtonStyle: {
		alignSelf: 'center',

		width: 130,
		backgroundColor: ORANGE_COLOR,
		height: 42,
		marginLeft: 17,
		justifyContent: 'center',
		alignItems: 'center',
	},
	view2: {
		// backgroundColor: '#f5f5f5',
	},

	lastlineTextViewStyle: {
		marginTop: 10,
		justifyContent: 'center',
		alignItems: 'center',
		height: 50,
	},
	GoogleButtonStyle: {
		marginTop: 20,
		width: '60%',
		marginLeft: '21%',
		justifyContent: 'center',
		alignItems: 'center',
		height: 50,
		// borderWidth: 1,
		backgroundColor: ORANGE_COLOR,
	},
	FacebookButtonStyle: {
		width: '60%',
		marginLeft: '21%',
		// borderWidth: 1,
		borderColor: '#4267b2',
		marginTop: 20,
		justifyContent: 'center',
		alignItems: 'center',
		height: 50,
		backgroundColor: '#4267b2',
	},

	SocilaMediaButtons: {
		marginTop: 15,
		justifyContent: 'flex-end',
		alignItems: 'flex-end',
		borderColor: '#DC1D47',
		flexDirection: 'row',
	},
});

export default connect(
	null,
	{
		AuthLogin,
	}
)(login);
