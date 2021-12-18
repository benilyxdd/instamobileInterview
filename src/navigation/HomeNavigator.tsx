import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/Home/Home';
import { recipes, categories } from '../../constants/mockData';
import Details from '../screens/Details/Details';

export type RootStackParamList = {
	main: undefined;
	details: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const HomeScreen = () => {
	return <Home recipes={recipes} categories={categories} />;
};

const HomeNavigator = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="main"
				component={HomeScreen}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="details"
				component={props => {
					return <Details {...props.route.params} />;
				}}
			/>
		</Stack.Navigator>
	);
};

export default HomeNavigator;
