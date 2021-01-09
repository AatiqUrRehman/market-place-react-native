import React from 'react';
import { View, ScrollView } from 'react-native';
import AddCompany from '../AddItems/addCompany';
import Footerr from '../footer/footerButton';
import Tabs from '../orders/tabsDispachedOrders';
import Header from '../header/header';
import { Container, Footer, Content } from 'native-base';

export default class AddCompanyScreen extends React.Component {
	static navigationOptions = ({ navigation }) => {
		return {
			header: <Header backButton={true} text={'Agregar Empresa'} navigation={navigation} />,
		};
	};
	render() {
		return <AddCompany navigation={this.props.navigation} />;
	}
}
