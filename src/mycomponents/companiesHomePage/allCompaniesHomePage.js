import React, { Component } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { GREEN_COLOR, ORANGE_COLOR } from '../../theme/colors';
import { Container, Header, Left, Body, Button, Icon, Title, Text } from 'native-base';
import SingleCompany from './singleCompany';
import { connect } from 'react-redux';

class AllCompaniesHomePage extends Component {
	componentDidMount() {
		console.log('--------------No-----------');
		console.log(JSON.stringify(this.props.AllCompanies));
	}

	render() {
		return (
			<Container>
				<View style={{ flex: 4 }}>
					<ScrollView>
						{this.props.AllCompanies
							? this.props.AllCompanies.map(Companies => (
									<SingleCompany text={Companies.name} companies={Companies} />
							  ))
							: false}
						{/*   */}
					</ScrollView>
				</View>
			</Container>
		);
	}
}

const mapStateToProps = state => ({
	AllCompanies: state.CompanyReducer.MyCompanies,
});

export default connect(
	mapStateToProps,
	null
)(AllCompaniesHomePage);

const styles = StyleSheet.create({
	buttonViewStyle: {
		alignSelf: 'center',
		justifyContent: 'center',
		alignItems: 'center',
		width: '60%',
		backgroundColor: GREEN_COLOR,
	},
});
