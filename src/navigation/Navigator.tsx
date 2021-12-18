import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Categories from '../screens/Categories/Categories';
import { recipes, categories } from '../../constants/mockData';

import HomeNavigator from './HomeNavigator';

const Drawer = createDrawerNavigator();

const CategoriesScreen = () => {
	return <Categories recipes={recipes} categories={categories} />;
};

const Navigator = () => {
	return (
		<NavigationContainer>
			<Drawer.Navigator initialRouteName="Home">
				<Drawer.Screen name="Home" component={HomeNavigator} />
				<Drawer.Screen name="Categories" component={CategoriesScreen} />
			</Drawer.Navigator>
		</NavigationContainer>
	);
};

export default Navigator;
