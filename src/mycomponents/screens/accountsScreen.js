import React from 'react';
import { View, ScrollView } from 'react-native';
import Accounts from '../drawer/Accounts';
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
				<Content>
					<Accounts navigation={this.props.navigation} />
				</Content>
				<Footerr navigation={this.props.navigation} />
			</Container>
		);
	}
}
