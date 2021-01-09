import React from 'react';
import { View, ScrollView } from 'react-native';
import AllCompanies from '../companiesHomePage/allCompaniesHomePage';
import Footerr from '../footer/footerButton';
import Tabs from '../orders/tabsDispachedOrders';
import Header from '../header/header';
import { Container, Footer, Content } from 'native-base';

export default class CompanyiesScreen extends React.Component {
	static navigationOptions = ({ navigation }) => {
		return {
			header: <Header backButton={true} text={'Principal Empresas'} navigation={navigation} />,
		};
	};
	render() {
		return (
			<Container style={{ flex: 1 }}>
				<Content>
					<AllCompanies navigation={this.props.navigation} />
				</Content>
				<Footerr text={'Agregar Empresa'} companies={true} navigation={this.props.navigation} />
			</Container>
		);
	}
}
