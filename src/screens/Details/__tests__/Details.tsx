import React from 'react';
import { act, create } from 'react-test-renderer';

import Details, { Props } from '../Details';

const testRecipes = {
	recipeId: 3,
	categoryId: 4,
	title: 'Triple Berry Smoothie',
	photo_url:
		'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-how-to-make-a-smoothie-horizontal-1542310071.png?crop=0.803xw:0.923xh;0.116xw,0.00510xh&resize=768:*',
	photosArray: [
		'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-how-to-make-a-smoothie-horizontal-1542310071.png?crop=0.803xw:0.923xh;0.116xw,0.00510xh&resize=768:*',
		'https://www.vitamix.com/media/other/images/xVitamix-Triple-Berry-Smoothie-square-crop__1.jpg.pagespeed.ic.OgTC3ILD3R.jpg',
		'http://images.media-allrecipes.com/userphotos/960x960/3798204.jpg',
		'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrzui8MM6W66I29VZwVvcjpGv99JW3O1owgupc3KwB65rhAyrZ',
	],
	time: '10',
	ingredients: [
		[59, '1'],
		[60, '1/2 lbs'],
		[61, '1/2 liters'],
	],
	description:
		'In a blender, combine all ingredients and blend until smooth. Then divide between 2 cups and top with blackberries, if desired.',
};
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
		// it('shows description', () => {
		// 	const description = screen.root.findByProps({
		// 		testID: 'description',
		// 	}).props;
		// });
		// it('shows time', () => {
		// 	const time = screen.root.findByProps({ testID: 'time' }).props;
		// });
		// it('shows category', () => {
		// 	const category = screen.root.findByProps({
		// 		testID: 'category',
		// 	}).props;
		// });
		// it('shows image', () => {
		// 	const image = screen.root.findByProps({ testID: 'image' }).props;
		// });
		// it('has a button to show ingredients', () => {
		// 	const button = screen.root.findByProps({ testID: 'button' }).props; // should be touchable
		// 	act(() => button.onPress());
		// 	// navigate to ingrediants page
		// });
	});
});
