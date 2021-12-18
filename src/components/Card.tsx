import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export interface Props {
	imageUrl: string;
	title: string;
	category: string;
}

const Card: React.FunctionComponent<Props> = ({
	imageUrl,
	title,
	category,
}) => {
	return (
		<View>
			<Image testID="image" source={{ uri: imageUrl }} />
			<Text testID="title">{title}</Text>
			<Text testID="category">{category}</Text>
		</View>
	);
};

const style = StyleSheet.create({});

export default Card;
