import React from 'react';
import { View, ScrollView, FlatList } from 'react-native';
import AllProductList from '../products/allProductLiast';
import Footerr from '../footer/footerButton';
import Tabs from '../orders/tabsDispachedOrders';
import Header from '../header/header';
import { Container, Footer, Content } from 'native-base';
import { connect } from 'react-redux';
import { Load_All_Products } from '../../store/actions/catagoryAction';

class ProductListScreen extends React.Component {
	componentDidMount() {
		console.log('i am in did mount');
		const { navigation } = this.props;

		console.log(JSON.stringify(this.props.AllProducts.productList));
	}

	static navigationOptions = ({ navigation }) => {
		return {
			header: <Header backButton={true} text={'Productos'} navigation={navigation} />,
		};
	};

	state = {
		catagory: {
			productList: [],
		},
	};
	render() {
		return (
			<Container style={{ flex: 1, backgroundColor: '#F0F0F0' }}>
				<Content>
					<FlatList
						style={{ flex: 1 }}
						data={this.props.AllProducts.productList}
						renderItem={({ item }) => (
							<AllProductList key={item._id} navigation={this.props.navigation} item={item} />
						)}
						numColumns={2}
					/>
				</Content>

				<Footerr text={'Agregar Producto'} navigation={this.props.navigation} product={true} />
			</Container>
		);
	}
}

const mapStateToProps = state => ({
	AllProducts: state.CatagoryReducer.currentCatagory,
});

export default connect(
	mapStateToProps,
	{ Load_All_Products }
)(ProductListScreen);
