import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';
import { GREEN_COLOR, WHITE_COLOR, GREY_COLOR } from '../../theme/colors';
export default class FooterTabsIconTextExample extends Component {
	state = { button1: false, button2: false, button3: false, isSettings: false };

	// setIsSettings = value => {
	// 	this.setState({ isSettings: value });
	// };
	button1Toggle() {
		this.props.navigation.navigate('OrderScreen');
		this.setState({ button1: true, button2: false, button3: false });
	}
	button2Toggle() {
		this.props.navigation.navigate('DispachedOrderScreen');
		this.setState({ button1: false, button2: true, button3: false });
	}
	button3Toggle() {
		this.props.navigation.navigate('AccountsStackNavigator');
		this.setState({ button1: false, button2: false, button3: true });
	}
	render() {
		return (
			// <Footer style={{ backgroundColor: '#ffffff' }}>
			// 	<FooterTab>
			// 		<Button vertical active={this.state.button1} onPress={() => this.button1Toggle()}>
			// 			<Icon name="apps" />
			// 			<Text>Home</Text>
			// 		</Button>
			// 		<Button vertical active={this.state.button2} onPress={() => this.button2Toggle()}>
			// 			<Icon name="camera" />
			// 			<Text>Dispached</Text>
			// 		</Button>
			// 		<Button vertical active={this.state.button3} onPress={() => this.button3Toggle()}>
			// 			<Icon active name="navigate" />
			// 			<Text>Accounts</Text>
			// 		</Button>
			// 	</FooterTab>
			// </Footer>
			<View style={{ height: 50 }}>
				<View
					style={{
						flex: 1,
						flexDirection: 'row',
						backgroundColor: this.state.isSettings ? GREEN_COLOR : 'white',
					}}
				>
					<TouchableOpacity
						style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
						onPress={() => this.button1Toggle()}
					>
						<View style={{ flexDirection: 'column' }}>
							<Text
								style={{
									textAlign: 'center',
									color: this.state.button1 ? GREEN_COLOR : GREY_COLOR,
									fontSize: this.state.button1 ? 22 : 20,
									fontWeight: 'bold',
								}}
							>
								Home
							</Text>
							<Icon
								name="apps"
								style={{
									alignSelf: 'center',
									color: this.state.button1 ? GREEN_COLOR : GREY_COLOR,
									fontSize: this.state.button1 ? 22 : 20,
									fontSize: 22,
									fontWeight: 'bold',
								}}
							/>
						</View>
					</TouchableOpacity>

					<TouchableOpacity
						style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
						onPress={() => this.button2Toggle()}
					>
						<View style={{ flexDirection: 'column' }}>
							<Text
								style={{
									textAlign: 'center',
									color: this.state.button2 ? GREEN_COLOR : GREY_COLOR,
									fontSize: this.state.button2 ? 22 : 20,
									fontSize: 20,
									fontWeight: 'bold',
								}}
							>
								Dispached
							</Text>
							<Icon
								name="truck-loading"
								style={{
									alignSelf: 'center',
									color: this.state.button2 ? GREEN_COLOR : GREY_COLOR,
									fontSize: this.state.button2 ? 22 : 20,
									fontSize: 20,
									fontWeight: 'bold',
								}}
							/>
						</View>
					</TouchableOpacity>

					<TouchableOpacity
						style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
						onPress={() => {
							this.button3Toggle();
							// this.isSettings(true);
						}}
					>
						<View style={{ flexDirection: 'column' }}>
							<Text
								style={{
									textAlign: 'center',
									color: this.state.button3 ? GREEN_COLOR : GREY_COLOR,
									fontSize: this.state.button3 ? 22 : 20,
									fontSize: 20,
									fontWeight: 'bold',
								}}
							>
								Settings
							</Text>
							<Icon
								name="cog"
								style={{
									alignSelf: 'center',
									color: this.state.button3 ? GREEN_COLOR : GREY_COLOR,
									fontSize: this.state.button3 ? 22 : 20,
									fontSize: 20,
									fontWeight: 'bold',
								}}
							/>
						</View>
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}
