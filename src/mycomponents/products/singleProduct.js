import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { ORANGE_COLOR, GREEN_COLOR } from '../../theme/colors';

class SingleProduct extends Component {
	state = {
		flag: false,
	};

	toggleFlag() {
		this.setState({ flag: !this.state.flag });
	}

	render() {
		return (
			<View>
				<View style={styles.productTotalViewStyle}>
					<View style={{ height: 25 }} />
					<View style={styles.picViewStyle}>
						<Image
							source={{ uri: 'https://facebook.github.io/react/logo-og.png' }}
							style={styles.imageStyle}
						/>
					</View>
					<View style={styles.productNameViewStyle}>
						<Text style={styles.productNameTextStyle}>
							{this.props.item.name ? this.props.item.name : ''}
						</Text>
					</View>
					<View style={styles.productPriceViewStyle}>
						<Text style={styles.productPriceTextStyle}>
							<Text>2 </Text>
							{this.props.item.uom.name ? this.props.item.uom.name : ''}
						</Text>
					</View>
					<View style={styles.productPriceViewStyle1}>
						<Text style={styles.productPriceTextStyle}>
							{this.props.item.price ? this.props.item.price : ''}
							<Text> L</Text>
						</Text>
					</View>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	productTotalViewStyle: {
		height: 175,
		width: 120,
		borderBottomLeftRadius: 20,
		borderBottomRightRadius: 20,
		marginRight: 10,
	},
	afterClickedProductTotalViewStyle: {
		height: 190,
		width: 120,
		borderBottomLeftRadius: 20,
		borderBottomRightRadius: 20,
		marginRight: 10,
	},
	picViewStyle: {
		height: 80,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'white',
	},
	imageStyle: {
		width: 90,
		height: 100,
		marginTop: -60,
	},
	productNameViewStyle: {
		height: 20,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'white',
	},
	productNameTextStyle: {
		color: 'black',
		fontSize: 12,
		fontWeight: 'bold',
		alignSelf: 'flex-start',
		marginLeft: 5,
	},
	productPriceViewStyle: {
		height: 20,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'white',
	},
	productPriceViewStyle1: {
		height: 20,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'white',
		borderBottomLeftRadius: 20,
		borderBottomRightRadius: 20,
		marginBottom: 5,
	},
	productPriceTextStyle: {
		color: GREEN_COLOR,
		fontSize: 15,
		fontWeight: 'bold',
		alignSelf: 'flex-start',
		marginLeft: 5,
	},
	addToCartViewStyle: {
		height: 30,
		backgroundColor: '#ffffff',
		borderBottomLeftRadius: 20,
		borderBottomRightRadius: 20,
		justifyContent: 'center',
		alignItems: 'center',
	},
	afterClickedAddToCartViewStyle: {
		height: 40,
		backgroundColor: GREEN_COLOR,
		borderBottomLeftRadius: 20,
		borderBottomRightRadius: 20,
		justifyContent: 'center',
		alignItems: 'center',
	},
});

export default SingleProduct;
