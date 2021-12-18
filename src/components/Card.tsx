import React from 'react';
import { View, Text } from 'react-native';

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
			<Text>Card</Text>
		</View>
	);
};

export default Card;
