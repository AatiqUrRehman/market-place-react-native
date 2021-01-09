import React from 'react';
import { View, ScrollView } from 'react-native';
import AddCatagory from '../AddItems/addCatagory';
import Footerr from '../footer/footerButton';
import Tabs from '../orders/tabsDispachedOrders';
import Header from '../header/header';
import { Container, Footer, Content } from 'native-base';

export default class AddCatagoryScreen extends React.Component {
	static navigationOptions = ({ navigation }) => {
		return {
			header: <Header backButton={true} text={'Agregar Categoria'} navigation={navigation} isIcon={true} />,
		};
	};
	render() {
		return (
			<Container style={{ flex: 1, paddingTop: '40%' }}>
				<Content>
					<AddCatagory navigation={this.props.navigation} />
				</Content>
			</Container>
		);
	}
}
