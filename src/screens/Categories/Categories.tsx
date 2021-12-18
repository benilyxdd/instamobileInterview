import React from 'react';
import { View, FlatList } from 'react-native';

import { categories, recipes } from '../../../constants/mockData';
import Card from '../../components/Card';

interface Props {
	categories: typeof categories;
	recipes: typeof recipes;
}

const Categories: React.FunctionComponent<Props> = ({
	categories,
	recipes,
}) => {
	return (
		<View>
			<FlatList
				testID="flatlist"
				data={categories}
				keyExtractor={item => item.id.toString()}
				renderItem={({ item }) => {
					const itemCount = recipes.filter(
						recipes => recipes.categoryId === item.id,
					).length;

					return (
						<Card
							size="md"
							title={item.name}
							imageUrl={item.photo_url}
							subtitle={`${itemCount} recipes`}
						/>
					);
				}}
			/>
		</View>
	);
};

export default Categories;
