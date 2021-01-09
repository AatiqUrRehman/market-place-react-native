import React, { Component } from 'react';
import {
	Container,
	Content,
	View,
	Footer,
	List,
	ListItem,
	Left,
	Right,
	FooterTab,
	Form,
	Button,
	Icon,
	Text,
	Picker,
	Body,
} from 'native-base';
import { ImageBackground, StyleSheet } from 'react-native';

import { GREEN_COLOR, GREY_COLOR } from '../../theme/colors';

export default class CartViewFooter extends Component {
	render() {
		return (
			<Container>
				<Content>
					<ImageBackground
						resizeMode="stretch"
						source={{
							uri:
								'https://www.gravity.ski/media/catalog/product/cache/1/image/2000x/9df78eab33525d08d6e5fb8d27136e95/m/s/ms15-a12-21800_main_front.jpg',
						}}
						style={styles.BackgroundImage}
					>
						<View style={styles.IconView}>
							<Left>
								<Icon name="arrow-left" />
							</Left>
							<Body />
							<Right>
								<Icon name="cart" />
							</Right>
						</View>
					</ImageBackground>

					<View style={styles.flex}>
						<Text style={styles.ProductName}>Nike Dri-Fit Long Sleeve</Text>
					</View>
					<View style={{ flex: 1, flexDirection: 'row' }}>
						<View style={styles.flex}>
							<Button transparent style={styles.DropDownButtons}>
								<Text style={{ color: 'black' }}>Size</Text>
							</Button>
						</View>
						<View style={styles.flex}>
							<Button transparent style={styles.DropDownButtons}>
								<Text style={{ color: 'black' }}>Color</Text>
							</Button>
						</View>
					</View>
					<View style={styles.flex}>
						<Text style={styles.DetailsText}>Details</Text>
					</View>
					<View style={styles.flex}>
						<Text style={styles.ProductDetail}>
							Nike Dri-Fit is a polyister fabric designed to help you keep so you cofertably work harder
						</Text>
					</View>
				</Content>
				<Footer style={styles.Footer}>
					<FooterTab>
						<Content>
							<List>
								<ListItem avatar>
									<View style={styles.CheckOutBlock}>
										<View style={styles.TotalPriceCheckOut}>
											<Left>
												<Text>Total</Text>

												<Text
													note
													numberOfLines={1}
													style={{ color: GREEN_COLOR, fontSize: 18 }}
												>
													$ 1100
												</Text>
											</Left>
										</View>
										<View style={styles.CheckOutButtonView}>
											<Right>
												<Button
													style={{
														backgroundColor: GREEN_COLOR,
													}}
												>
													<Text style={styles.CheckOutText}>CheckOut</Text>
												</Button>
											</Right>
										</View>
									</View>
								</ListItem>
							</List>
						</Content>
					</FooterTab>
				</Footer>
			</Container>
		);
	}
}
const styles = StyleSheet.create({
	Footer: {
		backgroundColor: 'white',
	},
	ProductName: {
		fontSize: 25,
		padding: 20,
		fontWeight: 'bold',
	},
	CheckOutBlock: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	TotalPriceCheckOut: {
		flex: 2,
		marginTop: 13,
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	CheckOutText: {
		alignSelf: 'center',
	},
	CheckOutButtonView: {
		flex: 1,
		marginTop: 13,
	},
	BackgroundImage: {
		borderWidth: 2,
		borderColor: 'white',
		height: 400,
	},
	DropDownButtons: {
		borderRadius: 20,
		borderWidth: 1,
		borderColor: GREY_COLOR,
		width: '80%',
		height: 40,
		alignSelf: 'center',
	},
	flex: {
		flex: 1,
	},
	ProductDetail: {
		fontSize: 15,
		paddingLeft: 20,
		lineHeight: 25,
	},
	DetailsText: {
		fontWeight: 'bold',
		padding: 10,
		fontSize: 20,
		paddingLeft: 20,
	},
	IconView: {
		paddingTop: 13,
		paddingLeft: 12,
		paddingRight: 12,
		flexDirection: 'row',
		alignItems: 'flex-start',
		justifyContent: 'flex-start',
	},
});
