import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { Icon } from 'native-base';
import { ORANGE_COLOR, GREY_COLOR, GREEN_COLOR } from '../../theme/colors';

class SingleCompany extends Component {
	render() {
		return (
			<View style={styles.mainViewStyle}>
				<View style={styles.innerViewStyle}>
					<View style={styles.textViewStyle}>
						<Text style={styles.textStyle}>{this.props.text ? this.props.text : ''}</Text>
					</View>
					<View style={styles.arrowViewStyle}>
						<View style={styles.arrowinnerViewStyle}>
							<TouchableOpacity>
								<Icon active type="FontAwesome" name="times" style={styles.iconStyle} />
							</TouchableOpacity>
						</View>
					</View>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	mainViewStyle: {
		height: 70,
		marginTop: 10,
		justifyContent: 'center',
		alignItems: 'center',
	},
	innerViewStyle: {
		height: 60,
		width: '85%',
		borderColor: GREY_COLOR,
		borderWidth: 1,
		borderRadius: 5,
		flexDirection: 'row',
	},
	logoViewStyle: {
		flex: 1.5,
		justifyContent: 'center',
		alignItems: 'center',
	},
	logoStyle: {
		height: 55,
		width: 55,
		borderRadius: 30,
		backgroundColor: GREEN_COLOR,
	},
	textViewStyle: {
		flex: 3,
		paddingLeft: 10,
		justifyContent: 'center',
		alignItems: 'center',
	},
	textStyle: { fontSize: 18, alignSelf: 'flex-start' },
	arrowViewStyle: {
		flex: 1.5,
		justifyContent: 'center',
		alignItems: 'center',
	},
	arrowinnerViewStyle: {
		height: 30,
		width: 60,
		backgroundColor: ORANGE_COLOR,
		borderRadius: 5,
		justifyContent: 'center',
		alignItems: 'center',
	},
	iconStyle: {
		fontSize: 25,
		color: 'white',
	},
});

export default SingleCompany;
