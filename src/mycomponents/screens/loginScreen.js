import React from 'react';
import { View, ScrollView, ImageBackground } from 'react-native';
import Login from '../loginSignup/login';
import Footerr from '../footer/footer';
import Header from '../header/header';
import { Container, Footer, Content } from 'native-base';

export default class LoginScreen extends React.Component {
	static navigationOptions = ({ navigation }) => {
		return {
			header: null,
		};
	};
	render() {
		return (
			<Container style={{ flex: 1 }}>
				<Login navigation={this.props.navigation} />
			</Container>
		);
	}
}
