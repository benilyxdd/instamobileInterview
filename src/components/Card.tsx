import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';

type sizeType = 'sm' | 'md' | 'lg'; // small, medium, large -> string
export interface Props {
	imageUrl: string;
	title: string;
	category: string;
	size: sizeType;
}

const screen = Dimensions.get('window');

const Card: React.FunctionComponent<Props> = ({
	imageUrl,
	title,
	category,
	size,
}) => {
	return (
		<View
			testID="card"
			style={{
				...style.cardContainer,
				...style[size],
			}}>
			<View style={style.imageContainer}>
				<Image
					testID="image"
					style={style.image}
					source={{ uri: imageUrl }}
				/>
			</View>
			<Text testID="title" style={style.titleText}>
				{title}
			</Text>
			<Text testID="category" style={style.categoryText}>
				{category}
			</Text>
		</View>
	);
};

const style = StyleSheet.create({
	sm: {
		width: screen.width * 0.4,
		height: screen.height * 0.25,
	},
	md: {
		width: screen.width * 0.9,
		height: screen.height * 0.33,
	},
	lg: {
		width: screen.width * 0.9,
		height: screen.height * 0.5,
	},

	cardContainer: {
		borderColor: 'gray',
		borderWidth: 1,
		borderRadius: 20,
		overflow: 'hidden',
	},
	categoryText: {
		textAlign: 'center',
	},
	image: {
		height: '100%',
		width: '100%',
	},
	imageContainer: {
		borderRadius: 20,
		flex: 1,
		height: '100%',
		width: '100%',
		overflow: 'hidden',
	},
	titleText: {
		fontWeight: 'bold',
		fontSize: 15,
		textAlign: 'center',
		paddingTop: '1%',
		paddingBottom: '2.5%',
	},

	test: {
		backgroundColor: 'red',
	},
});

export default Card;
