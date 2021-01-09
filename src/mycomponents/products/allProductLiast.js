import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import SingleProduct from './singleProduct';
import { GREY_COLOR, ORANGE_COLOR } from '../../theme/colors';

class SingleBadge extends Component {
	render() {
		return (
			<View style={{ justifyContent: 'center', alignItems: 'center' }}>
				<View style={styles.totalViewStyle}>
					<View style={styles.lowerViewStyle}>
						<SingleProduct item={this.props.item} />
					</View>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	totalViewStyle: {
		marginTop: 10,
		height: 205,
		paddingTop: 20,
		width: '100%',
		marginLeft: 20,
		paddingLeft: 10,
		borderRadius: 10,
		backgroundColor: '#F0F0F0',
		// marginTop: 10,
	},

	buttonTextStyle: { alignSelf: 'center', fontSize: 12, color: 'white' },
	lowerViewStyle: {
		height: 200,
		// flexDirection: 'row',
		// justifyContent: 'flex-end',
		alignItems: 'center',
	},
});

export default SingleBadge;
