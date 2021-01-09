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
				{this.state.flag === true ? (
					<View style={styles.afterClickedProductTotalViewStyle}>
						<View style={{ height: 25 }} />
						<View style={styles.picViewStyle}>
							<Image
								source={{ uri: 'https://facebook.github.io/react/logo-og.png' }}
								style={styles.imageStyle}
							/>
						</View>
						<View style={styles.productNameViewStyle}>
							<Text style={styles.productNameTextStyle}>Sugar</Text>
						</View>
						<View style={styles.productPriceViewStyle}>
							<Text style={styles.productPriceTextStyle}>2.05 L</Text>
						</View>

						<TouchableOpacity onPress={() => this.toggleFlag()}>
							<View style={styles.afterClickedAddToCartViewStyle}>
								<Text style={{ color: 'white', fontSize: 12, fontWeight: 'bold' }}>ADD TO CART</Text>
							</View>
						</TouchableOpacity>
					</View>
				) : (
					<View style={styles.productTotalViewStyle}>
						<View style={{ height: 25 }} />
						<View style={styles.picViewStyle}>
							<Image
								source={{ uri: 'https://facebook.github.io/react/logo-og.png' }}
								style={styles.imageStyle}
							/>
						</View>
						<View style={styles.productNameViewStyle}>
							<Text style={styles.productNameTextStyle}>Sugar</Text>
						</View>
						<View style={styles.productPriceViewStyle}>
							<Text style={styles.productPriceTextStyle}>2.05 L</Text>
						</View>
						<TouchableOpacity>
							<View style={styles.addToCartViewStyle}></View>
						</TouchableOpacity>
					</View>
				)}
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
	productPriceTextStyle: {
		color: GREEN_COLOR,
		fontSize: 15,
		fontWeight: 'bold',
		alignSelf: 'flex-start',
		marginLeft: 5,
	},
	addToCartViewStyle: {
		height: 30,
		backgroundColor: 'white',
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
