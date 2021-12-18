import React from 'react';
import { View, FlatList } from 'react-native';

import Card from '../../components/Card';
import { recipes, categories } from '../../../constants/mockData';

export interface Props {
	recipes: typeof recipes;
	categories: typeof categories;
}

const Home: React.FunctionComponent<Props> = ({ recipes, categories }) => {
	return (
		<View>
			<FlatList
				testID="flatlist"
				data={recipes}
				keyExtractor={item => item.recipeId.toString()}
				numColumns={2}
				renderItem={({ item }) => {
					const category = categories.find(
						category => category.id === item.categoryId,
					)?.name;
					if (category === undefined) {
						throw new Error(
							'A categoryId should be matched within the categories list',
						);
					}
					return (
						<Card
							size="sm"
							title={item.title}
							imageUrl={item.photo_url}
							subtitle={category}
							onPress={() => console.log(item.title)}
						/>
					);
				}}
			/>
		</View>
	);
};

export default Home;
