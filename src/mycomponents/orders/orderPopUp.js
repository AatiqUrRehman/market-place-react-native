import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, Image, Button, ScrollView } from 'react-native';
import { Text, Icon } from 'native-base';
import { ORANGE_COLOR, GREEN_COLOR, GREY_COLOR, COMPONENT_BACKGROUND_COLOR, WHITE_COLOR } from '../../theme/colors';
import OrderLine from './orderLine';

class OrderPopUp extends Component {
	render() {
		return (
			<View key={0} style={styles.container}>
				<ScrollView>
					<View key={1} style={styles.component1}>
						<Text style={{ textAlign: 'center', color: GREEN_COLOR, fontWeight: 'bold', font: 20 }}>
							Order Line Here
						</Text>
					</View>
					<View style={styles.component2}>
						<View style={{ flex: 2.5, alignItems: 'flex-end' }}>
							<Text>Tax :</Text>
						</View>
						<View style={{ flex: 3, alignItems: 'center' }}>
							<Text>30</Text>
						</View>
					</View>
					<View style={styles.component2}>
						<View style={{ flex: 2.5, alignItems: 'flex-end' }}>
							<Text>Sub Total :</Text>
						</View>
						<View style={{ flex: 3, alignItems: 'center' }}>
							<Text>30</Text>
						</View>
					</View>
					<View style={styles.component2}>
						<View style={{ flex: 2.5, alignItems: 'flex-end' }}>
							<Text>Total :</Text>
						</View>
						<View style={{ flex: 3, alignItems: 'center' }}>
							<Text>30</Text>
						</View>
					</View>
					<View style={{ height: 'auto' }}>
						<OrderLine />
						<OrderLine />
						<OrderLine />
						<OrderLine />
					</View>
				</ScrollView>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		width: '95%',
		alignSelf: 'center',
		backgroundColor: COMPONENT_BACKGROUND_COLOR,
		margin: 20,
		borderRadius: 30,
		// backgroundColor: '#f7f7f7',
		// padding: 10,
		paddingBottom: 20,
		borderRadius: 15,
	},
	component1: {
		width: '100%',
		height: 30,
		marginTop: 30,
		justifyContent: 'center',
		backgroundColor: '#e5e5e5',
	},
	component2: {
		flex: 1,
		padding: 20,
		marginBottom: -20,
		// width: '100%',
		// paddingLeft: 5,
		// paddingTop: 30,
		// width: '100%',
		// backgroundColor: '#6aa636',
		// marginTop: 0,
		alignSelf: 'center',
		alignItems: 'center',
		flexDirection: 'row',
	},
});

export default OrderPopUp;
