import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { Icon } from 'native-base';
import { ORANGE_COLOR, GREY_COLOR, GREEN_COLOR } from '../../theme/colors';

class AllProductList extends Component {
	render() {
		return (
			<View style={styles.mainViewStyle}>
				<View style={styles.innerViewStyle}>
					<View style={styles.logoViewStyle}>
						<Image
							source={{
								uri:
									'data:image/jpeg;base64,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',
							}}
							style={styles.logoStyle}
						/>
					</View>
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

export default AllProductList;
