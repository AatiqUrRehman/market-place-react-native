import React, { Component } from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { Container, Item, Button, Input, Icon, Badge, Text } from 'native-base';
import { GREEN_COLOR } from '../../theme/colors';
// import { connect } from 'react-redux';

class drawer extends Component {
	state = {};

	render() {
		return (
			<View style={styles.container}>
				<View style={styles.component1}>
					<Text style={{ color: 'white', fontSize: 22 }}>Nui</Text>
				</View>
				<View style={styles.component3}>
					<View style={styles.homeFlexComponent2}>
						<View style={styles.leftHomeFlexComponent2}>
							<Text style={{ color: 'white' }}>some text from company here</Text>
						</View>
					</View>
				</View>
				<View>
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
								<Text style={{ fontSize: 15, color: 'white' }}> catagory</Text>
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
								<Text style={{ fontSize: 15, color: 'white' }}> catagory</Text>
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
								<Text style={{ fontSize: 15, color: 'white' }}> catagory</Text>
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
								<Text style={{ fontSize: 15, color: 'white' }}> catagory</Text>
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
								<Text style={{ fontSize: 15, color: 'white' }}> catagory</Text>
							</View>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		);
	}
}

export default drawer;

const styles = StyleSheet.create({
	container: {
		width: '100%',
		justifyContent: 'center',
	},
	component1: {
		width: '100%',
		backgroundColor: '#4eb12c',
		height: 70,
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'center',
	},
	ImageComponent1: {
		marginTop: 10,
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
