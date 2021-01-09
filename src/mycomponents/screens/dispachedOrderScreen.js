import React from 'react';
import { View, ScrollView } from 'react-native';
import Orders from '../orders/OrderTrackComponent';
import Footerr from '../footer/footer';
import Tabs from '../orders/tabsDispachedOrders';
import Header from '../header/header';
import { Container, Footer, Content } from 'native-base';

export default class OrderScreen extends React.Component {
	static navigationOptions = ({ navigation }) => {
		return {
			header: null,
		};
	};
	render() {
		return (
			<Container style={{ flex: 1 }}>
				<Tabs />
				<Content>
					<Orders navigation={this.props.navigation} />
					<Orders navigation={this.props.navigation} />
				</Content>
				<Footerr navigation={this.props.navigation} />
			</Container>
		);
	}
}
