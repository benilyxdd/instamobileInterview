import React from 'react';
import { create } from 'react-test-renderer';

import Card from '../Card';

const card = create(<Card />);

it('match snapshot', () => {
	expect(card).toMatchSnapshot();
});
