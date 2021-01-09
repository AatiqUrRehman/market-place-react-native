import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, Image, Button } from 'react-native';
import { Text, Icon } from 'native-base';
import { ORANGE_COLOR, GREEN_COLOR, GREY_COLOR, COMPONENT_BACKGROUND_COLOR, WHITE_COLOR } from '../../theme/colors';

class OrderTrackComponent extends Component {
	state = {
		statusOfList: false,
	};

	StatusOnAndOff() {
		this.setState({ statusOfList: !this.state.statusOfList });
	}
	render() {
		return (
			<View style={styles.container}>
				<View style={styles.component1}>
					<View style={styles.component1Picture}>
						<Image
							style={{ width: 70, height: 70, borderRadius: 50 }}
							source={{ uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png' }}
						/>
					</View>
					<View style={styles.component1MiddleData}>
						<View style={styles.component1MiddleDataName}>
							<Text style={{ fontSize: 15 }}>Marvin Ortega</Text>
						</View>
						<View style={styles.component1MiddleDataPhone}>
							<Text style={{ fontSize: 15 }}>0307-5654421</Text>
						</View>
						<View style={styles.component1MiddleDataAddress}>
							<Text style={{ fontSize: 15 }}>San Pedro Sula, Col. Universidad</Text>
						</View>
					</View>
					<View style={styles.component1RightData}>
						<View
							style={{
								flex: 2,
								justifyContent: 'center',
								alignItems: 'center',
							}}
						>
							<Image source={require('../../pictures/time-left.png')} />
						</View>
						<View shadowStyle style={{ flex: 3, justifyContent: 'center', alignItems: 'center' }}>
							<Text style={{ fontSize: 13, textAlign: 'center' }}>
								10 <Text style={{ fontSize: 10 }}>min</Text>
							</Text>
						</View>
					</View>
				</View>

				<View style={styles.FlexInComponent4}>
					<View style={styles.FlexInComponent4Reject}>
						<TouchableOpacity style={styles.FlexInComponent4RejectBtn}>
							<Text
								style={{
									textAlign: 'center',
									alignItems: 'center',
									fontWeight: 'bold',
									color: 'white',
								}}
							>
								Rastrear
							</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		width: '90%',
		alignSelf: 'center',
		backgroundColor: COMPONENT_BACKGROUND_COLOR,
		margin: 20,
		padding: 10,
		paddingBottom: 20,
		borderRadius: 15,
	},
	component1: {
		flex: 1,
		padding: 20,
		paddingLeft: 5,
		// paddingTop: 30,
		// width: '100%',
		// backgroundColor: '#6ae436',
		alignSelf: 'center',
		alignItems: 'center',
		flexDirection: 'row',
	},
	component1Picture: {
		marginTop: 5,
		flex: 1.3,
		paddingRight: 5,
		// backgroundColor: '#2e13c1',
	},
	component1MiddleData: {
		flex: 3,
		height: 70,
		flexDirection: 'column',
		marginLeft: 5,
		// paddingBottom: -20,
		justifyContent: 'space-between',
		// backgroundColor: '#93370b',
	},
	component1MiddleDataName: {
		flex: 1,
	},
	component1MiddleDataPhone: {
		flex: 1,
	},
	component1MiddleDataAddress: {
		flex: 1,
		// paddingBottom: -10,
	},
	component1RightData: {
		flex: 1.2,
		// marginLeft: 10,

		marginRight: -15,
		marginBottom: 10,
		paddingRight: 10,
		paddingLeft: 5,
		backgroundColor: '#ffff',
		justifyContent: 'center',
		flexDirection: 'row',
		borderRadius: 8,
		height: 50,

		// shadowColor: 'black',
		// shadowOffset: { width: 20, height: 20 },
		// shadowOpacity: 5,
		// shadowRadius: 15,
		// elevation: 30,
		// shadowOffset: { width: 10, height: 13 },
		// shadowOffset: { width: 10, height: 13 },
		// shadowColor: 'black',
		// shadowOpacity: 1,
		// box-shadow: 10px 5px 5px black,
	},
	component2: {
		flex: 1,
		padding: 20,
		// width: '100%',
		// paddingLeft: 5,
		// paddingTop: 30,
		// width: '100%',
		// backgroundColor: '#6aa636',
		marginTop: 35,
		alignSelf: 'center',
		alignItems: 'center',
		flexDirection: 'row',
	},
	component3: {
		flex: 1,
		padding: 20,
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
	component4: {
		width: '100%',

		justifyContent: 'center',
	},
	FlexInComponent4: {
		flex: 1,
		flexDirection: 'row',
		width: '80%',
		// marginTop: 70,
		margin: 5,
		height: 50,
		alignItems: 'center',
		alignSelf: 'center',
		justifyContent: 'space-between',
	},
	FlexInComponent4Accept: {
		flex: 1,
		justifyContent: 'center',
		alignSelf: 'center',
	},
	FlexInComponent4AcceptBtn: {
		width: '90%',
		alignSelf: 'center',
		justifyContent: 'center',
		backgroundColor: GREEN_COLOR,
		height: 50,
		borderRadius: 12,
	},
	FlexInComponent4Reject: {
		flex: 1,
		justifyContent: 'center',
		alignSelf: 'center',
	},
	FlexInComponent4RejectBtn: {
		width: '90%',
		alignSelf: 'center',
		justifyContent: 'center',
		backgroundColor: ORANGE_COLOR,
		height: 50,
		borderRadius: 12,
	},
});

export default OrderTrackComponent;
