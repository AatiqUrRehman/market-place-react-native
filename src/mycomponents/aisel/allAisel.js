import React, { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import {
	Container,
	Header,
	Footer,
	FooterTab,
	Button,
	Icon,
	Input,
	Item,
	Text,
	Left,
	Body,
	Right,
	Title,
	Picker,
} from 'native-base';
import { ORANGE_COLOR, GREEN_COLOR, GREY_COLOR } from '../../theme/colors';
import SingleBadge from './singleBadge1';

class AllAisel extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selected: 'key1',
		};
	}
	onValueChange(value) {
		this.setState({
			selected: value,
		});
	}

	render() {
		return (
			<Container style={{ backgroundColor: '#F0F0F0' }}>
				{/* <View style={styles.upperViewStyle}>
					<View style={styles.searchBarViewStyle}>
						<Item style={styles.searchBarStyle}>
							<Icon name="ios-search" style={{ marginLeft: 15 }} />
							<Input placeholder="Search Categories" />
						</Item>
					</View>
					<View style={{ flex: 1 }}>
						<Picker
							mode="dropdown"
							iosHeader="Select your SIM"
							iosIcon={<Icon name="arrow-down" />}
							style={{ width: undefined }}
							selectedValue={this.state.selected}
							onValueChange={this.onValueChange.bind(this)}
						>
							<Picker.Item label="Vegitables" value="key0" />
							<Picker.Item label="Fruits" value="key1" />
							<Picker.Item label="Clothes" value="key2" />
							<Picker.Item label="Groccery" value="key3" />
							<Picker.Item label="Shoes" value="key4" />
						</Picker>
					</View>
				</View> */}
				<ScrollView>
					<SingleBadge />
					<SingleBadge />
					<SingleBadge />
				</ScrollView>
			</Container>
		);
	}
}

const styles = StyleSheet.create({
	upperViewStyle: {
		height: 50,
		flexDirection: 'row',
	},
	searchBarViewStyle: {
		justifyContent: 'center',
		alignItems: 'center',
		flex: 2,
	},
	searchBarStyle: {
		borderColor: GREY_COLOR,
		borderWidth: 2,
		alignSelf: 'center',
		width: '85%',
		height: 30,
		borderRadius: 5,
	},
});

export default AllAisel;
