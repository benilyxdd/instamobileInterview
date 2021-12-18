import React from 'react';
import { act, create } from 'react-test-renderer';

import Details, { Props } from '../Details';
import { recipes } from '../../../../constants/mockData';

const testRecipes = recipes[0];
const mockData: Props = {
	title: testRecipes.title,
	time: testRecipes.time,
	ingredients: testRecipes.ingredients,
	imageUrl: testRecipes.photo_url,
	imagesArray: testRecipes.photosArray,
	recipeId: testRecipes.recipeId,
	categoryId: testRecipes.categoryId,
	description: testRecipes.description,
};

const screen = create(<Details {...mockData} />);

describe('Deatils Screen', () => {
	describe('Components', () => {
		it('shows title', () => {
			const title = screen.root.findByProps({ testID: 'title' }).props;
		});

		it('shows description', () => {
			const description = screen.root.findByProps({
				testID: 'description',
			}).props;
		});

		it('shows time', () => {
			const time = screen.root.findByProps({ testID: 'time' }).props;
		});

		it('shows category', () => {
			const category = screen.root.findByProps({
				testID: 'category',
			}).props;
		});

		it('shows image', () => {
			const image = screen.root.findByProps({ testID: 'image' }).props;
		});

		it('has a button to show ingredients', () => {
			const button = screen.root.findByProps({ testID: 'button' }).props; // should be touchable
			act(() => button.onPress());

			// navigate to ingrediants page
		});
	});
});
