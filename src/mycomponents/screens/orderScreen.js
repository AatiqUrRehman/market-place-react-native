import React from 'react';
import { View, ScrollView } from 'react-native';
import Orders from '../orders/order';
import Footerr from '../footer/footer';
import Tabs from '../orders/tab';
import Header from '../header/header';
import { Container, Footer, Content } from 'native-base';
import { Load_All_Catagories } from '../../store/actions/catagoryAction';
import { Load_All_Companies } from '../../store/actions/companyAction';
import { Load_All_Aisle } from '../../store/actions/aisleAction';
import { Load_All_Sizes } from '../../store/actions/loadMeasurePointAction';
import { Load_Unit_Of_Measure } from '../../store/actions/loadMeasurePointAction';
import { connect } from 'react-redux';

class OrderScreen extends React.Component {
	componentDidMount() {
		this.props.Load_All_Aisle(this.props.CurrentSuperMart._id);
		this.props.Load_All_Catagories(this.props.CurrentSuperMart._id);
		this.props.Load_All_Companies(this.props.CurrentSuperMart._id);
		this.props.Load_All_Sizes('T1');
		this.props.Load_Unit_Of_Measure();
	}

	static navigationOptions = ({ navigation }) => {
		return {
			header: null,
		};
	};

	render() {
		return (
			<Container style={{ flex: 1 }}>
				<Tabs />
				<Content>
					<Orders navigation={this.props.navigation} />
					<Orders navigation={this.props.navigation} />
				</Content>
				<Footerr navigation={this.props.navigation} />
			</Container>
		);
	}
}

const mapStateToProps = state => ({
	CurrentSuperMart: state.AuthReducer.currentSuperMart,
});

export default connect(
	mapStateToProps,
	{ Load_All_Aisle, Load_All_Catagories, Load_All_Companies, Load_All_Sizes, Load_Unit_Of_Measure }
)(OrderScreen);
