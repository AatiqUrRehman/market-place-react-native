import {
	createAppContainer,
	createSwitchNavigator,
	createDrawerNavigator,
	createStackNavigator,
	DrawerItems,
} from 'react-navigation';

import { SafeAreaView, ScrollView, Dimensions, Image } from 'react-native';

// import Drawer from '../drawer/drawer';
import OrderScreen from '../screens/orderScreen';

import DispachedOrderScreen from '../screens/dispachedOrderScreen';

import Accounts from '../screens/accountsScreen';

// import AllProducts from '../products/allProducts';

// import AllCatagories from '../categories/allCategories';

import CatagoriesScreen from '../screens/catagoriesScreen';
import AddCatagory from '../screens/addCatagoryScreen';

import AllCompanies from '../screens/companiesScreen';
import AddCompany from '../screens/addComapanyScreen';

import SuperMartProfileInfo from '../screens/supermartProfileInfoScreen';
// import cartListView from '../cart/checkOutForm';

import signupScreen from '../screens/signupScreen';

import productScreen from '../screens/productHomeScreen';
import addProductScreen from '../screens/addProductScreen';

// import CompanyProfileScreen from '../screens/profileScreen';
import AddAisel from '../screens/addAiselScreen';
import Aisel from '../screens/aiselScreen';
import LoginScreen from '../screens/loginScreen';

import ChooseLoginOrSignup from '../../mycomponents/profileInfo/chooseLoginSignUp';
// import ChooseLoginOrSignup from './src/mycomponents/profileInfo/chooseLoginSignUp';

const HomeStackNavigator = createStackNavigator(
	{
		OrderScreen: { screen: OrderScreen },
	},
	{
		initialRouteName: 'OrderScreen',
	}
);

const DispachedStackNavigator = createStackNavigator(
	{
		DispachedOrderScreen: { screen: DispachedOrderScreen },
	},
	{
		initialRouteName: 'DispachedOrderScreen',
	}
);

const AccountsStackNavigator = createStackNavigator(
	{
		CatagoriesScreen: { screen: CatagoriesScreen },
		AddCatagory: { screen: AddCatagory },

		Aisel: { screen: Aisel },
		AddAisel: { screen: AddAisel },

		AllCompanies: { screen: AllCompanies },
		AddCompany: { screen: AddCompany },

		// CompanyProfileScreen: { screen: CompanyProfileScreen },

		productScreen: { screen: productScreen },
		addProductScreen: { screen: addProductScreen },

		Accounts: { screen: Accounts },

		SuperMartProfileInfo: { screen: SuperMartProfileInfo },
	},
	{
		initialRouteName: 'Accounts',
	}
);

// const AppDrawerNavigator = createDrawerNavigator(
// 	{
// 		OrderHome: { screen: OrderScreen },
// 	},
// 	{
// 		initialRouteName: 'OrderHome',
// 		contentComponent: Drawer,
// 	}
// );

const AppSwitchNavigator = createSwitchNavigator(
	{
		ChooseLoginOrSignup: { screen: ChooseLoginOrSignup },
		LoginScreen: { screen: LoginScreen },
		signupScreen: { screen: signupScreen },

		OrderScreen: { screen: HomeStackNavigator }, //home screen afterlogin
		DispachedOrderScreen: { screen: DispachedStackNavigator },
		AccountsStackNavigator: { screen: AccountsStackNavigator },
	},
	{
		initialRouteName: 'ChooseLoginOrSignup',
	}
);

const AppContainer = createAppContainer(AppSwitchNavigator);

export default AppContainer;
