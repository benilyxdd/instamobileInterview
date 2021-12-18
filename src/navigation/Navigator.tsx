import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from '../screens/Home/Home';
import Categories from '../screens/Categories/Categories';
import { recipes, categories } from '../../constants/mockData';

const Drawer = createDrawerNavigator();

const HomeScreen = () => {
	return <Home recipes={recipes} categories={categories} />;
};

const CategoriesScreen = () => {
	return <Categories recipes={recipes} categories={categories} />;
};

const Navigator = () => {
	return (
		<NavigationContainer>
			<Drawer.Navigator initialRouteName="Home">
				<Drawer.Screen name="Home" component={HomeScreen} />
				<Drawer.Screen name="Categories" component={CategoriesScreen} />
			</Drawer.Navigator>
		</NavigationContainer>
	);
};

export default Navigator;
