import React from 'react';
import { create } from 'react-test-renderer';

import Card, { Props } from '../Card';

const testData: Props = {
	imageUrl:
		'https://www.texanerin.com/content/uploads/2019/06/nobake-chocolate-cookies-1-650x975.jpg',
	title: 'Oatmeal Cookies',
	category: 'Cookies',
};

const card = create(<Card {...testData} />);

describe('Card', () => {
	it('matches snapshot', () => {
		expect(card).toMatchSnapshot();
	});

	it('renders image', () => {
		const image = card.root.findByProps({ testID: 'image' }).props;
	});

	it('renders title and category', () => {
		const title = card.root.findByProps({ testID: 'title' }).props;
		expect(title.children).toEqual('Oatmeal Cookies');

		const category = card.root.findByProps({ testID: 'category' }).props;
		expect(category.children).toEqual('Cookies');
	});
});
