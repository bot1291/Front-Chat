import setRender from '../../helpers/setRender';
import { Example } from './Example';
import { screen } from '@testing-library/dom';

describe('CategoriesSkeleton', () => {
	it('Should follow the structure', () => {
		setRender(<Example />);
		screen.getByTestId('');
	});
});
