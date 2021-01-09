import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { GREEN_COLOR } from '../../theme/colors';

class Tab extends Component {
	state = {
		first: true,
		second: false,
	};

	toggleFirst() {
		this.setState({ first: true, second: false });
	}
	toggleSecond() {
		this.setState({ first: false, second: true });
	}

	render() {
		return (
			<View style={styles.mainView}>
				<View style={{ flex: 1, alignItems: 'center', paddingBottom: 10 }}>
					<Image
						resizeMode="stretch"
						source={require('../image/logo.png')}
						style={{
							height: 45,
							width: 45,
						}}
					/>
				</View>
				<View style={{ flex: 3 }}>
					<View style={styles.innerButtonView}>
						{this.state.first ? (
							<TouchableOpacity style={styles.leftButtonTouchableOpacityStyle}>
								<View>
									<Text style={styles.leftButtonTextStyle}>Despachada</Text>
								</View>
							</TouchableOpacity>
						) : (
							<TouchableOpacity
								style={styles.afterClickedLeftButtonTouchableOpacityStyle}
								onPress={() => this.toggleFirst()}
							>
								<View>
									<Text style={styles.afterClickedLeftButtonTextStyle}>Despachada</Text>
								</View>
							</TouchableOpacity>
						)}
						{this.state.second ? (
							<TouchableOpacity style={styles.afterClickedRightButtonTouchableOpacityStyle}>
								<View>
									<Text style={styles.rightButtonTextStyle}>Completada</Text>
								</View>
							</TouchableOpacity>
						) : (
							<TouchableOpacity
								style={styles.rightButtonTouchableOpacityStyle}
								onPress={() => this.toggleSecond()}
							>
								<View>
									<Text style={styles.afterClickedRightButtonTextStyle}>Completada</Text>
								</View>
							</TouchableOpacity>
						)}
					</View>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		// flex: 1,
		// backgroundColor: '#F5FCFF',
	},
	mainView: {
		// flex: 1,
		paddingTop: 10,
		// height: 70,
		width: '100%',
		marginBottom: 10,
		// justifyContent: 'center',
		flexDirection: 'row',
		alignItems: 'center',
	},
	innerButtonView: {
		height: 35,
		width: '70%',
		borderRadius: 15,
		flexDirection: 'row',
	},
	leftButtonTouchableOpacityStyle: {
		flex: 1,
		backgroundColor: GREEN_COLOR,
		borderBottomLeftRadius: 15,
		borderTopLeftRadius: 15,
		justifyContent: 'center',
		alignItems: 'center',
	},
	afterClickedLeftButtonTouchableOpacityStyle: {
		flex: 1,
		backgroundColor: '#E7EAED',
		borderBottomLeftRadius: 15,
		borderTopLeftRadius: 15,
		justifyContent: 'center',
		alignItems: 'center',
	},
	leftButtonTextStyle: {
		color: 'white',
		fontSize: 16,
		alignSelf: 'center',
		fontWeight: 'bold',
	},
	afterClickedLeftButtonTextStyle: {
		color: 'black',
		fontSize: 15,
		alignSelf: 'center',
		fontWeight: 'bold',
	},
	rightButtonTouchableOpacityStyle: {
		flex: 1,
		backgroundColor: '#E7EAED',
		borderBottomRightRadius: 15,
		borderTopRightRadius: 15,
		justifyContent: 'center',
		alignItems: 'center',
	},
	afterClickedRightButtonTouchableOpacityStyle: {
		flex: 1,
		backgroundColor: GREEN_COLOR,
		borderBottomRightRadius: 15,
		borderTopRightRadius: 15,
		justifyContent: 'center',
		alignItems: 'center',
	},
	rightButtonTextStyle: {
		color: 'white',
		fontSize: 16,
		alignSelf: 'center',
		fontWeight: 'bold',
	},
	afterClickedRightButtonTextStyle: {
		color: 'black',
		fontSize: 15,
		alignSelf: 'center',
		fontWeight: 'bold',
	},
});

export default Tab;
