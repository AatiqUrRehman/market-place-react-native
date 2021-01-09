import React from 'react';
import { View, ScrollView } from 'react-native';
import AddAisel from '../AddItems/addAisel';
import Footerr from '../footer/footerButton';
import Tabs from '../orders/tabsDispachedOrders';
import Header from '../header/header';
import { Container, Footer, Content } from 'native-base';

export default class AddAiselScreen extends React.Component {
	static navigationOptions = ({ navigation }) => {
		return {
			header: <Header backButton={true} text={'Nombre de Pasillos'} navigation={navigation} />,
		};
	};
	render() {
		return (
			<Container style={{ flex: 1, paddingTop: '40%' }}>
				<Content>
					<AddAisel navigation={this.props.navigation} />
				</Content>
			</Container>
		);
	}
}
