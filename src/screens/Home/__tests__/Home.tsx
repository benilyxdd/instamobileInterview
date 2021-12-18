import React from 'react';
import { create } from 'react-test-renderer';

import Home from '../Home';
import { recipes, categories } from '../../../../constants/mockData';

const screen = create(<Home recipes={recipes} categories={categories} />);

describe('Home Screen', () => {
	describe('components', () => {
		it('snapshot', () => {
			expect(screen).toMatchSnapshot();
		});

		it('renders a flatlist', () => {
			const flatlist = screen.root.findByProps({ testID: 'flatlist' });
		});

		it('throws error when categoryId is not found in the database', () => {
			try {
				const screenWithoutCategoriesList = create(
					<Home recipes={recipes} categories={[]} />,
				);
				expect(true).toBeFalsy();
			} catch (error: any) {
				expect(error.message).toBe(
					'A categoryId should be matched within the categories list',
				);
			}
		});
	});
});
