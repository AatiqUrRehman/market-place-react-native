import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text, View } from 'native-base';
import { GREEN_COLOR } from '../../theme/colors';
export default class FooterTabsIconTextExample extends Component {
	render() {
		return (
			<View style={{ padding: 10, backgroundColor: '#ffff', borderStartColor: '#ffff' }}>
				<Footer>
					<FooterTab light>
						{this.props.Profile ? (
							<Button success style={{ width: '100%', height: '100%', backgroundColor: GREEN_COLOR }}>
								<Text style={{ fontSize: 16, color: '#ffffff' }}>
									{this.props.text ? this.props.text : ''}
								</Text>
							</Button>
						) : (
							false
						)}
						{this.props.aisel ? (
							<Button
								success
								style={{ width: '100%', height: '100%', backgroundColor: GREEN_COLOR }}
								onPress={() => this.props.navigation.push('AddAisel')}
							>
								<Text style={{ fontSize: 16, color: '#ffffff' }}>
									{this.props.text ? this.props.text : ''}
								</Text>
							</Button>
						) : (
							false
						)}
						{this.props.companies ? (
							<Button
								success
								style={{ width: '100%', height: '100%', backgroundColor: GREEN_COLOR }}
								onPress={() => this.props.navigation.push('AddCompany')}
							>
								<Text style={{ fontSize: 16, color: '#ffffff' }}>
									{this.props.text ? this.props.text : ''}
								</Text>
							</Button>
						) : (
							false
						)}
						{this.props.catagories ? (
							<Button
								success
								style={{ width: '100%', height: '100%', backgroundColor: GREEN_COLOR }}
								onPress={() => this.props.navigation.push('AddCatagory')}
							>
								<Text style={{ fontSize: 16, color: '#ffffff' }}>
									{this.props.text ? this.props.text : ''}
								</Text>
							</Button>
						) : (
							false
						)}

						{this.props.product ? (
							<Button
								success
								style={{ width: '100%', height: '100%', backgroundColor: GREEN_COLOR }}
								onPress={() => this.props.navigation.push('addProductScreen')}
							>
								<Text style={{ fontSize: 16, color: '#ffffff' }}>
									{this.props.text ? this.props.text : ''}
								</Text>
							</Button>
						) : (
							false
						)}
						{this.props.addProduct ? (
							<Button
								success
								style={{ width: '100%', height: '100%', backgroundColor: GREEN_COLOR }}
								onPress={() => {
									this.props.onAddProduct();
									// this.props.navigation.push('AddCatagory');
								}}
							>
								<Text style={{ fontSize: 16, color: '#ffffff' }}>
									{this.props.text ? this.props.text : ''}
								</Text>
							</Button>
						) : (
							false
						)}
					</FooterTab>
				</Footer>
			</View>
		);
	}
}
