import React from 'react';
import {
	View,
	Text,
	Image,
	StyleSheet,
	Dimensions,
	TouchableOpacity,
} from 'react-native';

type sizeType = 'sm' | 'md' | 'lg'; // small, medium, large -> string
export interface Props {
	imageUrl: string;
	title: string;
	subtitle: string;
	size: sizeType;
	onPress: () => void;
}

const screen = Dimensions.get('window');

const Card: React.FunctionComponent<Props> = ({
	imageUrl,
	title,
	subtitle,
	size,
	onPress,
}) => {
	return (
		<TouchableOpacity
			onPress={onPress}
			testID="card"
			style={{
				...styles.cardContainer,
				...styles[size],
			}}>
			<View style={styles.imageContainer}>
				<Image
					testID="image"
					style={styles.image}
					source={{ uri: imageUrl }}
				/>
			</View>
			<Text testID="title" style={styles.titleText}>
				{title}
			</Text>
			<Text testID="subtitle" style={styles.categoryText}>
				{subtitle}
			</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	sm: {
		width: screen.width * 0.4,
		height: screen.height * 0.3,
		marginHorizontal: screen.width * 0.05,
		marginVertical: screen.height * 0.025,
	},
	md: {
		width: screen.width * 0.9,
		height: screen.height * 0.33,
		marginHorizontal: screen.width * 0.05,
		marginVertical: screen.height * 0.025,
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
		height: '75%',
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
