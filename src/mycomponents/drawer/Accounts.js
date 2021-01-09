import React, { Component } from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { Container, Item, Button, Input, Icon, Badge, Text } from 'native-base';
import { GREEN_COLOR } from '../../theme/colors';
import { connect } from 'react-redux';
import { Load_All_Companies } from '../../store/actions/companyAction';

class Accounts extends Component {
	state = {};

	toggleToCompanies() {
		console.log('i am called');
		this.props.navigation.push('AllCompanies');
		this.props.Load_All_Companies(this.props.CurrentSuperMart._id);
	}

	render() {
		return (
			<View style={styles.container}>
				<View style={styles.component1}>
					<Image
						resizeMode="stretch"
						source={require('../image/logo1.jpg')}
						style={{
							height: 55,
							width: 55,
						}}
					/>
				</View>
				<View style={styles.component3}>
					<View style={styles.homeFlexComponent2}>
						<View style={styles.leftHomeFlexComponent2}>
							<Text style={{ color: 'white' }}>Mi cuenta</Text>
						</View>
					</View>
				</View>
				<View style={styles.component2}>
					<TouchableOpacity
						style={styles.homeFlexComponent2}
						onPress={() => this.props.navigation.push('SuperMartProfileInfo')}
					>
						<View style={styles.leftHomeFlexComponent2}>
							<Icon
								name="user-circle"
								type="FontAwesome"
								style={{ color: 'white', fontSize: 20, marginLeft: 3 }}
							/>
						</View>
						<View style={styles.RightHomeFlexComponent2}>
							<Text style={{ fontSize: 15, color: 'white' }}>Editar perfil</Text>
						</View>
					</TouchableOpacity>
				</View>
				<View style={styles.component2}>
					<TouchableOpacity
						style={styles.homeFlexComponent2}
						onPress={() => this.props.navigation.push('Aisel')}
					>
						<View style={styles.leftHomeFlexComponent2}>
							<Icon
								name="map-marker"
								type="FontAwesome"
								style={{ color: 'white', fontSize: 20, marginLeft: 8 }}
							/>
						</View>
						<View style={styles.RightHomeFlexComponent2}>
							<Text style={{ fontSize: 15, color: 'white' }}>Administrar pasillo</Text>
						</View>
					</TouchableOpacity>
				</View>
				<View style={styles.component2}>
					<TouchableOpacity style={styles.homeFlexComponent2} onPress={() => this.toggleToCompanies()}>
						<View style={styles.leftHomeFlexComponent2}>
							<Icon
								name="star"
								type="FontAwesome"
								style={{ color: 'white', fontSize: 20, marginLeft: 5 }}
							/>
						</View>
						<View style={styles.RightHomeFlexComponent2}>
							<Text style={{ fontSize: 15, color: 'white' }}>Administrar empresas</Text>
						</View>
					</TouchableOpacity>
				</View>
				<View style={styles.component2}>
					<TouchableOpacity
						style={styles.homeFlexComponent2}
						onPress={() => this.props.navigation.push('CatagoriesScreen')}
					>
						<View style={styles.leftHomeFlexComponent2}>
							<Icon
								name="history"
								type="FontAwesome"
								style={{ color: 'white', fontSize: 20, marginLeft: 5 }}
							/>
						</View>
						<View style={styles.RightHomeFlexComponent2}>
							<Text style={{ fontSize: 15, color: 'white' }}>Administrar categoría</Text>
						</View>
					</TouchableOpacity>
				</View>
				{/* <View style={styles.component2} onPress={() => this.props.navigation.push('CatagoriesScreen')}>
					<TouchableOpacity style={styles.homeFlexComponent2}>
						<View style={styles.leftHomeFlexComponent2}>
							<Icon
								name="history"
								type="FontAwesome"
								style={{ color: 'white', fontSize: 20, marginLeft: 5 }}
							/>
						</View>
						<View style={styles.RightHomeFlexComponent2}>
							<Text style={{ fontSize: 15, color: 'white' }}>Manage Product</Text>
						</View>
					</TouchableOpacity>
				</View> */}
				<View style={styles.component2}>
					<TouchableOpacity style={styles.homeFlexComponent2}>
						<View style={styles.leftHomeFlexComponent2}>
							<Icon
								name="lock"
								type="FontAwesome"
								style={{ color: 'white', fontSize: 20, marginLeft: 10 }}
							/>
						</View>
						<View style={styles.RightHomeFlexComponent2}>
							<Text style={{ fontSize: 15, color: 'white' }}>Desconectar</Text>
						</View>
					</TouchableOpacity>
				</View>
				<View style={styles.component3}>
					<View style={styles.homeFlexComponent2}>
						<View style={styles.leftHomeFlexComponent2}>
							{/* <Text style={{ color: 'white' }}>Otros</Text> */}
						</View>
					</View>
				</View>

				{/* <View style={styles.component2}> */}
				{/* <TouchableOpacity style={styles.homeFlexComponent2}>
						<View style={styles.leftHomeFlexComponent2}>
							<Icon
								name="question-circle"
								type="FontAwesome"
								style={{ color: 'white', fontSize: 20, marginLeft: 5 }}
							/>
						</View>
						<View style={styles.RightHomeFlexComponent2}>
							<Text style={{ fontSize: 15, color: 'white' }}> Ask Help</Text>
						</View>
					</TouchableOpacity>
				</View>
				<View style={styles.component2}>
					<TouchableOpacity style={styles.homeFlexComponent2}>
						<View style={styles.leftHomeFlexComponent2}>
							<Icon
								name="circle"
								type="FontAwesome"
								style={{ color: 'white', fontSize: 20, marginLeft: 5 }}
							/>
						</View>
						<View style={styles.RightHomeFlexComponent2}>
							<Text style={{ fontSize: 15, color: 'white' }}> Invite Friend</Text>
						</View>
					</TouchableOpacity>
				</View> */}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
		justifyContent: 'center',
	},
	component1: {
		width: '100%',
		backgroundColor: '#4eb12c',
		height: 130,
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'center',
	},
	ImageComponent1: {
		marginTop: 15,
		alignSelf: 'center',
		justifyContent: 'center',
	},
	TextComponent1: {
		alignSelf: 'center',
	},
	TextComponent1: {
		alignSelf: 'center',
		marginTop: 20,
	},
	component2: {
		// marginTop: 10,
		backgroundColor: GREEN_COLOR,
		justifyContent: 'center',
		width: '100%',
	},
	component3: {
		// marginTop: 10,
		backgroundColor: '#4eb12c',
		justifyContent: 'center',
		width: '100%',
	},

	homeFlexComponent2: {
		flex: 1,
		width: '95%',
		flexDirection: 'row',
		justifyContent: 'center',
		alignSelf: 'center',
		paddingTop: 25,
		paddingBottom: 25,
		borderRadius: 12,
	},
	leftHomeFlexComponent2: {
		flex: 1,
		alignSelf: 'center',
		color: 'white',
		alignItems: 'flex-start',
		paddingLeft: 10,
	},
	RightHomeFlexComponent2: {
		flex: 3,
		alignSelf: 'center',
	},
});

const mapStateToProps = state => ({
	CurrentSuperMart: state.AuthReducer.currentSuperMart,
});

export default connect(
	mapStateToProps,
	{ Load_All_Companies }
)(Accounts);
