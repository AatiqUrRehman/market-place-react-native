import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import SingleProduct from './singleAiselProduct';
import { GREY_COLOR, ORANGE_COLOR } from '../../theme/colors';

class SingleBadge extends Component {
	render() {
		return (
			<View style={{ justifyContent: 'center', alignItems: 'center' }}>
				<View style={styles.totalViewStyle}>
					<View style={styles.upperViewStyle}>
						<View style={styles.textViewStyle}>
							<Text style={styles.textStyle}>Aisel</Text>
						</View>
						<View style={styles.buttonViewStyle}>
							<TouchableOpacity>
								<View style={styles.buttonStyle}>
									<Text style={styles.buttonTextStyle}>Ver Mas</Text>
								</View>
							</TouchableOpacity>
						</View>
					</View>
					<View style={styles.lowerViewStyle}>
						<ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
							<SingleProduct />
							<SingleProduct />
							<SingleProduct />
							<SingleProduct />
						</ScrollView>
					</View>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	totalViewStyle: {
		height: 250,
		width: '90%',
		borderRadius: 10,
		backgroundColor: '#F0F0F0',
		marginTop: 10,
	},
	upperViewStyle: {
		height: 50,
		flexDirection: 'row',
	},
	textViewStyle: {
		flex: 3,
		justifyContent: 'center',
		alignItems: 'center',
	},
	textStyle: {
		alignSelf: 'flex-start',
	},
	buttonViewStyle: {
		flex: 1.5,
		justifyContent: 'center',
		alignItems: 'center',
	},
	buttonStyle: {
		backgroundColor: ORANGE_COLOR,
		width: 80,
		height: 25,
		borderRadius: 20,
		alignSelf: 'center',
		justifyContent: 'center',
		alignItems: 'center',
	},
	buttonTextStyle: { alignSelf: 'center', fontSize: 12, color: 'white' },
	lowerViewStyle: {
		height: 200,
		flexDirection: 'row',
		justifyContent: 'flex-end',
		alignItems: 'center',
	},
});

export default SingleBadge;
