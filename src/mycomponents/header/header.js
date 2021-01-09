import React from 'react';
// import { WHITE_COLOR, PRIMARY_COLOR, BUTTON_SUCCESS } from '../../themes/colors';
import { Header, Left, Right, Icon, Body, Title, Button, Switch, Text } from 'native-base';
// import OptionsMenu from 'react-native-options-menu';
import { Alert, Image } from 'react-native';
class AccountHeader extends React.Component {
	state = {
		enableEditing: false,
	};
	ShowReceivedRequests() {
		this.props.navigation.push('AllReceivedRequestScreen');
	}
	totalSale() {
		this.props.navigation.push('TotalSaleScreen');
	}
	render() {
		const myIcon = <Icon type="FontAwesome" name="ellipsis-v" style={{ color: 'black' }} />;

		return (
			<Header style={{ backgroundColor: 'white' }}>
				<Left>
					{this.props.backButton ? (
						<Button transparent onPress={() => this.props.navigation.goBack()}>
							<Icon name="arrow-back" style={{ color: 'black' }} />
						</Button>
					) : (
						false
					)}
				</Left>
				<Body>
					<Title
						style={{
							fontSize: 15,
							color: 'black',
							justifyContent: 'center',
							alignItems: 'center',
							marginLeft: 3,
							fontSize: 14,
						}}
					>
						{this.props.text ? this.props.text : ''}
					</Title>
				</Body>
				<Right>
					{this.props.isCart ? (
						<Button transparent onPress={() => this.props.navigation.goBack()}>
							<Icon name="arrow-back" style={{ color: 'black' }} />
						</Button>
					) : (
						false
					)}
					{this.props.isIcon ? (
						<Image
							resizeMode="stretch"
							source={require('../image/logo.png')}
							style={{
								height: 45,
								width: 45,
							}}
						/>
					) : (
						false
					)}
				</Right>
			</Header>
		);
	}
}
export default AccountHeader;
{
	/* <Icon name="menu" /> */
}
