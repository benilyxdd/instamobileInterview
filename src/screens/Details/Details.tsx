import React, { useEffect, useState } from 'react';
import { Button, Image, Text, View, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { categories } from '../../../constants/mockData';

export interface Props {
	title: string;
	description: string;
	ingredients: Array<Array<any>>;
	time: string | number;
	categoryId: number;
	recipeId: number;
	imageUrl: string;
	imagesArray: string[];
}

const Details: React.FunctionComponent<Props> = ({
	title,
	description,
	ingredients,
	time,
	categoryId,
	recipeId,
	imageUrl,
	imagesArray,
}) => {
	const [category, setCategory] = useState<string>('');
	useEffect(() => {
		const cate = categories.find(item => item.id === categoryId)?.name;
		if (cate === undefined) {
			throw new Error(
				'A categoryId should be matched within the categories list',
			);
		}
		setCategory(cate);
	}, []);

	return (
		<ScrollView>
			<View style={styles.imageContainer}>
				<Image
					testID="image"
					source={{ uri: imageUrl }}
					style={styles.image}
				/>
			</View>
			<Text testID="title" style={styles.title}>
				{title}
			</Text>
			<Text testID="category" style={styles.category}>
				{category}
			</Text>
			<Text testID="time" style={styles.time}>{`${time} minutes`}</Text>
			<View style={styles.buttonContainer}>
				<Button
					testID="button"
					title="View Ingredients"
					color={'green'}
				/>
			</View>
			<Text testID="description" style={styles.description}>
				{description}
			</Text>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	imageContainer: {
		width: '100%',
		height: '45%',
	},
	image: {
		width: '100%',
		height: '100%',
	},
	title: {
		textAlign: 'center',
		fontSize: 35,
		fontWeight: 'bold',
		margin: '5%',
	},
	category: {
		textAlign: 'center',
		fontSize: 20,
		fontWeight: '500',
		color: 'lightgreen',
		margin: '2.5%',
	},
	time: {
		textAlign: 'center',
		fontWeight: '500',
		fontSize: 20,
	},
	buttonContainer: {
		borderRadius: 25,
		borderColor: 'lightgreen',
		borderWidth: 2,
		margin: '10%',
		paddingVertical: '2%',
	},
	description: {
		paddingHorizontal: '7%',
		fontSize: 20,
	},
});

export default Details;
