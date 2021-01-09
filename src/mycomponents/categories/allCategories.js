import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { ORANGE_COLOR, VIEW_BACKGROUND_COLOR } from '../../theme/colors';
import { Icon } from 'native-base';
import SingleCategory from './singleCategory';
import { Load_All_Catagories } from '../../store/actions/catagoryAction';
import { connect } from 'react-redux';

class AllCategories extends Component {
	componentDidMount() {
		this.props.Load_All_Catagories(this.props.CurrentSuperMart._id);
	}

	render() {
		return (
			<View style={styles.container}>
				{/* <View>
					<View style={styles.iconViewStyle}>
						<TouchableOpacity>
							<Icon active type="FontAwesome" name="times" style={styles.iconStyle} />
						</TouchableOpacity>
					</View>
					<View style={styles.mainHeadingViewStyle}>
						<Text style={styles.mainHeadingTextStyle}>Todas las Categorias</Text>
					</View>
				</View> */}
				<ScrollView>
					{this.props.AllCatagories
						? this.props.AllCatagories.map(catagories => (
								<SingleCategory navigation={this.props.navigation} Catagory={catagories} />
						  ))
						: console.log('False' + this.props.AllCatagories)}
					{/* <SingleCategory navigation={this.props.navigation} />
					<SingleCategory navigation={this.props.navigation} />
					<SingleCategory navigation={this.props.navigation} /> */}
				</ScrollView>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: VIEW_BACKGROUND_COLOR,
	},
	iconViewStyle: {
		height: 70,
		width: '100%',
		justifyContent: 'flex-end',
		alignItems: 'flex-end',
	},
	iconStyle: {
		fontSize: 40,
		color: ORANGE_COLOR,
		marginRight: '7%',
	},
	mainHeadingViewStyle: {
		justifyContent: 'center',
		alignItems: 'center',
		height: 60,
		width: '100%',
	},
	mainHeadingTextStyle: {
		fontFamily: ' Budidaya y Gothanrounded',
		fontSize: 20,
	},
});

// export default AllCategories;

const mapStateToProps = state => ({
	AllCatagories: state.CatagoryReducer.superMartCatagories,
	CurrentSuperMart: state.AuthReducer.currentSuperMart,
});

export default connect(
	mapStateToProps,
	{ Load_All_Catagories }
)(AllCategories);
