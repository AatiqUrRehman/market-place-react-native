import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Item, Input, Label } from 'native-base';
import { GREY_COLOR } from '../../theme/colors';

class InputField extends Component {
	render() {
		return (
			<View style={styles.viewStyle}>
				<Item floatingLabel style={styles.inputFieldStyle}>
					<Label>{this.props.text ? this.props.text : ''}</Label>
					<Input onChangeText={this.props.onChangeValue ? this.props.onChangeValue : () => false} />
				</Item>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	viewStyle: {
		marginTop: 10,
		justifyContent: 'center',
		alignItems: 'center',
	},
	inputFieldStyle: {
		width: '70%',
		alignSelf: 'center',
		borderColor: GREY_COLOR,
		borderWidth: 20,
	},
});

export default InputField;
