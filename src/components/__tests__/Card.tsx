import React from 'react';
import { create } from 'react-test-renderer';

import Card, { Props } from '../Card';

const testData: Omit<Props, 'size'> = {
	imageUrl:
		'https://www.texanerin.com/content/uploads/2019/06/nobake-chocolate-cookies-1-650x975.jpg',
	title: 'Oatmeal Cookies',
	category: 'Cookies',
};

const card = create(<Card size="md" {...testData} />);

describe('Card', () => {
	describe('components', () => {
		it('snapshot', () => {
			expect(card).toMatchSnapshot();
		});

		it('renders image', () => {
			const image = card.root.findByProps({ testID: 'image' }).props;
		});

		it('renders title and category', () => {
			const title = card.root.findByProps({ testID: 'title' }).props;
			expect(title.children).toEqual('Oatmeal Cookies');

			const category = card.root.findByProps({
				testID: 'category',
			}).props;
			expect(category.children).toEqual('Cookies');
		});
	});

	describe('style', () => {
		it('title and category is centered', () => {
			const title = card.root.findByProps({ testID: 'title' }).props;
			expect(title.style).toHaveProperty('textAlign', 'center');

			const category = card.root.findByProps({
				testID: 'category',
			}).props;
			expect(category.style).toHaveProperty('textAlign', 'center');
		});

		it('has border', () => {
			const view = card.root.findByProps({ testID: 'card' }).props;
			expect(view.style).toHaveProperty('borderWidth');
			expect(view.style).toHaveProperty('borderColor');
		});

		it('has border radius of 20px', () => {
			const view = card.root.findByProps({ testID: 'card' }).props;
			expect(view.style).toHaveProperty('borderRadius', 20);
		});
	});
});
