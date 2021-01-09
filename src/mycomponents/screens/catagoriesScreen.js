import React from 'react';
import { View, ScrollView } from 'react-native';
import AllCatagories from '../categories/allCategories';
import Footerr from '../footer/footerButton';
import Tabs from '../orders/tabsDispachedOrders';
import Header from '../header/header';
import { Container, Footer, Content } from 'native-base';

export default class CatagoryScreen extends React.Component {
	static navigationOptions = ({ navigation }) => {
		return {
			header: <Header backButton={true} text={'Todas las Categorias'} navigation={navigation} isIcon={true} />,
		};
	};
	render() {
		return (
			<Container style={{ flex: 1 }}>
				<Content>
					<AllCatagories navigation={this.props.navigation} />
				</Content>
				<Footerr text={'Agregar Categoria'} catagories={true} navigation={this.props.navigation} />
			</Container>
		);
	}
}
