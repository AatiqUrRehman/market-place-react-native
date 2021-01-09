import React from 'react';
import { View, ScrollView, ImageBackground } from 'react-native';
import SignUp from '../loginSignup/signup';
import Footerr from '../footer/footer';
import Tabs from '../orders/tabsDispachedOrders';
import Header from '../header/header';
import { Container, Footer, Content } from 'native-base';

export default class signupScreen extends React.Component {
	static navigationOptions = ({ navigation }) => {
		return {
			header: null,
		};
	};
	render() {
		return (
			<Container style={{ flex: 1 }}>
				<SignUp navigation={this.props.navigation} />
			</Container>
		);
	}
}
