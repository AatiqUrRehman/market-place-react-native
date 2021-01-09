import React from 'react';
import { View, ScrollView } from 'react-native';
import AddProduct from '../products/addProductInfo';
import Footerr from '../footer/footerButton';
import Tabs from '../orders/tabsDispachedOrders';
import Header from '../header/header';
import { Container, Footer, Content } from 'native-base';
import MyProducts from '../../businessLoginLayer/MyProducts';

export default class AddProductScreen extends React.Component {
	static navigationOptions = ({ navigation }) => {
		return {
			header: <Header backButton={true} text={'Add Product'} navigation={navigation} />,
		};
	};

	render() {
		return (
			// <View style={{ flex: 1 }}>
			<View style={{ flex: 1 }}>
				<AddProduct navigation={this.props.navigation} />
			</View>
			// {/* <View style={{ flex: 2 }}>

			// </View> */}
			// </View>
			// <Container style={{ flex: 1 }}>
			// 	<Content>
			//
			// 	</Content>
			//
			// </Container>
		);
	}
}
