import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Icon } from 'native-base';
import { ORANGE_COLOR, GREY_COLOR } from '../../theme/colors';
import { Load_All_Products } from '../../store/actions/catagoryAction';
import { connect } from 'react-redux';

class SingleCategory extends Component {
	componentDidMount() {
		// this.props.Load_All_Products(this.props.Catagory._id);
	}
	render() {
		return (
			<TouchableOpacity
				style={styles.mainViewStyle}
				onPress={() => {
					this.props.Load_All_Products(this.props.Catagory._id);
					this.props.navigation.push('productScreen', { Catagory: this.props.Catagory });
				}}
			>
				<View style={styles.innerViewStyle}>
					<View style={styles.bulletViewStyle}>
						<View style={styles.bulletStyle} />
					</View>
					<View style={styles.textViewStyle}>
						<Text style={styles.textStyle}>{this.props.Catagory.name}</Text>
					</View>
					<View style={styles.arrowViewStyle}>
						<TouchableOpacity
							onPress={() => {
								console.log('OnPress C');
								this.props.Load_All_Products(this.props.Catagory._id);
								this.props.navigation.push('productScreen', { Catagory: this.props.Catagory });
							}}
						>
							<Icon active type="FontAwesome" name="arrow-right" style={styles.iconStyle} />
						</TouchableOpacity>
					</View>
				</View>
			</TouchableOpacity>
		);
	}
}

export default connect(
	null,
	{ Load_All_Products }
)(SingleCategory);

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
	bulletViewStyle: {
		flex: 0.6,
		justifyContent: 'center',
		alignItems: 'center',
	},
	bulletStyle: {
		height: 23,
		width: 23,
		borderRadius: 15,
		backgroundColor: ORANGE_COLOR,
	},
	textViewStyle: {
		flex: 3,
		justifyContent: 'center',
		alignItems: 'center',
	},
	textStyle: { fontSize: 18, alignSelf: 'flex-start' },
	arrowViewStyle: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	iconStyle: {
		fontSize: 25,
		color: ORANGE_COLOR,
	},
});
