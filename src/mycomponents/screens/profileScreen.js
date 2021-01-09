import React from 'react';
import { View, ScrollView } from 'react-native';
import UpdateProfile from '../profileInfo/supermartProfileInfo';
import Footerr from '../footer/footerButton';
import Tabs from '../orders/tabsDispachedOrders';
import Header from '../header/header';
import { Container, Footer, Content } from 'native-base';

export default class ProfileScreen extends React.Component {
	static navigationOptions = ({ navigation }) => {
		return {
			header: <Header backButton={true} text={'Profile'} />,
		};
	};
	render() {
		return (
			<Container style={{ flex: 1 }}>
				<Content>
					<UpdateProfile navigation={this.props.navigation} />
				</Content>
				<Footerr text={'Update'} />
			</Container>
		);
	}
}
