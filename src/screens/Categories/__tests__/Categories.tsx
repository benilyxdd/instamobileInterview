import React from 'react';
import { create } from 'react-test-renderer';

import Categories from '../Categories';

const screen = create(<Categories />);

describe('Categories Screen', () => {
	describe('Components', () => {
		it('snapshot', () => {
			expect(screen).toMatchSnapshot();
		});

		it('renders a flatlist', () => {
			const flatlist = screen.root.findByProps({
				testID: 'flatlist',
			}).props;
		});
	});
});
