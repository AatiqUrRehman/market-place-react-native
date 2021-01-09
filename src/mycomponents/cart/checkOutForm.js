import React, { Component } from 'react';

import { StyleSheet, View } from 'react-native';
import CartView from './cartListView';
import { GREEN_COLOR, GREY_COLOR } from '../../theme/colors';
import { Text } from 'react-native';
import { Container, Button, Input, Content, List, Item, ListItem, Left, Body, Right } from 'native-base';
export default class CheckOutView extends Component {
	render() {
		return (
			<Container>
				<Content>
					<CartView />
					<CartView />
					<CartView />
					<CartView />
					<CartView />
					<CartView />
					<CartView />
					<CartView />
					<CartView />
				</Content>

				<List>
					<ListItem avatar>
						<Left>
							<Text>SubTotal</Text>
						</Left>
						<Body />
						<Right>
							<Text>1</Text>
						</Right>
					</ListItem>
					<ListItem avatar>
						<Left>
							<Text>Tax</Text>
						</Left>
						<Body />
						<Right>
							<Text>1</Text>
						</Right>
					</ListItem>
					<ListItem avatar>
						<Left>
							<Text>Distance Cost</Text>
						</Left>
						<Body />
						<Right>
							<Text>1</Text>
						</Right>
					</ListItem>
					<ListItem>
						<Body>
							<Item regular style={{ width: '90%', height: 43, justifyContent: 'space-around' }}>
								<Input placeholder="Underline Textbox" />
								<Button style={styles.AddButton}>
									<Text style={styles.AddButtonText}>Add</Text>
								</Button>
							</Item>
						</Body>
					</ListItem>
					<ListItem avatar>
						<Left />
						<Body />
						<Right>
							<Button style={styles.CheckOutButton}>
								<Text style={styles.CheckOutText}>CheckOut</Text>
							</Button>
						</Right>
					</ListItem>
				</List>
			</Container>
		);
	}
}
const styles = StyleSheet.create({
	CheckOutText: {
		alignSelf: 'center',
		marginLeft: 20,
	},
	CheckOutButton: {
		width: 110,
		height: 40,
		backgroundColor: GREEN_COLOR,

		marginTop: 2,
	},
	AddButtonText: {
		alignSelf: 'center',
		color: 'black',
	},
	AddButton: {
		backgroundColor: 'white',
		marginRight: 15,
		height: 41,
	},
});
