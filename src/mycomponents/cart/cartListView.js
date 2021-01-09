import React, { Component } from 'react';
import { Icon, List, ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';
import { ORANGE_COLOR, GREEN_COLOR, GREY_COLOR } from '../../theme/colors';
import { View, StyleSheet } from 'react-native';
// import { green } from "ansi-colors";
export default class ListThumbnailExample extends Component {
	render() {
		return (
			<View style={{ flex: 1, marginTop: 15 }}>
				<ListItem thumbnail>
					<View style={{ flex: 1 }}>
						<Left>
							<Thumbnail
								square
								style={{ height: 100, width: 100, borderRadius: 4 }}
								source={{
									uri:
										'data:image/jpeg;base64,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',
								}}
							/>
						</Left>
					</View>
					<View style={{ flex: 3, marginLeft: '5%' }}>
						<Body>
							<View style={{ flex: 1 }}>
								<Text>Tag Heuer WristWatch</Text>
							</View>
							<View style={{ flex: 1 }}>
								<Text note numberOfLines={1} style={{ color: GREEN_COLOR }}>
									$ 1100
								</Text>
							</View>
							<View
								style={{
									flex: 1,
									flexDirection: 'row',
								}}
							>
								<View
									style={{
										borderRadius: 4,
										borderWidth: 1,
										borderColor: GREEN_COLOR,
									}}
								>
									<Button
										style={{
											backgroundColor: '#cbcbcb',
											alignSelf: 'center',
										}}
									>
										<Text style={{ color: 'black', alignSelf: 'center' }}>-</Text>
									</Button>
								</View>

								<View
									style={{
										alignItems: 'center',
										justifyContent: 'center',
										borderRadius: 4,
									}}
								>
									<Text
										style={{
											color: 'black',
											marginLeft: 10,
											fontSize: 20,
										}}
									>
										12
									</Text>
								</View>
								<View
									style={{
										borderRadius: 4,
										borderWidth: 1,
										borderColor: GREEN_COLOR,
									}}
								>
									<Button
										style={{
											backgroundColor: '#cbcbcb',
											alignSelf: 'center',
										}}
									>
										<Text style={{ color: 'black', alignSelf: 'center' }}>+</Text>
									</Button>
								</View>
							</View>
						</Body>
					</View>
				</ListItem>
			</View>
		);
	}
}

const styles = StyleSheet.create({});
