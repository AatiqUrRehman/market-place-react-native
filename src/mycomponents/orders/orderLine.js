import React, { Component } from 'react';
import { Image } from 'react-native';
import { Icon, List, ListItem, Thumbnail, Text, Left, Body, Button } from 'native-base';
import { ORANGE_COLOR, GREEN_COLOR, GREY_COLOR } from '../../theme/colors';
import { View, StyleSheet, ScrollView } from 'react-native';
export default class ListThumbnailExample extends Component {
	render() {
		return (
			<View style={{ flex: 1, marginTop: 25, flexDirection: 'row', justifyContent: 'center' }}>
				<View style={{ flex: 1, alignItems: 'center' }}>
					<Image
						style={{ width: 80, height: 80, borderRadius: 10 }}
						source={{ uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png' }}
					/>
				</View>
				<View style={{ flex: 1, alignSelf: 'center' }}>
					<Text>Tag heuer wristwatch</Text>
					<Text style={{ color: GREEN_COLOR }}>
						$<Text style={{ color: GREEN_COLOR }}> 1100</Text>
					</Text>
					<Text>
						x <Text>3</Text>
					</Text>
				</View>
			</View>
		);
	}
}
