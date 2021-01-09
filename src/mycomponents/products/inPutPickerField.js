import React, { Component } from 'react';
import { View } from 'react-native';
import { Icon, Form, Item, Picker, Label } from 'native-base';

class InputPickerField extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selected2: undefined,
		};
	}
	onValueChange2 = value => {
		this.setState({
			selected2: value,
		});
		if (this.props.onValueChange) {
			this.props.onValueChange(value);
		}
	};
	render() {
		return (
			<View>
				<Form style={{ width: '71%', alignSelf: 'center', marginTop: 15 }}>
					<Label style={{ marginLeft: 6 }}>{this.props.text ? this.props.text : false}</Label>
					<Item picker>
						<Picker
							mode="dropdown"
							iosIcon={<Icon name="arrow-down" />}
							style={{ width: undefined }}
							placeholder="Select your SIM"
							placeholderStyle={{ color: '#bfc6ea' }}
							placeholderIconColor="#007aff"
							selectedValue={this.state.selected2}
							onValueChange={this.onValueChange2}
						>
							{this.props.List
								? this.props.List.map(l => <Picker.Item label={l.name} value={l._id} />)
								: false}
						</Picker>
					</Item>
				</Form>
			</View>
		);
	}
}

export default InputPickerField;
