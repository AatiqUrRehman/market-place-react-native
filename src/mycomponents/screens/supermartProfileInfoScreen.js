import React from 'react';
import { View, ScrollView } from 'react-native';
import SupermartProfileInfo from '../profileInfo/supermartProfileInfo';
import Footerr from '../footer/footerButton';
// import Tabs from '../orders/tabsDispachedOrders';
import Header from '../header/header';
import { Container, Footer, Content } from 'native-base';

export default class SuperMartProfileInfoScreen extends React.Component {
	static navigationOptions = ({ navigation }) => {
		return {
			header: <Header backButton={true} text={'Perfil de Supermercado'} navigation={navigation} />,
		};
	};
	render() {
		return (
			<Container style={{ flex: 1 }}>
				<Content>
					<SupermartProfileInfo navigation={this.props.navigation} />
				</Content>
				<Footerr text={'Listo'} navigation={this.props.navigation} Profile={true} />
			</Container>
		);
	}
}
