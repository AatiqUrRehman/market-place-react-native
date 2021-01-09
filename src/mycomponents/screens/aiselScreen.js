import React from 'react';
import { View, ScrollView } from 'react-native';
import AllAisel from '../aisel/allAisel';
import Footerr from '../footer/footerButton';
import Tabs from '../orders/tabsDispachedOrders';
import Header from '../header/header';
import { Container, Footer, Content } from 'native-base';

export default class AiselScreen extends React.Component {
	static navigationOptions = ({ navigation }) => {
		return {
			header: <Header backButton={true} text={'Todos los Pasillos'} navigation={navigation} />,
		};
	};
	render() {
		return (
			// <Container style={{ flex: 1 }}>
			// 	<Content>
			// 		<AllAisel navigation={this.props.navigation} />
			// 	</Content>
			// 	<Footerr text={'ADD Aisel'} navigation={this.props.navigation} aisel={true} />
			// </Container>

			<View style={{ flex: 1 }}>
				<View style={{ flex: 13 }}>
					<AllAisel navigation={this.props.navigation} />
				</View>
				<View style={{ flex: 2 }}>
					<Footerr text={'AGREGAR PASILLO'} navigation={this.props.navigation} aisel={true} />
				</View>
			</View>
		);
	}
}
